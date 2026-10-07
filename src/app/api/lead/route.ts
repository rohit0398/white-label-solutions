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
    const { name, email, phone, company, package: tier, honeypot } = body;

    // Silent reject for bot submissions filling hidden honeypot
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
    }

    if (!name || !email) {
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
      package: tier || "turnkey-setup",
      submittedAt: new Date().toISOString(),
    };

    console.log("[LEAD_CAPTURE] New Demo Request received:", leadData);

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
          `📦 <b>Package:</b> ${escapeHtml(leadData.package)}`,
          `🕒 <b>Time:</b> ${dateStr} IST`,
        ];

        if (waLink) {
          lines.push(``, `👉 <a href="${waLink}"><b>Chat with lead on WhatsApp</b></a>`);
        }

        const telegramText = lines.join("\n");

        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
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
      } catch (tgErr) {
        console.error("[LEAD_CAPTURE] Error dispatching to Telegram:", tgErr);
      }
    }

    // 2. Dispatch alert to generic webhook (Slack, Discord, Zapier) if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const payload = {
          text: `🚀 *New White-Label Demo Request!*\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Phone:* ${leadData.phone}\n*Company:* ${leadData.company}\n*Package:* ${leadData.package}`,
        };

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(5000),
        });
      } catch (err) {
        console.error("[LEAD_CAPTURE] Error dispatching webhook alert:", err);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[LEAD_CAPTURE] API route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
