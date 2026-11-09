"use client";

import { ArrowUpRight, Bell, ChartColumn, CreditCard, Film, Globe, KeyRound, LayoutDashboard, Link2, MessageSquare, Smartphone } from "lucide-react";
import { ShortDramaCapabilities } from "@/components/sections/ShortDramaCapabilities";
import { ShortDramaCardRail } from "@/components/sections/ShortDramaCardRail";
import { ShortDramaLiveAccess } from "@/components/sections/ShortDramaLiveAccess";
import { EngineeringCard, TechStackStrip } from "@/components/sections/TechStackStrip";
import { DemoButton } from "@/components/site/DemoButton";
import { useContactWhatsApp } from "@/components/site/useContactWhatsApp";
import { useMessages } from "@/components/site/useMessages";
import { buttonClass } from "@/components/ui/Button";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import Image from "@/components/ui/LocalizedImage";
import Link from "@/components/ui/LocalizedLink";
import { trackWhatsAppClick } from "@/lib/analytics";
import { englishMessage } from "@/lib/messages";
import { SHORT_DRAMA_PACKAGES, type ShortDramaOffer } from "@/lib/short-drama-offers";

const OFFER_CONTENT = {
  platform: {
    title: englishMessage("ShortDrama.top.platform.title"),
    badge: englishMessage("ShortDrama.top.platform.heroBadge"),
    intro: englishMessage("ShortDrama.top.platform.intro"),
    emphasis: "both",
    image: {
      src: "/showcase/microdrama-catalog.webp",
      alt: englishMessage("ShortDrama.top.platform.image"),
      width: 1280,
      height: 633,
    },
    features: [
      { icon: Smartphone, label: englishMessage("ShortDrama.top.platform.playback") },
      { icon: LayoutDashboard, label: englishMessage("ShortDrama.top.platform.admin") },
      { icon: Film, label: englishMessage("ShortDrama.top.platform.verticalPlayer") },
      { icon: KeyRound, label: englishMessage("ShortDrama.top.platform.access") },
      { icon: ChartColumn, label: englishMessage("ShortDrama.top.platform.analytics") },
    ],
    engineeringMode: "short-drama",
    engineeringHeadline: englishMessage("short-drama.enterprise.video.streaming.architecture.zero.aa8b029"),
  },
  app: {
    title: englishMessage("ShortDrama.top.app.title"),
    badge: englishMessage("ShortDrama.top.app.heroBadge"),
    intro: englishMessage("ShortDrama.top.app.intro"),
    emphasis: "app",
    image: undefined,
    features: [
      { icon: Film, label: englishMessage("ShortDrama.top.app.playback") },
      { icon: KeyRound, label: englishMessage("ShortDrama.top.app.access") },
      { icon: Bell, label: englishMessage("ShortDrama.top.app.notifications") },
      { icon: Smartphone, label: englishMessage("ShortDrama.top.app.publishing") },
    ],
    engineeringMode: "short-drama-app",
    engineeringHeadline: englishMessage("ShortDrama.top.stack.appHeadline"),
  },
  web: {
    title: englishMessage("ShortDrama.top.web.title"),
    badge: englishMessage("ShortDrama.top.web.heroBadge"),
    intro: englishMessage("ShortDrama.top.web.intro"),
    emphasis: "web",
    image: {
      src: "/showcase/microdrama-web-player.webp",
      alt: englishMessage("ShortDrama.top.web.image"),
      width: 1280,
      height: 631,
    },
    features: [
      { icon: Globe, label: englishMessage("ShortDrama.top.web.playback") },
      { icon: Link2, label: englishMessage("ShortDrama.top.web.sharing") },
      { icon: CreditCard, label: englishMessage("ShortDrama.top.web.checkout") },
      { icon: LayoutDashboard, label: englishMessage("ShortDrama.top.web.admin") },
    ],
    engineeringMode: "short-drama-web",
    engineeringHeadline: englishMessage("ShortDrama.top.stack.webHeadline"),
  },
} as const;

function AppPreview({ mobile = false }: { mobile?: boolean }) {
  const t = useMessages();
  return (
    <figure className={mobile ? "mt-5 border-t border-line pt-5 lg:hidden" : "hidden min-w-0 lg:block"}>
      <figcaption className="mb-3 text-center text-xs text-ink-3">
        {t(englishMessage("ShortDrama.top.app.previewCaption"))}
      </figcaption>
      <div className={`flex items-start justify-center gap-4 ${mobile ? "" : "short-drama-hero-art"}`}>
        <Image
          src="/showcase/microdrama-mobile-feed.webp"
          alt={englishMessage("ShortDrama.top.app.feedImage")}
          width={328}
          height={718}
          sizes={mobile ? "160px" : "180px"}
          className={mobile
            ? "h-auto w-40 max-w-full rounded-xl border border-line shadow-sm"
            : "h-auto w-[44%] max-w-[11.25rem] rounded-xl border border-line shadow-sm"}
        />
        {!mobile && (
          <Image
            src="/showcase/microdrama-mobile-catalog.webp"
            alt={englishMessage("ShortDrama.top.app.catalogImage")}
            width={327}
            height={715}
            sizes="180px"
            className="h-auto w-[44%] max-w-[11.25rem] rounded-xl border border-line shadow-sm"
          />
        )}
      </div>
    </figure>
  );
}

export function ShortDramaOverview({ offer }: { offer: ShortDramaOffer }) {
  const t = useMessages();
  const whatsappUrl = useContactWhatsApp();
  const content = OFFER_CONTENT[offer];
  const title = t(content.title);
  const featuresLabel = t(englishMessage("ShortDrama.top.stack.features"));
  const quickLinks = [
    { href: "#live-demo", label: englishMessage("short-drama.live.test.build.c215c43") },
    { href: "#short-drama-features", label: englishMessage("TechStackStrip.modern.engineering.stack.4f4abf1") },
    { href: "#pricing", label: englishMessage("ShortDrama.top.pricing") },
  ];

  return (
    <>
      <section id="hero" className="wrap-wide pt-9 pb-10 sm:pt-12 sm:pb-14">
        <nav className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink-3">
          <Link href="/" className="hover:text-ink">{t(englishMessage("ecommerce.home.70f8bb9"))}</Link>
          <span aria-hidden="true">/</span>
          <Link href="/solutions" className="hover:text-ink">{t(englishMessage("ecommerce.solutions.05b004a"))}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-ink">{title}</span>
        </nav>

        <div className="mt-6 grid items-center gap-8 lg:min-h-[380px] lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)]">
          <div className="max-w-2xl">
            <HeadingBadge category="drama" className="mb-4">{content.badge}</HeadingBadge>
            <h1 className="w-fit text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink motion-safe:animate-[short-drama-title-in_380ms_ease-out] sm:text-5xl lg:text-[3.25rem]">
              <span className="short-drama-title-accent">{title}</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">{t(content.intro)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <DemoButton tierId={SHORT_DRAMA_PACKAGES[offer]}>
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
                onClick={() => trackWhatsAppClick("ShortDramaHero")}
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
                  className={`${index === 1 ? "animate-float-reverse" : "animate-float-slow"} inline-flex min-h-9 items-center rounded-md border border-line bg-paper px-3 py-1.5 text-sm font-medium text-ink-2 transition-colors hover:border-amber-500/60 hover:text-ink hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused]`}
                >
                  {t(label)}
                </a>
              ))}
            </div>
          </div>
          {content.image && (
            <figure className="short-drama-hero-art min-w-0">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={content.image.width}
                height={content.image.height}
                sizes="(min-width: 1088px) 540px, (min-width: 1024px) 50vw, calc(100vw - 48px)"
                preload
                className="h-auto w-full rounded-xl border border-line shadow-sm"
              />
            </figure>
          )}
          {offer === "app" && <AppPreview />}
        </div>
      </section>

      <ShortDramaLiveAccess emphasis={content.emphasis} landing>
        {offer === "app" && <AppPreview mobile />}
      </ShortDramaLiveAccess>

      <TechStackStrip
        id="short-drama-features"
        mode={content.engineeringMode}
        headline={content.engineeringHeadline}
        subheadline={englishMessage("short-drama.deployed.to.your.aws.or.cloudflare.account.i.09bc33d")}
      >
        <div className="border-t border-line/60 pt-6">
          <h3 className="text-sm font-semibold text-ink">{featuresLabel}</h3>
          <div className="mt-3">
            <ShortDramaCardRail label={featuresLabel} desktopColumns={offer === "platform" ? "md:grid-cols-3 lg:grid-cols-5" : "md:grid-cols-2 lg:grid-cols-4"}>
              {content.features.map(({ icon, label }) => (
                <EngineeringCard key={label} icon={icon} title={t(label)} />
              ))}
            </ShortDramaCardRail>
          </div>
        </div>
      </TechStackStrip>
      <ShortDramaCapabilities offer={offer} />
    </>
  );
}
