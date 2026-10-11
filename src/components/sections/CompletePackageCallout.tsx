import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export interface PillarItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface CompletePackageCalloutProps {
  badge?: string;
  title: string;
  subtitle: string;
  price?: string;
  priceLabel?: string;
  pillars: PillarItem[];
  guarantees?: string[];
  ctaText: string;
  ctaHref: string;
}

export function CompletePackageCallout({
  badge = "All-in-One Package",
  title,
  subtitle,
  price = "$4,999",
  priceLabel = "one-time investment",
  pillars,
  guarantees = [
    "Deployed to your private cloud",
    "100% Data & User Ownership",
    "0% Platform Commission",
  ],
  ctaText,
  ctaHref,
}: CompletePackageCalloutProps) {
  return (
    <section className="py-14 border-y border-line bg-wash">
      <div className="wrap">
        <div className="p-8 sm:p-10 rounded-2xl border border-line bg-paper shadow-xs transition-all duration-300 hover:border-ink/40">
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider">{badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                {title}
              </h3>
              <p className="text-sm text-ink-2 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
              <span className="font-bold text-accent font-mono">{price}</span>
              <span className="text-ink-3">{priceLabel}</span>
            </div>
          </div>

          {/* Horizontal 3-Pillar Grid */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-line/60 bg-wash/30 hover:border-line hover:bg-wash/60 transition-colors"
                >
                  <div className="flex items-center gap-2 text-ink text-sm font-semibold mb-1.5">
                    <Icon className="h-4 w-4 text-accent shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Area */}
          <div className="pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-xs text-ink-3 font-mono">
              {guarantees.map((g, idx) => (
                <span key={idx} className="inline-flex items-center gap-1">
                  ✓ {g}
                </span>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="w-full md:w-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2.5 px-7 h-12 rounded-xl bg-ink text-paper hover:bg-ink/90 font-medium text-sm transition-all shadow-sm cursor-pointer active:scale-[0.99]"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
