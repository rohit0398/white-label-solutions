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
  const [currency, setCurrencyState] = useState<Currency>("USD");
  const [language, setLanguageState] = useState<Language>("en");
  const [demoTier, setDemoTier] = useState<string | null>(null);

  // Sync theme, language, and currency with localStorage and browser preferences
  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("site_theme") as Theme | null;
      const initialTheme: Theme = savedTheme === "light" ? "light" : "dark";
      setThemeState(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }

      // Auto-detect or restore preferred language
      const savedLang = localStorage.getItem("site_language") as Language | null;
      if (savedLang && ["en", "es", "de", "fr", "hi"].includes(savedLang)) {
        setLanguageState(savedLang);
      } else if (typeof navigator !== "undefined" && navigator.language) {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("es")) setLanguageState("es");
        else if (browserLang.startsWith("de")) setLanguageState("de");
        else if (browserLang.startsWith("fr")) setLanguageState("fr");
        else if (browserLang.startsWith("hi")) setLanguageState("hi");
        else setLanguageState("en");
      }

      // Auto-detect or restore preferred currency
      const savedCurrency = localStorage.getItem("site_currency") as Currency | null;
      if (savedCurrency && ["USD", "EUR", "GBP", "INR"].includes(savedCurrency)) {
        setCurrencyState(savedCurrency);
      } else if (typeof Intl !== "undefined") {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
          if (tz.includes("Kolkata") || tz.includes("Calcutta")) setCurrencyState("INR");
          else if (tz.includes("London")) setCurrencyState("GBP");
          else if (tz.startsWith("Europe/")) setCurrencyState("EUR");
        } catch {}
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

  const setLanguage = useCallback((l: Language) => {
    setLanguageState(l);
    try {
      localStorage.setItem("site_language", l);
    } catch {}
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("site_currency", c);
    } catch {}
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
