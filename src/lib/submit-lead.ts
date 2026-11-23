import { readLeadFieldErrors, type LeadFieldErrors } from "@/lib/lead-validation";

export class LeadSubmissionError extends Error {
  constructor(
    public readonly kind: "validation" | "connection" | "unconfirmed" | "delivery",
    public readonly fields: LeadFieldErrors = {},
  ) {
    super("The inquiry could not be confirmed");
  }
}

/** A lead is confirmed only after a notification destination accepts it. */
export async function submitLead(payload: Record<string, unknown>, request: typeof fetch = fetch) {
  let response: Response;
  try {
    response = await request("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    if (error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError")) {
      throw new LeadSubmissionError("unconfirmed");
    }
    throw new LeadSubmissionError("connection");
  }

  const result = await response.json().catch(() => null);
  if (response.ok && result?.success === true && result.accepted === true) return;
  if (response.status === 400 || response.status === 422) {
    throw new LeadSubmissionError("validation", readLeadFieldErrors(result?.fieldErrors));
  }
  if (response.status === 503 && result?.accepted === false) throw new LeadSubmissionError("delivery");
  throw new LeadSubmissionError("unconfirmed");
}
