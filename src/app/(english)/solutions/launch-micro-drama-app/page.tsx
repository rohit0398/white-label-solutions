import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { SHORT_DRAMA_APP_PRICING_TIERS } from "@/lib/constants";
import { ShortDramaOverview } from "@/components/sections/ShortDramaOverview";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { ArchitectureModule } from "@/components/sections/ArchitectureModule";
import { shortDramaAppModule } from "@/components/sections/streaming-architecture";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { StreamingRollout } from "@/components/sections/StreamingRollout";
import { CompleteShortDramaCallout } from "@/components/sections/CompleteShortDramaCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

const searchTitle = "Launch a Micro Drama App for iOS & Android";
const searchDescription =
  "Launch white-label micro drama apps for iOS and Android. Stream vertical episodes and manage VIP access from one admin panel.";

const faqs = [
  {
    q: "What comes with the Short Drama app package?",
    a: "Branded iOS and Android apps with vertical swipe playback, an admin panel for series and episodes, and controls for free and VIP access.",
  },
  {
    q: "How do viewers pay for VIP access in the app?",
    a: "Set which episodes require VIP access in the admin panel. Viewers subscribe through Apple or Google Play billing on their device.",
  },
  {
    q: "Who submits the apps to the stores?",
    a: "We help prepare and submit the apps through your developer accounts. Apple and Google handle review and approval.",
  },
];

export const metadata: Metadata = {
  title: searchTitle,
  description: searchDescription,
  keywords: [
    "short drama mobile app development",
    "short drama app development company",
    "vertical video streaming app",
    "reelshort clone app developers",
    "dramabox white label app",
    "short drama reels app",
    "flutter video streaming app",
    "short drama app with source code",
  ],
  alternates: {
    canonical: SHORT_DRAMA_PATHS.app,
  },
  openGraph: {
    title: searchTitle,
    description: searchDescription,
    url: SHORT_DRAMA_PATHS.app,
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: searchTitle,
    description: searchDescription,
    images: ["/showcase/ott-drama-app.jpg"],
  },
};

export default function ShortDramaAppDevelopmentPage() {
  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Short-Drama Mobile App Development", item: SHORT_DRAMA_PATHS.app },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(faqs);
  const softwareSchema = generateSoftwareSchema({
    name: "Short-Drama Mobile App Platform (9:16 Vertical Reels)",
    description:
      "Custom white-label 9:16 vertical short-drama streaming app with VIP subscriptions, rewarded video ads, cliffhanger episode paywalls, and Cloudflare Stream encoding.",
    price: schemaPrice("short-drama-app-launch"),
    url: SHORT_DRAMA_PATHS.app,
    operatingSystem: "iOS, Android, Cloud",
    applicationCategory: "EntertainmentApplication",
    siteUrl,
  });

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="short-drama-page flex-1">
        {/* Unified Hero */}
        <ShortDramaOverview offer="app" />

        <Section id="app-architecture" wide>
          <ArchitectureModule heading="h2" {...shortDramaAppModule} />
        </Section>

        <OttCmsShowcase />

        <StreamingRollout family="short-drama" offer="app" />

        {/* Cross-Sell Callout Box to Base Short-Drama Package */}
        <CompleteShortDramaCallout />

        {/* Dedicated Child Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          id="pricing"
          index="05 · Pricing &amp; Licensing"
          title="Transparent Short-Drama App Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no subscriber seat fees, and 0% revenue cut."
          tiers={SHORT_DRAMA_APP_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Short Drama app questions"
          intro=""
          items={faqs}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your 9:16 short-drama streaming app?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the mobile swipe player, the VIP subscription checkout, and the Cloudflare Stream video pipeline."
          ctaDemo="Book short-drama walkthrough →"
          tierId={SHORT_DRAMA_PACKAGES.app}
        />
      </main>

      <Footer />
    </div>
  );
}
