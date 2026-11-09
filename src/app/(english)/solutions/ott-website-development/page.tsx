import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { CINEMATIC_OTT_FAQS, CINEMATIC_OTT_WEB_PRICING_TIERS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { OttOverview } from "@/components/sections/OttOverview";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { ArchitectureModule } from "@/components/sections/ArchitectureModule";
import { ottWebModule } from "@/components/sections/streaming-architecture";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { StreamingRollout } from "@/components/sections/StreamingRollout";
import { CompleteOttCallout } from "@/components/sections/CompleteOttCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

const searchTitle = "OTT Website Development for Movies & Series";
const searchDescription =
  "Launch a branded OTT website with a browsable catalog, widescreen playback, and Stripe subscriptions. Manage movies and series from one admin panel.";

export const metadata: Metadata = {
  title: searchTitle,
  description: searchDescription,
  keywords: [
    "ott video streaming website development",
    "video streaming website development",
    "cinematic ott platform web",
    "netflix clone website",
    "vod website development",
    "custom web streaming platform",
    "hls video streaming web",
  ],
  alternates: {
    canonical: "/solutions/ott-website-development",
  },
  openGraph: {
    title: searchTitle,
    description: searchDescription,
    url: "/solutions/ott-website-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/microdrama-web-genres.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: searchTitle,
    description: searchDescription,
    images: ["/showcase/microdrama-web-genres.webp"],
  },
};

export default function OttWebsiteDevelopmentPage() {
  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Cinematic OTT Website", item: "/solutions/ott-website-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(CINEMATIC_OTT_FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "Cinematic OTT Website Platform",
    description:
      "White-label widescreen video streaming web portal and TV-ready web app with adaptive HLS bitrates, Stripe VIP subscriptions, and central Video CMS.",
    price: schemaPrice("cinematic-web-launch"),
    url: "/solutions/ott-website-development",
    operatingSystem: "Web, Smart TV, macOS, Windows, Linux",
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
        <OttOverview offer="web" />

        <Section id="web-experience" wide>
          <ArchitectureModule heading="h2" {...ottWebModule} />
        </Section>

        <OttCmsShowcase ott />

        <StreamingRollout family="ott" offer="web" />

        {/* Cross-Sell Callout Box to Complete OTT Package */}
        <CompleteOttCallout />

        {/* Dedicated Child Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          id="pricing"
          index="05 · Pricing &amp; Licensing"
          title="Transparent Streaming Website Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no bandwidth markups, and 0% revenue cut."
          tiers={CINEMATIC_OTT_WEB_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQs */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Cinematic OTT Platform Questions"
          intro="Clear answers on video CDN bandwidth economics, transcoding pipelines, DRM signed URLs, and source code ownership."
          items={CINEMATIC_OTT_FAQS}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your video streaming website?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the Next.js widescreen player, the Stripe VIP checkout, and the Video CMS console."
          ctaDemo="Book website walkthrough →"
          tierId={OTT_PACKAGES.web}
        />
      </main>

      <Footer />
    </div>
  );
}
