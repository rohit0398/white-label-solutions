import { setTimeout as delay } from "node:timers/promises";

export type DeliveryOutcome =
  | { result: "accepted" | "not_configured" | "incomplete_configuration" | "timeout" | "request_failed" | "invalid_response" | "rejected" }
  | { result: "http_error"; status: number; retryAt?: number };

export function deliveryRequestFailure(error: unknown): DeliveryOutcome {
  if (error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError")) {
    return { result: "timeout" };
  }
  return { result: "request_failed" };
}

type TelegramMessage = {
  botToken: string;
  chatId: string;
  text: string;
  html?: boolean;
  document?: { filename: string; contents: string };
};

async function sendOnce({ botToken, chatId, text, html, document }: TelegramMessage, timeout: number): Promise<DeliveryOutcome> {
  try {
    let body: FormData | string;
    const method = document ? "sendDocument" : "sendMessage";
    if (document) {
      body = new FormData();
      body.set("chat_id", chatId);
      body.set("caption", text);
      body.set("document", new Blob([document.contents], { type: "text/plain;charset=utf-8" }), document.filename);
    } else {
      body = JSON.stringify({ chat_id: chatId, text, parse_mode: html ? "HTML" : undefined, link_preview_options: { is_disabled: true } });
    }
    const response = await fetch(`https://api.telegram.org/bot${botToken}/${method}`, {
      method: "POST",
      headers: document ? undefined : { "Content-Type": "application/json" },
      body,
      signal: AbortSignal.timeout(timeout),
      redirect: "error",
    });
    if (!response.ok && response.status !== 429) return { result: "http_error", status: response.status };

    const result = await response.json().catch((error: unknown) => {
      if (error instanceof SyntaxError) return null;
      throw error;
    });
    if (response.ok && result?.ok === true) return { result: "accepted" };
    if (typeof result?.error_code === "number" || response.status === 429) {
      const status = response.ok ? result.error_code : response.status;
      const seconds = result?.parameters?.retry_after ?? Number(response.headers.get("Retry-After"));
      const rateLimited = status === 429;
      const retryAt = rateLimited && Number.isFinite(seconds) && seconds > 0 ? Date.now() + seconds * 1000 : undefined;
      return { result: "http_error", status, retryAt };
    }
    return { result: result?.ok === false ? "rejected" : "invalid_response" };
  } catch (error) {
    return deliveryRequestFailure(error);
  }
}

function shouldRetry(outcome: DeliveryOutcome): boolean {
  if (outcome.result === "http_error") return outcome.status === 429 || outcome.status >= 500;
  return outcome.result === "timeout" || outcome.result === "request_failed" || outcome.result === "invalid_response";
}

export async function sendTelegram(message: TelegramMessage, options: {
  budgetMs: number;
  maxAttempts: number;
  retryAt?: number;
}): Promise<DeliveryOutcome> {
  const deadline = Date.now() + options.budgetMs;
  let outcome: DeliveryOutcome = options.retryAt
    ? { result: "http_error", status: 429, retryAt: options.retryAt }
    : { result: "timeout" };

  for (let attempt = 0; attempt < options.maxAttempts; attempt++) {
    const retryAt = outcome.result === "http_error" ? outcome.retryAt ?? 0 : 0;
    const backoff = attempt === 0 ? 0 : attempt * 1000;
    const waitMs = Math.max(backoff, retryAt - Date.now());
    if (Date.now() + waitMs >= deadline) return outcome;
    if (waitMs) await delay(waitMs);
    const timeLeft = deadline - Date.now();
    if (timeLeft <= 0) return outcome;

    outcome = await sendOnce(message, Math.min(timeLeft, 2200));
    if (!shouldRetry(outcome)) return outcome;
  }
  return outcome;
}

type LeadAlert = {
  requestId: string;
  submittedAt: string;
  packageId: string;
  kind: "validation" | "spam" | "processing" | "failed" | "partial";
  reason: string;
  fields?: ReadonlyArray<readonly [string, string]>;
  telegram?: DeliveryOutcome;
  webhook?: DeliveryOutcome;
};

const alertTitles: Record<LeadAlert["kind"], string> = {
  validation: "⚠️ Lead needs review · validation rejected",
  spam: "⚠️ Lead rejected · spam check",
  processing: "⚠️ Lead processing failed",
  failed: "🚨 Lead notification failed",
  partial: "⚠️ Lead delivered to one channel",
};

function describe(outcome: DeliveryOutcome) {
  return outcome.result === "http_error" ? `HTTP ${outcome.status}` : outcome.result.replaceAll("_", " ");
}

export async function reportLeadIssue(issue: LeadAlert): Promise<void> {
  // The Telegram destination can receive submitted contact fields. Server logs stay diagnostic only.
  const { fields, ...diagnostics } = issue;
  console.warn("[LEAD_CAPTURE] Lead issue", JSON.stringify(diagnostics));

  const leadToken = process.env.TELEGRAM_BOT_TOKEN;
  const botToken = process.env.TELEGRAM_ALERT_BOT_TOKEN || leadToken;
  const chatId = process.env.TELEGRAM_ALERT_CHAT_ID || process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return;

  const lines = [
    alertTitles[issue.kind],
    `Request ID: ${issue.requestId}`,
    "Endpoint: POST /api/lead",
    `Time (UTC): ${issue.submittedAt}`,
    `Platform: ${issue.packageId}`,
    `Reason: ${issue.reason}`,
  ];
  if (issue.telegram) lines.push(`Telegram: ${describe(issue.telegram)}`);
  if (issue.webhook) lines.push(`Webhook: ${describe(issue.webhook)}`);
  const summary = lines.join("\n");
  if (fields?.length) {
    lines.push("", "Submitted details (unverified)");
    for (const [label, value] of fields) lines.push(`${label}: ${value}`);
  }

  const retryAt = botToken === leadToken && issue.telegram?.result === "http_error" ? issue.telegram.retryAt : undefined;
  const text = lines.join("\n");
  const message = text.length > 3900
    ? { text: `${summary}\nSubmitted details are attached.`, document: { filename: `lead-${issue.requestId}.txt`, contents: text } }
    : { text };
  const outcome = await sendTelegram({ botToken, chatId, ...message }, { budgetMs: 7000, maxAttempts: 3, retryAt });
  if (outcome.result !== "accepted") {
    console.warn("[LEAD_CAPTURE] Telegram alert failed", { requestId: issue.requestId, outcome: describe(outcome) });
  }
}
