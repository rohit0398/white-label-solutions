import type { Metadata } from "next";
import { SHORT_DRAMA_FAQS, SHORT_DRAMA_BASE_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/sections/SolutionHero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import {
  Smartphone,
  Lock,
  CreditCard,
  Globe,
  Film,
  ShieldCheck,
  Zap,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Short-Drama App Development Company | Video Streaming | Mechatron Lab",
  description:
    "Launch your branded short-drama app like ReelShort in 2–4 weeks. Complete 9:16 iOS & Android apps, web player, and CMS on your private cloud with 0% revenue cut.",
  keywords: [
    "short drama app development company",
    "short drama app development",
    "vertical video streaming app development",
    "reelshort clone app development",
    "dramabox white label platform",
    "micro drama app developers",
    "short video drama app development",
    "custom video streaming development",
    "short drama platform",
    "flutter video streaming app",
  ],
  alternates: {
    canonical: "/solutions/short-drama",
    languages: {
      en: "/solutions/short-drama",
      es: "/es/solutions/short-drama",
      de: "/de/solutions/short-drama",
      fr: "/fr/solutions/short-drama",
      hi: "/hi/solutions/short-drama",
    },
  },
  openGraph: {
    title: "Short-Drama App Development Company | Video Streaming",
    description:
      "Launch your branded short-drama app like ReelShort in 2–4 weeks. Complete 9:16 iOS & Android apps, web player, and CMS on your private cloud with 0% revenue cut.",
    url: "/solutions/short-drama",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Short-Drama App Development Company | Video Streaming",
    description:
      "Launch your branded short-drama app like ReelShort in 2–4 weeks with 0% revenue cut on your private cloud.",
    images: ["/showcase/ott-drama-app.jpg"],
  },
};

export default function ShortDramaPlatformPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Short-Drama Streaming Platform", item: "/solutions/short-drama" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(SHORT_DRAMA_FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "White-Label 9:16 Short-Drama Platform (Apps & Web)",
    description:
      "Complete white-label 9:16 vertical short-drama streaming suite: Flutter iOS & Android apps, Next.js web portal, VIP subscriptions, rewarded video ads, and Video CMS.",
    price: "4999.00",
    url: "/solutions/short-drama",
    operatingSystem: "iOS, Android, Web, Cloud",
    applicationCategory: "MultimediaApplication",
    reviewCount: "48",
    siteUrl,
  });

  const tickerItems = [
    { title: "Native Flutter Apps", detail: "iOS & Android · 60FPS Fluid Vertical Swiper" },
    { title: "Mobile-First Web", detail: "Next.js 16 Vertical Web Player · Sub-Second Buffer" },
    { title: "VIP Subscriptions", detail: "Stripe, Apple StoreKit & Google Play In-App Purchases" },
    { title: "Rewarded Video Ads", detail: "Google AdMob & Unity Ads for Free-Tier Viewers" },
    { title: "Wholesale CDN", detail: "Cloudflare Stream Video Ingest · Zero Egress Fees" },
    { title: "0% Revenue Cut", detail: "Keep 100% of Subscription & Ad Revenue" },
  ];

  const modules = [
    {
      n: "01",
      badge: "Mobile Apps",
      title: "Native 9:16 Vertical Short-Drama Apps (iOS & Android)",
      subtitle: "Unified Flutter codebase compiling to native machine code for iOS & Android",
      description:
        "High-retention 60FPS vertical swipe player engineered for serialized 1–2 minute drama episodes. Includes seamless cliffhanger episode gates, rewarded video ads, push notification re-engagement, and native In-App Purchases.",
      childLink: {
        href: "/solutions/short-drama-app-development",
        label: "Looking for Mobile Apps only? Explore App-Only Package ($2,999) →",
      },
      screenshot: {
        src: "/showcase/ott-drama-app-showcase.jpg",
        alt: "9:16 vertical short-drama mobile app interface",
        caption: "Native 9:16 Drama Apps · 60FPS Swipe · VIP Access · Cloudflare Stream Ingest",
      },
      capabilities: [
        {
          icon: Smartphone,
          title: "60FPS Vertical Swipe Engine",
          desc: "TikTok-speed vertical gesture swiping with instant zero-lag next-episode buffering and dual-resolution caching for uninterrupted binge watching.",
        },
        {
          icon: Lock,
          title: "Cliffhanger Paywall Gates",
          desc: "Automated teaser logic: stream episodes 1–5 free to build viewer obsession, then trigger high-converting VIP subscription or rewarded ad unlock prompts.",
        },
        {
          icon: CreditCard,
          title: "In-App VIP Purchases",
          desc: "Integrated Apple StoreKit & Google Play Billing for 1-tap weekly, monthly, and annual VIP unlimited drama access passes with 0% platform commission.",
        },
        {
          icon: Zap,
          title: "Automated Push Notifications",
          desc: "Targeted FCM and APNs push campaigns alerting active viewers the moment new seasons, exclusive episodes, or trending drama releases drop.",
        },
      ],
    },
    {
      n: "02",
      badge: "Web Platform",
      title: "Responsive 9:16 Mobile-First Web Streaming Player",
      subtitle: "Next.js 16 web player for desktop browsers and direct social media traffic",
      description:
        "Zero-friction browser streaming for social traffic. When viewers tap links on TikTok, Instagram, or YouTube, they land directly on an instant-play web player without waiting to install an app.",
      childLink: {
        href: "/solutions/short-drama-website-development",
        label: "Looking for Website only? Explore Website Package ($2,999) →",
      },
      screenshot: {
        src: "/showcase/ott-cinematic-web.jpg",
        alt: "Responsive mobile-first web streaming player with episode selector and VIP pass",
        caption: "Next.js Web Player · Episode Drawer · VIP Subscription · Instant Browser Playback",
      },
      capabilities: [
        {
          icon: Globe,
          title: "Sub-Second Social Landing",
          desc: "Zero app download friction. Social media campaigns route directly to an instant-play web player with under 800ms initial video start time.",
        },
        {
          icon: Film,
          title: "Slide-Out Episode Drawer",
          desc: "Full season episode queue with visual lock indicators, episode duration badges, and smooth 1-tap switching between season chapters.",
        },
        {
          icon: CreditCard,
          title: "Stripe VIP Subscriptions",
          desc: "Web-native checkout with Apple Pay, Google Pay, and credit cards for recurring weekly and monthly VIP drama streaming passes.",
        },
        {
          icon: ShieldCheck,
          title: "SEO Series & Episode Pages",
          desc: "Server-rendered title synopsis pages and schema markup allowing organic search engines to index your drama series titles and character profiles.",
        },
      ],
    },
    {
      n: "03",
      badge: "Command Center",
      title: "Video CMS & Episode Paywall Operations Console",
      subtitle: "Centralized cloud video encoding, episode teaser rules, and retention analytics",
      description:
        "Your self-hosted administrative operations console. Bulk-upload 100+ drama episodes for automated cloud encoding, configure cliffhanger teaser rules, manage VIP subscriptions, and analyze viewer drop-off minute curves.",
      screenshot: {
        src: "/showcase/ott-video-cms.jpg",
        alt: "Video CMS console with cloud encoding and episode paywall controls",
        caption: "Video CMS Console · Master Uploads · Cloudflare Stream Ingest · 0% Revenue Cut",
      },
      capabilities: [
        {
          icon: Zap,
          title: "Bulk Cloud Transcoding",
          desc: "Batch upload 50–100 vertical episodes simultaneously. Cloudflare Stream encodes each master into multi-bitrate 9:16 HLS streams with zero egress bandwidth markups.",
        },
        {
          icon: DollarSign,
          title: "Dynamic Episode Teaser Rules",
          desc: "Set teaser rules per drama in 1 click. Offer episodes 1–5 free and gate remaining cliffhangers behind recurring VIP subscription passes or rewarded ads.",
        },
        {
          icon: ShieldCheck,
          title: "Signed DRM Token Authorization",
          desc: "Time-limited signed token playback prevents stream ripping, URL hotlinking, and piracy across both web players and mobile apps.",
        },
        {
          icon: BarChart3,
          title: "Cliffhanger Drop-Off Analytics",
          desc: "Inspect minute-by-minute viewer retention graphs to pinpoint which drama cliffhangers drive the highest VIP subscription conversion rates.",
        },
      ],
    },
  ];

  const rolloutSteps = [
    {
      when: "Week 1",
      title: "Brand Identity, Paywall Strategy & Ingest Configuration",
      text: "We configure your custom branding, logo, color tokens, VIP subscription tiers, and Cloudflare Stream video ingest pipelines.",
    },
    {
      when: "Week 2",
      title: "Private Cloud Transcoding & Video CMS Setup",
      text: "We deploy automated multi-bitrate HLS transcoding, signed DRM playback tokens, and the administrative Video CMS directly inside your cloud.",
    },
    {
      when: "Week 3",
      title: "Flutter Mobile Apps & Next.js Web Player",
      text: "Native Android and iOS mobile apps are compiled with your bundle IDs. In-App Purchases and Stripe VIP recurring billing are connected.",
    },
    {
      when: "Week 4",
      title: "Store Submissions, Performance Audits & Handover",
      text: "We guide your team through Apple App Store and Google Play review, perform load tests, and deliver 100% unencrypted Git repository source code.",
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
            { label: "Short-Drama Platform" },
          ]}
          badge="Complete Short-Drama Suite (App + Web + CMS) · 0% Revenue Cut"
          headline="Short-Drama Video Streaming Platform."
          subtitle="Launch your branded vertical micro-drama streaming platform in 2–4 weeks. Complete Flutter iOS & Android apps, responsive Next.js mobile-web player, VIP subscription passes, rewarded video ads, cliffhanger episode paywalls, and central Video CMS deployed directly onto your private cloud for a flat one-time fee."
          anchors={[
            { label: "01 Platform Architecture", href: "#architecture" },
            { label: "02 4-Week Rollout", href: "#rollout" },
            { label: "03 Production Proof", href: "#production-apps" },
            { label: "04 Pricing ($4,999)", href: "#pricing" },
            { label: "05 FAQ", href: "#faq" },
          ]}
          ctaDemoText="Book short-drama suite demo"
          tierId="ott-streaming"
          footerNote="Published under your developer accounts · Full source code option · Keep 100% of sales"
        />

        {/* Engineering Tech Stack Strip */}
        <TechStackStrip
          mode="short-drama"
          headline="Enterprise Video Streaming Architecture. Zero Legacy Overhead."
          subheadline="Deployed to your AWS or Cloudflare account in 2–4 weeks"
        />

        {/* Live Capabilities Ticker */}
        <LiveTicker items={tickerItems} ariaLabel="Short-drama streaming capabilities ticker" />

        {/* Architecture & Modules Breakout */}
        <Section
          id="architecture"
          index="01 · Platform Architecture"
          title="What Is Included in the Flagship Drama Suite"
          intro="A comprehensive 9:16 short-drama software platform. Native mobile apps, responsive mobile-web player, and centralized video operations console deployed inside your cloud."
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

        {/* 4-Week Cloud Rollout Timeline */}
        <HowItWorks
          id="rollout"
          index="02 · 4-Week Deployment"
          title="From Media Catalog to Production App Launch"
          badge="Rapid 2–4 Week Deployment · Private Cloud VPC"
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
          title="Transparent Short-Drama Platform Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no subscriber seat fees, and 0% revenue cut."
          tiers={SHORT_DRAMA_BASE_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="05 · Frequently Asked Questions"
          title="Short-Drama Platform Questions"
          intro="Everything you need to know about app publishing, Cloudflare Stream video costs, and source code ownership."
          items={SHORT_DRAMA_FAQS}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your 9:16 short-drama streaming platform?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the mobile swipe player, the web streaming portal, and the Cloudflare Stream video pipeline."
          ctaDemo="Book short-drama walkthrough →"
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
