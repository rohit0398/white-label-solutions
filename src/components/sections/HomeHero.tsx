"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import { priceText } from "@/lib/pricing-catalog";


import React from "react";
import Link from "@/components/ui/LocalizedLink";
import { useSite } from "@/components/site/SiteProvider";
import { trackWhatsAppClick } from "@/lib/analytics";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { ShoppingBag, Smartphone, Tv, MessageSquare, ArrowRight } from "lucide-react";

export function HomeHero({ copy }: { copy?: { title: string; intro: string } } = {}) {
  const translateCopy = useMessages();

  const { openDemo } = useSite();

  const platformCards = [
    {
      title: englishMessage("HomeHero.e.commerce.d395b71"),
      badge: englishMessage("HomeHero.next.js.flutter.crm.4472767"),
      desc: englishMessage("HomeHero.sub.second.web.store.native.shopping.apps.an.a1cfee5"),
      href: "/solutions/ecommerce",
      price: priceText(englishMessage("CompleteOttCallout..price.launch.6843b00")),
      icon: ShoppingBag,
    },
    {
      title: englishMessage("HomeHero.9.16.short.drama.ee60b4a"),
      badge: englishMessage("HomeHero.reelshort.dramabox.style.2d592f0"),
      desc: englishMessage("HomeHero.60fps.vertical.swipe.apps.mobile.first.web.p.2c1d4cc"),
      href: "/solutions/short-drama",
      price: priceText(englishMessage("HomeHero..price.short.drama.base.dccb5b9")),
      icon: Smartphone,
    },
    {
      title: englishMessage("HomeHero.16.9.cinematic.ott.ed0dd39"),
      badge: englishMessage("HomeHero.netflix.prime.style.a5a9c4d"),
      desc: englishMessage("HomeHero.widescreen.4k.hdr.web.portal.tv.ready.mobile.977006c"),
      href: "/solutions/ott-streaming",
      price: priceText(englishMessage("HomeHero..price.cinematic.base.f47cdac")),
      icon: Tv,
    },
  ];

  return (
    <section id="hero" className="pt-16 sm:pt-14 pb-16 sm:pb-20">
      <div className="wrap space-y-6">
        {/* Subtle Status Beacon */}
        <div>
          <HeadingBadge category="default">{""}{translateCopy(englishMessage("HomeHero.private.cloud.deployment.2.4.weeks.0.revenue.52d57e9"))}{""}</HeadingBadge>
        </div>

        {/* Concise Direct Headline */}
        <AnimatedHeadline
          as="h1"
          variant="default"
          className="text-[2.4rem] sm:text-[3.7rem] font-semibold tracking-[-0.035em] leading-[1.05] max-w-4xl text-ink"
        >
          {copy?.title ?? englishMessage("HomeHero.production.ready.platforms.deployed.directly.1aaa551")}
        </AnimatedHeadline>

        {/* Minimalist Subtitle */}
        <p className="text-lg sm:text-xl text-ink-2 leading-relaxed max-w-3xl">
          {translateCopy(copy?.intro ?? englishMessage("HomeHero.high.performance.next.js.web.applications.na.fa119f6"))}
        </p>

        {/* Dual Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Button
            size="md"
            onClick={() => openDemo()}
            className="animate-pulse-ink hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.96] transition-all duration-200"
          >
            <span>{translateCopy(englishMessage("HomeHero.book.a.platform.walkthrough.b209190"))}</span>
            <span className="text-paper/70 font-mono text-xs">→</span>
          </Button>

          <a
            href={BRAND.contact.whatsappUrl}
            onClick={() => trackWhatsAppClick("HomeHero")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-4 h-11 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 hover:border-accent text-accent font-medium text-[15px] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md active:translate-y-0 active:scale-[0.96] transition-all duration-200 animate-pulse-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
            <span>{translateCopy(englishMessage("Hero.chat.on.whatsapp.8eb8a88"))}</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
          </a>
        </div>

        <p className="pt-2 text-xs font-mono text-ink-3">{translateCopy(englishMessage("HomeHero.deployed.to.your.aws.gcp.cloudflare.account.6e5a617"))}</p>

        {/* 3 Quick-Launch Platform Cards */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {platformCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="p-5 rounded-2xl border border-line bg-wash/40 hover:bg-paper hover:border-ink/40 transition-all duration-200 group flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-ink group-hover:text-accent transition-colors">
                    {translateCopy(card.price)}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-base text-ink group-hover:text-accent transition-colors">
                      {translateCopy(card.title)}
                    </h2>
                  </div>
                  <p className="text-[11px] font-mono text-ink-3 mt-0.5">{translateCopy(card.badge)}</p>
                  <p className="text-xs text-ink-2 leading-relaxed mt-2">{translateCopy(card.desc)}</p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-semibold text-accent group-hover:underline">
                  <span>{translateCopy(englishMessage("HomeHero.explore.architecture.5cb3740"))}</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
