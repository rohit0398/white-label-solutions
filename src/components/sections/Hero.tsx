"use client";

import React from "react";
import { TRANSLATIONS } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { Button, buttonClass } from "@/components/ui/Button";
import { Screenshot } from "@/components/ui/Screenshot";

export function Hero() {
  const { language, openDemo } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  return (
    <section className="pt-20 sm:pt-32 pb-20">
      <div className="wrap">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-[-0.035em] leading-[1.05]">
          {t.hero.headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-2 leading-relaxed">{t.hero.subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button id="hero-book-demo" onClick={() => openDemo()}>
            {t.hero.ctaDemo}
          </Button>
          <a id="hero-see-work" href="#work" className={buttonClass("link")}>
            {t.hero.ctaWork} →
          </a>
        </div>

        <p className="mt-10 text-sm text-ink-3">{t.hero.facts}</p>
      </div>

      <div className="wrap-wide mt-16 sm:mt-20">
        <Screenshot
          src="/showcase/mechatron-store.png"
          alt="Mechatron Lab online store built on the platform"
          caption="mechatronlab.com, running on the client's own Google Cloud account."
          priority
        />
      </div>
    </section>
  );
}
