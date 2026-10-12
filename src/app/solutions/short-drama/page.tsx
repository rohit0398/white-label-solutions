import type { Metadata } from "next";
import { OTT_FAQS, SHORT_DRAMA_BASE_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/sections/SolutionHero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { OttPlayerPreview } from "@/components/widgets/OttPlayerPreview";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { ArrowRight } from "lucide-react";
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
  const faqSchema = generateFaqSchema(OTT_FAQS);
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
      subtitle: "Unified Flutter codebase compiling to native machine code",
      description:
        "High-retention 60FPS vertical swipe gestures with built-in subscription paywalls, chapter scrubbers, rewarded video ads, and automated push notifications when new episodes drop.",
      points: [
        "Fluid vertical swipe navigation optimized for 1–2 minute serialized drama episodes",
        "Granular paywall controls: preview free teaser episodes and gate subsequent cliffhangers",
        "Native Apple In-App Purchase and Google Play Billing for 1-tap subscription purchases",
        "Push notifications (FCM & APNs) to re-engage viewers when new seasons release",
      ],
      screenshot: {
        src: "/showcase/ott-drama-app.jpg",
        alt: "9:16 vertical short-drama mobile app interface",
        caption: "Native 9:16 Drama Apps · 60FPS Swipe · VIP Access · Cloudflare Stream Ingest",
      },
      childLink: {
        href: "/solutions/short-drama-app-development",
        label: "Looking for Mobile Apps only? Explore App-Only Package ($2,999) →",
      },
    },
    {
      n: "02",
      badge: "Web Platform",
      title: "Responsive 9:16 Mobile-First Web Streaming Player",
      subtitle: "Next.js 16 web portal for desktop browsers and mobile web traffic",
      description:
        "Zero-friction browser streaming for social traffic. When viewers tap links on TikTok, Instagram, or YouTube, they land directly on an instant-play web player without waiting to install an app.",
      points: [
        "Sub-second initial frame buffer on Mobile Safari & Chrome via adaptive HLS bitrates",
        "Stripe recurring billing for weekly, monthly & annual VIP streaming passes",
        "Pre-roll & rewarded video ads integration for web browsers",
        "Search-engine-optimized series, episode & synopsis title pages",
      ],
      childLink: {
        href: "/solutions/short-drama-website-development",
        label: "Looking for Web Platform only? Explore Web-Only Package ($2,999) →",
      },
    },
    {
      n: "03",
      badge: "Command Center",
      title: "Video CMS & Episode Paywall Console",
      subtitle: "Central cloud operations, subscriber management, and encoding console",
      description:
        "Your central administrative dashboard. Upload master video files for automated cloud encoding, configure VIP subscriber access, manage video ad placements, track drop-off curves, and export financial reports.",
      points: [
        "Automated transcoding pipeline integration with Cloudflare Stream & AWS MediaConvert",
        "Flexible monetization controls: SVOD subscription passes and Rewarded Ads (AVOD)",
        "Real-time viewer retention analytics: see exact drop-off minute curves per show",
        "Full direct database access and 100% Git repository ownership option",
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
          headline="9:16 Vertical Short-Drama Streaming Platform."
          subtitle="Launch your branded vertical micro-drama streaming platform in 2–4 weeks. Complete Flutter iOS & Android apps, responsive Next.js mobile-web player, VIP subscription passes, rewarded video ads, cliffhanger episode paywalls, and central Video CMS deployed directly onto your private cloud for a flat one-time fee."
          anchors={[
            { label: "01 Live Player Demo", href: "#interactive-demo" },
            { label: "02 Platform Architecture", href: "#architecture" },
            { label: "03 Video CMS Console", href: "#video-cms" },
            { label: "04 4-Week Rollout", href: "#rollout" },
            { label: "05 Production Proof", href: "#production-apps" },
            { label: "06 Pricing ($4,999)", href: "#pricing" },
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
          title="What Is Included in the Flagship Drama Suite"
          intro="A comprehensive 9:16 short-drama software platform. Native mobile apps, responsive mobile-web player, and centralized video operations console deployed inside your cloud."
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

        {/* 4-Week Cloud Rollout Timeline */}
        <HowItWorks
          id="rollout"
          index="03 · 4-Week Deployment"
          title="From Media Catalog to Production App Launch"
          badge="Rapid 2–4 Week Deployment · Private Cloud VPC"
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
          title="Transparent Short-Drama Platform Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no subscriber seat fees, and 0% revenue cut."
          tiers={SHORT_DRAMA_BASE_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Short-Drama Platform Questions"
          intro="Everything you need to know about app publishing, Cloudflare Stream video costs, and source code ownership."
          items={OTT_FAQS}
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
