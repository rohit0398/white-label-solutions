"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Currency, Language } from "@/types";
import { LeadModal } from "@/components/site/LeadModal";

export type Theme = "dark" | "light";

interface SiteContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  openDemo: (tierId?: string) => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

/**
 * Holds the interactive state shared across the site (theme, currency, language, demo modal).
 * Defaults to neutral dark theme ("dark").
 */
export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [language, setLanguage] = useState<Language>("en");
  const [demoTier, setDemoTier] = useState<string | null>(null);

  // Sync theme with document attributes and localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("site_theme") as Theme | null;
      const initial: Theme = saved === "light" ? "light" : "dark";
      setThemeState(initial);
      document.documentElement.setAttribute("data-theme", initial);
      if (initial === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("site_theme", t);
    } catch {}
    document.documentElement.setAttribute("data-theme", t);
    if (t === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("site_theme", next);
      } catch {}
      document.documentElement.setAttribute("data-theme", next);
      if (next === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  }, []);

  const openDemo = useCallback((tierId: string = "turnkey-setup") => setDemoTier(tierId), []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, currency, setCurrency, language, setLanguage, openDemo }),
    [theme, setTheme, toggleTheme, currency, language, openDemo]
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
