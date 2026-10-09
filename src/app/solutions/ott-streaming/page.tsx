import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Section } from "@/components/ui/Section";
import { DemoButton } from "@/components/site/DemoButton";
import { BRAND, OTT_PRICING_TIERS, OTT_SHOWCASE_PROJECTS, OTT_FAQS } from "@/lib/constants";
import { ShieldCheck, Clapperboard, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "White-Label OTT Platform & Short-Video Drama Apps | Deployed on Your Cloud",
  description:
    "Production-ready white-label OTT streaming & 9:16 vertical drama apps. Deployed on your Cloudflare/AWS cloud with zero subscriber fees and full source code custody.",
  keywords: [
    "white label ott platform",
    "short video drama app development",
    "reelshort clone app with source code",
    "dramabox white label platform",
    "ready to deploy netflix clone app",
    "production ready streaming app",
    "ott platform one time payment self hosted",
    "video streaming app developers",
  ],
  alternates: {
    canonical: "/solutions/ott-streaming",
    languages: {
      en: "/solutions/ott-streaming",
      es: "/es/solutions/ott-streaming",
      de: "/de/solutions/ott-streaming",
      fr: "/fr/solutions/ott-streaming",
      hi: "/hi/solutions/ott-streaming",
      "x-default": "/solutions/ott-streaming",
    },
  },
  openGraph: {
    title: "Production-Ready White-Label OTT Platform & Short-Drama Apps | Mechatron Lab",
    description:
      "Full-screen 9:16 vertical short dramas or 16:9 cinematic movies. Deployed on your Cloudflare/AWS cloud with 0% platform cuts.",
    url: "/solutions/ott-streaming",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "White-Label OTT Platform & Short Drama Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label OTT Platform & Short-Video Drama Apps | Deployed on Your Cloud",
    description:
      "Production-ready streaming apps: 9:16 vertical drama reels or 16:9 cinematic movies on your private cloud with 0% platform cuts.",
    images: ["/og-image.png"],
  },
};

export default function OttStreamingSolutionPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://white-label-solutions.vercel.app";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: `${siteUrl}/solutions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "OTT & Short Drama Platform",
        item: `${siteUrl}/solutions/ott-streaming`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: OTT_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "White-Label OTT Platform & Short-Video Drama Apps",
    operatingSystem: "Android, iOS, Web, Smart TV",
    applicationCategory: "MultimediaApplication",
    offers: {
      "@type": "Offer",
      price: "4999",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Mechatron Lab Solutions",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "24",
    },
    description:
      "Production-ready white-label OTT streaming platform and 9:16 vertical short-drama apps with full cloud ownership and 0% commission.",
  };

  const ottTickerItems = [
    { title: "Alright", detail: "Episodic Short Series & Comedy · Google Play Active" },
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
      title: "9:16 Vertical Short-Drama App (ReelShort / DramaBox Style)",
      subtitle: "Unified Flutter codebase for Google Play & Apple App Store",
      description:
        "Engineered for the viral micro-drama boom. High-retention 60FPS vertical swipe gestures with built-in subscription episode gating, video ad integration, and automated push notifications when new episodes drop.",
      points: [
        "Smooth vertical swipe navigation optimized for 1–2 minute serialized drama episodes",
        "Granular paywall controls: preview free episodes and require VIP subscriptions or ads",
        "Native Apple In-App Purchase and Google Play Billing for 1-tap subscription purchases",
        "Push notifications to re-engage viewers when new seasons release",
      ],
    },
    {
      n: "02",
      badge: "Web & Smart TV",
      title: "16:9 Cinematic Streaming Hub (Netflix / Prime Style)",
      subtitle: "Next.js video portal with adaptive HLS video streaming",
      description:
        "A responsive desktop and mobile web portal for your movie catalog, documentaries, and full-length seasons. Features hero billboard video trailers, episode list drawers, continue-watching sync, and indexable SEO title pages.",
      points: [
        "Sub-second initial frame buffer via HLS.js adaptive bitrates (1080p, 720p, 480p, 360p)",
        "Search engine optimized title, series, season & synopsis pages for organic Google traffic",
        "Stripe & credit card billing for monthly, quarterly, and annual VIP streaming passes",
        "Multi-language subtitle strips and picture-in-picture background playback",
      ],
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
        "Flexible monetization controls: SVOD subscription passes and Video Ads (AVOD)",
        "Real-time viewer retention analytics: see exact drop-off minute curves per show",
        "Full direct database access and 100% Git repository ownership option",
      ],
    },
  ];

  const monetizationModels = [
    {
      icon: ShieldCheck,
      title: "SVOD Subscriptions",
      badge: "Predictable Recurring MRR",
      desc: "Monthly, quarterly, or annual VIP streaming passes. Direct recurring billing via Stripe, Apple In-App Purchase, and Google Play with zero middleman platform cuts.",
    },
    {
      icon: Clapperboard,
      title: "Video Ads (AVOD)",
      badge: "Ad-Supported Streaming Reach",
      desc: "Integrated with Google AdMob and VAST/VPAID video advertising standards. Monetize free-tier viewers with pre-roll and mid-roll video ads.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="pt-16 sm:pt-28 pb-16 sm:pb-20">
          <div className="wrap space-y-6">
            <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span>/</span>
              <Link href="/solutions" className="hover:text-ink">Solutions</Link>
              <span>/</span>
              <span className="text-ink">OTT &amp; Video Platform</span>
            </nav>

            {/* Ambient Active Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-wash text-xs font-mono text-ink-2 select-none shimmer-badge hover:border-ink/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>Production-ready · 0% Platform Commission</span>
            </div>

            <h1 className="text-[2.3rem] sm:text-[3.5rem] font-semibold tracking-[-0.035em] leading-[1.06] max-w-4xl text-ink">
              Own your video streaming platform. 9:16 vertical drama reels or 16:9 cinematic movies.
            </h1>

            <p className="text-lg sm:text-xl text-ink-2 leading-relaxed max-w-3xl">
              A production-ready white-label streaming solution: Flutter iOS &amp; Android apps, high-speed Next.js web portal, VIP subscription billing &amp; video ad integration, and an automated Cloudflare Stream encoding pipeline deployed directly onto your private cloud.
            </p>

            {/* Living Platform Anchors */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-ink-2">
              <a
                href="#architecture"
                className="animate-float-slow px-2.5 py-1 rounded border border-line bg-paper hover:border-ink hover:text-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
              >
                9:16 Short Drama Reels
              </a>
              <a
                href="#architecture"
                className="animate-float-reverse px-2.5 py-1 rounded border border-line bg-paper hover:border-ink hover:text-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
              >
                16:9 Cinematic Web Hub
              </a>
              <a
                href="#monetization"
                className="animate-float-slow px-2.5 py-1 rounded border border-line bg-paper hover:border-ink hover:text-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
              >
                Subscriptions &amp; Video Ads (AVOD)
              </a>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <DemoButton
                tierId="ott-streaming"
                size="md"
                className="animate-pulse-ink hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.96] transition-all duration-200"
              >
                <span>Book live OTT demo</span>
                <span className="text-paper/70 font-mono text-xs">→</span>
              </DemoButton>

              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 h-11 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/15 hover:border-accent text-accent font-medium text-[15px] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md active:translate-y-0 active:scale-[0.96] transition-all duration-200"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                <span>Chat on WhatsApp</span>
                <span className="text-xs">↗</span>
              </a>

              <a
                href="#live-apps"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-ink underline underline-offset-4 decoration-line hover:decoration-ink active:opacity-75 transition-colors sm:ml-2"
              >
                <span>View production apps</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <p className="pt-4 text-xs font-mono text-ink-3">
              Ready to deploy in 2–4 weeks · 100% full source code ownership option · 0% revenue cut
            </p>
          </div>
        </section>

        {/* 2. Live OTT Streaming Ticker (Reusable Component) */}
        <LiveTicker items={ottTickerItems} ariaLabel="Live streaming platform status and production apps ticker" />

        {/* 3. Architecture & Features */}
        <Section
          id="architecture"
          index="01 · Architecture & Features"
          title="What Is Included in the Deployment"
          intro="A comprehensive video software suite. Mobile apps, web catalog, and video administrative tools configured and deployed inside your cloud."
        >
          <div className="space-y-12">
            {modules.map((m) => (
              <div key={m.n} className="border-t border-line pt-8 grid sm:grid-cols-[4rem_1fr] gap-4">
                <span className="font-mono text-sm text-ink-3 pt-1">{m.n}</span>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{m.title}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-wash border border-line text-ink-2">
                      {m.badge}
                    </span>
                  </div>
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
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. Flexible Revenue Streams (Subscriptions & Ads) */}
        <Section
          id="monetization"
          index="02 · Monetization Engine"
          title="Flexible Revenue Streams"
          intro="Turn casual viewers into paying subscribers or monetize free-tier viewers through digital video advertising standards."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {monetizationModels.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="p-6 rounded-xl border border-line bg-paper space-y-3 hover:border-ink/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-lg bg-wash border border-line flex items-center justify-center text-ink">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-ink pt-1">{m.title}</h3>
                  <p className="text-xs text-ink-2 leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* 5. Infrastructure Economics */}
        <Section
          index="03 · Infrastructure Economics"
          title="Why Self-Hosted Private Cloud Beats Rented SaaS Platforms"
          intro="Traditional video SaaS platforms (Uscreen, Vimeo OTT) charge recurring subscription fees, penalize subscriber growth with $1–$2/sub fees, and mark up bandwidth costs. With our production-ready platform, you own the deployment and pay standard raw cloud wholesale costs directly to your providers without platform markups."
        >
          <div className="p-6 sm:p-8 rounded-2xl border border-line bg-wash space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-xs font-mono text-ink-3">
                    <th className="py-3 pr-4 font-normal">Cost Component</th>
                    <th className="py-3 px-4 font-semibold text-ink">Your Private Cloud Deployment</th>
                    <th className="py-3 pl-4 font-normal">SaaS Video Platforms (Uscreen / Vimeo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-xs sm:text-sm text-ink-2">
                  <tr>
                    <td className="py-3.5 pr-4 text-ink font-medium">Platform Software Fee</td>
                    <td className="py-3.5 px-4 font-mono text-accent font-semibold">$0 / month (No software license rent)</td>
                    <td className="py-3.5 pl-4 font-mono">$199 – $499 / month</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 text-ink font-medium">Per-Subscriber Monthly Tax</td>
                    <td className="py-3.5 px-4 font-mono text-accent font-semibold">0% ($0 per subscriber)</td>
                    <td className="py-3.5 pl-4 font-mono">$1.00 – $2.00 per subscriber / month</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 text-ink font-medium">Cloud Server &amp; Database Cost</td>
                    <td className="py-3.5 px-4 font-mono text-ink font-medium">
                      At raw usage cost (~$30–$80/mo VPS, paid directly to host)
                    </td>
                    <td className="py-3.5 pl-4 font-mono">Bundled with marked-up SaaS lock-in</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 text-ink font-medium">Video Bandwidth &amp; CDN Encoding</td>
                    <td className="py-3.5 px-4 font-mono text-accent font-semibold">
                      ~$1 per 1,000 mins streamed ($0 egress markup via Cloudflare Stream)
                    </td>
                    <td className="py-3.5 pl-4 font-mono">Heavily marked-up bandwidth overage fees</td>
                  </tr>
                  <tr className="font-semibold border-t-2 border-line">
                    <td className="py-4 pr-4 text-ink">Source Code Custody</td>
                    <td className="py-4 px-4 font-mono text-accent font-bold">100% Full Git Ownership</td>
                    <td className="py-4 pl-4 font-mono text-ink">0% (Rented Vendor Lock-In)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* 6. Production Apps Showcase (Reusable Work Component) */}
        <Work
          id="live-apps"
          index="04 · Live Applications"
          title="Production Android &amp; Mobile Video Applications"
          intro="Real applications operating live streaming and episodic short-video series in production."
          projects={OTT_SHOWCASE_PROJECTS}
        />

        {/* 7. How It Works: 4-Week Rollout Timeline */}
        <Section
          index="05 · Deployment Roadmap"
          title="How the Rollout Works"
          intro="From source code configuration to live Google Play and Apple App Store release in 4 structured weeks."
        >
          <ol className="relative border-l border-line ml-1 space-y-12">
            {rolloutSteps.map((s, idx) => (
              <li key={idx} className="pl-8 relative">
                <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-paper border border-ink" />
                <p className="font-mono text-xs text-ink-3">{s.when}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-ink-2 leading-relaxed text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 8. Pricing & Licensing (Reusable Pricing Component with Currency Switcher) */}
        <Pricing
          id="pricing"
          index="06 · Pricing &amp; Licensing"
          title="Transparent, One-Time Pricing"
          intro="No monthly platform software licenses. Complete ownership deployed on your private cloud."
          tiers={OTT_PRICING_TIERS}
          hideCalculator
        />

        {/* 9. FAQ Accordion (Reusable Faq Component) */}
        <Faq
          id="faq"
          index="07 · Frequently Asked Questions"
          title="Everything You Need to Know"
          intro="Clear answers on video streaming infrastructure, licensing, payments, and ownership."
          items={OTT_FAQS}
        />

        {/* 10. Closing Conversion Banner (Reusable Closing Component) */}
        <Closing
          headline="Ready to launch your video streaming service?"
          description="Talk directly with our solutions engineering team. We’ll walk you through the codebase, the interactive Video CMS, and Cloudflare Stream encoding architecture."
          ctaDemo="Book live OTT demo walkthrough →"
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
