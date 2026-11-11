import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { SHORT_DRAMA_WEB_PRICING_TIERS } from "@/lib/constants";
import { ShortDramaOverview } from "@/components/sections/ShortDramaOverview";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { ArchitectureModule } from "@/components/sections/ArchitectureModule";
import { shortDramaWebModule } from "@/components/sections/streaming-architecture";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { StreamingRollout } from "@/components/sections/StreamingRollout";
import { CompleteShortDramaCallout } from "@/components/sections/CompleteShortDramaCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

const searchTitle = "Short Drama Website Development for Vertical Video";
const searchDescription =
  "Launch a branded short drama website with browser playback, shareable episode links and VIP subscriptions. Publish shows and episodes from one admin panel.";

const faqs = [
  {
    q: "Do viewers need to download an app?",
    a: "Viewers can open a shared episode link and watch directly in a supported browser. The website package includes the vertical player and publishing panel.",
  },
  {
    q: "How does VIP checkout work on the website?",
    a: "Choose which episodes are free or VIP in the admin panel. Viewers can subscribe through Stripe checkout on the website.",
  },
  {
    q: "Can we launch the website first and add apps later?",
    a: "Yes. The website package launches on its own. Tell us what you need when you are ready to add iOS and Android apps.",
  },
];

export const metadata: Metadata = {
  title: searchTitle,
  description: searchDescription,
  keywords: [
    "short drama website development",
    "short drama web player",
    "vertical video web player",
    "reelshort web player development",
    "mobile first video streaming website",
    "custom web video player development",
    "vertical drama web platform",
  ],
  alternates: {
    canonical: "/solutions/short-drama-website-development",
  },
  openGraph: {
    title: searchTitle,
    description: searchDescription,
    url: "/solutions/short-drama-website-development",
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

export default function ShortDramaWebsiteDevelopmentPage() {
  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Short-Drama Web Streaming Development", item: "/solutions/short-drama-website-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(faqs);
  const softwareSchema = generateSoftwareSchema({
    name: "Short-Drama Web Streaming Platform (9:16 Vertical Player)",
    description:
      "Mobile-first Next.js 9:16 vertical short-drama web streaming portal with sub-second HLS playback, Stripe VIP subscriptions, and central Video CMS.",
    price: schemaPrice("short-drama-web-launch"),
    url: "/solutions/short-drama-website-development",
    operatingSystem: "Web, Mobile Safari, Mobile Chrome",
    applicationCategory: "MultimediaApplication",
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
        <ShortDramaOverview offer="web" />

        <Section id="web-architecture" wide>
          <ArchitectureModule heading="h2" {...shortDramaWebModule} />
        </Section>

        <OttCmsShowcase />

        <StreamingRollout family="short-drama" offer="web" />

        {/* Cross-Sell Callout Box to Base Short-Drama Package */}
        <CompleteShortDramaCallout />

        {/* Dedicated Child Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          id="pricing"
          index="05 · Pricing &amp; Licensing"
          title="Transparent Short-Drama Web Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no subscriber seat fees, and 0% revenue cut."
          tiers={SHORT_DRAMA_WEB_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Short Drama website questions"
          intro=""
          items={faqs}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your 9:16 short-drama web portal?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the mobile web player, the Stripe VIP checkout, and the Cloudflare Stream video pipeline."
          ctaDemo="Book web streaming walkthrough →"
          tierId={SHORT_DRAMA_PACKAGES.web}
        />
      </main>

      <Footer />
    </div>
  );
}
