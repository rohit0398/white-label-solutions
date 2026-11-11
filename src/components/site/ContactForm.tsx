"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";
import { BRAND } from "@/lib/constants";
import { POPULAR_COUNTRIES, ALL_COUNTRIES } from "@/lib/countryCodes";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";
import { submitLead } from "@/lib/submit-lead";

const label = "block text-sm font-medium text-ink";
const field = "mt-1.5 w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-base text-ink placeholder:text-ink-3 focus:border-ink sm:text-sm";
const popularCountryIds = new Set(POPULAR_COUNTRIES.map((country) => country.iso));
const otherCountries = ALL_COUNTRIES.filter((country) => !popularCountryIds.has(country.iso));
const countryCodes = new Map([...POPULAR_COUNTRIES, ...otherCountries].map((country) => [country.iso, country.code]));

export function ContactWhatsAppLink({ placement, className, children }: { placement: string; className?: string; children: ReactNode }) {
  return (
    <a
      href={`https://wa.me/${BRAND.contact.whatsapp.slice(1)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(placement)}
      className={className}
    >
      {children}
    </a>
  );
}

export function ContactForm() {
  const submitting = useRef(false);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<{ email: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    setError(null);

    const values = new FormData(event.currentTarget);
    const read = (field: string) => String(values.get(field) ?? "").trim();
    const name = read("name");
    const email = read("email");
    const phone = read("phone");
    const dialCode = countryCodes.get(read("country")) ?? "+1";
    const solution = read("solution");

    if (!name || !email) {
      setError("Please enter your name and email address.");
      return;
    }

    submitting.current = true;
    setLoading(true);
    try {
      await submitLead({
        name,
        email,
        phone: phone ? `${dialCode} ${phone}` : undefined,
        company: read("company") || undefined,
        package: solution || "general",
        message: read("message") || undefined,
        honeypot: read("website_url"),
      });
      trackLeadSubmission(solution ? `ContactPage - ${solution}` : "ContactPage - General");
      setConfirmation({ email });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "We couldn't send your inquiry. Please try again or reach us on WhatsApp.");
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  }

  if (confirmation) {
    return (
      <div className="space-y-4 rounded-2xl border border-line bg-wash p-6 sm:p-8">
        <div role="status">
          <CheckCircle2 aria-hidden="true" className="mb-3 size-6 text-accent" />
          <h2 className="text-xl font-semibold tracking-tight">We received your inquiry</h2>
          <p className="mt-2 break-words text-sm leading-relaxed text-ink-2">We’ll review your request and reply to {confirmation.email}.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5">
          <ContactWhatsAppLink placement="ContactSuccess" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline">
            <MessageSquare aria-hidden="true" className="size-4" />
            Chat on WhatsApp
          </ContactWhatsAppLink>
          <button type="button" onClick={() => setConfirmation(null)} className="min-h-11 text-sm text-ink-2 underline underline-offset-4">
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form method="post" aria-labelledby="contact-form-title" onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-wash p-5 sm:p-8">
      <input type="text" name="website_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <h2 id="contact-form-title" className="text-xl font-semibold tracking-tight">Send an inquiry</h2>
        <p className="mt-1 text-sm text-ink-2">Leave your name and email so we can get back to you.</p>
      </div>

      {error && <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">{error}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label} htmlFor="contact-name">
          Name
          <input id="contact-name" name="name" autoComplete="name" type="text" required className={field} />
        </label>
        <label className={label} htmlFor="contact-email">
          Email
          <input id="contact-email" name="email" autoComplete="email" type="email" required className={field} />
        </label>
      </div>

      <label className={label} htmlFor="contact-solution">
        Platform <span className="font-normal text-ink-3">(optional)</span>
        <select id="contact-solution" name="solution" className={field}>
          <option value="">Choose a platform</option>
          <option value="ecommerce">E-commerce</option>
          <option value={SHORT_DRAMA_PACKAGES.platform}>Short drama</option>
          <option value={OTT_PACKAGES.platform}>OTT streaming</option>
          <option value="source-code">Source code licensing</option>
          <option value="developer-time">Developer support</option>
          <option value="custom">Custom project</option>
        </select>
      </label>

      <details className="group border-t border-line">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
          Add project details <ChevronDown aria-hidden="true" className="size-4 text-ink-3 group-open:rotate-180" />
        </summary>
        <div className="space-y-4 pt-1">
          <label className={label} htmlFor="contact-message">
            What are you building? <span className="font-normal text-ink-3">(optional)</span>
            <textarea id="contact-message" name="message" rows={3} placeholder="Tell us about the platform, features, or launch date you have in mind." className={field} />
          </label>
          <label className={label} htmlFor="contact-company">
            Company <span className="font-normal text-ink-3">(optional)</span>
            <input id="contact-company" name="company" autoComplete="organization" className={field} />
          </label>
          <div>
            <label className={label} htmlFor="contact-phone">
              Phone or WhatsApp <span className="font-normal text-ink-3">(optional)</span>
            </label>
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-2">
              <select name="country" defaultValue="US" aria-label="Country dial code" className={field}>
                <optgroup label="Popular">
                  {POPULAR_COUNTRIES.map((country) => (
                    <option key={country.iso} value={country.iso}>{country.name} ({country.code})</option>
                  ))}
                </optgroup>
                <optgroup label="Other countries">
                  {otherCountries.map((country) => (
                    <option key={country.iso} value={country.iso}>{country.name} ({country.code})</option>
                  ))}
                </optgroup>
              </select>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel-national" className={field} />
            </div>
          </div>
        </div>
      </details>

      <Button id="contact-submit-btn" type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending inquiry…" : "Send inquiry"}
      </Button>

      <p className="text-xs leading-relaxed text-ink-3">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-ink">Privacy Policy</Link>
        {" "}and{" "}
        <Link href="/terms" className="underline underline-offset-4 hover:text-ink">Terms of Service</Link>.
      </p>
    </form>
  );
}
