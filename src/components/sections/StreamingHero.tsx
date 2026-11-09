"use client";

import type { ReactNode } from "react";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { DemoButton } from "@/components/site/DemoButton";
import { useContactWhatsApp } from "@/components/site/useContactWhatsApp";
import { useMessages } from "@/components/site/useMessages";
import { buttonClass } from "@/components/ui/Button";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import Link from "@/components/ui/LocalizedLink";
import { trackWhatsAppClick } from "@/lib/analytics";
import { englishMessage } from "@/lib/messages";

interface StreamingHeroProps {
  heading: string;
  badge: string;
  intro: string;
  tierId: string;
  theme: "drama" | "ott";
  quickLinks: readonly { href: string; label: string }[];
  children?: ReactNode;
}

export function StreamingHero({ heading, badge, intro, tierId, theme, quickLinks, children }: StreamingHeroProps) {
  const t = useMessages();
  const title = t(heading);
  const whatsappUrl = useContactWhatsApp();
  return (
    <section id="hero" data-streaming-theme={theme} className="wrap-wide pt-9 pb-10 sm:pt-12 sm:pb-14">
      <nav className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink-3">
        <Link href="/" className="hover:text-ink">{t(englishMessage("ecommerce.home.70f8bb9"))}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/solutions" className="hover:text-ink">{t(englishMessage("ecommerce.solutions.05b004a"))}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-ink">{title}</span>
      </nav>

      <div className="mt-6 grid items-center gap-8 lg:min-h-[380px] lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)]">
        <div className="max-w-2xl">
          <HeadingBadge category={theme} className="mb-4">{badge}</HeadingBadge>
          <h1 className="w-fit text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink motion-safe:animate-[short-drama-title-in_380ms_ease-out] sm:text-5xl lg:text-[3.25rem]">
            <span className="short-drama-title-accent">{title}</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">{t(intro)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <DemoButton tierId={tierId}>
              {t(englishMessage("ShortDrama.top.walkthrough"))}
            </DemoButton>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass(
                "secondary",
                "md",
                "animate-pulse-glow group h-auto min-h-11 border-accent/40 bg-accent/5 py-2 text-center text-accent hover:border-accent/75 hover:bg-accent/10"
              )}
              onClick={() => trackWhatsAppClick(theme === "ott" ? "OttHero" : "ShortDramaHero")}
            >
              <span className="relative flex size-2 shrink-0" aria-hidden="true">
                <span className="animate-radar-ping absolute inset-0 rounded-full bg-accent" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              <MessageSquare className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:rotate-12" aria-hidden="true" />
              <span>{t(englishMessage("Hero.chat.on.whatsapp.8eb8a88"))}</span>
              <ArrowUpRight className="size-3 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
            {quickLinks.map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                className={`${index === 1 ? "animate-float-reverse" : "animate-float-slow"} inline-flex min-h-9 items-center rounded-md border border-line bg-paper px-3 py-1.5 text-sm font-medium text-ink-2 transition-colors hover:border-accent/60 hover:text-ink hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused]`}
              >
                {t(label)}
              </a>
            ))}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
