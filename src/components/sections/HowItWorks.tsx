"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

export function HowItWorks() {
  const { language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  return (
    <Section id="how-it-works" index={t.howItWorks.index} title={t.howItWorks.title}>
      <div className="mb-10 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-wash/60 text-xs font-mono text-ink-2 shadow-2xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span>{t.howItWorks.badge}</span>
      </div>

      <ol className="relative border-l border-line ml-1 space-y-12">
        {t.howItWorks.steps.map((s, idx) => (
          <li key={idx} className="pl-8 relative">
            <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-paper border border-ink" />
            <p className="font-mono text-xs text-ink-3">{s.when}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-ink-2 leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
