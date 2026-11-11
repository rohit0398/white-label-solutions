"use client";

import { useState } from "react";
import { DemoButton } from "@/components/site/DemoButton";
import { useSite } from "@/components/site/SiteProvider";
import { useMessages } from "@/components/site/useMessages";
import { homePlatforms } from "@/components/sections/home-platforms";
import Link from "@/components/ui/LocalizedLink";
import { Screenshot } from "@/components/ui/Screenshot";
import { Section } from "@/components/ui/Section";
import { trackEvent } from "@/lib/analytics";
import { englishMessage } from "@/lib/messages";
import { displayPackagePrice } from "@/lib/pricing-catalog";

export function HomePlatformsDeck() {
  const translate = useMessages();
  const { currency, language } = useSite();
  const [active, setActive] = useState(0);
  const { family, title, preview, demoTier, app, web } = homePlatforms[active];
  const options = [
    { ...app, label: englishMessage("HomeProof.appsOnly") },
    { ...web, label: englishMessage("HomeProof.websiteOnly") },
  ];

  return (
    <Section id="platforms" title={englishMessage("HomeProof.title")} wide>
      <div className="flex flex-wrap gap-2 border-b border-line pb-4" role="group" aria-label={translate(englishMessage("HomeProof.title"))}>
        {homePlatforms.map(({ family, title, icon: Icon }, index) => (
          <button
            key={family}
            type="button"
            aria-pressed={active === index}
            aria-controls="home-platform-preview"
            onClick={() => {
              setActive(index);
              trackEvent("select_platform", { platform: family, placement: "HomePlatformsDeck" });
            }}
            className={active === index
              ? "inline-flex min-h-10 items-center gap-2 rounded-md border border-ink bg-ink px-3 py-2 text-sm font-medium text-paper"
              : "inline-flex min-h-10 items-center gap-2 rounded-md border border-line bg-wash px-3 py-2 text-sm text-ink-2 hover:text-ink"}
          >
            <Icon aria-hidden="true" className="size-4 shrink-0" />
            {translate(title)}
          </button>
        ))}
      </div>

      <div id="home-platform-preview" className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{translate(title)}</h3>
          <p className="text-sm leading-relaxed text-ink-2 sm:text-base">{translate(preview.note)}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <DemoButton tierId={demoTier}>{englishMessage("ShortDrama.top.walkthrough")}</DemoButton>
            {preview.href.startsWith("/") ? (
              <Link href={preview.href} className="text-sm underline underline-offset-4">{preview.action}</Link>
            ) : (
              <a
                href={preview.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("view_product_example", { platform: family, placement: "HomePlatformsDeck" })}
                className="text-sm underline underline-offset-4"
              >
                {translate(preview.action)}
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm text-ink-2">
            {options.map(({ href, label, price }) => (
              <Link key={href} href={href} className="underline underline-offset-4">
                {label} · {displayPackagePrice(price, language, currency)}
              </Link>
            ))}
          </div>
        </div>
        <Screenshot
          src={preview.src}
          alt={preview.alt}
          sizes="(min-width: 1088px) 550px, (min-width: 1024px) 53vw, calc(100vw - 48px)"
        />
      </div>
    </Section>
  );
}
