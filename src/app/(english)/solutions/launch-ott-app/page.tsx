import { OTT_PATHS } from "@/lib/solution-paths";
import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { CINEMATIC_OTT_APP_PRICING_TIERS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { OttOverview } from "@/components/sections/OttOverview";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { ArchitectureModule } from "@/components/sections/ArchitectureModule";
import { ottAppModule } from "@/components/sections/streaming-architecture";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { StreamingRollout } from "@/components/sections/StreamingRollout";
import { CompleteOttCallout } from "@/components/sections/CompleteOttCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

const searchTitle = "Launch an OTT App for iOS & Android";
const searchDescription =
  "Launch white-label OTT apps for iOS and Android. Stream movies and series with TV casting, offline downloads, and in-app subscriptions.";

const faqs = [
  {
    q: "Which devices does the standard OTT app package cover?",
    a: "It includes apps for iOS and Android. We can review your target casting devices during the walkthrough and scope dedicated TV apps separately.",
  },
  {
    q: "Can viewers watch offline or pay in the apps?",
    a: "The apps support offline video downloads and subscriptions through Apple and Google Play billing. Review those flows in your test build before submission.",
  },
  {
    q: "Can the apps carry live channels or advanced DRM?",
    a: "On-demand playback is included. We scope live channels and Widevine or FairPlay DRM separately based on your content and target devices.",
  },
];

export const metadata: Metadata = {
  title: searchTitle,
  description: searchDescription,
  keywords: [
    "ott mobile app development",
    "video streaming app development",
    "netflix clone app",
    "flutter video streaming app",
    "vod mobile app development",
    "smart tv app development",
    "white label streaming app",
    "custom ott app developers",
  ],
  alternates: {
    canonical: OTT_PATHS.app,
  },
  openGraph: {
    title: searchTitle,
    description: searchDescription,
    url: OTT_PATHS.app,
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/microdrama-catalog.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: searchTitle,
    description: searchDescription,
    images: ["/showcase/microdrama-catalog.webp"],
  },
};

export default function OttAppDevelopmentPage() {
  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Cinematic OTT Mobile App Development", item: OTT_PATHS.app },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(faqs);
  const softwareSchema = generateSoftwareSchema({
    name: "Cinematic OTT Mobile App Platform (iOS & Android)",
    description:
      "White-label 16:9 cinematic video streaming mobile apps for iOS & Android with adaptive HLS playback, TV casting, VIP subscriptions, and central Video CMS.",
    price: schemaPrice("cinematic-app-launch"),
    url: OTT_PATHS.app,
    operatingSystem: "iOS, Android",
    applicationCategory: "MultimediaApplication",
    siteUrl,
  });

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="ott-page flex-1">
        <OttOverview offer="app" />

        <Section id="app-features" wide>
          <ArchitectureModule heading="h2" {...ottAppModule} />
        </Section>

        <OttCmsShowcase ott />

        <StreamingRollout family="ott" offer="app" />

        {/* Cross-Sell Callout Box to Complete Package */}
        <CompleteOttCallout />

        {/* Dedicated Child Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          id="pricing"
          index="05 · Pricing &amp; Licensing"
          title="Transparent Streaming App Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no bandwidth markups, and 0% revenue cut."
          tiers={CINEMATIC_OTT_APP_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="OTT app questions"
          intro=""
          items={faqs}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your cinematic video streaming apps?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the Flutter widescreen player, the AirPlay/Chromecast integration, and the Video CMS console."
          ctaDemo="Book streaming app walkthrough →"
          tierId={OTT_PACKAGES.app}
        />
      </main>

      <Footer />
    </div>
  );
}
