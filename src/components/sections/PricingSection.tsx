"use client";

import React from "react";
import { PRICING_TIERS } from "@/lib/constants";
import { Currency } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Cloud,
} from "lucide-react";

interface PricingSectionProps {
  currentCurrency: Currency;
  onOpenBookModal: (tierId?: string) => void;
}

export function PricingSection({
  currentCurrency,
  onOpenBookModal,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-[#07090e] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" size="md" className="mb-3">
            <Sparkles className="h-3 w-3 mr-1 text-cyan-400" />
            Transparent Pricing • Deployed on Your Cloud
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable One-Time Setup. No Monthly Platform Cuts.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Stop giving away 2% of your sales revenue and hundreds every month in app fees.
            Launch an e-commerce platform hosted on your own cloud with fixed, transparent pricing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const priceInfo = tier.prices[currentCurrency];
            return (
              <div
                key={tier.id}
                className={`glass-panel rounded-3xl p-7 border flex flex-col justify-between transition-all duration-300 relative ${
                  tier.isPopular
                    ? "border-cyan-500/60 shadow-2xl shadow-cyan-500/10 lg:-translate-y-2 bg-[#0d1322]"
                    : "border-slate-800 hover:border-slate-700 bg-[#0a0e18]"
                }`}
              >
                {/* Popular Pill */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge
                      variant={tier.isPopular ? "live" : "cyan"}
                      size="md"
                      className="shadow-lg"
                    >
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Tagline */}
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pb-4 border-b border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                        {formatCurrency(priceInfo.amount, currentCurrency)}
                      </span>
                      {priceInfo.period && (
                        <span className="text-xs text-slate-400 font-mono">
                          /{priceInfo.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Specs Quick Strip */}
                  <div className="grid grid-cols-3 gap-2 text-center py-2 bg-[#06080d] rounded-xl border border-slate-800/80">
                    {tier.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="p-1.5">
                        <span className="text-[10px] text-slate-400 block font-mono">
                          {spec.label}
                        </span>
                        <span className="text-xs font-bold text-slate-200">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-2">
                    <h5 className="text-xs font-mono uppercase font-semibold text-slate-300 tracking-wider">
                      What&apos;s Included
                    </h5>
                    {tier.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8 mt-6 border-t border-slate-800">
                  <Button
                    variant={tier.isPopular ? "glow" : "outline"}
                    className="w-full"
                    onClick={() => onOpenBookModal(tier.id)}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Year Total Cost Comparison Matrix */}
        <div className="mt-20 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="emerald" size="md" className="mb-2">
              <TrendingDown className="h-3 w-3 mr-1 text-emerald-400" />
              Real Cost Comparison
            </Badge>
            <h3 className="text-2xl font-bold text-white">
              3-Year Total Cost: Self-Hosted vs. Hosted SaaS
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Compare what a business actually spends over 36 months of selling online.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
                  <th className="py-4 px-4 font-semibold">Cost Breakdown</th>
                  <th className="py-4 px-4 font-bold text-cyan-400">
                    White-Label (On Your Cloud)
                  </th>
                  <th className="py-4 px-4 font-medium text-slate-400">
                    Shopify Plus / SaaS
                  </th>
                  <th className="py-4 px-4 font-medium text-slate-400">
                    Traditional Agency Build
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Initial Setup & Launch
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-emerald-400">
                    $4,999 (One-time)
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-400">
                    $10,000 – $25,000+
                  </td>
                  <td className="py-4 px-4 font-mono text-rose-400">
                    $80,000 – $250,000+
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    3-Year Platform Fees
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-emerald-400">
                    $0 (Hosted on your own cloud)
                  </td>
                  <td className="py-4 px-4 font-mono text-rose-400">
                    $72,000+ ($2,000/mo minimum)
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-400">
                    $0 (Hosting only)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Sales Commission & GMV Cut
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-emerald-400">
                    0% (Keep 100% of sales)
                  </td>
                  <td className="py-4 px-4 font-mono text-rose-400">
                    1% to 2% on payment gateways
                  </td>
                  <td className="py-4 px-4 font-mono text-emerald-400">
                    0%
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Branded Android & iPhone Apps
                  </td>
                  <td className="py-4 px-4 font-bold text-cyan-400">
                    Included in Launch Package
                  </td>
                  <td className="py-4 px-4 text-slate-400">
                    Costly 3rd party apps ($500–$2k/mo)
                  </td>
                  <td className="py-4 px-4 text-slate-400">
                    Extra $40,000+ build cost
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Source Code Ownership & Data Rights
                  </td>
                  <td className="py-4 px-4 font-bold text-emerald-400">
                    100% Full Ownership ($1,999)
                  </td>
                  <td className="py-4 px-4 text-rose-400">
                    0% (Platform Lock-in)
                  </td>
                  <td className="py-4 px-4 text-emerald-400">
                    100%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
