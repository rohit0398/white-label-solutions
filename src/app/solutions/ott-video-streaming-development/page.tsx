import type { Metadata } from "next";
import { OTT_FAQS, CINEMATIC_OTT_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
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
import { OttPlayerPreview } from "@/components/widgets/OttPlayerPreview";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CompleteOttCallout } from "@/components/sections/CompleteOttCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { Monitor, Film, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "OTT Video Streaming Website Development | 16:9 Web | Mechatron Lab",
  description:
    "Custom 16:9 video streaming websites with adaptive HLS playback, Stripe subscriptions, and Video CMS deployed on your private AWS or Cloudflare in 2–4 weeks.",
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
    canonical: "/solutions/ott-video-streaming-development",
  },
  openGraph: {
    title: "OTT Video Streaming Website Development | 16:9 Web",
    description:
      "Custom 16:9 video streaming websites with adaptive HLS playback, Stripe subscriptions, and Video CMS deployed on your private AWS or Cloudflare in 2–4 weeks.",
    url: "/solutions/ott-video-streaming-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTT Video Streaming Website Development | 16:9 Web",
    description:
      "Custom 16:9 video streaming websites with adaptive HLS playback and Stripe subscriptions deployed in 2–4 weeks.",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
};

export default function OttVideoStreamingDevelopmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Cinematic Video Streaming Platform", item: "/solutions/ott-video-streaming-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(OTT_FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "Cinematic Video Streaming Web Platform (16:9 OTT)",
    description:
      "White-label 16:9 widescreen video streaming web portal and TV-ready web app with adaptive HLS bitrates, Stripe VIP subscriptions, and central Video CMS.",
    price: "2999.00",
    url: "/solutions/ott-video-streaming-development",
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
      title: "Next.js 16:9 Web Streaming Portal & Stripe Checkout",
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
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Cinematic Streaming Portal" },
          ]}
          badge="16:9 Cinematic Video Portal · 4K HDR &amp; HLS · 0% Sales Cut"
          headline="Cinematic Video Streaming Platform Development (16:9 OTT)."
          subtitle="Launch your branded Netflix-style video streaming website in 2–4 weeks. Next.js widescreen portal, adaptive multi-bitrate HLS playback, continue-watching sync, recurring Stripe VIP subscriptions, and Video CMS deployed onto your private cloud with zero monthly software license fees."
          anchors={[
            { label: "01 Live Streaming Demo", href: "#interactive-demo" },
            { label: "02 Web Experience", href: "#web-experience" },
            { label: "03 Video CMS Console", href: "#video-cms" },
            { label: "04 4-Week Rollout", href: "#rollout" },
            { label: "05 Production Proof", href: "#production-apps" },
            { label: "06 Pricing ($2,999)", href: "#pricing" },
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

        {/* Interactive Dual-Format Player Preview Section */}
        <section id="interactive-demo" className="py-16 border-t border-line">
          <div className="wrap-wide space-y-6">
            <OttPlayerPreview />
          </div>
        </section>

        {/* Web Experience Highlights */}
        <Section
          id="web-experience"
          index="01 · Cinema-Grade Experience"
          title="Engineered for Long-Form Movies &amp; Serialized Seasons."
          intro="A desktop and smart TV web interface designed for immersive viewing. Hero billboard video teasers, episode list drawers, and instant resume playback."
          wide
        >
          <div className="wrap-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="font-semibold text-base text-ink">Indexable SEO Metadata</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Server-rendered movie synopsis pages, cast credits, and schema markup to rank directly in Google Video search results.
              </p>
            </div>
          </div>
        </Section>

        {/* Cinematic Web Portal Mockup Showcase */}
        <section className="py-12 border-t border-line">
          <div className="wrap space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-ink-3">02 · Live Web UI Interface</p>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink mt-0.5">
                  16:9 Widescreen Desktop &amp; Smart TV Web Portal
                </h3>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-line bg-wash text-xs font-mono text-ink-2">
                  <Monitor className="h-3.5 w-3.5 text-accent" />
                  <span>16:9 4K HDR Ready</span>
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Screenshot
                src="/showcase/ott-cinematic-web.jpg"
                alt="Production 16:9 cinematic streaming web portal UI with Cyber Horizon hero billboard and 4K HDR badge"
                caption="Next.js 16:9 Widescreen Streaming Hub · Continue Watching · Genre Carousels · Instant Buffer Playback"
              />
            </div>
          </div>
        </section>

        {/* Video CMS Showcase */}
        <OttCmsShowcase index="03" />

        {/* 4-Week Rollout */}
        <HowItWorks
          id="rollout"
          index="04 · 4-Week Deployment"
          title="From Raw Master Video Files to Live Web Service"
          badge="Rapid 2–4 Week Web Platform Rollout"
          steps={ottWebRolloutSteps}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index="05 · Production Experience"
          title="Battle-Tested Video &amp; Entertainment Platforms"
          intro="Our engineering team has built and deployed entertainment streaming applications operating at multi-million scale."
          projects={OTT_SHOWCASE_PROJECTS}
        />

        {/* Cross-Sell Callout Box to Complete Package */}
        <CompleteOttCallout />

        {/* Dedicated Child Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          id="pricing"
          index="06 · Pricing &amp; Licensing"
          title="Transparent Streaming Portal Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no bandwidth markups, and 0% revenue cut."
          tiers={CINEMATIC_OTT_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="07 · Frequently Asked Questions"
          title="Cinematic OTT Platform Questions"
          intro="Clear answers on video CDN bandwidth economics, transcoding pipelines, DRM signed URLs, and source code ownership."
          items={OTT_FAQS}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your cinematic video streaming service?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the Next.js video portal, the adaptive HLS player, and Cloudflare Stream encoding architecture."
          ctaDemo="Book streaming walkthrough →"
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
