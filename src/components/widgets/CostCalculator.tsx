"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calculator,
  TrendingDown,
  ArrowRight,
  Sparkles,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

interface CostCalculatorProps {
  onOpenBookModal: () => void;
}

export function CostCalculator({ onOpenBookModal }: CostCalculatorProps) {
  const [monthlyGmv, setMonthlyGmv] = useState<number>(50000); // $50,000/mo default

  // Calculations over 36 months (3 Years):
  // Shopify: $2,000/mo (Shopify Plus) or $399/mo (Advanced) + 1.5% transaction cut + $500/mo app fees (mobile apps, etc.)
  const shopifyPlatformMonthly = monthlyGmv > 80000 ? 2000 : 399;
  const shopifyTransactionMonthly = monthlyGmv * 0.015;
  const shopifyAppsMonthly = 500;
  const totalShopifyMonthly =
    shopifyPlatformMonthly + shopifyTransactionMonthly + shopifyAppsMonthly;
  const totalShopify3Years = totalShopifyMonthly * 36;

  // Mechatron White-Label: $4,999 setup + $40/mo client cloud hosting
  const mechatronHostingMonthly = 40;
  const totalMechatron3Years = 4999 + mechatronHostingMonthly * 36;

  // Estimated Savings:
  const estimatedSavings = Math.max(0, totalShopify3Years - totalMechatron3Years);

  return (
    <div id="calculator" className="w-full py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 glow-cyan relative overflow-hidden bg-[#090e1a]">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="emerald" size="md" className="mb-2">
              <Calculator className="h-3 w-3 mr-1 text-emerald-400" />
              Interactive Savings Estimator
            </Badge>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Calculate Your 3-Year Platform Savings
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              See how much your business loses to monthly SaaS subscriptions, transaction percentages,
              and 3rd-party mobile app builders over 36 months.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider for Monthly GMV */}
              <div className="space-y-3 bg-[#0c1222] p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">
                    Your Estimated Monthly Sales (GMV)
                  </span>
                  <span className="text-lg font-black text-cyan-400 font-mono">
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
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$10,000/mo</span>
                  <span>$150,000/mo</span>
                  <span>$300,000+/mo</span>
                </div>
              </div>

              {/* Monthly Breakdown Explanations with Interactive Hover Highlight */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0b101c] border border-slate-800/80 hover:border-slate-700 hover:bg-[#0e1526] transition-colors">
                  <span className="text-slate-400">
                    SaaS Platform Base Fees (3 Years)
                  </span>
                  <span className="font-mono text-rose-400 font-semibold">
                    ${(shopifyPlatformMonthly * 36).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0b101c] border border-slate-800/80 hover:border-slate-700 hover:bg-[#0e1526] transition-colors">
                  <span className="text-slate-400">
                    1.5% Payment & GMV Cuts (3 Years)
                  </span>
                  <span className="font-mono text-rose-400 font-semibold">
                    ${(shopifyTransactionMonthly * 36).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0b101c] border border-slate-800/80 hover:border-slate-700 hover:bg-[#0e1526] transition-colors">
                  <span className="text-slate-400">
                    3rd-Party Mobile App Builder Fees (3 Years)
                  </span>
                  <span className="font-mono text-rose-400 font-semibold">
                    $18,000 ($500/mo)
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Net 3-Year Savings Result Card (5 cols) with Ambient Pulse Glow */}
            <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-emerald-500/40 bg-[#08151f] text-center space-y-4 shadow-xl animate-pulse-glow transition-transform hover:scale-102">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Estimated 3-Year Savings
              </span>

              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-md">
                ${Math.round(estimatedSavings).toLocaleString()}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Money you keep directly in your business instead of handing to SaaS platforms and app stores.
              </p>

              <div className="pt-2 border-t border-slate-800 text-left space-y-1.5 text-[11px] text-slate-400">
                <div className="flex justify-between">
                  <span>Shopify / SaaS 3-Yr Cost:</span>
                  <span className="text-rose-400 font-mono font-medium">
                    ${Math.round(totalShopify3Years).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mechatron White-Label 3-Yr:</span>
                  <span className="text-emerald-400 font-mono font-medium">
                    ${Math.round(totalMechatron3Years).toLocaleString()}
                  </span>
                </div>
              </div>

              <Button
                variant="glow"
                className="w-full mt-2"
                onClick={onOpenBookModal}
              >
                <span>Claim Your Savings & Launch</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
