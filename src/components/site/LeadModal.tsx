"use client";

import React, { useEffect, useState } from "react";
import { BRAND, PRICING_TIERS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface LeadModalProps {
  onClose: () => void;
  selectedTierId?: string;
}

const field =
  "w-full h-11 rounded-md border border-line bg-paper px-3 text-[15px] text-ink placeholder:text-ink-3 focus:outline-none focus:border-ink";
const label = "block text-sm text-ink-2 mb-1.5";

export function LeadModal({ onClose, selectedTierId = "turnkey-setup" }: LeadModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: selectedTierId,
    cloud: "AWS",
  });

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
        className="relative w-full max-w-lg rounded-lg bg-paper border border-line p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="lead-modal-close"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-8 w-8 text-ink-3 hover:text-ink text-xl leading-none"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h2 id="lead-modal-title" className="text-2xl font-semibold tracking-tight">
              Book a demo
            </h2>
            <p className="mt-2 text-ink-2">
              A 30-minute call. We show you a live store and app and answer questions about your
              setup.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-name" className={label}>Name</label>
                  <input id="lead-name" required value={form.name} onChange={set("name")} className={field} />
                </div>
                <div>
                  <label htmlFor="lead-email" className={label}>Work email</label>
                  <input id="lead-email" type="email" required value={form.email} onChange={set("email")} className={field} />
                </div>
                <div>
                  <label htmlFor="lead-phone" className={label}>Phone or WhatsApp</label>
                  <input id="lead-phone" type="tel" value={form.phone} onChange={set("phone")} className={field} />
                </div>
                <div>
                  <label htmlFor="lead-company" className={label}>Company</label>
                  <input id="lead-company" value={form.company} onChange={set("company")} className={field} />
                </div>
                <div>
                  <label htmlFor="lead-package" className={label}>Interested in</label>
                  <select id="lead-package" value={form.package} onChange={set("package")} className={field}>
                    {PRICING_TIERS.map((t) => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="lead-cloud" className={label}>Cloud</label>
                  <select id="lead-cloud" value={form.cloud} onChange={set("cloud")} className={field}>
                    <option value="AWS">AWS</option>
                    <option value="GCP">Google Cloud</option>
                    <option value="Azure">Azure</option>
                    <option value="Unsure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <Button id="lead-submit" type="submit" className="w-full mt-2">
                Send request
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
