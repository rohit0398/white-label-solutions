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
  const showCalculator = !hideCalculator;

  // Dynamic pricing values derived from active tiers
  const launchPrice = activeTiers[0]?.prices[currency]?.amount ?? 4999;
  const sourceCodePrice = activeTiers[1]?.prices[currency]?.amount ?? 1999;
  const devRate = activeTiers[2]?.prices[currency]?.amount ?? 20;

  // Cloud infrastructure costs per currency
  const cloudCosts = {
    USD: { low: 720, high: 1440, monthlyLow: 20, monthlyHigh: 40 },
    EUR: { low: 660, high: 1320, monthlyLow: 18, monthlyHigh: 37 },
    GBP: { low: 560, high: 1130, monthlyLow: 16, monthlyHigh: 32 },
    INR: { low: 60000, high: 120000, monthlyLow: 1600, monthlyHigh: 3300 },
  }[currency];

  // Currency multiplier relative to USD for the calculator
  const currencyRatio = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.8,
    INR: 83,
  }[currency];

  const agencyDevRate = {
    USD: 150,
    EUR: 140,
    GBP: 120,
    INR: 12000,
  }[currency];

  // Calculator State
  const [monthlyGmvUsd, setMonthlyGmvUsd] = useState<number>(50000);
  const [includeSourceCode, setIncludeSourceCode] = useState<boolean>(false);
  const [devHoursPerMonth, setDevHoursPerMonth] = useState<number>(0);

  const monthlyGmvConverted = Math.round(monthlyGmvUsd * currencyRatio);

  // Shopify 3-Year Total Cost
  const shopifyMonthlyBase = (monthlyGmvUsd > 80000 ? 2000 : 399) * currencyRatio;
  const shopifyCutMonthly = monthlyGmvConverted * 0.015;
  const shopifyAppsMonthly = 500 * currencyRatio;
  const shopifyDevMonthly = devHoursPerMonth * agencyDevRate;
  const totalShopify3Y = (shopifyMonthlyBase + shopifyCutMonthly + shopifyAppsMonthly + shopifyDevMonthly) * 36;

  // Mechatron 3-Year Total Cost
  const mechatronCloud3Y = cloudCosts.monthlyHigh * 36;
  const mechatronDev3Y = devHoursPerMonth * devRate * 36;
  const mechatronSourceCode = includeSourceCode ? sourceCodePrice : 0;
  const totalMechatron3Y = launchPrice + mechatronCloud3Y + mechatronSourceCode + mechatronDev3Y;

  const estimatedSavings = Math.max(0, totalShopify3Y - totalMechatron3Y);

  // Dynamic bar visualization
  const maxScale = Math.max(totalShopify3Y, totalMechatron3Y * 1.4, 100000 * currencyRatio);
  const shopifyBarPct = Math.min(100, Math.max(10, Math.round((totalShopify3Y / maxScale) * 100)));
  const mechatronBarPct = Math.min(100, Math.max(6, Math.round((totalMechatron3Y / maxScale) * 100)));

  // Dynamic TCO Comparison Rows
  const tcoRows = [
    {
      label: "Initial setup & launch",
      mechatron: `${formatCurrency(launchPrice, currency)} (one-time setup)`,
      shopify: `${formatCurrency(Math.round(10000 * currencyRatio), currency)} – ${formatCurrency(Math.round(25000 * currencyRatio), currency)}+ agency setup`,
      isLast: false,
    },
    {
      label: "Source code & IP ownership",
      mechatron: `${formatCurrency(sourceCodePrice, currency)} perpetual license (100% full IP ownership)`,
      shopify: "0% (Vendor lock-in, proprietary closed SaaS)",
      isLast: false,
    },
    {
      label: "Dedicated engineering rates",
      mechatron: `${formatCurrency(devRate, currency)}/hr dedicated engineers`,
      shopify: `${formatCurrency(agencyDevRate, currency)}+/hr Shopify Plus agency rates`,
      isLast: false,
    },
    {
      label: "3-year software license fees",
      mechatron: "$0 (zero recurring SaaS fees)",
      shopify: `${formatCurrency(Math.round(72000 * currencyRatio), currency)}+ (${formatCurrency(Math.round(2000 * currencyRatio), currency)}/mo min)`,
      isLast: false,
    },
    {
      label: "3-year cloud infrastructure",
      mechatron: `~${formatCurrency(cloudCosts.low, currency)} – ${formatCurrency(cloudCosts.high, currency)} (~${formatCurrency(cloudCosts.monthlyLow, currency)}–${formatCurrency(cloudCosts.monthlyHigh, currency)}/mo direct to your cloud)`,
      shopify: "Included in SaaS bill (closed black box)",
      isLast: false,
    },
    {
      label: `3-year transaction commission (1.5% on ${formatCurrency(Math.round(50000 * currencyRatio), currency)}/mo GMV)`,
      mechatron: "$0 (keep 100% of sales, direct gateway fees only)",
      shopify: `~${formatCurrency(Math.round(27000 * currencyRatio), currency)}+ in platform cuts`,
      isLast: false,
    },
    {
      label: "Total 3-year estimated cost",
      mechatron: `~${formatCurrency(launchPrice + cloudCosts.low, currency)} – ${formatCurrency(launchPrice + cloudCosts.high, currency)} (setup + direct cloud)`,
      shopify: `${formatCurrency(Math.round(90000 * currencyRatio), currency)} – ${formatCurrency(Math.round(150000 * currencyRatio), currency)}+ (base + apps + GMV cuts)`,
      isLast: true,
    },
  ];

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
                  {tcoRows.map((row, rIdx) => {
                    const isLast = row.isLast;
                    return (
                      <tr
                        key={rIdx}
                        className={`hover:bg-wash/30 transition-colors ${
                          isLast ? "font-semibold border-t-2 border-line bg-wash/20" : ""
                        }`}
                      >
                        <td className={`pr-4 text-ink ${isLast ? "py-4 font-semibold" : "py-3.5 font-medium"}`}>
                          {row.label}
                        </td>
                        <td className={`px-4 font-mono text-accent ${isLast ? "py-4 font-bold" : "py-3.5 font-medium"}`}>
                          {row.mechatron}
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
          <div className="wrap-wide mt-16 p-6 sm:p-8 rounded-2xl border border-line bg-wash shadow-xs transition-all duration-200">
            <h4 className="text-base font-semibold tracking-tight text-ink">{t.pricing.calculator.headline}</h4>
            <p className="mt-1 text-xs text-ink-2">
              {t.pricing.calculator.subtitle}
            </p>

            <div className="mt-6 space-y-6">
              {/* Monthly Sales Volume Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-2 font-medium">{t.pricing.calculator.salesVolume}</span>
                  <span className="font-mono font-bold text-ink text-base">
                    {formatCurrency(monthlyGmvConverted, currency)} / mo
                  </span>
                </div>

                <input
                  type="range"
                  min={10000}
                  max={300000}
                  step={5000}
                  value={monthlyGmvUsd}
                  onChange={(e) => setMonthlyGmvUsd(Number(e.target.value))}
                  className="w-full accent-ink h-2 bg-line rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[11px] font-mono text-ink-3">
                  <span>{formatCurrency(Math.round(10000 * currencyRatio), currency)}/mo</span>
                  <span>{formatCurrency(Math.round(150000 * currencyRatio), currency)}/mo</span>
                  <span>{formatCurrency(Math.round(300000 * currencyRatio), currency)}+/mo</span>
                </div>
              </div>

              {/* Dynamic Package Add-on Controls */}
              <div className="pt-4 border-t border-line grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Source Code License Toggle */}
                <label className="flex items-center gap-3 p-3 rounded-xl border border-line bg-paper/60 hover:bg-paper cursor-pointer transition-colors select-none">
                  <input
                    type="checkbox"
                    checked={includeSourceCode}
                    onChange={(e) => setIncludeSourceCode(e.target.checked)}
                    className="h-4 w-4 rounded accent-ink cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-ink block">Include Full Source Code License</span>
                    <span className="text-ink-3 font-mono">
                      +{formatCurrency(sourceCodePrice, currency)} one-time perpetual IP transfer
                    </span>
                  </div>
                </label>

                {/* Developer Hours Selection */}
                <div className="p-3 rounded-xl border border-line bg-paper/60 flex items-center justify-between gap-2">
                  <div className="text-xs">
                    <span className="font-semibold text-ink block">Dedicated Developer Hours</span>
                    <span className="text-ink-3 font-mono">
                      {formatCurrency(devRate, currency)}/hr vs {formatCurrency(agencyDevRate, currency)}/hr agency
                    </span>
                  </div>
                  <div className="inline-flex rounded-lg border border-line p-0.5 bg-wash">
                    {[0, 5, 10].map((hours) => (
                      <button
                        key={hours}
                        type="button"
                        onClick={() => setDevHoursPerMonth(hours)}
                        className={`px-2.5 py-1 text-xs font-mono rounded cursor-pointer transition-colors ${
                          devHoursPerMonth === hours
                            ? "bg-paper text-ink font-semibold shadow-xs"
                            : "text-ink-3 hover:text-ink"
                        }`}
                      >
                        {hours === 0 ? "0h" : `${hours}h/mo`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Visual Comparison Bars */}
            <div className="mt-8 pt-6 border-t border-line space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-ink-3">
                    Shopify Plus / SaaS (Base + 1.5% GMV fee + plugins{devHoursPerMonth > 0 ? " + agency" : ""}):
                  </span>
                  <span className="text-ink font-semibold">
                    {formatCurrency(Math.round(totalShopify3Y), currency)}
                  </span>
                </div>
                <div className="h-3.5 rounded-full bg-line/80 overflow-hidden">
                  <div
                    className="h-full bg-ink/70 rounded-full transition-all duration-150 ease-out"
                    style={{ width: `${shopifyBarPct}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-accent font-medium">
                    Mechatron (Setup + Cloud hosting{includeSourceCode ? " + Source Code" : ""}{devHoursPerMonth > 0 ? " + Dev Time" : ""}):
                  </span>
                  <span className="text-accent font-bold">
                    {formatCurrency(Math.round(totalMechatron3Y), currency)}
                  </span>
                </div>
                <div className="h-3.5 rounded-full bg-line/80 overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-150 ease-out"
                    style={{ width: `${mechatronBarPct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Savings Total */}
            <div className="mt-6 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-0.5">
                <span className="text-xs text-ink-2 font-medium block">
                  {t.pricing.calculator.savingsTitle}:
                </span>
                <span className="text-[11px] font-mono text-ink-3">
                  Estimated 36-month merchant retention with 0% sales cut and private cloud ownership.
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-accent">
                +{formatCurrency(Math.round(estimatedSavings), currency)}
              </span>
            </div>
          </div>
        </>
      )}
    </Section>
  );
}

