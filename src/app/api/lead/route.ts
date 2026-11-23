import { priceText } from "@/lib/pricing-catalog";
import { ADDITIONAL_PLATFORM_SUMMARIES } from "@/lib/additional-platform-paths";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { deliveryRequestFailure, reportLeadIssue, sendTelegram, type DeliveryOutcome } from "@/lib/lead-delivery-alert";
import { LEAD_LIMITS, validateLeadFields, type LeadFieldCode, type LeadFieldErrors } from "@/lib/lead-validation";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import dns from "node:dns";

export const maxDuration = 20;

// Prefer IPv6 resolution first to avoid regional ISP IPv4 throttling/blocks
try {
  dns.setDefaultResultOrder("ipv6first");
} catch {}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const PACKAGE_LABELS: Record<string, string> = {
  ...Object.fromEntries(ADDITIONAL_PLATFORM_SUMMARIES.map(platform => [platform.id, `${platform.title} — price on request`])),
  "more-platforms": "Additional software platform — price on request",
  "general": "General project inquiry",
  "launch": priceText("🚀 White-Label Launch Package ({price:launch})"),
  "source-code-license": priceText("💻 Full Source Code & License ({price:source-code-license})"),
  "source-code": priceText("💻 Full Source Code & License ({price:source-code-license})"),
  "dedicated-support": "⏱️ Developer Time ($20/hr)",
  "developer-time": "⏱️ Developer Time ($20/hr)",
  [SHORT_DRAMA_PACKAGES.platform]: "Short drama platform",
  [SHORT_DRAMA_PACKAGES.app]: "Short drama app development",
  [SHORT_DRAMA_PACKAGES.web]: "Short drama website development",
  [OTT_PACKAGES.platform]: "OTT streaming platform",
  [OTT_PACKAGES.app]: "OTT app development",
  [OTT_PACKAGES.web]: "OTT website development",
  "ott-streaming": priceText("🎬 White-Label OTT & Short-Drama Platform ({price:launch})"),
  "ecommerce": priceText("🛍️ White-Label E-Commerce Platform ({price:launch})"),
  "app-launch": priceText("E-Commerce Mobile App ({price:app-launch})"),
  "web-launch": priceText("E-Commerce Website ({price:web-launch})"),
  custom: "Custom project",
};

function submittedText(value: unknown, limit: number): string {
  if (typeof value !== "string") return "";
  // Keep typed values visible while preventing control characters from creating fake alert lines.
  const text = value.replace(/[\r\n\t\u2028\u2029]+/g, " ").trim();
  if (text.length <= limit) return text;
  const clipped = text.slice(0, limit);
  const last = clipped.charCodeAt(clipped.length - 1);
  return `${last >= 0xd800 && last <= 0xdbff ? clipped.slice(0, -1) : clipped}… [truncated]`;
}

async function sendWebhook(text: string): Promise<DeliveryOutcome> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return { result: "not_configured" };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
      signal: AbortSignal.timeout(5000),
    });
    return response.ok ? { result: "accepted" } : { result: "http_error", status: response.status };
  } catch (error) {
    return deliveryRequestFailure(error);
  }
}

const fieldReasons: Record<LeadFieldCode, string> = {
  name_required: "Name is required",
  name_too_long: "Name exceeds 200 characters",
  email_required: "Email is required",
  email_invalid: "Email format is invalid",
  email_too_long: "Email exceeds 254 characters",
  notes_too_long: "Notes exceed 8000 characters",
};

export async function POST(request: Request) {
  const requestId = randomUUID();
  const submittedAt = new Date().toISOString();
  const headers = { "X-Lead-Request-Id": requestId };
  let packageId = "unrecognized";
  let fields: [string, string][] = [];

  const reject = async (reason: string, fieldErrors?: LeadFieldErrors) => {
    await reportLeadIssue({ requestId, submittedAt, packageId, kind: "validation", reason, fields });
    return NextResponse.json({ success: false, accepted: false, error: reason, fieldErrors }, { status: 400, headers });
  };

  try {
    let parsed: unknown;
    try {
      parsed = await request.json();
    } catch (error) {
      if (error instanceof SyntaxError) return await reject("Malformed or empty JSON body");
      throw error;
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return await reject("Expected a JSON object");
    const body = parsed as Record<string, unknown>;
    if (body.honeypot) {
      await reportLeadIssue({ requestId, submittedAt, packageId, kind: "spam", reason: "Spam check rejected the submission" });
      return NextResponse.json({ success: true, accepted: false, message: "Received" }, { status: 200, headers });
    }

    const tier = body.package || "launch";
    if (typeof tier === "string" && Object.hasOwn(PACKAGE_LABELS, tier)) packageId = tier;
    const name = submittedText(body.name, 240);
    const email = submittedText(body.email, 320);
    const phone = submittedText(body.phone, 80);
    const company = submittedText(body.company, 240);
    const rawNotes = typeof body.message === "string" ? body.message.trim() : "";
    const notes = rawNotes.length <= LEAD_LIMITS.message ? rawNotes : submittedText(rawNotes, LEAD_LIMITS.message);
    fields = [["Name", name], ["Email", email], ["Phone/WhatsApp", phone], ["Company", company], ["Notes", notes]];
    fields = fields.filter(([, value]) => value.length > 0);

    const fieldErrors = validateLeadFields(body);
    const issues = Object.values(fieldErrors).map(code => fieldReasons[code]);
    for (const field of ["phone", "company", "package", "message"]) {
      if (body[field] != null && typeof body[field] !== "string") issues.push(`${field} must be text`);
    }
    if (issues.length) return await reject(issues.join(". "), fieldErrors);

    const packageLabel = packageId === "unrecognized" ? submittedText(tier, 120) || "Unrecognized platform" : PACKAGE_LABELS[packageId];
    const leadFields = [
      ["Name", name], ["Email", email.toLowerCase()], ["Phone/WA", phone || "Not provided"],
      ["Company", company || "Not provided"], ["Package", packageLabel],
    ];
    if (notes) leadFields.push(["Notes", notes]);
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const telegramText = [
      "🚀 <b>New Demo Booking Request!</b>",
      ...leadFields.map(([label, value]) => `<b>${label}:</b> ${escapeHtml(value)}`),
      `Time (UTC): ${submittedAt}`,
      `Request ID: ${requestId}`,
    ];
    if (cleanPhone.length >= 7 && cleanPhone.length <= 15) {
      telegramText.push(`<a href="https://wa.me/${cleanPhone}">Chat with lead on WhatsApp</a>`);
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const normalText = telegramText.join("\n");
    const leadDocument = ["New Demo Booking Request", `Time (UTC): ${submittedAt}`, `Request ID: ${requestId}`, "", ...leadFields.map(([label, value]) => `${label}: ${value}`)].join("\n");
    const telegramMessage = normalText.length > 3900
      ? {
        text: `🚀 New Demo Booking Request\nRequest ID: ${requestId}\nName: ${name}\nEmail: ${email.toLowerCase()}\nFull inquiry details and project notes are attached.`,
        document: { filename: `lead-${requestId}.txt`, contents: leadDocument },
      }
      : { text: normalText, html: true };
    const telegramRequest: Promise<DeliveryOutcome> = botToken && chatId
      ? sendTelegram({ botToken, chatId, ...telegramMessage }, { budgetMs: 5500, maxAttempts: 2 })
      : Promise.resolve({ result: botToken || chatId ? "incomplete_configuration" : "not_configured" });
    const webhookText = ["🚀 *New White-Label Demo Request!*", ...leadFields.map(([label, value]) => `*${label}:* ${value}`), `Request ID: ${requestId}`].join("\n");
    const [telegram, webhook] = await Promise.all([telegramRequest, sendWebhook(webhookText)]);
    const delivered = [telegram, webhook].some(channel => channel.result === "accepted");
    const channelFailed = [telegram, webhook].some(channel => channel.result !== "accepted" && channel.result !== "not_configured");
    if (!delivered || channelFailed) {
      await reportLeadIssue({
        requestId, submittedAt, packageId, telegram, webhook,
        kind: delivered ? "partial" : "failed",
        reason: delivered ? "A configured lead destination failed" : "No lead destination accepted the inquiry",
        fields: delivered ? undefined : fields,
      });
    }
    if (!delivered) {
      return NextResponse.json({ success: false, accepted: false, error: "Unable to deliver inquiry. Please try again or contact us directly." }, { status: 503, headers });
    }
    return NextResponse.json({ success: true, accepted: true }, { status: 200, headers });
  } catch {
    await reportLeadIssue({ requestId, submittedAt, packageId, kind: "processing", reason: "Unexpected request processing error", fields });
    return NextResponse.json(
      { success: false, accepted: false, error: "Failed to process request" },
      { status: 500, headers }
    );
  }
}
