import type { Metadata } from "next";
import Link from "next/link";
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
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { CINEMATIC_OTT_BASE_PRICING_TIERS, OTT_SHOWCASE_PROJECTS, OTT_FAQS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "OTT Platform Development Company | Video Apps | Mechatron Lab",
  description:
    "Launch your branded streaming platform like Netflix in 2–4 weeks. Widescreen web portal, iOS & Android apps, and Video CMS on your private cloud with 0% fees.",
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
    title: "OTT Platform Development Company | Video Apps",
    description:
      "Launch your branded streaming platform like Netflix in 2–4 weeks. Widescreen web portal, iOS & Android apps, and Video CMS on your private cloud with 0% fees.",
    url: "/solutions/ott-streaming",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTT Platform Development Company | Video Apps",
    description:
      "Launch your branded video streaming platform like Netflix in 2–4 weeks on your private cloud with zero commission.",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
};

export default function OttStreamingSolutionPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Cinematic OTT Platform", item: "/solutions/ott-streaming" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(OTT_FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "White-Label Cinematic OTT Platform (Web & Mobile Apps)",
    description:
      "Production-ready white-label OTT streaming platform with Next.js 16:9 widescreen portal, Flutter iOS & Android apps, full cloud ownership and 0% commission.",
    price: "4999.00",
    url: "/solutions/ott-streaming",
    operatingSystem: "Android, iOS, Web, Smart TV",
    applicationCategory: "MultimediaApplication",
    reviewCount: "38",
    siteUrl,
  });

  const ottTickerItems = [
    { title: "Episodic Comedy & Series", detail: "1M+ Viewers · High-Retention Serialized Content" },
    { title: "305+ TV Network", detail: "Live TV Channels & On-Demand · Active Broadcast" },
    { title: "Cloudflare Stream", detail: "Adaptive HLS Bitrate · Zero Bandwidth Markup" },
    { title: "0% Revenue Cut", detail: "Keep 100% of Subscription & Ad Revenue" },
    { title: "Buffer Velocity", detail: "< 1.2s First Frame via Multi-CDN Edge" },
    { title: "Code Custody", detail: "100% Git Repository Access · Zero Vendor Lock-In" },
  ];

  const modules = [
    {
      n: "01",
      badge: "Web & Smart TV",
      title: "16:9 Cinematic Streaming Hub (Next.js 16 Web Portal)",
      subtitle: "Responsive desktop and smart TV web portal with adaptive HLS video streaming",
      description:
        "A high-speed desktop and mobile web portal for your movie catalog, documentaries, and full-length seasons. Features hero billboard video trailers, episode list drawers, continue-watching sync, and indexable SEO title pages.",
      points: [
        "Sub-second initial frame buffer via HLS.js adaptive bitrates (1080p, 720p, 480p, 360p)",
        "Search engine optimized title, series, season & synopsis pages for organic Google traffic",
        "Stripe recurring billing for monthly, quarterly, and annual VIP streaming passes",
        "Multi-language subtitle strips (WebVTT) and picture-in-picture background playback",
      ],
      screenshot: {
        src: "/showcase/ott-cinematic-web.jpg",
        alt: "16:9 cinematic video streaming web portal with Cyber Horizon hero billboard",
        caption: "Next.js 16:9 Widescreen Streaming Hub · Continue Watching · Genre Carousels",
      },
      childLink: {
        href: "/solutions/ott-video-streaming-development",
        label: "Looking for Web Platform only? Explore Web-Only Package ($2,999) →",
      },
    },
    {
      n: "02",
      badge: "Mobile Apps",
      title: "Native 16:9 Widescreen Streaming Apps (iOS & Android)",
      subtitle: "Unified Flutter codebase compiling to native machine code",
      description:
        "Complete native mobile applications for phones and tablets. Features offline encrypted downloads, 1-tap Chromecast and AirPlay TV casting, background audio mode, and In-App Purchase VIP subscriptions.",
      points: [
        "Hardware-accelerated 60FPS video playback with adaptive bitrate auto-scaling",
        "1-tap TV casting via Chromecast and Apple AirPlay with lockscreen playback controls",
        "Encrypted local video downloads for offline playback on airplanes and travel",
        "Apple StoreKit & Google Play Billing integration for recurring monthly/annual VIP passes",
      ],
      childLink: {
        href: "/solutions/ott-app-development",
        label: "Looking for Mobile Apps only? Explore App-Only Package ($2,999) →",
      },
    },
    {
      n: "03",
      badge: "Command Center",
      title: "Video CMS & Monetization Admin Panel",
      subtitle: "Central cloud operations, subscriber management, and encoding console",
      description:
        "Your central administrative dashboard. Upload master video files for automated cloud encoding, configure VIP subscriber access, manage video ad placements, track drop-off curves, and export financial reports.",
      points: [
        "Automated transcoding pipeline integration with Cloudflare Stream & AWS MediaConvert",
        "Flexible monetization controls: SVOD recurring subscription passes and Video Ads (AVOD)",
        "Real-time viewer retention analytics: see exact drop-off minute curves per show",
        "Full direct database access and 100% Git repository ownership option",
      ],
    },
  ];

  const rolloutSteps = [
    {
      when: "Week 1",
      title: "Brand Identity, Paywall Strategy & Catalog Planning",
      text: "We configure your custom branding, logo, color tokens, subscription tiers, and series taxonomy.",
    },
    {
      when: "Week 2",
      title: "Private Cloud Video Encoding Pipeline & CMS Setup",
      text: "We connect Cloudflare Stream and AWS accounts directly under your ownership. Automated transcoding pipelines, DRM signed token authorization, and the Video CMS are deployed.",
    },
    {
      when: "Week 3",
      title: "Flutter Mobile Apps & In-App Purchases Setup",
      text: "Native Android and iOS mobile apps are compiled with your bundle IDs. Apple StoreKit and Google Play Billing are hooked up for VIP passes and video ads.",
    },
    {
      when: "Week 4",
      title: "Store Submission, Security Audits & Production Handover",
      text: "We guide you through Google Play and Apple App Store review, perform production load testing, train your team on the Video CMS, and deliver 100% Git repository access.",
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
            { label: "Cinematic OTT Platform" },
          ]}
          badge="Complete Cinematic OTT Suite (Web + Apps + CMS) · 0% Revenue Cut"
          headline="White-Label 16:9 Cinematic Video Streaming Platform."
          subtitle="Deploy your branded video streaming platform in 2–4 weeks. Complete Next.js 16:9 widescreen web portal, Flutter iOS & Android apps, SVOD recurring subscriptions, AVOD video advertising, DRM signed tokens, and central Video CMS deployed onto your private cloud for a flat one-time fee."
          anchors={[
            { label: "01 Live Streaming Demo", href: "#interactive-demo" },
            { label: "02 Platform Architecture", href: "#architecture" },
            { label: "03 Video CMS Console", href: "#video-cms" },
            { label: "04 4-Week Rollout", href: "#rollout" },
            { label: "05 Production Work", href: "#production-apps" },
            { label: "06 Pricing ($4,999)", href: "#pricing" },
          ]}
          ctaDemoText="Book OTT platform walkthrough"
          tierId="ott-streaming"
          footerNote="Published under your developer accounts · Full source code option · Keep 100% of subscribers"
        />

        {/* Engineering Tech Stack Strip */}
        <TechStackStrip
          mode="ott"
          headline="Enterprise Widescreen Video Architecture (Next.js &amp; Flutter)"
          subheadline="4K HDR and Adaptive 1080p HLS playback on Web, iOS, Android & TV"
        />

        {/* Live Ticker */}
        <LiveTicker items={ottTickerItems} ariaLabel="OTT streaming architecture ticker" />

        {/* Interactive Dual-Format Player Preview Section */}
        <section id="interactive-demo" className="py-16 border-t border-line">
          <div className="wrap-wide space-y-6">
            <OttPlayerPreview />
          </div>
        </section>

        {/* Architecture & Modules Breakout */}
        <Section
          id="architecture"
          index="01 · Platform Architecture"
          title="What Is Included in the Flagship Cinematic Suite"
          intro="A comprehensive 16:9 widescreen video streaming platform. Responsive desktop & TV-ready web portal, native mobile streaming apps, and centralized video CMS deployed inside your cloud."
        >
          <div className="space-y-16">
            {modules.map((m) => (
              <div key={m.n} className="border-t border-line pt-10 grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-ink-3">{m.n}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-wash border border-line text-ink-2">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{m.title}</h3>
                  <p className="text-xs font-mono text-ink-3">{m.subtitle}</p>
                  <p className="text-sm text-ink-2 leading-relaxed">{m.description}</p>
                  <ul className="space-y-2 text-xs text-ink-2 pt-2">
                    {m.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-ink-3 select-none">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {m.childLink && (
                    <div className="pt-3">
                      <Link
                        href={m.childLink.href}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent hover:underline"
                      >
                        <span>{m.childLink.label}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>

                {m.screenshot && (
                  <div className="w-full">
                    <Screenshot
                      src={m.screenshot.src}
                      alt={m.screenshot.alt}
                      caption={m.screenshot.caption}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Video CMS Showcase */}
        <OttCmsShowcase index="02" />

        {/* 4-Week Rollout */}
        <HowItWorks
          id="rollout"
          index="03 · 4-Week Deployment"
          title="From Raw Master Video Files to Live Production Service"
          badge="Rapid 2–4 Week Cloud Deployment · AWS / Cloudflare"
          steps={rolloutSteps}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index="04 · Production Experience"
          title="Battle-Tested Video &amp; Entertainment Platforms"
          intro="Our engineering team has built and deployed entertainment streaming applications operating at multi-million scale."
          projects={OTT_SHOWCASE_PROJECTS}
        />

        {/* Dedicated Base Pricing ($4,999 / $1,999 / $20/hr) */}
        <Pricing
          id="pricing"
          index="05 · Pricing &amp; Licensing"
          title="Transparent Cinematic OTT Platform Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no bandwidth markups, and 0% revenue cut."
          tiers={CINEMATIC_OTT_BASE_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Cinematic OTT Platform Questions"
          intro="Clear answers on video CDN bandwidth economics, transcoding pipelines, DRM signed URLs, and source code ownership."
          items={OTT_FAQS}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your cinematic video streaming platform?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the Next.js widescreen portal, the mobile apps with TV casting, and the Cloudflare Stream video pipeline."
          ctaDemo="Book OTT walkthrough →"
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
