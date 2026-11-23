"use client";

import { TriangleAlert } from "lucide-react";
import { useMessages } from "@/components/site/useMessages";
import { englishMessage, type MessageId } from "@/lib/messages";
import { LeadSubmissionError } from "@/lib/submit-lead";
import type { LeadFieldCode } from "@/lib/lead-validation";

const fieldMessages: Record<LeadFieldCode, MessageId> = {
  name_required: "LeadForm.nameRequired",
  name_too_long: "LeadForm.nameTooLong",
  email_required: "LeadForm.emailRequired",
  email_invalid: "LeadForm.emailInvalid",
  email_too_long: "LeadForm.emailTooLong",
  notes_too_long: "LeadForm.notesTooLong",
};

export function leadSubmissionMessage(error: unknown): string {
  if (error instanceof LeadSubmissionError) {
    if (error.kind === "validation") return englishMessage("LeadForm.checkDetails");
    if (error.kind === "connection") return englishMessage("LeadForm.connection");
    if (error.kind === "delivery") return englishMessage("LeadForm.delivery");
  }
  return englishMessage("LeadForm.unconfirmed");
}

export function LeadFormWarning({ message }: { message: string }) {
  const translate = useMessages();
  return (
    <p role="alert" className="flex items-start gap-2 rounded-lg border border-warning/40 bg-warning/10 p-3 text-sm text-warning">
      <TriangleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      {translate(message)}
    </p>
  );
}

export function LeadFieldWarning({ id, code }: { id: string; code?: LeadFieldCode }) {
  const translate = useMessages();
  if (!code) return null;
  return <p id={id} className="mt-1.5 text-sm font-medium text-warning">{translate(englishMessage(fieldMessages[code]))}</p>;
}
