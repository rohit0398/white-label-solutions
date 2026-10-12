import type { Metadata } from "next";
import { OTT_FAQS, SHORT_DRAMA_WEB_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
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
import { OttPlayerPreview } from "@/components/widgets/OttPlayerPreview";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CompleteShortDramaCallout } from "@/components/sections/CompleteShortDramaCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { Globe, ShieldCheck, Zap, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Short-Drama Web Player Development | 9:16 Video | Mechatron Lab",
  description:
    "Launch a mobile-first 9:16 vertical web drama player with sub-second HLS streaming, social deep-links, and Stripe VIP billing on your cloud in 2–4 weeks.",
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
    description:
      "Launch a mobile-first 9:16 vertical web drama player with sub-second HLS streaming, social deep-links, and Stripe VIP billing on your cloud in 2–4 weeks.",
    url: "/solutions/short-drama-website-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Short-Drama Web Player Development | 9:16 Video",
    description:
      "Launch a mobile-first 9:16 vertical web drama player with sub-second HLS streaming and Stripe VIP passes in 2–4 weeks.",
    images: ["/showcase/ott-drama-app.jpg"],
  },
};

export default function ShortDramaWebsiteDevelopmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Short-Drama Web Streaming Development", item: "/solutions/short-drama-website-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(OTT_FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "Short-Drama Web Streaming Platform (9:16 Vertical Player)",
    description:
      "Mobile-first Next.js 9:16 vertical short-drama web streaming portal with sub-second HLS playback, Stripe VIP subscriptions, and central Video CMS.",
    price: "2999.00",
    url: "/solutions/short-drama-website-development",
    operatingSystem: "Web, Mobile Safari, Mobile Chrome",
    applicationCategory: "MultimediaApplication",
    reviewCount: "29",
    siteUrl,
  });

  const tickerItems = [
    { title: "Mobile-First Web", detail: "Sub-Second Next.js 16 Vertical Web Player" },
    { title: "Stripe VIP Subscriptions", detail: "Direct Recurring Billing · 0% Revenue Cut" },
    { title: "Deep-Link Sharing", detail: "Shareable TikTok / IG Episode Links with Instant Play" },
    { title: "Wholesale CDN", detail: "Cloudflare Stream Video Ingest · Zero Egress Fees" },
    { title: "Private Cloud", detail: "Deployed to Your AWS / Cloudflare Account in 2–4 Weeks" },
  ];

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

      <main className="flex-1">
        {/* Unified Hero */}
        <SolutionHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Short-Drama Web Streaming" },
          ]}
          badge="Mobile-First Web Player · Sub-Second HLS · 0% Revenue Cut"
          headline="9:16 Vertical Short-Drama Web Streaming Development."
          subtitle="Launch your branded vertical micro-drama web streaming portal in 2–4 weeks. Sub-second mobile-first HLS player, zero-install instant playback for TikTok & social traffic, recurring Stripe VIP subscriptions, cliffhanger episode gating, and Video CMS deployed onto your private cloud."
          anchors={[
            { label: "01 Live Web Player", href: "#interactive-demo" },
            { label: "02 Web Advantage", href: "#web-mechanics" },
            { label: "03 Video CMS Console", href: "#video-cms" },
            { label: "04 4-Week Rollout", href: "#rollout" },
            { label: "05 Production Proof", href: "#production-apps" },
            { label: "06 Pricing ($2,999)", href: "#pricing" },
          ]}
          ctaDemoText="Book web streaming demo"
          tierId="ott-streaming"
          footerNote="Deployed on your private AWS or Cloudflare cloud · Full source code option · Keep 100% of revenue"
        />

        {/* Engineering Tech Stack Strip */}
        <TechStackStrip
          mode="short-drama-web"
          headline="Sub-Second Mobile-First Web Streaming Stack (Next.js &amp; HLS.js)"
          subheadline="Optimized for instant play and viral social traffic acquisition"
        />

        {/* Live Ticker */}
        <LiveTicker items={tickerItems} ariaLabel="Short-drama streaming capabilities ticker" />

        {/* Interactive Dual-Format Player Preview Section */}
        <section id="interactive-demo" className="py-16 border-t border-line">
          <div className="wrap-wide space-y-6">
            <OttPlayerPreview />
          </div>
        </section>

        {/* Web Mechanics Feature Grid */}
        <Section
          id="web-mechanics"
          index="01 · Social Conversion Advantage"
          title="Frictionless Browser Playback for Viral Traffic."
          intro="Over 70% of viewers drop off when forced to download an app from social ad campaigns. A high-speed web player captures immediate watch time and converts visitors directly."
          wide
        >
          <div className="wrap-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          items={OTT_FAQS}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your 9:16 short-drama web portal?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the mobile web player, the Stripe VIP checkout, and the Cloudflare Stream video pipeline."
          ctaDemo="Book web streaming walkthrough →"
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
