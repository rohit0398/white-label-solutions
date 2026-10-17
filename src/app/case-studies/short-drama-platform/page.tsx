import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Screenshot } from "@/components/ui/Screenshot";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";

export const metadata: Metadata = {
  title: "Case Study: 2.4M+ Short-Drama Streaming Platform | Mechatron Lab",
  description:
    "How an entertainment network scaled a 9:16 vertical short-drama app to 2.4M+ mobile downloads with sub-second HLS pre-caching, coin paywalls, and private cloud deployment.",
  keywords: [
    "short drama app case study",
    "vertical video streaming case study",
    "9:16 mobile micro-series architecture",
    "cloudflare stream video paywall",
    "white label short drama source code",
  ],
  alternates: {
    canonical: "/case-studies/short-drama-platform",
  },
  openGraph: {
    title: "Case Study: 2.4M+ Short-Drama Streaming Platform | Mechatron Lab",
    description:
      "How an entertainment network scaled a 9:16 vertical short-drama app to 2.4M+ mobile downloads with sub-second HLS pre-caching and coin paywalls on private cloud.",
    url: "/case-studies/short-drama-platform",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: 2.4M+ Short-Drama Streaming Platform | Mechatron Lab",
    description:
      "How an entertainment network scaled a 9:16 vertical short-drama app to 2.4M+ downloads with sub-second playback.",
    images: ["/showcase/ott-drama-app.jpg"],
  },
};

export default function ShortDramaCaseStudyPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

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
        name: "Case Studies",
        item: `${siteUrl}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "2.4M+ Short-Drama Streaming Platform",
        item: `${siteUrl}/case-studies/short-drama-platform`,
      },
    ],
  };

  const metrics = [
    {
      value: "2.4M+",
      label: "Mobile App Downloads",
      desc: "Cross-platform iOS and Android installs across global markets",
    },
    {
      value: "99.8%",
      label: "Playback Reliability",
      desc: "Zero-stall video playback via multi-CDN edge pre-caching",
    },
    {
      value: "4.2x",
      label: "Coin Paywall Conversion",
      desc: "Micro-transactions converting 420% higher than traditional monthly SVOD",
    },
    {
      value: "$0",
      label: "Bandwidth Markups",
      desc: "Direct wholesale Cloudflare Stream ingest with 0% middleman markups",
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

      <Navbar />

      <main className="flex-1 py-16 sm:py-24 space-y-20">
        {/* Intro */}
        <div className="wrap space-y-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/solutions/short-drama" className="hover:text-ink">Short Drama</Link>
            <span>/</span>
            <span className="text-ink">Case Study</span>
          </nav>

          <div>
            <HeadingBadge category="drama">
              Case Study · Entertainment &amp; Vertical Video Streaming
            </HeadingBadge>
          </div>

          <AnimatedHeadline
            as="h1"
            variant="drama"
            className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight"
          >
            Scaling a 9:16 Short-Drama Network to 2.4M+ Mobile Viewers on Private Cloud.
          </AnimatedHeadline>

          <p className="text-lg text-ink-2 leading-relaxed max-w-3xl">
            A fast-growing entertainment studio required a mobile-first streaming infrastructure capable of serving millions of vertical episodic video streams. They needed 60FPS vertical swipe responsiveness, in-app coin micro-transactions, automated DRM-grade video encoding, and complete freedom from 30% SaaS recurring revenue taxation.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <DemoButton size="sm">
              Schedule Short-Drama architecture demo →
            </DemoButton>
            <Link href="/solutions/short-drama" className={buttonClass("secondary", "sm")}>
              View short-drama platform specs
            </Link>
          </div>
        </div>

        {/* Screenshot (Proportionate showcase framing) */}
        <div className="wrap max-w-4xl mx-auto">
          <Screenshot
            src="/showcase/ott-drama-app-showcase.jpg"
            alt="9:16 Short-drama mobile player interface with episode drawer and coin paywall"
            caption="Production 9:16 vertical short-drama mobile player with sub-second chapter pre-caching."
            className="shadow-md"
          />
        </div>

        {/* Metrics Strip */}
        <div className="wrap">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-line">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-semibold font-mono text-ink">{m.value}</div>
                <div className="text-xs font-medium text-ink">{m.label}</div>
                <div className="text-[11px] text-ink-3 leading-snug">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative / Highlights */}
        <div className="wrap space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Key Platform Engineering Deliverables</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              By replacing legacy agency development with our production-ready white-label architecture, the network launched on their private cloud VPC within 3 weeks with full Git code ownership.
            </p>
          </div>

          <dl className="divide-y divide-line border-y border-line">
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Sub-50ms Vertical Swipe Engine</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Custom Flutter video playback pipeline that silently pre-buffers the initial 2-second segments of adjacent episodes in memory, eliminating buffering pauses during TikTok-style vertical swiping.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Cliffhanger Coin Paywalls</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Dynamic unlock rules permitting free preview of early chapters while requiring virtual coins or rewarded video ads (AdMob / Unity Ads) for subsequent cliffhangers, maximizing monetization conversion.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Cloudflare Stream Integration</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Automated multi-bitrate HLS encoding and CDN distribution charged at wholesale cloud rates (~$1 per 1,000 viewed minutes) with $0 egress bandwidth markups.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Operations Video CMS</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Full-featured administrative portal for uploading masters, scheduling releases, configuring pricing tiers, and analyzing retention heatmaps across each episode segment.
              </dd>
            </div>
          </dl>
        </div>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Launch your short-drama platform</h2>
              <p className="mt-2 text-sm text-ink-2">Deploy in 2–4 weeks onto your private cloud with 100% code ownership.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <DemoButton size="sm">Book a live demo</DemoButton>
              <Link href="/solutions/short-drama" className={buttonClass("link", "sm")}>
                Platform overview →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
