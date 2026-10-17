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
  title: "Case Study: 24/7 Linear OTT & 4K Streaming Network | Mechatron Lab",
  description:
    "How a global television & film network deployed a multi-channel linear OTT streaming platform with 300+ live channels, adaptive HLS bitrates, and private cloud deployment.",
  keywords: [
    "linear ott case study",
    "live tv streaming platform architecture",
    "white label ott streaming source code",
    "adaptive hls video cdn architecture",
    "private cloud ott deployment",
  ],
  alternates: {
    canonical: "/case-studies/ott-streaming-network",
  },
  openGraph: {
    title: "Case Study: 24/7 Linear OTT & 4K Streaming Network | Mechatron Lab",
    description:
      "How a global television network deployed a multi-channel linear OTT streaming platform with 300+ live channels, adaptive HLS bitrates, and private cloud hosting.",
    url: "/case-studies/ott-streaming-network",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: 24/7 Linear OTT & 4K Streaming Network | Mechatron Lab",
    description:
      "How a global television network deployed a multi-channel linear OTT streaming platform with 300+ live channels.",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
};

export default function OttStreamingCaseStudyPage() {
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
        name: "24/7 Linear OTT & 4K Streaming Network",
        item: `${siteUrl}/case-studies/ott-streaming-network`,
      },
    ],
  };

  const metrics = [
    {
      value: "300+",
      label: "Live Linear Channels & VOD",
      desc: "Simultaneous 24/7 broadcast feeds alongside thousands of on-demand titles",
    },
    {
      value: "500K+",
      label: "Concurrent Peak Viewers",
      desc: "Stress-tested during marquee live broadcasts with sub-second time-to-first-frame",
    },
    {
      value: "45%",
      label: "Bandwidth Cost Reduction",
      desc: "Multi-tier edge chunk caching minimizing origin server transit surcharges",
    },
    {
      value: "99.95%",
      label: "Broadcast Availability",
      desc: "High-availability redundant stream ingest across distributed cloud edges",
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
            <Link href="/solutions/ott-streaming" className="hover:text-ink">Cinematic OTT</Link>
            <span>/</span>
            <span className="text-ink">Case Study</span>
          </nav>

          <div>
            <HeadingBadge category="ott">
              Case Study · Broadcast OTT &amp; Live Linear Television
            </HeadingBadge>
          </div>

          <AnimatedHeadline
            as="h1"
            variant="ott"
            className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight"
          >
            Deploying a 300+ Channel 24/7 Linear OTT &amp; VOD Network on Private Cloud.
          </AnimatedHeadline>

          <p className="text-lg text-ink-2 leading-relaxed max-w-3xl">
            A major broadcast and digital film distribution network required a multi-screen OTT infrastructure capable of hosting both 24/7 live linear television channels and an extensive VOD catalog. They needed sub-second channel tuning, automated EPG guide scheduling, 4K HDR playback, and full ownership of subscriber data.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <DemoButton size="sm">
              Schedule Cinematic OTT architecture demo →
            </DemoButton>
            <Link href="/solutions/ott-streaming" className={buttonClass("secondary", "sm")}>
              View OTT platform specs
            </Link>
          </div>
        </div>

        {/* Screenshot */}
        <div className="wrap-wide">
          <Screenshot
            src="/showcase/ott-cinematic-web.jpg"
            alt="16:9 Cinematic OTT web streaming portal featuring film showcase and live channels"
            caption="Cinematic 16:9 widescreen web streaming portal with adaptive bitrate HLS player."
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
              Rather than paying exorbitant monthly bandwidth taxes to third-party OTT SaaS vendors, the client deployed our white-label OTT streaming foundation directly onto their corporate cloud with zero recurring platform software fees.
            </p>
          </div>

          <dl className="divide-y divide-line border-y border-line">
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Adaptive 4K Multi-Bitrate Engine</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Dynamic HLS/DASH manifest switching delivering crystal-clear 4K HDR on fast fiber connections while seamlessly downsampling to 480p on congested mobile cellular networks without stutter.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">24/7 Live Linear Ingest &amp; EPG</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Automated RTMP/SRT stream ingest pipeline with electronic program guide (EPG) grid scheduling, multi-audio language tracks, and closed caption subtitle compliance.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Cross-Platform Casting &amp; TV Apps</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Unified Flutter mobile applications featuring 1-tap Google Chromecast and Apple AirPlay integration, alongside native Android TV, Apple TV, and FireTV application architectures.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">DRM &amp; Tokenized Security</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Signed HMAC-SHA256 URL tokenization with Google Widevine and Apple FairPlay DRM compatibility, preventing stream ripping, unauthorized hotlinking, and credential sharing.
              </dd>
            </div>
          </dl>
        </div>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Launch your television &amp; OTT network</h2>
              <p className="mt-2 text-sm text-ink-2">Deploy in 2–4 weeks onto your private cloud with 100% code ownership.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <DemoButton size="sm">Book a live demo</DemoButton>
              <Link href="/solutions/ott-streaming" className={buttonClass("link", "sm")}>
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
