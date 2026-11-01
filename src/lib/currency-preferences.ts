import type { Currency, Language } from "@/types";

const DEFAULT_CURRENCIES: Record<Language, Currency> = {
  en: "USD",
  es: "USD",
  de: "EUR",
  fr: "EUR",
  hi: "INR",
};

export function defaultCurrency(language: Language): Currency {
  return DEFAULT_CURRENCIES[language];
}

// A manual choice belongs to its language, rather than overriding other locales.
// Ignore the old global key, which could contain a timezone-based preference.
export function currencyPreferenceKey(language: Language): string {
  return `site_currency:${language}`;
}

export function preferredCurrency(language: Language, saved?: string | null): Currency {
  return saved && ["USD", "EUR", "GBP", "INR"].includes(saved)
    ? saved as Currency
    : defaultCurrency(language);
}
