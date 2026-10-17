"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { POPULAR_COUNTRIES, ALL_COUNTRIES } from "@/lib/countryCodes";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";
import { MessageSquare, ChevronDown, SlidersHorizontal } from "lucide-react";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";

interface LeadModalProps {
  onClose: () => void;
  selectedTierId?: string;
}

const PLATFORM_OPTIONS = [
  { id: "ecommerce", label: "🛍️ White-Label E-Commerce Platform ($4,999)" },
  { id: "short-drama", label: "🎬 9:16 Short-Drama Vertical Video Platform ($4,999)" },
  { id: "ott-streaming", label: "📺 16:9 Cinematic OTT & Live TV Platform ($4,999)" },
  { id: "source-code", label: "💻 Full Unencrypted Git Source Code License ($1,999)" },
  { id: "developer-time", label: "⏱️ Dedicated Engineering Support ($20/hr)" },
  { id: "launch", label: "🚀 Full Custom White-Label Cloud Launch" },
];

function resolveInitialPackage(tierId?: string, pathname?: string): string {
  // If explicitly passed a specific platform tier (other than default generic 'launch')
  if (tierId && tierId !== "launch") {
    if (tierId === "source-code-license") return "source-code";
    if (tierId === "dedicated-support") return "developer-time";
    return tierId;
  }
  // Otherwise, dynamically pre-select based on current URL path
  const path = (pathname || "").toLowerCase();
  if (path.includes("short-drama")) return "short-drama";
  if (path.includes("ott") || path.includes("streaming")) return "ott-streaming";
  if (path.includes("ecommerce") || path.includes("shopify")) return "ecommerce";
  if (path.includes("source-code")) return "source-code";

  return tierId || "ecommerce";
}

const field =
  "w-full h-11 rounded-md border border-line bg-paper px-3 text-[15px] text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink transition-colors";
const label = "block text-sm font-medium text-ink-2 mb-1.5";

export function LeadModal({ onClose, selectedTierId = "launch" }: LeadModalProps) {
  const { language } = useSite();
  const pathname = usePathname();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;
  const [selectedPackage, setSelectedPackage] = useState(() =>
    resolveInitialPackage(selectedTierId, pathname)
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    company: "",
    message: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fullPhone = form.phone.trim() ? `${form.countryCode} ${form.phone.trim()}` : "";
      const payload = {
        name: form.name,
        email: form.email,
        phone: fullPhone,
        company: form.company,
        message: form.message.trim() || undefined,
        package: selectedPackage,
        honeypot: form.honeypot,
      };

      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      trackLeadSubmission(
        selectedPackage,
        selectedPackage === "source-code" || selectedPackage === "source-code-license" ? 1999 : 4999
      );
      setSubmitted(true);
    } catch {
      // Graceful fallback: acknowledge lead so user is never blocked
      trackLeadSubmission(selectedPackage);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-xl rounded-xl border border-line bg-paper p-6 sm:p-8 shadow-xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 h-8 w-8 inline-flex items-center justify-center rounded-md text-ink-3 hover:text-ink hover:bg-wash transition-colors cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 id="lead-modal-title" className="text-2xl font-semibold tracking-tight text-ink">
              {t.leadModal.title}
            </h2>
            <p className="mt-2 text-ink-2 text-sm sm:text-[15px] leading-relaxed">
              {t.leadModal.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Architecture / Platform of Interest (Dynamic & Editable) */}
              <div>
                <label htmlFor="lead-package" className={label}>
                  Platform of Interest
                </label>
                <div className="relative">
                  <select
                    id="lead-package"
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full h-11 rounded-md border border-line bg-wash/50 hover:bg-wash px-3 pr-8 text-xs sm:text-sm font-medium text-ink focus:outline-none focus:border-ink transition-colors cursor-pointer appearance-none"
                  >
                    {PLATFORM_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-3" />
                </div>
              </div>
              {/* Spam bot honeypot field */}
              <input
                type="text"
                name="website"
                aria-hidden="true"
                tabIndex={-1}
                className="hidden"
                value={form.honeypot}
                onChange={set("honeypot")}
                autoComplete="off"
              />

              {/* Row 1: Name and Email side-by-side on desktop */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-name" className={label}>{t.leadModal.nameLabel}</label>
                  <input
                    id="lead-name"
                    required
                    placeholder={t.leadModal.namePlaceholder}
                    value={form.name}
                    onChange={set("name")}
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className={label}>{t.leadModal.emailLabel}</label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    placeholder={t.leadModal.emailPlaceholder}
                    value={form.email}
                    onChange={set("email")}
                    className={field}
                  />
                </div>
              </div>

              {/* Row 2: Phone or WhatsApp with full-width unified Country Code input group */}
              <div>
                <label htmlFor="lead-phone" className={label}>
                  {t.leadModal.phoneLabel} <span className="text-ink-3 text-xs font-normal">{t.leadModal.optional}</span>
                </label>
                <div className="flex w-full rounded-md border border-line bg-paper focus-within:border-ink transition-all">
                  <select
                    id="lead-country-code"
                    value={form.countryCode}
                    onChange={set("countryCode")}
                    aria-label="Country dial code"
                    className="w-40 sm:w-48 h-11 shrink-0 rounded-l-md border-r border-line bg-wash/60 hover:bg-wash px-2.5 sm:px-3 text-xs sm:text-[13px] text-ink focus:outline-none cursor-pointer font-medium transition-colors"
                  >
                    <optgroup label="Popular">
                      {POPULAR_COUNTRIES.map((c) => (
                        <option key={`pop-${c.iso}-${c.code}`} value={c.code}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="All Countries (A–Z)">
                      {ALL_COUNTRIES.map((c) => (
                        <option key={`all-${c.iso}-${c.name}`} value={c.code}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <input
                    id="lead-phone"
                    type="tel"
                    placeholder={t.leadModal.phonePlaceholder}
                    value={form.phone}
                    onChange={set("phone")}
                    className="flex-1 min-w-0 h-11 bg-transparent px-3 text-[15px] text-ink placeholder:text-ink-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Progressive Disclosure: Optional Company & Project Notes */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-ink-2 hover:text-ink py-1 px-1 -ml-1 rounded hover:bg-wash transition-colors cursor-pointer group select-none"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 text-accent transition-transform group-hover:scale-110" />
                  <span className="font-medium">
                    {showDetails ? "Hide company & project details" : "+ Add company & project details (Optional)"}
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-ink-3 transition-transform duration-200 ${
                      showDetails ? "rotate-180 text-ink" : ""
                    }`}
                  />
                </button>

                {showDetails && (
                  <div className="space-y-3 pt-3 border-t border-line/60 mt-2 animate-fade-in">
                    <div>
                      <label htmlFor="lead-company" className={label}>
                        {t.leadModal.companyLabel} <span className="text-ink-3 text-xs font-normal">{t.leadModal.optional}</span>
                      </label>
                      <input
                        id="lead-company"
                        placeholder={t.leadModal.companyPlaceholder}
                        value={form.company}
                        onChange={set("company")}
                        className={field}
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-message" className={label}>
                        Project Notes / Specific Questions <span className="text-ink-3 text-xs font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="lead-message"
                        rows={2}
                        placeholder="Target launch date, custom payment gateway, or tech stack requirements..."
                        value={form.message}
                        onChange={set("message")}
                        className="w-full rounded-md border border-line bg-paper px-3 py-2 text-[14px] text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink transition-colors resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <Button id="lead-submit" type="submit" disabled={loading} className="w-full h-11 mt-2 text-[15px] font-medium">
                {loading ? t.leadModal.submitting : t.leadModal.submitBtn}
              </Button>

              <p className="mt-2.5 text-[11px] text-ink-3 text-center leading-normal">
                By submitting, you agree to our{" "}
                <Link href="/privacy" target="_blank" className="underline hover:text-ink">Privacy Policy</Link>{" "}
                and{" "}
                <Link href="/terms" target="_blank" className="underline hover:text-ink">Terms</Link>.
              </p>
            </form>

            <p className="mt-6 text-sm text-ink-3">
              {t.leadModal.whatsappText}{" "}
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("LeadModal-Footer")}
                className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink"
              >
                WhatsApp
              </a>{" "}
              ({BRAND.contact.whatsappDisplay}).
            </p>
          </>
        ) : (
          <div className="py-6 space-y-4">
            <h2 id="lead-modal-title" className="text-2xl font-semibold tracking-tight">
              {t.leadModal.successTitle}, {form.name.split(" ")[0] || ""}.
            </h2>
            <p className="text-ink-2 leading-relaxed">
              {t.leadModal.successDesc}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("LeadModal-Success")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-accent/40 bg-accent text-paper text-sm font-medium hover:bg-accent/90 transition-colors shadow-xs"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp now</span>
                <span className="text-xs">↗</span>
              </a>
              <Button variant="secondary" onClick={onClose}>
                {t.leadModal.closeBtn}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
