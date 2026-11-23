export const LEAD_LIMITS = { name: 200, email: 254, message: 8000 } as const;

const fieldCodes = {
  name: ["name_required", "name_too_long"],
  email: ["email_required", "email_invalid", "email_too_long"],
  message: ["notes_too_long"],
} as const;

export type LeadField = keyof typeof fieldCodes;
export type LeadFieldCode = (typeof fieldCodes)[LeadField][number];
export type LeadFieldErrors = Partial<Record<LeadField, LeadFieldCode>>;

const localPart = /^[\p{L}\p{N}\p{M}!#$%&'*+/=?^_\x60{|}~-]+(?:\.[\p{L}\p{N}\p{M}!#$%&'*+/=?^_\x60{|}~-]+)*$/u;
const domainLabel = /^[\p{L}\p{N}](?:[\p{L}\p{N}\p{M}-]{0,61}[\p{L}\p{N}\p{M}])?$/u;

function hasValidEmailFormat(email: string): boolean {
  const [local, domain, extra] = email.split("@");
  if (!local || !domain || extra !== undefined || local.length > 64 || !localPart.test(local)) return false;
  const labels = domain.split(".");
  return labels.length > 1 && labels.every(label => domainLabel.test(label));
}

export function validateLeadFields(values: Record<string, unknown>): LeadFieldErrors {
  const result: LeadFieldErrors = {};
  const name = typeof values.name === "string" ? values.name.trim() : "";
  const email = typeof values.email === "string" ? values.email.trim() : "";
  if (!name) result.name = "name_required";
  else if (name.length > LEAD_LIMITS.name) result.name = "name_too_long";
  if (!email) result.email = "email_required";
  else if (email.length > LEAD_LIMITS.email) result.email = "email_too_long";
  else if (!hasValidEmailFormat(email)) result.email = "email_invalid";
  if (typeof values.message === "string" && values.message.trim().length > LEAD_LIMITS.message) result.message = "notes_too_long";
  return result;
}

export function readLeadFieldErrors(value: unknown): LeadFieldErrors {
  const result: LeadFieldErrors = {};
  if (!value || typeof value !== "object") return result;
  const source = value as Record<string, unknown>;
  for (const field of Object.keys(fieldCodes) as LeadField[]) {
    const code = source[field];
    if (fieldCodes[field].some(known => known === code)) result[field] = code as LeadFieldCode;
  }
  return result;
}
