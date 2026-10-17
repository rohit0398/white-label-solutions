import type { Metadata } from "next";
import { CINEMATIC_OTT_FAQS, CINEMATIC_OTT_WEB_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
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
import { Screenshot } from "@/components/ui/Screenshot";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CompleteOttCallout } from "@/components/sections/CompleteOttCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { Monitor, Film, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cinematic OTT Website Development | Video Streaming | Mechatron Lab",
  description:
    "Custom video streaming websites with adaptive HLS playback, Stripe subscriptions, and Video CMS deployed on your private AWS or Cloudflare in 2–4 weeks.",
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
    title: "Cinematic OTT Website Development | Video Streaming",
    description:
      "Custom video streaming websites with adaptive HLS playback, Stripe subscriptions, and Video CMS deployed on your private AWS or Cloudflare in 2–4 weeks.",
    url: "/solutions/ott-website-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinematic OTT Website Development | Video Streaming",
    description:
      "Custom video streaming websites with adaptive HLS playback and Stripe subscriptions deployed in 2–4 weeks.",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
};

export default function OttWebsiteDevelopmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

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
    price: "2999.00",
    url: "/solutions/ott-website-development",
    operatingSystem: "Web, Smart TV, macOS, Windows, Linux",
    applicationCategory: "MultimediaApplication",
    reviewCount: "38",
    siteUrl,
  });

  const tickerItems = [
    { title: "Adaptive HLS Bitrates", detail: "Sub-Second Buffer · 1080p, 720p, 480p Auto-Scale" },
    { title: "SVOD Subscriptions", detail: "Direct Stripe Recurring Billing · 0% Revenue Cut" },
    { title: "SEO Title Pages", detail: "Indexable Series, Season & Cast Synopsis Pages" },
    { title: "Wholesale CDN", detail: "Cloudflare Stream / AWS MediaConvert · Raw Cost Billing" },
    { title: "Private Cloud", detail: "Deployed to Your AWS / Cloudflare Account in 2–4 Weeks" },
  ];

  const ottWebRolloutSteps = [
    {
      when: "Week 1",
      title: "Streaming Architecture, UI Design & Domain Configuration",
      text: "We configure your custom streaming domain, SSL certificates, dark cinema color tokens, and Cloudflare Stream credentials.",
    },
    {
      when: "Week 2",
      title: "Private Cloud Video CMS & Multi-Bitrate Transcoding",
      text: "We deploy the Video CMS administrative portal, configure adaptive HLS encoding profiles, and setup signed DRM playback tokens.",
    },
    {
      when: "Week 3",
      title: "Next.js Web Streaming Portal & Stripe Checkout",
      text: "We build your widescreen streaming portal with hero billboard video trailers, continue watching sync, and Stripe recurring VIP billing.",
    },
    {
      when: "Week 4",
      title: "SEO Audits, Video Stress-Testing & Handover",
      text: "We verify Core Web Vitals, validate schema markup for movies and series, and deliver 100% unencrypted Git repository source code.",
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
          category="ott"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Cinematic OTT Website" },
          ]}
          badge="Cinematic Video Portal · 4K HDR &amp; HLS · 0% Sales Cut"
          headline="Cinematic OTT Website Development."
          subtitle="Launch your branded Netflix-style video streaming website in 2–4 weeks. Next.js widescreen portal, adaptive multi-bitrate HLS playback, continue-watching sync, recurring Stripe VIP subscriptions, and Video CMS deployed onto your private cloud with zero monthly software license fees."
          anchors={[
            { label: "01 Web Portal", href: "#web-experience" },
            { label: "02 Video CMS", href: "#video-cms" },
            { label: "03 4-Week Rollout", href: "#rollout" },
            { label: "04 Production Proof", href: "#production-apps" },
            { label: "05 Pricing ($2,999)", href: "#pricing" },
          ]}
          ctaDemoText="Book streaming walkthrough"
          tierId="ott-streaming"
          footerNote="Deployed on your private AWS or Cloudflare cloud · Full source code option · Keep 100% of revenue"
        />

        {/* Engineering Tech Stack Strip */}
        <TechStackStrip
          mode="ott-web"
          headline="Next.js Widescreen Video Architecture &amp; HLS Streaming"
          subheadline="Optimized for desktop browsers and smart TV web clients"
        />

        {/* Live Ticker */}
        <LiveTicker items={tickerItems} ariaLabel="Cinematic streaming capabilities ticker" />

        {/* Web Experience Highlights */}
        <Section
          id="web-experience"
          index="01 · Cinema-Grade Web Architecture"
          title="16:9 Cinematic Streaming Hub & Smart TV Web Portal."
          intro="A desktop and smart TV web interface designed for immersive viewing. Hero billboard video teasers, curated genre rails, episode list drawers, and instant resume playback."
          wide
        >
          <div className="max-w-3xl mx-auto w-full group my-8">
            <Screenshot
              src="/showcase/ott-cinematic-web.jpg"
              alt="16:9 cinematic streaming web portal preview"
              caption="Next.js 16 Widescreen Streaming Portal · Adaptive HLS Player · Auto Continue Watching"
              className="transition-transform duration-300"
            />
          </div>

          <div className="wrap-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-line">
            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Film className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Adaptive 1080p / 4K HLS</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Adaptive bitrate switching auto-scales resolution based on viewer network speed, ensuring instant playback without buffering spinners.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Stripe VIP Subscriptions</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Direct credit card, Apple Pay, and Google Pay billing via Stripe. Configure monthly, quarterly, and annual VIP streaming passes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Monitor className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Continue Watching Sync</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Persistent playback timestamps across sessions. Viewers resume exactly where they paused movies and series episodes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Instant Social Deep-Links</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Shareable links load immediately in mobile browser webviews when clicked from YouTube, Reddit, or X with zero install barriers.
              </p>
            </div>
          </div>
        </Section>

        {/* Video CMS Showcase */}
        <OttCmsShowcase index="02" />

        {/* 4-Week Rollout Timeline */}
        <HowItWorks
          id="rollout"
          index="03 · 4-Week Deployment"
          title="From Media Catalog to Production Website Launch"
          badge="Rapid 2–4 Week Deployment · Private Cloud VPC"
          steps={ottWebRolloutSteps}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index="04 · Production Experience"
          title="Battle-Tested Video &amp; Entertainment Platforms"
          intro="Our engineering team has built and deployed entertainment streaming platforms operating at multi-million scale."
          projects={OTT_SHOWCASE_PROJECTS}
        />

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
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
