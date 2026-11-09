import { createLocalizer, englishMessage } from "@/lib/messages";
import { getLocaleMessages } from "@/lib/locale-messages";

import { priceText } from "@/lib/pricing-catalog";
import type { Language } from "@/types";
import { FAMILY_PACKAGE, schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { SHORT_DRAMA_FAQS, SHORT_DRAMA_BASE_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
import { ShortDramaOverview } from "@/components/sections/ShortDramaOverview";
import { SHORT_DRAMA_PACKAGES, SHORT_DRAMA_SCREENSHOT_SIZES } from "@/lib/short-drama-offers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import {
  Smartphone,
  Lock,
  CreditCard,
  Globe,
  Film,
  ShieldCheck,
  Zap,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "@/components/ui/LocalizedLink";

import { LOCALIZED_SHORT_DRAMA_SEO } from "@/lib/translations/seo";

export const metadata: Metadata = {
  title: "Short-Drama App Development Company | Video Streaming | Mechatron Lab",
  description: LOCALIZED_SHORT_DRAMA_SEO.en.description,
  keywords: [
    "short drama app development company",
    "short drama app development",
    "vertical video streaming app development",
    "reelshort clone app development",
    "dramabox white label platform",
    "micro drama app developers",
    "short video drama app development",
    "custom video streaming development",
    "short drama platform",
    "flutter video streaming app",
  ],
  alternates: {
    canonical: "/solutions/short-drama",
    languages: {
      en: "/solutions/short-drama",
      es: "/es/solutions/short-drama",
      de: "/de/solutions/short-drama",
      fr: "/fr/solutions/short-drama",
      hi: "/hi/solutions/short-drama",
    },
  },
  openGraph: {
    title: "Short-Drama App Development Company | Video Streaming",
    description: LOCALIZED_SHORT_DRAMA_SEO.en.description,
    url: "/solutions/short-drama",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Short-Drama App Development Company | Video Streaming",
    description: LOCALIZED_SHORT_DRAMA_SEO.en.description,
    images: ["/showcase/ott-drama-app.jpg"],
  },
};

export default function ShortDramaPlatformPage({ language = "en" }: { language?: Language }) {
  const translateCopy = createLocalizer(language, getLocaleMessages(language));

  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: translateCopy(englishMessage("ecommerce.home.70f8bb9")), item: language === "en" ? "/" : `/${language}` },
    { name: translateCopy(englishMessage("ecommerce.solutions.05b004a")), item: "/solutions" },
    { name: translateCopy(englishMessage("short-drama.short.drama.streaming.platform.cedf920")), item: language === "en" ? "/solutions/short-drama" : `/${language}/solutions/short-drama` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(translateCopy(SHORT_DRAMA_FAQS));
  const softwareSchema = generateSoftwareSchema({
    name: translateCopy(englishMessage("short-drama.white.label.9.16.short.drama.platform.apps.w.05ebd68")),
    description:
      translateCopy(englishMessage("short-drama.complete.white.label.9.16.vertical.short.dra.0dcb7d8")),
    price: schemaPrice(FAMILY_PACKAGE["short-drama"]),
    url: language === "en" ? "/solutions/short-drama" : `/${language}/solutions/short-drama`,
    operatingSystem: "iOS, Android, Web, Cloud",
    applicationCategory: "MultimediaApplication",
    siteUrl,
  });

  const modules = [
    {
      n: "01",
      badge: translateCopy(englishMessage("ott-streaming.mobile.apps.a1fd88e")),
      title: translateCopy(englishMessage("short-drama.native.9.16.vertical.short.drama.apps.ios.an.ed3a29e")),
      subtitle: translateCopy(englishMessage("ott-streaming.unified.flutter.codebase.compiling.to.native.92cfa02")),
      description:
        translateCopy(englishMessage("short-drama.high.retention.60fps.vertical.swipe.player.e.e11dd91")),
      childLink: {
        href: "/solutions/short-drama-app-development",
        label: priceText(translateCopy(englishMessage("short-drama.looking.for.mobile.apps.only.explore.app.onl.24d4b24"))),
      },
      screenshot: {
        src: "/showcase/ott-drama-app-showcase.jpg",
        alt: translateCopy(englishMessage("short-drama.9.16.vertical.short.drama.mobile.app.interfa.3939b91")),
        caption: translateCopy(englishMessage("short-drama.native.9.16.drama.apps.60fps.swipe.vip.acces.90dfd5d")),
      },
      capabilities: [
        {
          icon: Smartphone,
          title: translateCopy(englishMessage("short-drama.60fps.vertical.swipe.engine.2500230")),
          desc: translateCopy(englishMessage("short-drama.tiktok.speed.vertical.gesture.swiping.with.i.9986ee1")),
        },
        {
          icon: Lock,
          title: translateCopy(englishMessage("short-drama.cliffhanger.paywall.gates.96ac307")),
          desc: translateCopy(englishMessage("short-drama.automated.teaser.logic.stream.episodes.1.5.f.a3b774f")),
        },
        {
          icon: CreditCard,
          title: translateCopy(englishMessage("short-drama.in.app.vip.purchases.936b627")),
          desc: translateCopy(englishMessage("short-drama.integrated.apple.storekit.google.play.billin.76b522c")),
        },
        {
          icon: Zap,
          title: translateCopy(englishMessage("short-drama.automated.push.notifications.70a9b24")),
          desc: translateCopy(englishMessage("short-drama.targeted.fcm.and.apns.push.campaigns.alertin.7ca1392")),
        },
      ],
    },
    {
      n: "02",
      badge: translateCopy(englishMessage("short-drama.web.platform.5392cbe")),
      title: translateCopy(englishMessage("short-drama.responsive.9.16.mobile.first.web.streaming.p.9825cae")),
      subtitle: translateCopy(englishMessage("short-drama.next.js.16.web.player.for.desktop.browsers.a.ac009c7")),
      description:
        translateCopy(englishMessage("short-drama.zero.friction.browser.streaming.for.social.t.ae6d9a6")),
      childLink: {
        href: "/solutions/short-drama-website-development",
        label: priceText(translateCopy(englishMessage("short-drama.looking.for.website.only.explore.website.pac.1e8102c"))),
      },
      screenshot: {
        src: "/showcase/ott-cinematic-web.jpg",
        alt: translateCopy(englishMessage("short-drama.responsive.mobile.first.web.streaming.player.6ea8284")),
        caption: translateCopy(englishMessage("short-drama.next.js.web.player.episode.drawer.vip.subscr.3a964e7")),
      },
      capabilities: [
        {
          icon: Globe,
          title: translateCopy(englishMessage("short-drama.sub.second.social.landing.66d5490")),
          desc: translateCopy(englishMessage("short-drama.zero.app.download.friction.social.media.camp.dfc0bfc")),
        },
        {
          icon: Film,
          title: translateCopy(englishMessage("short-drama.slide.out.episode.drawer.c3d606d")),
          desc: translateCopy(englishMessage("short-drama.full.season.episode.queue.with.visual.lock.i.cee826b")),
        },
        {
          icon: CreditCard,
          title: translateCopy(englishMessage("short-drama.stripe.vip.subscriptions.2dd450d")),
          desc: translateCopy(englishMessage("short-drama.web.native.checkout.with.apple.pay.google.pa.ba93c24")),
        },
        {
          icon: ShieldCheck,
          title: translateCopy(englishMessage("short-drama.seo.series.episode.pages.27d47a0")),
          desc: translateCopy(englishMessage("short-drama.server.rendered.title.synopsis.pages.and.sch.a2336e9")),
        },
      ],
    },
    {
      n: "03",
      badge: translateCopy(englishMessage("ott-streaming.command.center.26abab6")),
      title: translateCopy(englishMessage("short-drama.video.cms.episode.paywall.operations.console.fb94060")),
      subtitle: translateCopy(englishMessage("short-drama.centralized.cloud.video.encoding.episode.tea.8890559")),
      description:
        translateCopy(englishMessage("short-drama.your.self.hosted.administrative.operations.c.bee8d68")),
      screenshot: {
        src: "/showcase/ott-video-cms.jpg",
        alt: translateCopy(englishMessage("short-drama.video.cms.console.with.cloud.encoding.and.ep.c17c030")),
        caption: translateCopy(englishMessage("ott-streaming.video.cms.console.master.uploads.cloudflare.a11f1bb")),
      },
      capabilities: [
        {
          icon: Zap,
          title: translateCopy(englishMessage("short-drama.bulk.cloud.transcoding.acf8a79")),
          desc: translateCopy(englishMessage("short-drama.batch.upload.50.100.vertical.episodes.simult.678c5c9")),
        },
        {
          icon: DollarSign,
          title: translateCopy(englishMessage("short-drama.dynamic.episode.teaser.rules.277a247")),
          desc: translateCopy(englishMessage("short-drama.set.teaser.rules.per.drama.in.1.click.offer.c3a9bab")),
        },
        {
          icon: ShieldCheck,
          title: translateCopy(englishMessage("short-drama.signed.drm.token.authorization.6090a4c")),
          desc: translateCopy(englishMessage("short-drama.time.limited.signed.token.playback.prevents.4feb962")),
        },
        {
          icon: BarChart3,
          title: translateCopy(englishMessage("short-drama.cliffhanger.drop.off.analytics.005a37f")),
          desc: translateCopy(englishMessage("short-drama.inspect.minute.by.minute.viewer.retention.gr.b4bb6ed")),
        },
      ],
    },
  ];

  const rolloutSteps = [
    {
      when: translateCopy(englishMessage("home.week.1.23a8b7f")),
      title: translateCopy(englishMessage("short-drama.brand.identity.paywall.strategy.ingest.confi.c3b311e")),
      text: translateCopy(englishMessage("short-drama.we.configure.your.custom.branding.logo.color.0198a94")),
    },
    {
      when: translateCopy(englishMessage("home.week.2.ad14f06")),
      title: translateCopy(englishMessage("short-drama.private.cloud.transcoding.video.cms.setup.57d4e78")),
      text: translateCopy(englishMessage("short-drama.we.deploy.automated.multi.bitrate.hls.transc.69deffe")),
    },
    {
      when: translateCopy(englishMessage("home.week.3.6c532cf")),
      title: translateCopy(englishMessage("short-drama.flutter.mobile.apps.next.js.web.player.9afd2b8")),
      text: translateCopy(englishMessage("short-drama.native.android.and.ios.mobile.apps.are.compi.6f64a3b")),
    },
    {
      when: translateCopy(englishMessage("home.week.4.d0b7b34")),
      title: translateCopy(englishMessage("short-drama.store.submissions.performance.audits.handove.6ce34fe")),
      text: translateCopy(englishMessage("short-drama.we.guide.your.team.through.apple.app.store.a.db2923a")),
    },
  ];

  return (
    <div data-page-family="short-drama" data-page-template="shared" className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="short-drama-page flex-1">
        {/* Unified Hero */}
        <ShortDramaOverview offer="platform" />

        {/* Architecture & Modules Breakout */}
        <Section
          id="architecture"
          index={translateCopy(translateCopy(englishMessage("ott-streaming.01.platform.architecture.1f19a4d")))}
          title={translateCopy(translateCopy(englishMessage("short-drama.what.is.included.in.the.flagship.drama.suite.d2f0e6f")))}
          intro={translateCopy(translateCopy(englishMessage("short-drama.a.comprehensive.9.16.short.drama.software.pl.f3f1aea")))}
          wide
        >
          <div className="space-y-32 sm:space-y-40">
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
                      sizes={SHORT_DRAMA_SCREENSHOT_SIZES}
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

        {/* 4-Week Cloud Rollout Timeline */}
        <HowItWorks
          id="rollout"
          index={translateCopy(translateCopy(englishMessage("ott-streaming.02.4.week.deployment.d57b8fc")))}
          title={translateCopy(englishMessage("short-drama.from.media.catalog.to.production.app.launch.1b5ac12"))}
          badge={translateCopy(translateCopy(englishMessage("home.rapid.2.4.week.deployment.private.cloud.vpc.6ba557f")))}
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
          title={translateCopy(englishMessage("short-drama.transparent.short.drama.platform.pricing.0495389"))}
          intro={translateCopy(englishMessage("short-drama.flat.one.time.fee.no.recurring.monthly.saas.3151fdf"))}
          tiers={SHORT_DRAMA_BASE_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index={translateCopy(translateCopy(englishMessage("ott-streaming.05.frequently.asked.questions.6687547")))}
          title={translateCopy(englishMessage("short-drama.short.drama.platform.questions.cf6373c"))}
          intro={translateCopy(translateCopy(englishMessage("short-drama.everything.you.need.to.know.about.app.publis.9d4992b")))}
          items={translateCopy(SHORT_DRAMA_FAQS)}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline={translateCopy(englishMessage("short-drama.ready.to.launch.your.9.16.short.drama.stream.18b3f55"))}
          description={translateCopy(translateCopy(englishMessage("short-drama.talk.directly.with.our.solutions.engineering.53b8b46")))}
          ctaDemo={translateCopy(translateCopy(englishMessage("short-drama.book.short.drama.walkthrough.ec513d3")))}
          tierId={SHORT_DRAMA_PACKAGES.platform}
        />
      </main>

      <Footer />
    </div>
  );
}
