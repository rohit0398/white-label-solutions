"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Currency, Language } from "@/types";
import { LeadModal } from "@/components/site/LeadModal";

interface SiteContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  openDemo: (tierId?: string) => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

/**
 * Holds the few pieces of interactive state shared across the site
 * (currency, language, the demo request dialog) so pages and most
 * sections can stay server components.
 */
export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [language, setLanguage] = useState<Language>("en");
  const [demoTier, setDemoTier] = useState<string | null>(null);

  const openDemo = useCallback((tierId: string = "turnkey-setup") => setDemoTier(tierId), []);

  const value = useMemo(
    () => ({ currency, setCurrency, language, setLanguage, openDemo }),
    [currency, language, openDemo]
  );

  return (
    <SiteContext.Provider value={value}>
      {children}
      {demoTier && (
        <LeadModal key={demoTier} selectedTierId={demoTier} onClose={() => setDemoTier(null)} />
      )}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}
