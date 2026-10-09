"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, X } from "lucide-react";
import { updateGoogleConsent } from "@/lib/analytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        // Small delay so page loads smoothly before banner slides up
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "granted");
    } catch {}
    updateGoogleConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookie_consent", "denied");
    } catch {}
    updateGoogleConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-in"
    >
      <div className="rounded-xl border border-line bg-paper/98 backdrop-blur-md p-5 shadow-2xl space-y-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-semibold tracking-tight text-ink">
              Privacy &amp; Cookie Consent
            </h4>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            aria-label="Close and decline optional cookies"
            className="text-ink-3 hover:text-ink transition-colors p-1 -mr-1 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-ink-2 leading-relaxed">
          We use measurement tags to understand traffic, measure ad campaign performance, and improve our services in accordance with EEA &amp; global regulations. Learn more in our{" "}
          <a href="/privacy" className="text-ink underline underline-offset-2 hover:opacity-80">Privacy Policy</a>.
        </p>

        <div className="pt-1 flex items-center gap-2.5">
          <button
            type="button"
            id="cookie-consent-accept"
            onClick={handleAccept}
            className="flex-1 py-2 px-3 rounded-md bg-ink text-paper text-xs font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            Accept all
          </button>
          <button
            type="button"
            id="cookie-consent-decline"
            onClick={handleDecline}
            className="py-2 px-3 rounded-md border border-line bg-wash text-ink-2 hover:text-ink text-xs font-medium active:scale-95 transition-all cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
