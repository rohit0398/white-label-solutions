/** A lead is confirmed only after a notification destination accepts it. */
export async function submitLead(payload: Record<string, unknown>, request: typeof fetch = fetch) {
  const response = await request("/api/lead", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(15000),
  });
  const result = await response.json();
  if (!response.ok || result.success !== true || result.accepted !== true) {
    throw new Error("Unable to send inquiry. Please try again or contact us on WhatsApp.");
  }
}
