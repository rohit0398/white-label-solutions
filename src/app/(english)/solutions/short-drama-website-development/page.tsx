import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { SHORT_DRAMA_FAQS, SHORT_DRAMA_WEB_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
import { ShortDramaOverview } from "@/components/sections/ShortDramaOverview";
import { SHORT_DRAMA_PACKAGES, SHORT_DRAMA_SCREENSHOT_SIZES } from "@/lib/short-drama-offers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CompleteShortDramaCallout } from "@/components/sections/CompleteShortDramaCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { Globe, ShieldCheck, Zap, Share2 } from "lucide-react";

const searchDescription =
  "Launch a branded short drama website with browser playback, shareable episode links and VIP subscriptions. Publish shows and episodes from one admin panel.";

export const metadata: Metadata = {
  title: "Short-Drama Web Player Development | 9:16 Video | Mechatron Lab",
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
    title: "Short-Drama Web Player Development | 9:16 Video",
    description: searchDescription,
    url: "/solutions/short-drama-website-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Short-Drama Web Player Development | 9:16 Video",
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
  const faqSchema = generateFaqSchema(SHORT_DRAMA_FAQS);
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

  const webRolloutSteps = [
    {
      when: "Week 1",
      title: "Web Portal Theming, Domain Setup & Ingest Pipeline",
      text: "We configure your custom domain, SSL certificates, brand CSS tokens, VIP subscription packages, and Cloudflare Stream credentials.",
    },
    {
      when: "Week 2",
      title: "Video CMS & Automated Adaptive Transcoding",
      text: "We deploy the Video CMS admin console on your private cloud, configure multi-bitrate HLS transcoding, and set up paywall rules.",
    },
    {
      when: "Week 3",
      title: "Next.js Web Streaming Player & Stripe Integration",
      text: "We build your mobile-first responsive web portal with instant-play HLS streaming, social deep-link metadata, and Stripe recurring VIP billing.",
    },
    {
      when: "Week 4",
      title: "SEO Audits, Production Stress-Testing & Delivery",
      text: "We perform Core Web Vitals optimizations, verify automated sitemaps and series schema, and hand over 100% unencrypted Git repository source code.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="short-drama-page flex-1">
        {/* Unified Hero */}
        <ShortDramaOverview offer="web" />

        {/* Web Mechanics Feature Grid */}
        <Section
          id="web-architecture"
          index="01 · Responsive Web Architecture"
          title="Responsive 9:16 Mobile-First Web Streaming Player."
          intro="Frictionless browser playback for viral traffic. When viewers tap your ads on TikTok, Instagram, or YouTube, video playback starts within 800ms directly in their mobile browser with instant Stripe VIP checkout."
          wide
        >
          <div className="max-w-3xl mx-auto w-full group my-8">
            <Screenshot
              sizes={SHORT_DRAMA_SCREENSHOT_SIZES}
              src="/showcase/ott-cinematic-web.jpg"
              alt="Responsive 9:16 mobile-first web streaming player"
              caption="Next.js 16 Web Player · Instant Mobile Web Playback · Stripe Checkout"
              className="transition-transform duration-300"
            />
          </div>

          <div className="wrap-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-line">
            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Zero-Install Instant Play</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                When users tap your ads on TikTok, Instagram, or YouTube, video playback starts within 800ms in their mobile web browser.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Stripe VIP Recurring Pass</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Direct credit card, Apple Pay, and Google Pay billing via Stripe with zero Apple/Google 30% store commission cuts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Share2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Deep-Link Social Sharing</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Every episode has unique indexable OpenGraph tags. Viewers share direct episode links with rich preview thumbnails on WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Rewarded Web Video Ads</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Integrated with Google Ad Manager &amp; VAST video advertising. Non-subscribers watch pre-roll or mid-roll video ads to unlock episodes.
              </p>
            </div>
          </div>
        </Section>

        {/* Video CMS Showcase */}
        <OttCmsShowcase index="02" />

        {/* 4-Week Rollout */}
        <HowItWorks
          id="rollout"
          index="03 · 4-Week Deployment"
          title="From Media Library to Production Web Portal"
          badge="Rapid 2–4 Week Web Platform Rollout"
          steps={webRolloutSteps}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index="04 · Production Experience"
          title="Battle-Tested Video &amp; Entertainment Platforms"
          intro="Our engineering team has built and deployed entertainment streaming applications operating at multi-million scale."
          projects={OTT_SHOWCASE_PROJECTS}
          demoPlatforms="web"
        />

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
          title="Short-Drama Platform Questions"
          intro="Everything you need to know about web video players, Cloudflare Stream bandwidth costs, and source code ownership."
          items={SHORT_DRAMA_FAQS}
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
