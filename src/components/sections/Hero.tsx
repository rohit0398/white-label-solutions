"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

import React from "react";
import Link from "@/components/ui/LocalizedLink";
import Image from "@/components/ui/LocalizedImage";
import { TRANSLATIONS } from "@/lib/translations";
import { useSite } from "@/components/site/SiteProvider";
import { useContactWhatsApp } from "@/components/site/useContactWhatsApp";
import { displayPackagePrice, FAMILY_PACKAGE } from "@/lib/pricing-catalog";
import { imageDimensions } from "@/lib/image-dimensions";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge, BadgeCategory } from "@/components/ui/HeadingBadge";
import { MessageSquare } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroProps {
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  headline?: string;
  subtitle?: string;
  anchors?: { label: string; href: string }[];
  mode?: "all" | "web" | "app";
  showScreenshot?: boolean;
  category?: BadgeCategory;
}

export function Hero({
  breadcrumbs,
  badge,
  headline,
  subtitle,
  anchors = [],
  mode = "all",
  showScreenshot = true,
  category,
}: HeroProps = {}) {
  const translateCopy = useMessages();

  const { language, currency, openDemo } = useSite();
  const t = TRANSLATIONS[language];
  const whatsappUrl = useContactWhatsApp();
  const packageId = mode === "app" ? "app-launch" : mode === "web" ? "web-launch" : FAMILY_PACKAGE.ecommerce;

  const badgeText = badge ?? t.hero.badge;
  const headlineText = headline ?? t.hero.headline;
  const subtitleText = subtitle ?? t.hero.subtitle;
  const storefront = mode === "web" ? "/showcase/commerce-marketplace.webp" : "/showcase/commerce-storefront.webp";

  return (
    <section id="hero" className="wrap-wide pb-10 pt-9 sm:pb-14 sm:pt-12">
      <div className="grid items-center gap-8 lg:min-h-[380px] lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)]">
        <div>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label={translateCopy(englishMessage("EcommerceHero.breadcrumb"))} className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-3">
              {breadcrumbs.map((b, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span aria-hidden="true">/</span>}
                  {b.href ? (
                    <Link href={b.href} className="hover:text-ink transition-colors">
                      {translateCopy(b.label)}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">{translateCopy(b.label)}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <div className="mb-6">
            <HeadingBadge category={category}>
              {badgeText}
            </HeadingBadge>
          </div>

          <AnimatedHeadline
            as="h1"
            variant={category}
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl"
          >
            {headlineText}
          </AnimatedHeadline>
          <p className="mt-4 text-base leading-relaxed text-ink-2 sm:text-lg">{translateCopy(subtitleText)}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              id="hero-book-demo"
              onClick={() => openDemo(packageId)}
              className="animate-pulse-ink hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.96] transition-all duration-200"
            >
              <span>{translateCopy(englishMessage("ShortDrama.top.walkthrough"))}</span>
              <span className="text-paper/70 font-mono text-xs">→</span>
            </Button>

            <a
              id="hero-chat-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("Hero")}
              className="group inline-flex items-center gap-2.5 px-4 h-11 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 hover:border-accent text-accent font-medium text-[15px] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md active:translate-y-0 active:scale-[0.96] transition-all duration-200 animate-pulse-glow"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
              <span>{translateCopy(englishMessage("Hero.chat.on.whatsapp.8eb8a88"))}</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
            </a>
          </div>

          {anchors.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {anchors.map(({ label, href }, index) => (
                <a
                  key={href}
                  id={href === "#work" ? "hero-see-work" : undefined}
                  href={href}
                  className={(index % 2 ? "animate-float-reverse" : "animate-float-slow") + " inline-flex min-h-9 items-center rounded-md border border-line bg-paper px-3 py-1.5 text-sm text-ink-2 transition-colors hover:border-accent/60 hover:text-ink hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused]"}
                >
                  {translateCopy(label)}
                </a>
              ))}
            </div>
          )}
          <p className="mt-5 text-sm text-ink-3">
            {translateCopy.format("EcommerceHero.setupPrice", { value0: displayPackagePrice(packageId, language, currency) })}
          </p>
        </div>
        {showScreenshot && mode === "app" && (
          <div className="mx-auto grid w-full max-w-md grid-cols-2 items-center gap-3 sm:gap-4">
            <Image
              src="/showcase/commerce-app-catalog.webp"
              {...imageDimensions("/showcase/commerce-app-catalog.webp")}
              alt={englishMessage("MobileAppScreenshots.storefront.catalog.79138b3")}
              sizes="(min-width: 496px) 216px, calc((100vw - 64px) / 2)"
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full rounded-xl border border-line shadow-sm"
            />
            <Image
              src="/showcase/commerce-app-checkout.webp"
              {...imageDimensions("/showcase/commerce-app-checkout.webp")}
              alt={englishMessage("EcommerceArchitecture.checkoutImage")}
              sizes="(min-width: 496px) 216px, calc((100vw - 64px) / 2)"
              loading="eager"
              className="h-auto w-full rounded-xl border border-line shadow-sm"
            />
          </div>
        )}
        {showScreenshot && mode !== "app" && (
          <Image
            src={storefront}
            {...imageDimensions(storefront)}
            alt={mode === "web"
              ? englishMessage("EcommerceArchitecture.marketplaceImage")
              : englishMessage("Hero.mechatron.lab.online.store.built.on.the.plat.0e5abc6")}
            sizes="(min-width: 1088px) 545px, (min-width: 1024px) 52vw, calc(100vw - 48px)"
            preload
            className="h-auto w-full rounded-xl border border-line shadow-sm"
          />
        )}
      </div>
    </section>
  );
}

