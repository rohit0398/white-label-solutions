"use client";

import { useSite } from "@/components/site/SiteProvider";
import { useMessages } from "@/components/site/useMessages";
import { TRANSLATIONS } from "@/lib/translations";
import type { Currency } from "@/types";

const currencies: { code: Currency; symbol: string }[] = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "INR", symbol: "₹" },
];

export function CurrencySelector() {
  const { currency, setCurrency, language } = useSite();
  const translate = useMessages();
  const label = translate(TRANSLATIONS[language].pricing.currencyLabel);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-ink-3">{label}</p>
      <div role="group" aria-label={label} className="inline-flex flex-wrap rounded-md border border-line bg-wash p-0.5">
        {currencies.map(({ code, symbol }) => (
          <button
            key={code}
            type="button"
            aria-pressed={code === currency}
            onClick={() => setCurrency(code)}
            className={`min-h-8 cursor-pointer rounded px-3 py-1 font-mono text-xs transition-colors ${code === currency
              ? "bg-paper font-semibold text-ink shadow-xs"
              : "text-ink-3 hover:bg-wash/80 hover:text-ink"}`}
          >
            {code} ({symbol})
          </button>
        ))}
      </div>
    </div>
  );
}
