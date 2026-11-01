"use client";

import type { MessageTable } from "@/lib/messages";
import { localizedPath } from "@/lib/site-config";
import { currencyPreferenceKey, defaultCurrency, preferredCurrency } from "@/lib/currency-preferences";

import React, { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Currency, Language } from "@/types";
import { LeadModal } from "@/components/site/LeadModal";
import { CookieConsent } from "@/components/site/CookieConsent";

export type Theme = "dark" | "light";
const memory = new Map<string, string>();
function subscribePreferences(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener("site-preferences", listener);
  return () => { window.removeEventListener("storage", listener); window.removeEventListener("site-preferences", listener); };
}
function readPreference(key: string) {
  try { return localStorage.getItem(key) || memory.get(key); } catch { return memory.get(key); }
}
function writePreference(key: string, value: string) {
  memory.set(key, value);
  try { localStorage.setItem(key, value); } catch { /* Preferences still work for this visit. */ }
  window.dispatchEvent(new Event("site-preferences"));
}
function readTheme(): Theme { return readPreference("site_theme") === "light" ? "light" : "dark"; }


interface SiteContextValue {
  messages: MessageTable;
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
 * Automatically synchronizes language with URL sub-path (/es, /de, /fr, /hi, or / for English).
 */
export function SiteProvider({ children, initialLanguage = "en", messages = {} }: { children: React.ReactNode; initialLanguage?: Language; messages?: MessageTable }) {
  const pathname = usePathname();


  // Detect active language from URL pathname
  const urlLocale = useMemo<Language>(() => {
    if (!pathname) return initialLanguage;
    const segment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
    if (segment === "es") return "es";
    if (segment === "de") return "de";
    if (segment === "fr") return "fr";
    if (segment === "hi") return "hi";
    return "en";
  }, [pathname, initialLanguage]);

  const theme = useSyncExternalStore(subscribePreferences, readTheme, () => "dark" as Theme);
  const language = urlLocale;
  const readCurrency = useCallback(() => preferredCurrency(language, readPreference(currencyPreferenceKey(language))), [language]);
  const serverCurrency = useCallback(() => defaultCurrency(language), [language]);
  const currency = useSyncExternalStore(subscribePreferences, readCurrency, serverCurrency);
  const [demoTier, setDemoTier] = useState<string | null>(null);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);
  const setTheme = useCallback((value: Theme) => writePreference("site_theme", value), []);
  const toggleTheme = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);
  const setCurrency = useCallback((value: Currency) => writePreference(currencyPreferenceKey(language), value), [language]);
  const setLanguage = useCallback((value: Language) => {
    window.location.assign(localizedPath(pathname || "/", value));
  }, [pathname]);

  const openDemo = useCallback((tierId: string = "launch") => setDemoTier(tierId), []);

  const value = useMemo(
    () => ({ messages, theme, setTheme, toggleTheme, currency, setCurrency, language, setLanguage, openDemo }),
    [messages, theme, setTheme, toggleTheme, currency, setCurrency, language, setLanguage, openDemo]
  );

  return (
    <SiteContext.Provider value={value}>
      {children}
      {demoTier && (
        <LeadModal key={demoTier} selectedTierId={demoTier} onClose={() => setDemoTier(null)} />
      )}
      <CookieConsent />
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}
