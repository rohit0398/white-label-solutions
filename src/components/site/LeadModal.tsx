"use client";

import React, { useEffect, useState } from "react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { POPULAR_COUNTRIES, ALL_COUNTRIES } from "@/lib/countryCodes";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

interface LeadModalProps {
  onClose: () => void;
  selectedTierId?: string;
}

const field =
  "w-full h-11 rounded-md border border-line bg-paper px-3 text-[15px] text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink transition-colors";
const label = "block text-sm font-medium text-ink-2 mb-1.5";

export function LeadModal({ onClose, selectedTierId = "turnkey-setup" }: LeadModalProps) {
  const { language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    company: "",
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
        package: selectedTierId,
        honeypot: form.honeypot,
      };

      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch {
      // Graceful fallback: acknowledge lead so user is never blocked
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
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
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

            <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-line bg-wash/50 text-xs font-mono text-ink-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{t.hero.badge}</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                  {t.leadModal.phoneLabel}
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

              {/* Row 3: Company (Optional) - Full width */}
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

              <Button id="lead-submit" type="submit" disabled={loading} className="w-full h-11 mt-2 text-[15px] font-medium">
                {loading ? t.leadModal.submitting : t.leadModal.submitBtn}
              </Button>
            </form>

            <p className="mt-6 text-sm text-ink-3">
              {t.leadModal.whatsappText}{" "}
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink"
              >
                WhatsApp
              </a>{" "}
              ({BRAND.contact.whatsappDisplay}).
            </p>
          </>
        ) : (
          <div className="py-6">
            <h2 id="lead-modal-title" className="text-2xl font-semibold tracking-tight">
              {t.leadModal.successTitle}, {form.name.split(" ")[0] || ""}.
            </h2>
            <p className="mt-3 text-ink-2">
              {t.leadModal.successDesc}
            </p>
            <Button variant="secondary" className="mt-6" onClick={onClose}>
              {t.leadModal.closeBtn}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
