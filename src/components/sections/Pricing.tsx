"use client";

import React, { useState } from "react";
import { PRICING_TIERS } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import { useSite } from "@/components/site/SiteProvider";
import { Section } from "@/components/ui/Section";
import { DemoButton } from "@/components/site/DemoButton";
import { Currency } from "@/types";

const currencies: { code: Currency; symbol: string; label: string }[] = [
  { code: "USD", symbol: "$", label: "USD" },
  { code: "EUR", symbol: "€", label: "EUR" },
  { code: "GBP", symbol: "£", label: "GBP" },
  { code: "INR", symbol: "₹", label: "INR" },
];

export function Pricing() {
  const { currency, setCurrency } = useSite();
  const [monthlyGmv, setMonthlyGmv] = useState<number>(50000);

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
      id="pricing"
      index="04"
      title="Pricing"
      intro="Pay once for the setup. No recurring software subscriptions, no revenue cuts."
      wide
      bare
    >
      {/* Currency Switcher */}
      <div className="wrap-wide mb-10 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-ink-3">Select currency</p>
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
        {PRICING_TIERS.map((tier) => {
          const price = tier.prices[currency];
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
                  <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>
                  {tier.isPopular && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/5 text-[11px] font-mono text-accent font-semibold shimmer-badge">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                      </span>
                      Recommended
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
                  <p className="mt-2 text-xs text-ink-2 leading-relaxed">{tier.tagline}</p>
                </div>

                <ul className="mt-5 space-y-2.5 text-xs text-ink-2">
                  {tier.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
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
                  {tier.ctaText}
                </DemoButton>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3-Year Comparison Table */}
      <div className="wrap-wide mt-20">
        <h3 className="text-xl font-semibold tracking-tight">3-year total cost comparison</h3>
        <p className="mt-1 text-sm text-ink-3">
          What a typical merchant spends over 36 months of selling online.
        </p>

        <div className="mt-6 overflow-x-auto border-t border-line">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-mono text-ink-3">
                <th className="py-3 pr-4 font-normal">Item</th>
                <th className="py-3 px-4 font-semibold text-ink">Mechatron (Your Cloud)</th>
                <th className="py-3 pl-4 font-normal">Shopify Plus / SaaS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-ink-2 text-xs sm:text-sm">
              <tr className="hover:bg-wash/30 transition-colors">
                <td className="py-3.5 pr-4 text-ink font-medium">Initial setup</td>
                <td className="py-3.5 px-4 font-mono text-accent font-medium">
                  {formatCurrency(4999, "USD")} one-time
                </td>
                <td className="py-3.5 pl-4 font-mono">$10,000 – $25,000+</td>
              </tr>
              <tr className="hover:bg-wash/30 transition-colors">
                <td className="py-3.5 pr-4 text-ink font-medium">3-year platform fees</td>
                <td className="py-3.5 px-4 font-mono text-accent font-medium">$0 (private hosting only)</td>
                <td className="py-3.5 pl-4 font-mono">$72,000+ ($2,000/mo min)</td>
              </tr>
              <tr className="hover:bg-wash/30 transition-colors">
                <td className="py-3.5 pr-4 text-ink font-medium">Transaction fee / cut</td>
                <td className="py-3.5 px-4 font-mono text-accent font-medium">0%</td>
                <td className="py-3.5 pl-4 font-mono">0.5% – 2.0% per order</td>
              </tr>
              <tr className="hover:bg-wash/30 transition-colors">
                <td className="py-3.5 pr-4 text-ink font-medium">Android & iOS apps</td>
                <td className="py-3.5 px-4 font-mono text-accent font-medium">Included</td>
                <td className="py-3.5 pl-4 font-mono">$500 – $1,500/mo in plugins</td>
              </tr>
              <tr className="hover:bg-wash/30 transition-colors">
                <td className="py-3.5 pr-4 text-ink font-medium">Source code rights</td>
                <td className="py-3.5 px-4 font-mono text-accent font-medium">100% full ownership option</td>
                <td className="py-3.5 pl-4 font-mono">0% (Vendor lock-in)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Savings Playground with Live Reactive Comparison Bars */}
      <div className="wrap-wide mt-16 p-6 sm:p-8 rounded-lg border border-line bg-wash transition-all duration-200">
        <h4 className="text-base font-semibold tracking-tight text-ink">Interactive 3-year savings calculator</h4>
        <p className="mt-1 text-xs text-ink-2">
          Drag the sales slider to watch how SaaS platform cuts compare against client-owned cloud deployment.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-2 font-medium">Monthly sales volume:</span>
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
              <span className="text-ink-3">Shopify Plus / SaaS 3-Yr Cost:</span>
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
              <span className="text-accent font-medium">Mechatron White-Label 3-Yr Cost:</span>
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
            3-Year retained profit kept in your company:
          </span>
          <span className="text-2xl sm:text-3xl font-bold font-mono text-accent">
            +${Math.round(estimatedSavings).toLocaleString()}
          </span>
        </div>
      </div>
    </Section>
  );
}
