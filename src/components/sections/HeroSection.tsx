"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Server,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Cloud,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBookModal: () => void;
}

export function HeroSection({ onOpenBookModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-radial-glow bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/10">
            <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span>Pre-Built White-Label E-Commerce Platform • Deployed on Your Cloud</span>
          </div>

          {/* Main H1 Headline - SEO & Human-Friendly */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Own Your Complete Online Store,{" "}
            <span className="gradient-text-blue block sm:inline">
              Mobile Apps & Admin CRM.
            </span>
          </h1>

          {/* Clear Subtitle Highlighting Client-Owned Infrastructure */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            A pre-built, easily customized e-commerce solution deployed directly onto{" "}
            <strong className="text-white underline decoration-cyan-400/60 decoration-2 underline-offset-4">
              your private cloud
            </strong>{" "}
            (AWS, Google Cloud, or Azure). You own 100% of your customer records, data, and source code.
            Keep every dollar of your sales with zero platform cuts.
          </p>

          {/* High-Impact Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-300 pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Cloud className="h-3.5 w-3.5 text-cyan-400" />
              Deployed on Your Cloud (AWS / GCP / Azure)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
              Branded Android & iPhone (iOS) Apps
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Server className="h-3.5 w-3.5 text-indigo-400" />
              All-in-One Admin Panel & Customer CRM
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Code2 className="h-3.5 w-3.5 text-amber-400" />
              100% Full Source Code Ownership
            </span>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <Button
              variant="glow"
              size="lg"
              onClick={onOpenBookModal}
              className="w-full sm:w-auto shadow-2xl"
            >
              <span>Schedule Technical Walkthrough</span>
              <ArrowRight className="h-4 w-4 text-cyan-200" />
            </Button>

            <a
              href="#showcase"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/70 text-slate-200 hover:text-white hover:border-slate-500 transition-colors text-sm font-semibold"
            >
              <span>Explore 3 Live Production Stores</span>
              <ExternalLink className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Real Metrics Proof Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              3 Live Stores
            </div>
            <p className="text-xs text-slate-400">
              Tested in Live Production Across Hardware, Fashion & Wholesale
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tracking-tight">
              $4,999
            </div>
            <p className="text-xs text-slate-400">
              Fixed Turnkey Setup & Launch (No Hidden Fees)
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
              0% Royalty
            </div>
            <p className="text-xs text-slate-400">
              Keep 100% of Your Revenue • Zero Per-Order Commissions
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono tracking-tight">
              100% Your Cloud
            </div>
            <p className="text-xs text-slate-400">
              Private Data, Servers & Databases Completely in Your Control
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
