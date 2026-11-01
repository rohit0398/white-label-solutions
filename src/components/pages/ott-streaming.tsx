import { createLocalizer, englishMessage } from "@/lib/messages";
import { getLocaleMessages } from "@/lib/locale-messages";

import { priceText } from "@/lib/pricing-catalog";
import type { Language } from "@/types";
import { FAMILY_PACKAGE, schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "@/components/ui/LocalizedLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/sections/SolutionHero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { CINEMATIC_OTT_BASE_PRICING_TIERS, OTT_SHOWCASE_PROJECTS, CINEMATIC_OTT_FAQS } from "@/lib/constants";
import {
  Smartphone,
  Tv,
  Download,
  CreditCard,
  Globe,
  Film,
  ShieldCheck,
  Zap,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "OTT Platform Development Company | Video Apps | Mechatron Lab",
  description:
    "Launch your branded streaming platform like Netflix in 2–4 weeks. Widescreen web portal, iOS & Android apps, and Video CMS on your private cloud with 0% fees.",
  keywords: [
    "ott platform development company",
    "video streaming app development",
    "custom ott platform development",
    "netflix clone app development",
    "vod platform development",
    "smart tv app development",
    "white label ott platform",
    "flutter streaming app",
  ],
  alternates: {
    canonical: "/solutions/ott-streaming",
    languages: {
      en: "/solutions/ott-streaming",
      es: "/es/solutions/ott-streaming",
      de: "/de/solutions/ott-streaming",
      fr: "/fr/solutions/ott-streaming",
      hi: "/hi/solutions/ott-streaming",
    },
  },
  openGraph: {
    title: "OTT Platform Development Company | Video Apps",
    description:
      "Launch your branded streaming platform like Netflix in 2–4 weeks. Widescreen web portal, iOS & Android apps, and Video CMS on your private cloud with 0% fees.",
    url: "/solutions/ott-streaming",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTT Platform Development Company | Video Apps",
    description:
      "Launch your branded video streaming platform like Netflix in 2–4 weeks on your private cloud with zero commission.",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
};

export default function OttStreamingSolutionPage({ language = "en" }: { language?: Language }) {
  const translateCopy = createLocalizer(language, getLocaleMessages(language));

  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: translateCopy(englishMessage("ecommerce.home.70f8bb9")), item: language === "en" ? "/" : `/${language}` },
    { name: translateCopy(englishMessage("ecommerce.solutions.05b004a")), item: "/solutions" },
    { name: translateCopy(englishMessage("ott-streaming.cinematic.ott.platform.4474378")), item: language === "en" ? "/solutions/ott-streaming" : `/${language}/solutions/ott-streaming` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(translateCopy(CINEMATIC_OTT_FAQS));
  const softwareSchema = generateSoftwareSchema({
    name: translateCopy(englishMessage("ott-streaming.white.label.cinematic.ott.platform.web.mobil.9602d13")),
    description:
      translateCopy(englishMessage("ott-streaming.production.ready.white.label.ott.streaming.p.e97bc58")),
    price: schemaPrice(FAMILY_PACKAGE["ott-streaming"]),
    url: language === "en" ? "/solutions/ott-streaming" : `/${language}/solutions/ott-streaming`,
    operatingSystem: "Android, iOS, Web, Smart TV",
    applicationCategory: "MultimediaApplication",
    siteUrl,
  });

  const ottTickerItems = [
    { title: translateCopy(englishMessage("ott-streaming.episodic.comedy.series.ed360a3")), detail: translateCopy(englishMessage("ott-streaming.1m.viewers.high.retention.serialized.content.0a3a61e")) },
    { title: translateCopy(englishMessage("ott-streaming.305.tv.network.5894f39")), detail: translateCopy(englishMessage("ott-streaming.live.tv.channels.on.demand.active.broadcast.44eaf42")) },
    { title: "Cloudflare Stream", detail: translateCopy(englishMessage("ott-streaming.adaptive.hls.bitrate.zero.bandwidth.markup.5a9dc49")) },
    { title: translateCopy(englishMessage("ott-streaming.0.revenue.cut.ab5aabb")), detail: translateCopy(englishMessage("ott-streaming.keep.100.of.subscription.ad.revenue.6ab8464")) },
    { title: translateCopy(englishMessage("ott-streaming.buffer.velocity.dd790a0")), detail: translateCopy(englishMessage("ott-streaming..1.2s.first.frame.via.multi.cdn.edge.a689bf6")) },
    { title: translateCopy(englishMessage("home.code.custody.abfa3b5")), detail: translateCopy(englishMessage("ott-streaming.100.git.repository.access.zero.vendor.lock.i.b74b4d8")) },
  ];

  const modules = [
    {
      n: "01",
      badge: translateCopy(englishMessage("ott-streaming.mobile.apps.a1fd88e")),
      title: translateCopy(englishMessage("ott-streaming.native.16.9.widescreen.streaming.apps.ios.an.f9f521b")),
      subtitle: translateCopy(englishMessage("ott-streaming.unified.flutter.codebase.compiling.to.native.92cfa02")),
      description:
        translateCopy(englishMessage("ott-streaming.complete.native.mobile.applications.engineer.7cd4839")),
      screenshot: {
        src: "/showcase/ott-streaming-app.jpg",
        alt: translateCopy(englishMessage("ott-streaming.native.16.9.cinematic.mobile.streaming.app.w.25b773f")),
        caption: translateCopy(englishMessage("ott-streaming.native.flutter.streaming.apps.4k.hdr.hls.air.210b47a")),
      },
      childLink: {
        href: "/solutions/ott-app-development",
        label: priceText(translateCopy(englishMessage("ott-streaming.looking.for.mobile.apps.only.explore.app.onl.8b4b103"))),
      },
      capabilities: [
        {
          icon: Smartphone,
          title: translateCopy(englishMessage("ott-streaming.adaptive.60fps.player.e539cec")),
          desc: translateCopy(englishMessage("ott-streaming.hardware.accelerated.player.with.hls.adaptiv.fc195d3")),
        },
        {
          icon: Tv,
          title: translateCopy(englishMessage("ott-streaming.1.tap.tv.casting.0ed1d8c")),
          desc: translateCopy(englishMessage("ott-streaming.zero.latency.apple.airplay.and.google.chrome.271359e")),
        },
        {
          icon: Download,
          title: translateCopy(englishMessage("ott-streaming.encrypted.offline.downloads.b212ce9")),
          desc: translateCopy(englishMessage("ott-streaming.aes.128.encrypted.local.video.caching.allows.73963b6")),
        },
        {
          icon: CreditCard,
          title: translateCopy(englishMessage("ott-streaming.in.app.subscriptions.1fc298c")),
          desc: translateCopy(englishMessage("ott-streaming.native.apple.storekit.and.google.play.billin.a77d523")),
        },
      ],
    },
    {
      n: "02",
      badge: translateCopy(englishMessage("ott-streaming.web.smart.tv.b5cca7b")),
      title: translateCopy(englishMessage("ott-streaming.cinematic.streaming.hub.smart.tv.web.portal.334b399")),
      subtitle: translateCopy(englishMessage("ott-streaming.next.js.16.web.application.with.adaptive.hls.7749cc3")),
      description:
        translateCopy(englishMessage("ott-streaming.high.speed.desktop.tablet.and.smart.tv.compa.757c9bf")),
      screenshot: {
        src: "/showcase/ott-cinematic-web.jpg",
        alt: translateCopy(englishMessage("ott-streaming.16.9.cinematic.video.streaming.web.portal.wi.1de32b4")),
        caption: translateCopy(englishMessage("ott-streaming.next.js.16.9.widescreen.streaming.hub.contin.3eed242")),
      },
      childLink: {
        href: "/solutions/ott-website-development",
        label: priceText(translateCopy(englishMessage("ott-streaming.looking.for.website.only.explore.website.pac.77e9631"))),
      },
      capabilities: [
        {
          icon: Globe,
          title: translateCopy(englishMessage("ott-streaming.sub.second.web.buffer.52a8ce1")),
          desc: translateCopy(englishMessage("ott-streaming.powered.by.hls.js.with.intelligent.chunk.pre.ee4528b")),
        },
        {
          icon: Film,
          title: translateCopy(englishMessage("ott-streaming.billboard.trailers.shelves.0e708ad")),
          desc: translateCopy(englishMessage("ott-streaming.netflix.style.hero.showcase.trailer.autoplay.d404f76")),
        },
        {
          icon: ShieldCheck,
          title: translateCopy(englishMessage("ott-streaming.seo.catalog.architecture.7b31343")),
          desc: translateCopy(englishMessage("ott-streaming.server.side.rendered.series.movie.and.actor.a14df75")),
        },
        {
          icon: Zap,
          title: translateCopy(englishMessage("ott-streaming.stripe.recurring.billing.ad0d6d6")),
          desc: translateCopy(englishMessage("ott-streaming.native.stripe.customer.portal.for.monthly.qu.d672db8")),
        },
      ],
    },
    {
      n: "03",
      badge: translateCopy(englishMessage("ott-streaming.command.center.26abab6")),
      title: translateCopy(englishMessage("ott-streaming.video.cms.cloud.transcoding.operations.conso.46fe034")),
      subtitle: translateCopy(englishMessage("ott-streaming.centralized.cloud.video.management.encoding.448b917")),
      description:
        translateCopy(englishMessage("ott-streaming.your.self.hosted.administrative.operations.c.bd0ea8d")),
      screenshot: {
        src: "/showcase/ott-video-cms.jpg",
        alt: translateCopy(englishMessage("ott-streaming.video.cms.cloud.transcoding.operations.conso.e18d9af")),
        caption: translateCopy(englishMessage("ott-streaming.video.cms.console.master.uploads.cloudflare.a11f1bb")),
      },
      capabilities: [
        {
          icon: Zap,
          title: translateCopy(englishMessage("ott-streaming.automated.cloud.transcoding.6e545df")),
          desc: translateCopy(englishMessage("ott-streaming.connect.your.cloudflare.stream.or.aws.mediac.0d67b3b")),
        },
        {
          icon: DollarSign,
          title: translateCopy(englishMessage("ott-streaming.svod.avod.monetization.ad0ccbe")),
          desc: translateCopy(englishMessage("ott-streaming.configure.recurring.vip.subscription.tiers.a.8159c3f")),
        },
        {
          icon: ShieldCheck,
          title: translateCopy(englishMessage("ott-streaming.signed.drm.token.security.4bb7683")),
          desc: translateCopy(englishMessage("ott-streaming.time.limited.signed.token.playback.prevents.6f5c329")),
        },
        {
          icon: BarChart3,
          title: translateCopy(englishMessage("ott-streaming.retention.mrr.analytics.8def515")),
          desc: translateCopy(englishMessage("ott-streaming.monitor.viewer.drop.off.minute.curves.per.ep.461c142")),
        },
      ],
    },
  ];

  const rolloutSteps = [
    {
      when: translateCopy(englishMessage("home.week.1.23a8b7f")),
      title: translateCopy(englishMessage("ott-streaming.brand.identity.paywall.strategy.catalog.plan.a122637")),
      text: translateCopy(englishMessage("ott-streaming.we.configure.your.custom.branding.logo.color.6bcb30e")),
    },
    {
      when: translateCopy(englishMessage("home.week.2.ad14f06")),
      title: translateCopy(englishMessage("ott-streaming.private.cloud.video.encoding.pipeline.cms.se.4f54f7c")),
      text: translateCopy(englishMessage("ott-streaming.we.connect.cloudflare.stream.and.aws.account.9c2ab3b")),
    },
    {
      when: translateCopy(englishMessage("home.week.3.6c532cf")),
      title: translateCopy(englishMessage("ott-streaming.flutter.mobile.apps.in.app.purchases.setup.fad7500")),
      text: translateCopy(englishMessage("ott-streaming.native.android.and.ios.mobile.apps.are.compi.afe0842")),
    },
    {
      when: translateCopy(englishMessage("home.week.4.d0b7b34")),
      title: translateCopy(englishMessage("ott-streaming.store.submission.security.audits.production.0b769fc")),
      text: translateCopy(englishMessage("ott-streaming.we.guide.you.through.google.play.and.apple.a.d267458")),
    },
  ];

  return (
    <div data-page-family="ott-streaming" data-page-template="shared" className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="flex-1">
        {/* Unified Hero */}
        <SolutionHero
          category="ott"
          breadcrumbs={[
            { label: translateCopy(englishMessage("ecommerce.home.70f8bb9")), href: "/" },
            { label: translateCopy(englishMessage("ecommerce.solutions.05b004a")), href: "/solutions" },
            { label: translateCopy(englishMessage("ott-streaming.cinematic.ott.platform.4474378")) },
          ]}
          badge={translateCopy(translateCopy(englishMessage("ott-streaming.complete.cinematic.ott.suite.web.apps.cms.0.53873a5")))}
          headline={translateCopy(englishMessage("ott-streaming.cinematic.ott.video.streaming.platform.0ea477a"))}
          subtitle={translateCopy(englishMessage("ott-streaming.deploy.your.branded.video.streaming.platform.d7cb987"))}
          anchors={[
            { label: translateCopy(englishMessage("ott-streaming.01.platform.architecture.e1548cc")), href: "#architecture" },
            { label: translateCopy(englishMessage("ott-streaming.02.4.week.rollout.e059d4f")), href: "#rollout" },
            { label: translateCopy(englishMessage("ott-streaming.03.production.work.37a86dc")), href: "#production-apps" },
            { label: priceText(translateCopy(englishMessage("ott-streaming.04.pricing.price.cinematic.base.3bf3771"))), href: "#pricing" },
            { label: translateCopy(englishMessage("ott-streaming.05.faq.07fa9e9")), href: "#faq" },
          ]}
          ctaDemoText={translateCopy(translateCopy(englishMessage("ott-streaming.book.ott.platform.walkthrough.87cf5dd")))}
          tierId="ott-streaming"
          footerNote={translateCopy(translateCopy(englishMessage("ott-streaming.published.under.your.developer.accounts.full.1bf5cbc")))}
        />

        {/* Engineering Tech Stack Strip */}
        <TechStackStrip
          mode="ott"
          headline={translateCopy(englishMessage("ott-streaming.enterprise.widescreen.video.architecture.nex.ba401fa"))}
          subheadline={translateCopy(englishMessage("ott-streaming.4k.hdr.and.adaptive.1080p.hls.playback.on.we.fa1c739"))}
        />

        {/* Live Ticker */}
        <LiveTicker items={ottTickerItems} ariaLabel={translateCopy(translateCopy(englishMessage("ott-streaming.ott.streaming.architecture.ticker.7ea2b0e")))} />

        {/* Architecture & Modules Breakout */}
        <Section
          id="architecture"
          index={translateCopy(translateCopy(englishMessage("ott-streaming.01.platform.architecture.1f19a4d")))}
          title={translateCopy(translateCopy(englishMessage("ott-streaming.what.is.included.in.the.flagship.cinematic.s.f07708c")))}
          intro={translateCopy(translateCopy(englishMessage("ott-streaming.a.comprehensive.16.9.widescreen.video.stream.bbef4b3")))}
          wide
        >
          <div className="space-y-24">
            {modules.map((m) => (
              <div
                key={m.n}
                id={m.n === "03" ? "video-cms" : undefined}
                className="border-t border-line pt-12 space-y-8"
              >
                <div className={translateCopy(translateCopy(englishMessage("ott-streaming.max.w.3xl.space.y.3.70ddb3d")))}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-ink-3">{translateCopy(m.n)}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-wash border border-line text-ink-2">
                      {translateCopy(m.badge)}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{translateCopy(m.title)}</h3>
                  <p className="text-xs font-mono text-ink-3">{translateCopy(m.subtitle)}</p>
                  <p className="text-sm text-ink-2 leading-relaxed">{translateCopy(m.description)}</p>

                  {m.childLink && (
                    <div className="pt-1">
                      <Link
                        href={m.childLink.href}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent hover:underline"
                      >
                        <span>{translateCopy(m.childLink.label)}</span>
                        <ArrowRight className={translateCopy(translateCopy(englishMessage("ott-streaming.h.3.w.3.a9546f0")))} />
                      </Link>
                    </div>
                  )}
                </div>

                {m.screenshot && (
                  <div className="group max-w-3xl mx-auto w-full">
                    <Screenshot
                      src={m.screenshot.src}
                      alt={translateCopy(m.screenshot.alt)}
                      caption={m.screenshot.caption}
                      className={translateCopy(translateCopy(englishMessage("ott-streaming.transition.transform.duration.300.0e49470")))}
                    />
                  </div>
                )}

                {m.capabilities && m.capabilities.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-line">
                    {m.capabilities.map((c) => {
                      const Icon = c.icon;
                      return (
                        <div key={c.title} className="space-y-2">
                          <div className="flex items-center gap-2 text-ink">
                            <div className="h-7 w-7 rounded-md bg-wash border border-line flex items-center justify-center text-accent">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <h4 className="font-semibold text-sm tracking-tight">{translateCopy(c.title)}</h4>
                          </div>
                          <p className="text-xs text-ink-2 leading-relaxed">{translateCopy(c.desc)}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* 4-Week Rollout */}
        <HowItWorks
          id="rollout"
          index={translateCopy(translateCopy(englishMessage("ott-streaming.02.4.week.deployment.d57b8fc")))}
          title={translateCopy(englishMessage("ott-streaming.from.raw.master.video.files.to.live.producti.624b324"))}
          badge={translateCopy(translateCopy(englishMessage("ott-streaming.rapid.2.4.week.cloud.deployment.aws.cloudfla.3a94d91")))}
          steps={translateCopy(rolloutSteps)}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index={translateCopy(translateCopy(englishMessage("home.03.production.experience.cb464c0")))}
          title={translateCopy(englishMessage("ott-streaming.battle.tested.video.entertainment.platforms.02a1fbc"))}
          intro={translateCopy(translateCopy(englishMessage("ott-streaming.our.engineering.team.has.built.and.deployed.e0d983e")))}
          projects={OTT_SHOWCASE_PROJECTS}
        />

        {/* Dedicated Base Pricing ($4,999 / $1,999 / $20/hr) */}
        <Pricing
          id="pricing"
          index={translateCopy(translateCopy(englishMessage("ott-streaming.04.pricing.licensing.9a07a1b")))}
          title={translateCopy(englishMessage("ott-streaming.transparent.cinematic.ott.platform.pricing.48d84a9"))}
          intro={translateCopy(englishMessage("ott-streaming.flat.one.time.fee.no.recurring.monthly.saas.1216f31"))}
          tiers={CINEMATIC_OTT_BASE_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index={translateCopy(translateCopy(englishMessage("ott-streaming.05.frequently.asked.questions.6687547")))}
          title={translateCopy(englishMessage("ott-streaming.cinematic.ott.platform.questions.c701da0"))}
          intro={translateCopy(translateCopy(englishMessage("ott-streaming.clear.answers.on.video.cdn.bandwidth.economi.ddbdeae")))}
          items={translateCopy(CINEMATIC_OTT_FAQS)}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline={translateCopy(englishMessage("ott-streaming.ready.to.launch.your.cinematic.video.streami.6096be0"))}
          description={translateCopy(translateCopy(englishMessage("ott-streaming.talk.directly.with.our.solutions.engineering.be623db")))}
          ctaDemo={translateCopy(translateCopy(englishMessage("ott-streaming.book.ott.walkthrough.e7a0014")))}
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
