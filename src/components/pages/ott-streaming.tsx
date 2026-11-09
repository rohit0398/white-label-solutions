import { createLocalizer, englishMessage } from "@/lib/messages";
import { getLocaleMessages } from "@/lib/locale-messages";

import type { Language } from "@/types";
import { FAMILY_PACKAGE, schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import { LOCALIZED_OTT_SEO } from "@/lib/translations/seo";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { OttOverview } from "@/components/sections/OttOverview";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { ArchitectureModule } from "@/components/sections/ArchitectureModule";
import { ottPlatformModules } from "@/components/sections/streaming-architecture";
import { StreamingRollout } from "@/components/sections/StreamingRollout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { CINEMATIC_OTT_BASE_PRICING_TIERS, CINEMATIC_OTT_FAQS } from "@/lib/constants";

const { title, description } = LOCALIZED_OTT_SEO.en;

export const metadata: Metadata = {
  title,
  description,
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
    title,
    description,
    url: "/solutions/ott-streaming",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/microdrama-catalog.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/showcase/microdrama-catalog.webp"],
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

  return (
    <div data-page-family="ott-streaming" data-page-template="shared" className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="ott-page flex-1">
        <OttOverview offer="platform" />

        <Section
          id="architecture"
          title={englishMessage("StreamingArchitecture.ott.title")}
          intro={englishMessage("StreamingArchitecture.ott.intro")}
          wide
        >
          <div className="space-y-24 sm:space-y-32">
            {ottPlatformModules.map((module) => (
              <ArchitectureModule key={module.title} {...module} />
            ))}
          </div>
        </Section>

        <StreamingRollout family="ott" offer="platform" />

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
          tierId={OTT_PACKAGES.platform}
        />
      </main>

      <Footer />
    </div>
  );
}
