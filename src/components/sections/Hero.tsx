"use client";

import React from "react";
import { TRANSLATIONS } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Screenshot } from "@/components/ui/Screenshot";
import { MessageSquare } from "lucide-react";

export function Hero() {
  const { language, openDemo } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  return (
    <section className="pt-16 sm:pt-28 pb-20">
      <div className="wrap">
        {/* Ambient Active Status Beacon (Runs quietly without hover with continuous shimmer) */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-wash text-xs font-mono text-ink-2 mb-6 select-none shimmer-badge hover:border-ink/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span>Private cloud deployment · AWS · GCP · Azure</span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-[-0.035em] leading-[1.05]">
          {t.hero.headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-2 leading-relaxed">{t.hero.subtitle}</p>

        {/* Living Platform Anchors with Gentle Ambient Floating & Tactile Hover */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-ink-2">
          <a
            href="#what-you-get"
            className="animate-float-slow px-2.5 py-1 rounded border border-line bg-paper hover:border-ink hover:text-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
          >
            01 Storefront
          </a>
          <a
            href="#what-you-get"
            className="animate-float-reverse px-2.5 py-1 rounded border border-line bg-paper hover:border-ink hover:text-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
          >
            02 Mobile Apps
          </a>
          <a
            href="#what-you-get"
            className="animate-float-slow px-2.5 py-1 rounded border border-line bg-paper hover:border-ink hover:text-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
          >
            03 Admin CRM
          </a>
        </div>

        {/* Top Banner Action Buttons with Active Living Animation & Tactile Hover */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* Primary Book Demo Button with Living Breathing Pulse & Spring Hover Elevation */}
          <Button
            id="hero-book-demo"
            onClick={() => openDemo()}
            className="animate-pulse-ink hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.96] transition-all duration-200"
          >
            <span>{t.hero.ctaDemo}</span>
            <span className="text-paper/70 font-mono text-xs">→</span>
          </Button>

          {/* Direct WhatsApp Live Chat Button with Active Radar Ping & Rotating Hover Physics */}
          <a
            id="hero-chat-whatsapp"
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-4 h-11 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 hover:border-accent text-accent font-medium text-[15px] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md active:translate-y-0 active:scale-[0.96] transition-all duration-200 animate-pulse-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
          </a>

          {/* See Live Stores Link */}
          <a
            id="hero-see-work"
            href="#work"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-ink underline underline-offset-4 decoration-line hover:decoration-ink active:opacity-75 transition-colors sm:ml-2"
          >
            <span>{t.hero.ctaWork}</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <p className="mt-10 text-sm text-ink-3">{t.hero.facts}</p>
      </div>

      <div className="wrap-wide mt-16 sm:mt-20 group">
        <Screenshot
          src="/showcase/mechatron-store.png"
          alt="Mechatron Lab online store built on the platform"
          caption="mechatronlab.com, running on the client's own Google Cloud account."
          priority
          className="transition-transform duration-300 group-hover:scale-[1.008]"
        />
      </div>
    </section>
  );
}
