"use client";

import { Bell, ChartColumn, CreditCard, Film, Globe, KeyRound, LayoutDashboard, Link2, Smartphone } from "lucide-react";
import { StreamingHero } from "@/components/sections/StreamingHero";
import { MicroDramaAppPreview } from "@/components/sections/MicroDramaAppPreview";
import { ShortDramaCapabilities } from "@/components/sections/ShortDramaCapabilities";
import { ShortDramaCardRail } from "@/components/sections/ShortDramaCardRail";
import { ShortDramaLiveAccess } from "@/components/sections/ShortDramaLiveAccess";
import { EngineeringCard, TechStackStrip } from "@/components/sections/TechStackStrip";
import { useMessages } from "@/components/site/useMessages";
import Image from "@/components/ui/LocalizedImage";
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

export function ShortDramaOverview({ offer }: { offer: ShortDramaOffer }) {
  const t = useMessages();
  const content = OFFER_CONTENT[offer];
  const featuresLabel = t(englishMessage("ShortDrama.top.stack.features"));
  const quickLinks = [
    { href: "#live-demo", label: englishMessage("short-drama.live.test.build.c215c43") },
    { href: "#short-drama-features", label: englishMessage("TechStackStrip.modern.engineering.stack.4f4abf1") },
    { href: "#pricing", label: englishMessage("ShortDrama.top.pricing") },
  ];

  return (
    <>
      <StreamingHero heading={content.title} badge={content.badge} intro={content.intro}
        tierId={SHORT_DRAMA_PACKAGES[offer]} quickLinks={quickLinks} theme="drama">
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
        {offer === "app" && <MicroDramaAppPreview />}
      </StreamingHero>

      <ShortDramaLiveAccess emphasis={content.emphasis} landing>
        {offer === "platform" && (
          <div className="mt-5 border-t border-line pt-4">
            <h3 className="text-sm font-semibold text-ink">{t(englishMessage("ShortDrama.top.platform.walkthroughTitle"))}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-2">{t(englishMessage("ShortDrama.top.platform.walkthroughIntro"))}</p>
          </div>
        )}
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
