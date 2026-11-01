import { createLocalizer, englishMessage } from "@/lib/messages";
import { getLocaleMessages } from "@/lib/locale-messages";

import { priceText } from "@/lib/pricing-catalog";
import type { Language } from "@/types";
import { FAMILY_PACKAGE, schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import React from "react";
import type { Metadata } from "next";
import { ALL_HOME_SHOWCASE_PROJECTS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/sections/HomeHero";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { HomePlatformsDeck } from "@/components/sections/HomePlatformsDeck";
import { HomeComparison } from "@/components/sections/HomeComparison";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { Work } from "@/components/sections/Work";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "White-Label Software Platforms | OTT & Commerce | Mechatron Lab",
  description:
    "Production-ready software platforms for 9:16 short drama, OTT video streaming, and e-commerce. Deployed to your private cloud in 2–4 weeks with 0% revenue cut.",
  keywords: [
    "white label software platforms",
    "pre-built ecommerce store",
    "short drama platform",
    "white label ott platform",
    "reelshort clone app",
    "netflix clone app",
    "self hosted ecommerce platform",
    "private cloud software deployment",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      de: "/de",
      fr: "/fr",
      hi: "/hi",
    },
  },
  openGraph: {
    title: "White-Label Software Platforms | OTT & Commerce",
    description:
      "Production-ready software platforms for 9:16 short drama, OTT video streaming, and e-commerce. Deployed to your private cloud in 2–4 weeks with 0% revenue cut.",
    url: "/",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label Software Platforms | OTT & Commerce",
    description:
      "Production-ready software platforms for 9:16 short drama, OTT streaming, and e-commerce with 0% revenue cut.",
    images: ["/og-image.png"],
  },
};

export default function HomePage({ language = "en" }: { language?: Language }) {
  const translateCopy = createLocalizer(language, getLocaleMessages(language));

  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: translateCopy(englishMessage("ecommerce.home.70f8bb9")), item: language === "en" ? "/" : `/${language}` },
  ];

  const homeTickerItems = [
    { title: translateCopy(englishMessage("home.production.scale.f2459c5")), detail: translateCopy(englishMessage("home.1m.active.entertainment.viewers.multi.millio.622692e")) },
    { title: translateCopy(englishMessage("home.commercial.freedom.e556ce9")), detail: translateCopy(englishMessage("home.0.revenue.cut.keep.100.of.sales.subscription.dbde955")) },
    { title: translateCopy(englishMessage("home.private.cloud.vpc.b8691a9")), detail: translateCopy(englishMessage("home.100.client.owned.aws.gcp.azure.cloudflare.ac.755d60c")) },
    { title: translateCopy(englishMessage("home.deployment.speed.e71ba4a")), detail: translateCopy(englishMessage("home.production.app.store.launch.in.2.4.weeks.f9145c5")) },
    { title: translateCopy(englishMessage("home.code.custody.abfa3b5")), detail: translateCopy(englishMessage("home.unencrypted.git.repository.access.available.b8b142f")) },
    { title: translateCopy(englishMessage("home.transparent.pricing.2468577")), detail: priceText(translateCopy(englishMessage("home..price.launch.flagship.suites.price.web.laun.027216b"))) },
  ];

  const homeRolloutSteps = [
    {
      when: translateCopy(englishMessage("home.week.1.23a8b7f")),
      title: translateCopy(englishMessage("home.platform.selection.branding.cloud.account.se.0ba2ad5")),
      text: translateCopy(englishMessage("home.we.configure.your.custom.branding.logo.typog.0dee254")),
    },
    {
      when: translateCopy(englishMessage("home.week.2.ad14f06")),
      title: translateCopy(englishMessage("home.private.cloud.deployment.central.backoffice.819e2ae")),
      text: translateCopy(englishMessage("home.we.deploy.the.operations.crm.or.video.cms.co.853341a")),
    },
    {
      when: translateCopy(englishMessage("home.week.3.6c532cf")),
      title: translateCopy(englishMessage("home.native.flutter.mobile.apps.store.configurati.87394a7")),
      text: translateCopy(englishMessage("home.we.build.native.ios.android.applications.wit.4a32e78")),
    },
    {
      when: translateCopy(englishMessage("home.week.4.d0b7b34")),
      title: translateCopy(englishMessage("home.app.store.publishing.performance.audits.hand.cd992a3")),
      text: translateCopy(englishMessage("home.we.assist.through.apple.app.store.and.google.91d3976")),
    },
  ];

  const combinedFaqs = [
    {
      q: translateCopy(englishMessage("home.what.types.of.software.platforms.can.you.dep.c2835b7")),
      a: translateCopy(englishMessage("home.we.deploy.three.production.ready.architectur.22d69f3")),
    },
    {
      q: translateCopy(englishMessage("home.where.is.the.software.hosted.618b963")),
      a: translateCopy(englishMessage("home.everything.is.deployed.directly.to.your.own.37a28aa")),
    },
    {
      q: translateCopy(englishMessage("home.do.you.take.any.percentage.or.commission.fro.82af2f9")),
      a: translateCopy(englishMessage("home.zero.we.take.0.commission.payments.settle.to.de9e0a6")),
    },
    {
      q: translateCopy(englishMessage("home.can.i.buy.only.the.mobile.apps.or.only.the.w.0a48b5a")),
      a: priceText(translateCopy(englishMessage("home.yes.in.addition.to.our.price.launch.all.in.o.b9c16f2"))),
    },
    {
      q: translateCopy(englishMessage("home.do.i.own.the.source.code.ef7e953")),
      a: translateCopy(englishMessage("home.yes.all.tiers.include.the.option.for.full.un.f093edd")),
    },
    {
      q: translateCopy(englishMessage("home.how.fast.can.we.launch.faefa06")),
      a: translateCopy(englishMessage("home.because.the.core.architecture.is.already.pre.a6021db")),
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(translateCopy(combinedFaqs));

  return (
    <div data-page-family="home" data-page-template="shared" className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />

      <Navbar />

      <main className="flex-1">
        {/* Minimalist Multi-Platform Hero */}
        <HomeHero />

        {/* Live Performance & Capabilities Strip */}
        <LiveTicker items={homeTickerItems} ariaLabel={translateCopy(translateCopy(englishMessage("home.platform.capabilities.and.production.scale.t.cccbedc")))} />

        {/* Interactive 3-Platform Showcase Deck */}
        <HomePlatformsDeck />

        {/* The Ownership Advantage: 3-Way Economics Comparison */}
        <HomeComparison />

        {/* Modern Engineering Stack Strip */}
        <TechStackStrip
          mode="all"
          headline={translateCopy(englishMessage("home.production.tested.technologies.zero.outdated.28783bc"))}
          subheadline={translateCopy(englishMessage("home.next.js.16.flutter.3.x.cloudflare.stream.pos.058bdf9"))}
        />

        {/* Cross-Disciplinary Production Portfolio (Video + Retail) */}
        <Work
          id="work"
          index={translateCopy(translateCopy(englishMessage("home.03.production.experience.cb464c0")))}
          title={translateCopy(englishMessage("home.battle.tested.platforms.running.in.productio.632669a"))}
          intro={translateCopy(translateCopy(englishMessage("home.enterprise.entertainment.and.retail.systems.dab5139")))}
          projects={ALL_HOME_SHOWCASE_PROJECTS}
        />

        {/* 4-Week Cloud Rollout Roadmap */}
        <HowItWorks
          id="how-it-works"
          index={translateCopy(translateCopy(englishMessage("home.04.4.week.rollout.1d8a9d2")))}
          title={translateCopy(englishMessage("home.from.initial.blueprint.to.live.production.39b7fbc"))}
          badge={translateCopy(translateCopy(englishMessage("home.rapid.2.4.week.deployment.private.cloud.vpc.6ba557f")))}
          steps={translateCopy(homeRolloutSteps)}
        />

        {/* Flat-Fee Pricing & Developer Hours */}
        <Pricing
          id="pricing"
          index={translateCopy(translateCopy(englishMessage("home.05.pricing.licensing.98ff57a")))}
          title={translateCopy(englishMessage("home.simple.transparent.flat.pricing.da88b44"))}
          intro={translateCopy(englishMessage("home.flat.one.time.fee.no.recurring.monthly.saas.b2c7d0a"))}
        />

        {/* Comprehensive Multi-Platform FAQ */}
        <Faq
          id="faq"
          index={translateCopy(translateCopy(englishMessage("home.06.frequently.asked.questions.d83952a")))}
          title={translateCopy(englishMessage("home.frequently.asked.questions.d790b40"))}
          intro={translateCopy(translateCopy(englishMessage("home.clear.answers.on.private.cloud.hosting.sourc.ad29a0f")))}
          items={translateCopy(combinedFaqs)}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline={translateCopy(englishMessage("home.ready.to.launch.on.your.own.private.cloud.b2ee231"))}
          description={translateCopy(translateCopy(englishMessage("home.talk.directly.with.our.solutions.engineering.ddd2cc3")))}
          ctaDemo={translateCopy(translateCopy(englishMessage("home.book.platform.walkthrough.9d2dcc8")))}
        />
      </main>

      <Footer />
    </div>
  );
}
