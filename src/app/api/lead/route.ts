import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, package: tier, cloud, honeypot } = body;

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
      cloud: cloud || "AWS",
      submittedAt: new Date().toISOString(),
    };

    console.log("[LEAD_CAPTURE] New Demo Request received:", leadData);

    // Forward to Webhook (Slack, Discord, Zapier, Make, CRM) if configured in .env
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const payload = {
          text: `🚀 *New White-Label Demo Request!*\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Phone:* ${leadData.phone}\n*Company:* ${leadData.company}\n*Interested In:* ${leadData.package}\n*Cloud:* ${leadData.cloud}\n*Date:* ${new Date().toLocaleString("en-US", { timeZone: "UTC" })} UTC`,
        };

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
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
