"use client";

import React from "react";
import { Language } from "@/types";
import { TRANSLATIONS } from "@/lib/translations";
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
  currentLanguage?: Language;
  onOpenBookModal: () => void;
}

export function HeroSection({
  currentLanguage = "en",
  onOpenBookModal,
}: HeroSectionProps) {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-radial-glow bg-grid-tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/10">
            <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span>{t.hero.pill}</span>
          </div>

          {/* Main H1 Headline - SEO & Human-Friendly */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            {t.hero.headlinePart1}
            <span className="gradient-text-blue block sm:inline">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          {/* Clear Subtitle Highlighting Client-Owned Infrastructure */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>

          {/* High-Impact Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-300 pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Cloud className="h-3.5 w-3.5 text-cyan-400" />
              {t.hero.badgeCloud}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
              {t.hero.badgeApps}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Server className="h-3.5 w-3.5 text-indigo-400" />
              {t.hero.badgeCrm}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Code2 className="h-3.5 w-3.5 text-amber-400" />
              {t.hero.badgeCode}
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
              <span>{t.hero.ctaDemo}</span>
              <ArrowRight className="h-4 w-4 text-cyan-200" />
            </Button>

            <a
              href="#showcase"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/70 text-slate-200 hover:text-white hover:border-slate-500 transition-colors text-sm font-semibold"
            >
              <span>{t.hero.ctaExplore}</span>
              <ExternalLink className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Real Metrics Proof Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              {t.hero.statStores}
            </div>
            <p className="text-xs text-slate-400">
              {t.hero.statStoresSub}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tracking-tight">
              {t.hero.statPricing}
            </div>
            <p className="text-xs text-slate-400">
              {t.hero.statPricingSub}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
              {t.hero.statCommission}
            </div>
            <p className="text-xs text-slate-400">
              {t.hero.statCommissionSub}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono tracking-tight">
              {t.hero.statCloud}
            </div>
            <p className="text-xs text-slate-400">
              {t.hero.statCloudSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
