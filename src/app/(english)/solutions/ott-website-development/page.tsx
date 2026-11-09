import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { CINEMATIC_OTT_FAQS, CINEMATIC_OTT_WEB_PRICING_TIERS, OTT_SOLUTION_PROJECTS } from "@/lib/constants";
import { englishMessage } from "@/lib/messages";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { OttOverview } from "@/components/sections/OttOverview";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CompleteOttCallout } from "@/components/sections/CompleteOttCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { Monitor, Film, ShieldCheck, Zap } from "lucide-react";

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

      <main className="ott-page flex-1">
        <OttOverview offer="web" />

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
              src="/showcase/microdrama-web-player.webp"
              sizes="(min-width: 816px) 768px, calc(100vw - 48px)"
              alt={englishMessage("ShortDrama.top.web.image")}
              caption={englishMessage("OttOverview.microdramaExample")}
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
        <OttCmsShowcase index="02" shortDramaCapture="series" />

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
          projects={OTT_SOLUTION_PROJECTS}
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
          tierId={OTT_PACKAGES.web}
        />
      </main>

      <Footer />
    </div>
  );
}
