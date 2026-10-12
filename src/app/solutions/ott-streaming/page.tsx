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
import { HowItWorks } from "@/components/sections/HowItWorks";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { CINEMATIC_OTT_BASE_PRICING_TIERS, OTT_SHOWCASE_PROJECTS, CINEMATIC_OTT_FAQS } from "@/lib/constants";
import {
  Smartphone,
  Tv,
  Download,
  CreditCard,
  Globe,
  Film,
  ShieldCheck,
  Zap,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";

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
  const faqSchema = generateFaqSchema(CINEMATIC_OTT_FAQS);
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
      badge: "Mobile Apps",
      title: "Native 16:9 Widescreen Streaming Apps (iOS & Android)",
      subtitle: "Unified Flutter codebase compiling to native machine code for iOS & Android",
      description:
        "Complete native mobile applications engineered for smartphones and tablets. Features hardware-accelerated 60FPS video playback, offline encrypted downloads, 1-tap TV casting to Chromecast and AirPlay, background audio playback, and native In-App Purchase VIP passes.",
      screenshot: {
        src: "/showcase/ott-streaming-app.jpg",
        alt: "Native 16:9 cinematic mobile streaming app with 4K HDR playback and TV casting",
        caption: "Native Flutter Streaming Apps · 4K HDR & HLS · AirPlay & Chromecast TV Casting",
      },
      childLink: {
        href: "/solutions/ott-app-development",
        label: "Looking for Mobile Apps only? Explore App-Only Package ($2,999) →",
      },
      capabilities: [
        {
          icon: Smartphone,
          title: "Adaptive 60FPS Player",
          desc: "Hardware-accelerated player with HLS adaptive bitrate streaming (4K, 1080p, 720p), dual audio tracks, and sub-second first-frame buffer.",
        },
        {
          icon: Tv,
          title: "1-Tap TV Casting",
          desc: "Zero-latency Apple AirPlay and Google Chromecast streaming with lockscreen playback controls, remote queue management, and picture-in-picture.",
        },
        {
          icon: Download,
          title: "Encrypted Offline Downloads",
          desc: "AES-128 encrypted local video caching allows subscribers to download episodes for offline viewing during flights and travel without piracy risk.",
        },
        {
          icon: CreditCard,
          title: "In-App Subscriptions",
          desc: "Native Apple StoreKit and Google Play Billing integrations for recurring monthly and annual VIP streaming passes with zero third-party cuts.",
        },
      ],
    },
    {
      n: "02",
      badge: "Web & Smart TV",
      title: "Cinematic Streaming Hub & Smart TV Web Portal",
      subtitle: "Next.js 16 web application with adaptive HLS playback and SEO-indexable catalog",
      description:
        "High-speed desktop, tablet, and smart TV-compatible web streaming hub. Delivers dynamic billboard trailers, curated genre shelves, continue-watching synchronization, multi-language WebVTT subtitles, and Stripe recurring subscription checkout.",
      screenshot: {
        src: "/showcase/ott-cinematic-web.jpg",
        alt: "16:9 cinematic video streaming web portal with Cyber Horizon hero billboard",
        caption: "Next.js 16:9 Widescreen Streaming Hub · Continue Watching · Genre Carousels",
      },
      childLink: {
        href: "/solutions/ott-website-development",
        label: "Looking for Website only? Explore Website Package ($2,999) →",
      },
      capabilities: [
        {
          icon: Globe,
          title: "Sub-Second Web Buffer",
          desc: "Powered by HLS.js with intelligent chunk prefetching, automatic bandwidth switching, and full-screen cinema mode across all desktop & tablet browsers.",
        },
        {
          icon: Film,
          title: "Billboard Trailers & Shelves",
          desc: "Netflix-style hero showcase trailer autoplay, curated genre rails, continue-watching synchronization, and interactive season episode drawers.",
        },
        {
          icon: ShieldCheck,
          title: "SEO Catalog Architecture",
          desc: "Server-side rendered series, movie, and actor synopsis pages with Schema.org JSON-LD to capture organic Google search traffic for titles.",
        },
        {
          icon: Zap,
          title: "Stripe Recurring Billing",
          desc: "Native Stripe customer portal for monthly, quarterly, and annual VIP streaming memberships with automatic prorated plan upgrades and invoice handling.",
        },
      ],
    },
    {
      n: "03",
      badge: "Command Center",
      title: "Video CMS & Cloud Transcoding Operations Console",
      subtitle: "Centralized cloud video management, encoding pipelines, and subscriber analytics",
      description:
        "Your self-hosted administrative operations console. Upload master video files for automated multi-bitrate encoding, configure subscription paywalls, protect streams with signed DRM tokens, and inspect real-time viewer retention analytics.",
      screenshot: {
        src: "/showcase/ott-video-cms.jpg",
        alt: "Video CMS & Cloud Transcoding Operations Console with encoding pipelines and subscriber analytics",
        caption: "Video CMS Console · Master Uploads · Cloudflare Stream Ingest · 0% Revenue Cut",
      },
      capabilities: [
        {
          icon: Zap,
          title: "Automated Cloud Transcoding",
          desc: "Connect your Cloudflare Stream or AWS MediaConvert account. Master videos encode automatically into adaptive multi-bitrate HLS streams (1080p, 720p, 480p) with zero egress bandwidth markups.",
        },
        {
          icon: DollarSign,
          title: "SVOD & AVOD Monetization",
          desc: "Configure recurring VIP subscription tiers and VAST/VMAP video advertising placements. Control free preview windows per series with 1 click.",
        },
        {
          icon: ShieldCheck,
          title: "Signed DRM Token Security",
          desc: "Time-limited signed token playback prevents hotlinking, stream ripping, and unauthorized redistribution. Google Widevine and Apple FairPlay compatible.",
        },
        {
          icon: BarChart3,
          title: "Retention & MRR Analytics",
          desc: "Monitor viewer drop-off minute curves per episode, identify top-performing content, track VIP subscription conversion velocity, and export financial reports.",
        },
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
          headline="Cinematic OTT Video Streaming Platform."
          subtitle="Deploy your branded video streaming platform in 2–4 weeks. Complete Next.js 16:9 widescreen web portal, Flutter iOS & Android apps, SVOD recurring subscriptions, AVOD video advertising, DRM signed tokens, and central Video CMS deployed onto your private cloud for a flat one-time fee."
          anchors={[
            { label: "01 Platform Architecture", href: "#architecture" },
            { label: "02 4-Week Rollout", href: "#rollout" },
            { label: "03 Production Work", href: "#production-apps" },
            { label: "04 Pricing ($4,999)", href: "#pricing" },
            { label: "05 FAQ", href: "#faq" },
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

        {/* Architecture & Modules Breakout */}
        <Section
          id="architecture"
          index="01 · Platform Architecture"
          title="What Is Included in the Flagship Cinematic Suite"
          intro="A comprehensive 16:9 widescreen video streaming platform. Native mobile apps, responsive desktop & TV-ready web portal, and centralized video CMS operations console deployed inside your cloud."
          wide
        >
          <div className="space-y-24">
            {modules.map((m) => (
              <div
                key={m.n}
                id={m.n === "03" ? "video-cms" : undefined}
                className="border-t border-line pt-12 space-y-8"
              >
                <div className="max-w-3xl space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-ink-3">{m.n}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-wash border border-line text-ink-2">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{m.title}</h3>
                  <p className="text-xs font-mono text-ink-3">{m.subtitle}</p>
                  <p className="text-sm text-ink-2 leading-relaxed">{m.description}</p>

                  {m.childLink && (
                    <div className="pt-1">
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
                  <div className="group max-w-3xl mx-auto w-full">
                    <Screenshot
                      src={m.screenshot.src}
                      alt={m.screenshot.alt}
                      caption={m.screenshot.caption}
                      className="transition-transform duration-300"
                    />
                  </div>
                )}

                {m.capabilities && m.capabilities.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-line">
                    {m.capabilities.map((c) => {
                      const Icon = c.icon;
                      return (
                        <div key={c.title} className="space-y-2">
                          <div className="flex items-center gap-2 text-ink">
                            <div className="h-7 w-7 rounded-md bg-wash border border-line flex items-center justify-center text-accent">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <h4 className="font-semibold text-sm tracking-tight">{c.title}</h4>
                          </div>
                          <p className="text-xs text-ink-2 leading-relaxed">{c.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* 4-Week Rollout */}
        <HowItWorks
          id="rollout"
          index="02 · 4-Week Deployment"
          title="From Raw Master Video Files to Live Production Service"
          badge="Rapid 2–4 Week Cloud Deployment · AWS / Cloudflare"
          steps={rolloutSteps}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index="03 · Production Experience"
          title="Battle-Tested Video &amp; Entertainment Platforms"
          intro="Our engineering team has built and deployed entertainment streaming applications operating at multi-million scale."
          projects={OTT_SHOWCASE_PROJECTS}
        />

        {/* Dedicated Base Pricing ($4,999 / $1,999 / $20/hr) */}
        <Pricing
          id="pricing"
          index="04 · Pricing &amp; Licensing"
          title="Transparent Cinematic OTT Platform Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no bandwidth markups, and 0% revenue cut."
          tiers={CINEMATIC_OTT_BASE_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="05 · Frequently Asked Questions"
          title="Cinematic OTT Platform Questions"
          intro="Clear answers on video CDN bandwidth economics, transcoding pipelines, DRM signed URLs, and source code ownership."
          items={CINEMATIC_OTT_FAQS}
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
