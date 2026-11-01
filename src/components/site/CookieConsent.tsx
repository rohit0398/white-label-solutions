"use client";
import { useMessages } from "@/components/site/useMessages";

import Link from "@/components/ui/LocalizedLink";
import React, { useEffect, useState } from "react";
import { ShieldCheck, X } from "lucide-react";
import { useSite } from "@/components/site/SiteProvider";
import { INTERFACE_COPY } from "@/lib/translations/interface";
import { updateGoogleConsent } from "@/lib/analytics";

export function CookieConsent() {
  const translateCopy = useMessages();

  const { language } = useSite();
  const ui = INTERFACE_COPY[language];
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
      aria-label={translateCopy(ui.consentTitle)}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-in"
    >
      <div className="rounded-xl border border-line bg-paper/98 backdrop-blur-md p-5 shadow-2xl space-y-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold tracking-tight text-ink">
              {translateCopy(ui.consentTitle)}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            aria-label={translateCopy(ui.decline)}
            className="text-ink-3 hover:text-ink transition-colors p-1 -mr-1 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-ink-2 leading-relaxed">
          {translateCopy(ui.consentBody)}{" "}
          <Link href="/privacy" lang="en" className="text-ink underline underline-offset-2 hover:opacity-80">{translateCopy(ui.privacy)}</Link>.
        </p>

        <div className="pt-1 flex items-center gap-2.5">
          <button
            type="button"
            id="cookie-consent-accept"
            onClick={handleAccept}
            className="flex-1 py-2 px-3 rounded-md bg-ink text-paper text-xs font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            {translateCopy(ui.accept)}
          </button>
          <button
            type="button"
            id="cookie-consent-decline"
            onClick={handleDecline}
            className="py-2 px-3 rounded-md border border-line bg-wash text-ink-2 hover:text-ink text-xs font-medium active:scale-95 transition-all cursor-pointer"
          >
            {translateCopy(ui.decline)}
          </button>
        </div>
      </div>
    </div>
  );
}
