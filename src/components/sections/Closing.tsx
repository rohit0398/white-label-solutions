"use client";

import React from "react";
import { BRAND } from "@/lib/constants";
import { DemoButton } from "@/components/site/DemoButton";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

export interface ClosingProps {
  headline?: string;
  description?: string;
  ctaDemo?: string;
  tierId?: string;
}

export function Closing({ headline, description, ctaDemo, tierId }: ClosingProps = {}) {
  const { language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const activeHeadline = headline || t.closing.headline;
  const activeDesc = description || t.closing.description;
  const activeCta = ctaDemo || t.closing.ctaDemo;

  return (
    <section className="border-t border-line py-20 sm:py-28 bg-wash">
      <div className="wrap text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          {activeHeadline}
        </h2>
        <p className="text-base text-ink-2 max-w-lg mx-auto leading-relaxed">
          {activeDesc}
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <DemoButton size="md" tierId={tierId}>{activeCta}</DemoButton>
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-2 hover:text-ink underline underline-offset-4 decoration-line hover:decoration-ink"
          >
            {t.closing.whatsappText} ({BRAND.contact.whatsappDisplay})
          </a>
        </div>
      </div>
    </section>
  );
}
