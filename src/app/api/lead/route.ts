import { priceText } from "@/lib/pricing-catalog";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { NextResponse } from "next/server";
import dns from "node:dns";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, package: tier, message, honeypot } = body;

    // Silent reject for bot submissions filling hidden honeypot
    if (honeypot) {
      return NextResponse.json({ success: true, accepted: false, message: "Received" }, { status: 200 });
    }

    if (typeof name !== "string" || !name.trim() || name.length > 200 ||
        typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || email.length > 254) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    const leadData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "Not provided",
      company: company ? String(company).trim() : "Not provided",
      package: tier || "launch",
      message: message ? String(message).trim() : undefined,
      submittedAt: new Date().toISOString(),
    };

    let delivered = false;

    const PACKAGE_LABELS: Record<string, string> = {
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
    };

    const packageLabel = PACKAGE_LABELS[leadData.package] || leadData.package;

    // 1. Dispatch alert to Telegram Bot if configured in environment variables
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramBotToken && telegramChatId) {
      try {
        const cleanPhoneDigits = leadData.phone.replace(/[^0-9]/g, "");
        const waLink =
          cleanPhoneDigits.length >= 7
            ? `https://wa.me/${cleanPhoneDigits}`
            : null;

        const dateStr = new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "medium",
          timeStyle: "short",
        });

        const lines = [
          `🚀 <b>New Demo Booking Request!</b>`,
          ``,
          `👤 <b>Name:</b> ${escapeHtml(leadData.name)}`,
          `📧 <b>Email:</b> <code>${escapeHtml(leadData.email)}</code>`,
          `📱 <b>Phone/WA:</b> <code>${escapeHtml(leadData.phone)}</code>`,
          `🏢 <b>Company:</b> ${escapeHtml(leadData.company)}`,
          `📦 <b>Package:</b> ${escapeHtml(packageLabel)}`,
          ...(leadData.message ? [`💬 <b>Notes:</b> ${escapeHtml(leadData.message)}`] : []),
          `🕒 <b>Time:</b> ${dateStr} IST`,
        ];

        if (waLink) {
          lines.push(``, `👉 <a href="${waLink}"><b>Chat with lead on WhatsApp</b></a>`);
        }

        const telegramText = lines.join("\n");

        const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramText,
            parse_mode: "HTML",
            disable_web_page_preview: false,
          }),
          signal: AbortSignal.timeout(5000),
        });
        const telegramResult = await telegramResponse.json();
        delivered = telegramResponse.ok && telegramResult.ok === true;
      } catch {
        console.error("[LEAD_CAPTURE] Telegram delivery failed");
      }
    }

    // 2. Dispatch alert to generic webhook (Slack, Discord, Zapier) if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const payload = {
          text: `🚀 *New White-Label Demo Request!*\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Phone:* ${leadData.phone}\n*Company:* ${leadData.company}\n*Package:* ${packageLabel}`,
        };

        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(5000),
        });
        delivered = webhookResponse.ok || delivered;
      } catch {
        console.error("[LEAD_CAPTURE] Webhook delivery failed");
      }
    }

    if (!delivered) {
      return NextResponse.json({ success: false, accepted: false, error: "Unable to deliver inquiry. Please try again or contact us directly." }, { status: 503 });
    }
    return NextResponse.json({ success: true, accepted: true }, { status: 200 });
  } catch {
    console.error("[LEAD_CAPTURE] Invalid request or processing failure");
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
