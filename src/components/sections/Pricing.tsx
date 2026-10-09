"use client";

import React, { useState } from "react";
import { PRICING_TIERS } from "@/lib/constants";
import { Currency, PricingTier } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { DemoButton } from "@/components/site/DemoButton";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

const currencies: { code: Currency; symbol: string; label: string }[] = [
  { code: "USD", symbol: "$", label: "USD" },
  { code: "EUR", symbol: "€", label: "EUR" },
  { code: "GBP", symbol: "£", label: "GBP" },
  { code: "INR", symbol: "₹", label: "INR" },
];

export interface PricingProps {
  id?: string;
  index?: string;
  title?: string;
  intro?: string;
  tiers?: PricingTier[];
  hideCalculator?: boolean;
}

export function Pricing({
  id = "pricing",
  index,
  title,
  intro,
  tiers,
  hideCalculator = false,
}: PricingProps = {}) {
  const { currency, setCurrency, language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;
  const [monthlyGmv, setMonthlyGmv] = useState<number>(50000);

  const activeTiers = tiers || PRICING_TIERS;
  const sectionIndex = index !== undefined ? index : t.pricing.index;
  const sectionTitle = title || t.pricing.title;
  const sectionIntro = intro !== undefined ? intro : t.pricing.intro;
  const showCalculator = !hideCalculator && !tiers;

  // Minimal 3-year calculator:
  // Shopify: $399–$2000/mo platform fee + 1.5% transaction fee + $500/mo app plugins
  const shopifyBase = monthlyGmv > 80000 ? 2000 : 399;
  const shopifyCut = monthlyGmv * 0.015;
  const shopifyApps = 500;
  const totalShopify3Y = (shopifyBase + shopifyCut + shopifyApps) * 36;

  // Mechatron: $4,999 setup + ~$40/mo client cloud bill
  const totalMechatron3Y = 4999 + 40 * 36;
  const estimatedSavings = Math.max(0, totalShopify3Y - totalMechatron3Y);

  // Dynamic bar visualization relative to max scale ($250k)
  const maxScale = Math.max(totalShopify3Y, 120000);
  const shopifyBarPct = Math.min(100, Math.max(8, Math.round((totalShopify3Y / maxScale) * 100)));
  const mechatronBarPct = Math.min(100, Math.max(5, Math.round((totalMechatron3Y / maxScale) * 100)));

  return (
    <Section
      id={id}
      index={sectionIndex}
      title={sectionTitle}
      intro={sectionIntro}
      wide
      bare
    >
      {/* Currency Switcher */}
      <div className="wrap-wide mb-10 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-ink-3">{t.pricing.currencyLabel}</p>
        <div className="inline-flex rounded-md border border-line p-0.5 bg-wash">
          {currencies.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => setCurrency(c.code)}
              className={`px-3 py-1 text-xs font-mono rounded transition-all duration-150 active:scale-95 cursor-pointer ${
                currency === c.code
                  ? "bg-paper text-ink font-semibold shadow-xs"
                  : "text-ink-3 hover:text-ink hover:bg-paper/40"
              }`}
            >
              {c.label} ({c.symbol})
            </button>
          ))}
        </div>
      </div>

      {/* Tier Cards / Rows with Tactile Hover Physics */}
      <div className="wrap-wide grid gap-6 sm:grid-cols-3">
        {activeTiers.map((tier, idx) => {
          const price = tier.prices[currency];
          const translatedTier = !tiers && t.pricing.tiers[idx] ? t.pricing.tiers[idx] : tier;
          return (
            <div
              key={tier.id}
              className={`flex flex-col justify-between p-6 sm:p-7 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-md cursor-default ${
                tier.isPopular
                  ? "border-accent/80 bg-paper shadow-xs hover:border-accent hover:shadow-lg"
                  : "border-line bg-paper hover:border-ink hover:shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{translatedTier.name}</h3>
                  {tier.isPopular && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/5 text-[11px] font-mono text-accent font-semibold shimmer-badge">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                      </span>
                      {t.pricing.popularBadge}
                    </span>
                  )}
                </div>

                <div className="mt-4 pb-4 border-b border-line">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight font-mono">
                      {formatCurrency(price.amount, currency)}
                    </span>
                    {price.period && (
                      <span className="text-xs text-ink-3">/{price.period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-ink-2 leading-relaxed">{translatedTier.tagline}</p>
                </div>

                <ul className="mt-5 space-y-2.5 text-xs text-ink-2">
                  {translatedTier.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-ink-3 mt-0.5 select-none">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-line">
                <DemoButton
                  tierId={tier.id}
                  variant={tier.isPopular ? "primary" : "secondary"}
                  size="sm"
                  className="w-full text-xs"
                >
                  {translatedTier.ctaText}
                </DemoButton>
              </div>
            </div>
          );
        })}
      </div>

      {showCalculator && (
        <>
          {/* 3-Year Comparison Table */}
          <div className="wrap-wide mt-20">
            <h3 className="text-xl font-semibold tracking-tight">{t.pricing.tco.title}</h3>
            <p className="mt-1 text-sm text-ink-3">
              {t.pricing.tco.subtitle}
            </p>

        <div className="mt-6 overflow-x-auto border-t border-line">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-mono text-ink-3">
                <th className="py-3 pr-4 font-normal">{t.pricing.tco.colItem}</th>
                <th className="py-3 px-4 font-semibold text-ink">{t.pricing.tco.colMechatron}</th>
                <th className="py-3 pl-4 font-normal">{t.pricing.tco.colShopify}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-ink-2 text-xs sm:text-sm">
              {t.pricing.tco.rows.map((row, rIdx) => {
                const isLast = rIdx === t.pricing.tco.rows.length - 1;
                return (
                  <tr
                    key={rIdx}
                    className={`hover:bg-wash/30 transition-colors ${
                      isLast ? "font-semibold border-t-2 border-line" : ""
                    }`}
                  >
                    <td className={`pr-4 text-ink ${isLast ? "py-4 font-semibold" : "py-3.5 font-medium"}`}>
                      {row.label}
                    </td>
                    <td className={`px-4 font-mono text-accent ${isLast ? "py-4 font-bold" : "py-3.5 font-medium"}`}>
                      {rIdx === 0 ? `${formatCurrency(4999, currency)} ${row.mechatron}` : row.mechatron}
                    </td>
                    <td className={`pl-4 font-mono ${isLast ? "py-4 text-ink font-semibold" : "py-3.5 text-ink-2"}`}>
                      {row.shopify}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Savings Playground with Live Reactive Comparison Bars */}
      <div className="wrap-wide mt-16 p-6 sm:p-8 rounded-lg border border-line bg-wash transition-all duration-200">
        <h4 className="text-base font-semibold tracking-tight text-ink">{t.pricing.calculator.headline}</h4>
        <p className="mt-1 text-xs text-ink-2">
          {t.pricing.calculator.subtitle}
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-2 font-medium">{t.pricing.calculator.salesVolume}</span>
            <span className="font-mono font-bold text-ink text-base">
              ${monthlyGmv.toLocaleString()} / mo
            </span>
          </div>

          <input
            type="range"
            min={10000}
            max={300000}
            step={5000}
            value={monthlyGmv}
            onChange={(e) => setMonthlyGmv(Number(e.target.value))}
            onInput={(e) => setMonthlyGmv(Number((e.target as HTMLInputElement).value))}
            className="w-full accent-ink h-2 bg-line rounded-lg cursor-pointer"
          />

          <div className="flex justify-between text-[11px] font-mono text-ink-3">
            <span>$10,000/mo</span>
            <span>$150,000/mo</span>
            <span>$300,000+/mo</span>
          </div>
        </div>

        {/* Live Visual Comparison Bars */}
        <div className="mt-8 pt-6 border-t border-line space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-ink-3">{t.pricing.calculator.shopifyLabel}</span>
              <span className="text-ink font-semibold">${Math.round(totalShopify3Y).toLocaleString()}</span>
            </div>
            <div className="h-3 rounded-full bg-line/80 overflow-hidden">
              <div
                className="h-full bg-ink/70 rounded-full transition-all duration-150 ease-out"
                style={{ width: `${shopifyBarPct}%` }}
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-accent font-medium">{t.pricing.calculator.mechatronLabel}</span>
              <span className="text-accent font-bold">${Math.round(totalMechatron3Y).toLocaleString()}</span>
            </div>
            <div className="h-3 rounded-full bg-line/80 overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-150 ease-out"
                style={{ width: `${mechatronBarPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Savings Total */}
        <div className="mt-6 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <span className="text-xs text-ink-2 font-medium">
            {t.pricing.calculator.savingsTitle}:
          </span>
          <span className="text-2xl sm:text-3xl font-bold font-mono text-accent">
            +${Math.round(estimatedSavings).toLocaleString()}
          </span>
        </div>
      </div>
    </>
  )}
</Section>
  );
}
