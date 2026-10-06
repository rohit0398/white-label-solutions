"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import {
  Layers,
  Smartphone,
  Sliders,
  Cloud,
  Lock,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export function ArchitectureSection() {
  const stackItems = [
    {
      title: "High-Speed Online Store",
      role: "Your Customer-Facing Website",
      icon: Layers,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      points: [
        "Sub-second page load speeds that convert visitors into buyers",
        "Built-in Google SEO optimization for organic search traffic",
        "Optimized checkout supporting cards, UPI, COD, and PayPal",
        "Modern responsive design tailored to your brand's colors",
      ],
    },
    {
      title: "Android & iPhone Apps",
      role: "Branded Mobile Shopping Apps",
      icon: Smartphone,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      points: [
        "Published directly on Google Play Store & Apple App Store",
        "Send free push notifications for flash sales and order alerts",
        "Fast biometric face/fingerprint login for recurring shoppers",
        "Single modern Flutter codebase: updates sync across both platforms",
      ],
    },
    {
      title: "All-in-One Admin & CRM",
      role: "Your Store Operations Dashboard",
      icon: Sliders,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      points: [
        "Manage products, variants, and stock across multiple warehouses",
        "Track orders from placement to packing, dispatch, and delivery",
        "Automated tax invoices (GST with 18% breakdown, VAT, sales tax)",
        "Live profit calculation: see real margin per order after costs",
      ],
    },
    {
      title: "Your Private Cloud",
      role: "100% Client-Owned Infrastructure",
      icon: Cloud,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      points: [
        "Deployed into your private AWS, Google Cloud, or Azure account",
        "You own 100% of your customer emails, phone numbers, and data",
        "Full data privacy compliance (GDPR Europe, DPDP India, CCPA USA)",
        "Zero platform revenue cuts—never pay 1% to 2% GMV commissions",
      ],
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-[#06080d] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" size="md" className="mb-3">
            <Cpu className="h-3 w-3 mr-1 text-blue-400" />
            Complete Commerce Architecture
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Massive Scale. Deployed on Your Cloud.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            No proprietary walled gardens or shared databases. Every component of our white-label
            e-commerce platform is pre-built, customized to your brand, and deployed into your private infrastructure.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div className="space-y-4">
                  <div
                    className={`h-12 w-12 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center`}
                  >
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {item.role}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Client Cloud</span>
                  <span className="text-emerald-400 font-semibold">100% Owned</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ownership Guarantee Banner */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Lock className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Full Source Code & Commercial License Rights
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                You receive full access to clean, documented source code. Host it on your servers,
                modify anything as your business expands, and never pay a recurring license fee.
              </p>
            </div>
          </div>

          <Badge variant="cyan" size="md" className="shrink-0">
            Perpetual Freedom
          </Badge>
        </div>
      </div>
    </section>
  );
}
