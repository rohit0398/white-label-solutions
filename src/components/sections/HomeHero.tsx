"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";
import { displayPackagePrice, FAMILY_PACKAGE } from "@/lib/pricing-catalog";
import Link from "@/components/ui/LocalizedLink";
import { useSite } from "@/components/site/SiteProvider";
import { useContactWhatsApp } from "@/components/site/useContactWhatsApp";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { MessageSquare, ArrowRight } from "lucide-react";
import { homePlatforms } from "@/components/sections/home-platforms";

export function HomeHero() {
  const translateCopy = useMessages();
  const { currency, language, openDemo } = useSite();
  const whatsappUrl = useContactWhatsApp();

  return (
    <section id="hero" className="pt-16 sm:pt-14 pb-16 sm:pb-20">
      <div className="wrap space-y-6">
        <div>
          <HeadingBadge category="default">{translateCopy(englishMessage("HomeChooser.badge"))}</HeadingBadge>
        </div>

        <AnimatedHeadline
          as="h1"
          variant="default"
          className="text-[2.4rem] sm:text-[3.7rem] font-semibold tracking-[-0.035em] leading-[1.05] max-w-4xl text-ink"
        >
          {englishMessage("HomeChooser.title")}
        </AnimatedHeadline>

        <p className="text-lg sm:text-xl text-ink-2 leading-relaxed max-w-3xl">
          {translateCopy(englishMessage("HomeChooser.intro"))}
        </p>

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
            href={whatsappUrl}
            onClick={() => trackWhatsAppClick("HomeHero")}
            target="_blank"
            rel="noopener noreferrer"
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

        <p className="text-sm leading-relaxed text-ink-3">{translateCopy(englishMessage("HomeChooser.terms"))}</p>
      </div>

      <div className="wrap-wide mt-8 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-4">
        {homePlatforms.map(({ family, title, desc, icon: Icon }) => (
          <Link
            key={family}
            href={`/solutions/${family}`}
            onClick={() => trackEvent("select_platform", { platform: family, placement: "HomeHero" })}
            className="group flex min-w-0 flex-col gap-3 rounded-2xl border border-line bg-wash/40 p-4 transition-colors hover:border-accent/60 hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:p-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <h2 className="font-semibold leading-snug text-ink">{translateCopy(title)}</h2>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-ink-2">{translateCopy(desc)}</p>
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-line pt-3 text-sm">
              <span className="font-medium text-ink">
                {translateCopy.format("EcommerceHero.setupPrice", { value0: displayPackagePrice(FAMILY_PACKAGE[family], language, currency) })}
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 group-hover:underline">
                {translateCopy(englishMessage("HomeChooser.viewPlatform"))}
                <ArrowRight aria-hidden="true" className="size-3.5 shrink-0" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
