"use client";

import React, { useEffect, useState } from "react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { POPULAR_COUNTRIES, ALL_COUNTRIES } from "@/lib/countryCodes";

interface LeadModalProps {
  onClose: () => void;
  selectedTierId?: string;
}

const field =
  "w-full h-11 rounded-md border border-line bg-paper px-3 text-[15px] text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink transition-colors";
const label = "block text-sm font-medium text-ink-2 mb-1.5";

export function LeadModal({ onClose, selectedTierId = "turnkey-setup" }: LeadModalProps) {
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
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [key]: e.target.value });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="relative w-full max-w-lg rounded-xl bg-paper border border-line p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="lead-modal-close"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-8 w-8 rounded-md text-ink-3 hover:text-ink hover:bg-wash flex items-center justify-center text-xl leading-none transition-colors"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h2 id="lead-modal-title" className="text-2xl font-semibold tracking-tight text-ink">
              Book a demo
            </h2>
            <p className="mt-2 text-ink-2 text-sm sm:text-[15px] leading-relaxed">
              A 30-minute call. We show you a live store and app and answer questions about your
              setup.
            </p>

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
                  <label htmlFor="lead-name" className={label}>Name</label>
                  <input
                    id="lead-name"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={set("name")}
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className={label}>Work email</label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={set("email")}
                    className={field}
                  />
                </div>
              </div>

              {/* Row 2: Phone or WhatsApp with full-width unified Country Code input group */}
              <div>
                <label htmlFor="lead-phone" className={label}>
                  Phone or WhatsApp
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
                    placeholder="Mobile or WhatsApp number"
                    value={form.phone}
                    onChange={set("phone")}
                    className="flex-1 min-w-0 h-11 bg-transparent px-3 text-[15px] text-ink placeholder:text-ink-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Company (Optional) - Full width */}
              <div>
                <label htmlFor="lead-company" className={label}>
                  Company <span className="text-ink-3 text-xs font-normal">(optional)</span>
                </label>
                <input
                  id="lead-company"
                  placeholder="Your store or company name"
                  value={form.company}
                  onChange={set("company")}
                  className={field}
                />
              </div>

              <Button id="lead-submit" type="submit" disabled={loading} className="w-full h-11 mt-2 text-[15px] font-medium">
                {loading ? "Sending request..." : "Book demo call →"}
              </Button>
            </form>

            <p className="mt-6 text-sm text-ink-3">
              Or message us on{" "}
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
              Thanks, {form.name.split(" ")[0] || "we got it"}.
            </h2>
            <p className="mt-3 text-ink-2">
              We&apos;ll email {form.email} within one business day to pick a time.
            </p>
            <Button variant="secondary" className="mt-6" onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
