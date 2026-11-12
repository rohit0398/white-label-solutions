import { createLocalizer, englishMessage } from "@/lib/messages";
import { getLocaleMessages } from "@/lib/locale-messages";

import type { Language } from "@/types";
import { FAMILY_PACKAGE, schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL, languageAlternates, localizedPath } from "@/lib/site-config";
import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import type { Metadata } from "next";
import { SHORT_DRAMA_FAQS, SHORT_DRAMA_BASE_PRICING_TIERS } from "@/lib/constants";
import { ShortDramaOverview } from "@/components/sections/ShortDramaOverview";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StreamingRollout } from "@/components/sections/StreamingRollout";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { ArchitectureModule } from "@/components/sections/ArchitectureModule";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

import { LOCALIZED_SHORT_DRAMA_SEO } from "@/lib/translations/seo";

const { title, description } = LOCALIZED_SHORT_DRAMA_SEO.en;

export const metadata: Metadata = {
  title,
  description,
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
    canonical: SHORT_DRAMA_PATHS.platform,
    languages: languageAlternates(SHORT_DRAMA_PATHS.platform),
  },
  openGraph: {
    title,
    description,
    url: SHORT_DRAMA_PATHS.platform,
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/showcase/ott-drama-app.jpg"],
  },
};

export default function ShortDramaPlatformPage({ language = "en" }: { language?: Language }) {
  const translateCopy = createLocalizer(language, getLocaleMessages(language));

  const siteUrl = SITE_URL;
  const pagePath = localizedPath(SHORT_DRAMA_PATHS.platform, language);

  const breadcrumbs = [
    { name: translateCopy(englishMessage("ecommerce.home.70f8bb9")), item: language === "en" ? "/" : `/${language}` },
    { name: translateCopy(englishMessage("ecommerce.solutions.05b004a")), item: "/solutions" },
    { name: translateCopy(englishMessage("short-drama.short.drama.streaming.platform.cedf920")), item: pagePath },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(translateCopy(SHORT_DRAMA_FAQS));
  const softwareSchema = generateSoftwareSchema({
    name: translateCopy(englishMessage("short-drama.white.label.9.16.short.drama.platform.apps.w.05ebd68")),
    description:
      translateCopy(englishMessage("short-drama.complete.white.label.9.16.vertical.short.dra.0dcb7d8")),
    price: schemaPrice(FAMILY_PACKAGE["short-drama"]),
    url: pagePath,
    operatingSystem: "iOS, Android, Web, Cloud",
    applicationCategory: "MultimediaApplication",
    siteUrl,
  });

  const modules = [
    {
      id: "architecture-apps",
      title: englishMessage("ShortDrama.architecture.app.title"),
      intro: englishMessage("ShortDrama.architecture.app.intro"),
      points: [
        englishMessage("ShortDrama.top.app.playback"),
        englishMessage("ShortDrama.architecture.app.vip"),
        englishMessage("ShortDrama.architecture.app.publish"),
      ],
      link: { href: SHORT_DRAMA_PATHS.app, label: englishMessage("ShortDrama.architecture.app.link") },
      portrait: true,
      galleryLabel: englishMessage("ShortDrama.top.app.previewCaption"),
      images: [
        { src: "/showcase/microdrama-mobile-feed.webp", alt: englishMessage("ShortDrama.top.app.feedImage") },
        { src: "/showcase/microdrama-mobile-catalog.webp", alt: englishMessage("ShortDrama.top.app.catalogImage") },
        { src: "/showcase/microdrama-mobile-player.webp", alt: englishMessage("ShortDrama.media.mobilePlayer") },
      ],
    },
    {
      id: "architecture-web",
      title: englishMessage("ShortDrama.architecture.web.title"),
      intro: englishMessage("ShortDrama.architecture.web.intro"),
      points: [
        englishMessage("ShortDrama.top.web.sharing"),
        englishMessage("ShortDrama.architecture.web.browse"),
        englishMessage("ShortDrama.top.web.checkout"),
      ],
      link: { href: SHORT_DRAMA_PATHS.web, label: englishMessage("ShortDrama.architecture.web.link") },
      images: [
        { src: "/showcase/microdrama-web-player.webp", alt: englishMessage("ShortDrama.top.web.image") },
        { src: "/showcase/microdrama-catalog.webp", alt: englishMessage("ShortDrama.top.platform.image") },
        { src: "/showcase/microdrama-web-ranked.webp", alt: englishMessage("ShortDrama.media.webRanked") },
        { src: "/showcase/microdrama-web-genres.webp", alt: englishMessage("OttOverview.web.genresImage") },
        { src: "/showcase/microdrama-web-discovery.webp", alt: englishMessage("ShortDrama.media.webDiscovery") },
        { src: "/showcase/microdrama-web-sign-in.webp", alt: englishMessage("ShortDrama.media.webSignIn") },
        { src: "/showcase/microdrama-web-vip-pass.webp", alt: englishMessage("ShortDrama.media.webVip") },
        { src: "/showcase/microdrama-web-account.webp", alt: englishMessage("ShortDrama.media.webAccount") },
      ],
    },
    {
      id: "video-cms",
      title: englishMessage("ShortDrama.top.platform.admin"),
      intro: englishMessage("ShortDrama.architecture.admin.intro"),
      points: [
        englishMessage("ShortDrama.architecture.admin.publish"),
        englishMessage("ShortDrama.architecture.admin.access"),
        englishMessage("ShortDrama.top.platform.analytics"),
      ],
      images: [
        { src: "/showcase/microdrama-admin-series.webp", alt: englishMessage("ShortDrama.media.series") },
        { src: "/showcase/microdrama-admin-episodes.webp", alt: englishMessage("ShortDrama.media.episodes") },
        { src: "/showcase/microdrama-admin-home-sections.webp", alt: englishMessage("ShortDrama.media.adminHomeSections") },
        { src: "/showcase/microdrama-admin-ranked-series.webp", alt: englishMessage("ShortDrama.media.adminRankedSeries") },
        { src: "/showcase/microdrama-admin-overview.webp", alt: englishMessage("ShortDrama.media.adminOverview") },
        { src: "/showcase/microdrama-admin-analytics.webp", alt: englishMessage("ShortDrama.media.analytics") },
        { src: "/showcase/microdrama-admin-sign-in.webp", alt: englishMessage("ShortDrama.media.adminSignIn") },
      ],
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
          title={englishMessage("ShortDrama.architecture.title")}
          intro={englishMessage("ShortDrama.architecture.intro")}
          wide
        >
          <div className="space-y-24 sm:space-y-32">
            {modules.map((module) => (
              <ArchitectureModule key={module.id} {...module} />
            ))}
          </div>
        </Section>

        <StreamingRollout family="short-drama" offer="platform" />

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
