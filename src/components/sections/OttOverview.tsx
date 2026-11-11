"use client";

import { ChartColumn, CreditCard, Download, Film, Globe, LayoutDashboard, Tv } from "lucide-react";
import { MicroDramaAppPreview } from "@/components/sections/MicroDramaAppPreview";
import { StreamingCapabilities } from "@/components/sections/ShortDramaCapabilities";
import { ShortDramaCardRail } from "@/components/sections/ShortDramaCardRail";
import { StreamingHero } from "@/components/sections/StreamingHero";
import { EngineeringCard, TechStackStrip } from "@/components/sections/TechStackStrip";
import { DemoButton } from "@/components/site/DemoButton";
import { useMessages } from "@/components/site/useMessages";
import Image from "@/components/ui/LocalizedImage";
import Link from "@/components/ui/LocalizedLink";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { imageDimensions } from "@/lib/image-dimensions";
import { englishMessage } from "@/lib/messages";
import { OTT_PACKAGES, type OttOffer } from "@/lib/ott-offers";

const content = {
  platform: {
    title: englishMessage("OttOverview.platform.title"),
    intro: englishMessage("OttOverview.platform.intro"),
    mode: "ott",
    image: "/showcase/microdrama-catalog.webp",
    imageLabel: englishMessage("ShortDrama.top.platform.image"),
    architecture: englishMessage("ott-streaming.enterprise.widescreen.video.architecture.nex.ba401fa"),
    features: [
      { icon: Film, label: englishMessage("OttOverview.widescreen") },
      { icon: LayoutDashboard, label: englishMessage("OttOverview.videoCms") },
      { icon: CreditCard, label: englishMessage("OttOverview.monetization") },
      { icon: ChartColumn, label: englishMessage("OttOverview.analytics") },
    ],
  },
  app: {
    title: englishMessage("OttOverview.app.title"),
    intro: englishMessage("OttOverview.app.intro"),
    mode: "ott-app",
    image: undefined,
    imageLabel: undefined,
    architecture: englishMessage("OttOverview.app.architecture"),
    features: [
      { icon: Film, label: englishMessage("OttOverview.widescreen") },
      { icon: Tv, label: englishMessage("ott-streaming.1.tap.tv.casting.0ed1d8c") },
      { icon: Download, label: englishMessage("ott-streaming.encrypted.offline.downloads.b212ce9") },
      { icon: CreditCard, label: englishMessage("ott-streaming.in.app.subscriptions.1fc298c") },
    ],
  },
  web: {
    title: englishMessage("OttOverview.web.title"),
    intro: englishMessage("OttOverview.web.intro"),
    mode: "ott-web",
    image: "/showcase/microdrama-web-genres.webp",
    imageLabel: englishMessage("OttOverview.web.genresImage"),
    architecture: englishMessage("OttOverview.web.architecture"),
    features: [
      { icon: Film, label: englishMessage("OttOverview.widescreen") },
      { icon: Globe, label: englishMessage("OttOverview.web.catalog") },
      { icon: LayoutDashboard, label: englishMessage("OttOverview.videoCms") },
      { icon: CreditCard, label: englishMessage("ott-streaming.stripe.recurring.billing.ad0d6d6") },
    ],
  },
} as const;

const quickLinks = [
  { href: "#ott-preview", label: englishMessage("OttOverview.preview") },
  { href: "#ott-engineering", label: englishMessage("TechStackStrip.modern.engineering.stack.4f4abf1") },
  { href: "#pricing", label: englishMessage("ShortDrama.top.pricing") },
];

const standardPlayback = {
  platform: englishMessage("OttScope.platform"),
  app: englishMessage("OttScope.app"),
  web: englishMessage("OttScope.web"),
};

const optionalFeatures = [
  englishMessage("OttScope.live"),
  englishMessage("OttScope.tv"),
  englishMessage("OttScope.drm"),
];

export function OttOverview({ offer }: { offer: OttOffer }) {
  const t = useMessages();
  const { title, intro, mode, architecture, features, image, imageLabel } = content[offer];
  const tierId = OTT_PACKAGES[offer];
  const featuresLabel = t(englishMessage("ShortDrama.top.stack.features"));
  return (
    <>
      <StreamingHero heading={title} intro={intro} badge={englishMessage("OttOverview.badge")} tierId={tierId} theme="ott" quickLinks={quickLinks}>
        {image ? (
          <figure className="short-drama-hero-art min-w-0">
            <Image
              src={image}
              alt={imageLabel}
              {...imageDimensions(image)}
              sizes="(min-width: 1088px) 540px, (min-width: 1024px) 50vw, calc(100vw - 48px)"
              preload
              className="h-auto w-full rounded-xl border border-line shadow-sm"
            />
          </figure>
        ) : <MicroDramaAppPreview pairOnDesktop={false} />}
      </StreamingHero>

      <section id="ott-preview" aria-labelledby="ott-preview-heading" className="wrap-wide pb-14 sm:pb-20">
        <div className="grid items-start gap-6 rounded-xl border border-line bg-wash px-5 py-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 id="ott-preview-heading" className="text-xl font-semibold tracking-tight">{t(englishMessage("OttOverview.preview.title"))}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-2 sm:text-base">{t(englishMessage("OttOverview.preview.description"))}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">{t(standardPlayback[offer])}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
              <DemoButton tierId={tierId}>{t(englishMessage("ShortDrama.top.walkthrough"))}</DemoButton>
              <Link href={CASE_STUDIES.ott.path} className="text-sm font-medium underline underline-offset-4">
                {englishMessage("HomeProof.ottCase")}
              </Link>
            </div>
          </div>
          <table className="w-full table-fixed text-start text-sm">
            <caption className="pb-2 text-start font-semibold text-ink">{t(englishMessage("OttScope.title"))}</caption>
            <tbody className="divide-y divide-line border-y border-line">
              <tr>
                <th scope="row" className="py-2 pe-3 text-start font-medium text-ink">{t(englishMessage("OttScope.onDemand"))}</th>
                <td className="py-2 text-ink-2">{t(englishMessage("OttScope.included"))}</td>
              </tr>
              {offer !== "web" && (
                <tr>
                  <th scope="row" className="py-2 pe-3 text-start font-medium text-ink">{t(englishMessage("OttScope.casting"))}</th>
                  <td className="py-2 text-ink-2">{t(englishMessage("OttScope.confirmDevices"))}</td>
                </tr>
              )}
              {optionalFeatures.map((feature) => (
                <tr key={feature}>
                  <th scope="row" className="py-2 pe-3 text-start font-medium text-ink">{t(feature)}</th>
                  <td className="py-2 text-ink-2">{t(englishMessage("OttScope.custom"))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <TechStackStrip id="ott-engineering" mode={mode} headline={architecture} subheadline={englishMessage("OttOverview.deployment")}>
        <div className="border-t border-line/60 pt-6">
          <h3 className="text-sm font-semibold text-ink">{featuresLabel}</h3>
          <div className="mt-3">
            <ShortDramaCardRail label={featuresLabel} desktopColumns="md:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon, label }) => <EngineeringCard key={label} icon={icon} title={t(label)} />)}
            </ShortDramaCardRail>
          </div>
        </div>
      </TechStackStrip>
      <StreamingCapabilities
        capabilities={features.slice(1).map(({ label }) => label)}
        label={englishMessage("OttOverview.capabilities")}
        theme="ott"
      />
    </>
  );
}
