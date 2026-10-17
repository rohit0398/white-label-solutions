import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import { BRAND } from "@/lib/constants";
import {
  Clock,
  Calendar,
  CheckCircle2,
  Tv,
  Film,
  Lock,
  Cast,
  ShieldCheck,
  Server,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  ChevronRight,
  Play,
  Zap,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "OTT Video Streaming Development Guide: HLS, DRM & Cloud Architecture | Mechatron Lab",
  description:
    "Engineering guide for building high-scale 16:9 cinematic OTT streaming platforms. Multi-bitrate HLS, Widevine & FairPlay DRM, TV casting, and private cloud deployment.",
  keywords: [
    "ott video streaming platform development",
    "white label ott platform",
    "netflix clone architecture",
    "build ott streaming website",
    "adaptive bitrate hls streaming",
    "widevine drm fairplay streaming",
    "chromecast airplay streaming app",
    "self hosted ott platform",
  ],
  alternates: {
    canonical: "/blog/ott-video-streaming-development",
  },
  openGraph: {
    title: "OTT Video Streaming Development Guide: HLS, DRM & Cloud Architecture",
    description:
      "Engineering guide for building high-scale 16:9 cinematic OTT streaming platforms. Multi-bitrate HLS, Widevine & FairPlay DRM, TV casting, and private cloud deployment.",
    url: "/blog/ott-video-streaming-development",
    type: "article",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTT Video Streaming Development Guide: HLS, DRM & Cloud Architecture",
    description:
      "Learn how to build and deploy cinematic OTT platforms with adaptive HLS, Google Widevine DRM, and TV casting with 0% revenue cut.",
    images: ["/og-image.png"],
  },
};

export default function OttVideoStreamingDevelopmentPage() {
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
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "OTT Video Streaming Development",
        item: `${siteUrl}/blog/ott-video-streaming-development`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: `${siteUrl}/blog/ott-video-streaming-development`,
    headline: "Complete Guide to OTT Video Streaming Development: Adaptive HLS, DRM Security & Private Cloud Architecture",
    description:
      "A comprehensive technical architecture and deployment guide for launching cinematic 16:9 video streaming platforms and mobile/TV apps on private cloud infrastructure.",
    image: [`${siteUrl}/og-image.png`],
    author: {
      "@type": "Organization",
      name: "Mechatron Lab Engineering Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Mechatron Lab Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.svg`,
      },
    },
    datePublished: "2026-10-16",
    dateModified: "2026-10-17",
  };

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
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Navbar />

      <main className="flex-1 py-14 sm:py-20">
        <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Header */}
          <div className="space-y-6 border-b border-line pb-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-ink">Blog</Link>
              <span>/</span>
              <span className="text-ink">OTT Video Streaming Development</span>
            </nav>

            <div>
              <HeadingBadge category="ott">
                Broadcast &amp; OTT Engineering
              </HeadingBadge>
            </div>

            <AnimatedHeadline
              as="h1"
              variant="ott"
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink leading-[1.12]"
            >
              Complete Guide to OTT Video Streaming Development: Adaptive HLS, DRM Security &amp; Private Cloud Architecture
            </AnimatedHeadline>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-ink-3 pt-2">
              <span>By Mechatron Lab Engineering Team</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Updated October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                12 min read
              </span>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="p-6 sm:p-8 rounded-2xl border border-line bg-wash space-y-3">
            <h2 className="text-base font-semibold text-ink flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Executive Summary &amp; Key Architecture Patterns</span>
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Building a modern, Netflix-grade Over-The-Top (OTT) video streaming platform requires solving three complex engineering challenges: delivering buffer-free 4K/1080p playback across diverse network conditions, protecting licensed video assets against unauthorized ripping with studio-grade DRM, and maintaining low infrastructure costs at multi-million viewer scale. This guide examines the modern OTT video pipeline—from cloud encoding ladders to Google Cast / Apple AirPlay TV integration—and demonstrates how deploying onto a private cloud architecture eliminates recurring SaaS fees and preserves 100% of subscriber revenue.
            </p>
          </div>

          {/* Section 1: The Modern OTT Platform Anatomy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              1. Modern OTT Architecture: Core Building Blocks of a Streaming Service
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              A production OTT platform consists of three tightly coupled software tiers:
            </p>
            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="p-5 rounded-xl border border-line bg-wash/50 space-y-2">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <Film className="h-4 w-4" />
                  <span>16:9 Widescreen Web Portal</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Next.js 16 server-rendered portal with sub-second catalog discovery, SEO-optimized title pages, category filtering, and custom HLS.js adaptive player.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-line bg-wash/50 space-y-2">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <Smartphone className="h-4 w-4" />
                  <span>Cross-Platform Native Apps</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Flutter iOS and Android apps with background audio playback, offline video downloading, and hardware-accelerated decoding.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-line bg-wash/50 space-y-2">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <Server className="h-4 w-4" />
                  <span>Central Video CMS &amp; Ingest</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Cloud storage, automated multi-bitrate transcoding, seasonal episode structuring, and SVOD/AVOD access rule configuration.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Adaptive Bitrate Ladder & HLS Delivery */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              2. Adaptive Multi-Bitrate HLS: Delivering Zero-Buffering Video Playback
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Direct MP4 streaming causes severe buffering on mobile networks and fails to adapt when viewer bandwidth fluctuates. Production streaming platforms encode all master video files into an <strong>Adaptive Bitrate (ABR) HLS ladder</strong> (HTTP Live Streaming):
            </p>
            <div className="overflow-x-auto border border-line rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-line bg-wash/60 font-mono text-ink-3">
                    <th className="py-3 px-4 font-medium">Resolution</th>
                    <th className="py-3 px-4 font-medium">Target Bitrate</th>
                    <th className="py-3 px-4 font-medium">Video Codec</th>
                    <th className="py-3 px-4 font-medium">Target Device</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-ink-2">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-ink">4K UHD (2160p)</td>
                    <td className="py-3 px-4 font-mono text-accent">12,000 – 16,000 kbps</td>
                    <td className="py-3 px-4">H.265 / HEVC / AV1</td>
                    <td className="py-3 px-4">Smart TVs, 4K Monitors</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-ink">Full HD (1080p)</td>
                    <td className="py-3 px-4 font-mono text-accent">4,500 – 6,000 kbps</td>
                    <td className="py-3 px-4">H.264 / AAC</td>
                    <td className="py-3 px-4">Desktops, Tablets, High-end Phones</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-ink">HD (720p)</td>
                    <td className="py-3 px-4 font-mono text-accent">2,200 – 3,000 kbps</td>
                    <td className="py-3 px-4">H.264 / AAC</td>
                    <td className="py-3 px-4">Standard 4G Mobile Devices</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-ink">SD (480p / 360p)</td>
                    <td className="py-3 px-4 font-mono text-accent">600 – 1,200 kbps</td>
                    <td className="py-3 px-4">H.264 / AAC</td>
                    <td className="py-3 px-4">Low-bandwidth Cellular &amp; Roaming</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink-3 font-mono leading-relaxed pt-1">
              * The player dynamically switches between bitrate segments every 2 to 6 seconds without interruption as the user’s Wi-Fi or cellular speed shifts.
            </p>
          </section>

          {/* Section 3: Digital Rights Management (DRM) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              3. Digital Rights Management: Studio-Grade Widevine &amp; FairPlay Security
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              When licensing premium films or original studio productions, basic video obfuscation or unencrypted HLS manifests leave content vulnerable to screen recorders and network sniffing tools. A commercial OTT deployment implements:
            </p>
            <div className="space-y-3 p-5 rounded-xl border border-line bg-wash/40">
              <ul className="space-y-2 text-xs text-ink-2">
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Google Widevine DRM (Modular / Level 1 &amp; 3):</strong> Enforces hardware-backed decryption on Android devices, Chrome, and Smart TV platforms (Android TV / Google TV).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Apple FairPlay Streaming (FPS):</strong> Protects video delivery across iOS, iPadOS, macOS Safari, and Apple TV with hardware Secure Enclave key verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Short-Lived HMAC Signed Tokens:</strong> Video chunk requests expire in 60 seconds and are cryptographically bound to the viewer’s active authenticated session and IP address, preventing link sharing.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: TV Casting & Cross-Device Sync */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              4. TV Casting &amp; Living Room Viewing: Google Cast and Apple AirPlay 2
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Over 58% of OTT viewing hours take place on television screens. Building an OTT service without frictionless living room connectivity severely limits viewer engagement.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 pt-1">
              <div className="p-5 rounded-xl border border-line bg-paper space-y-2">
                <div className="flex items-center gap-2 text-ink font-semibold text-xs sm:text-sm">
                  <Cast className="h-4 w-4 text-accent" />
                  <span>Google Cast (Chromecast &amp; Android TV)</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Native receiver application support with synchronized playback controls, volume scrubbers, subtitle track switching, and audio selection directly from the mobile app.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-line bg-paper space-y-2">
                <div className="flex items-center gap-2 text-ink font-semibold text-xs sm:text-sm">
                  <Tv className="h-4 w-4 text-accent" />
                  <span>Apple AirPlay 2 &amp; Watch History Sync</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  One-tap mirroring to Apple TV and AirPlay-compatible smart TVs. Real-time timecode sync automatically saves viewing progress to resume seamlessly across devices.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Economics & Turnkey Deployment */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              5. The Private Cloud Advantage: 0% Revenue Cuts vs. Multi-Tenant SaaS
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Multi-tenant SaaS video platforms extract steep fees: monthly platform subscriptions ($500–$2,000/mo), subscriber seat fees ($0.50–$1.00 per active viewer), and 3% to 15% revenue cuts on every checkout.
            </p>
            <div className="p-6 rounded-2xl border border-line bg-wash space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <span className="font-semibold text-sm text-ink">Complete Cinematic OTT Suite</span>
                <span className="text-accent font-mono font-semibold text-sm">$4,999 Flat One-Time</span>
              </div>
              <ul className="space-y-2 text-xs text-ink-2">
                <li>✓ 16:9 widescreen Next.js 16 web streaming portal with sub-second catalog discovery</li>
                <li>✓ Native Flutter iOS &amp; Android apps with offline downloading &amp; TV casting</li>
                <li>✓ Central Video CMS with multi-bitrate HLS encoding and signed token security</li>
                <li>✓ Stripe recurring subscription billing (SVOD) &amp; Google AdMob video ads (AVOD)</li>
                <li>✓ Deployed directly into your private AWS, GCP, or Cloudflare accounts</li>
                <li>✓ 0% platform commission · You own all customer accounts and video assets</li>
              </ul>
            </div>
          </section>

          {/* Bottom Conversion Box */}
          <div className="p-8 sm:p-10 rounded-2xl border border-line bg-wash text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-xs font-mono text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Launch Your Cinematic OTT Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink max-w-xl mx-auto">
              Schedule a Live Architecture Demo of Our 16:9 Cinematic OTT Platform
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 max-w-lg mx-auto leading-relaxed">
              Test-drive adaptive HLS video streaming, review Video CMS management workflows, and discuss your private cloud deployment with our engineering leads.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <DemoButton tierId="ott-streaming" size="md">
                Book a platform walkthrough
              </DemoButton>
              <Link
                href="/solutions/ott-streaming"
                className="inline-flex items-center gap-1.5 px-4 h-11 rounded-md border border-line bg-paper hover:bg-wash text-ink text-xs font-mono font-medium transition-colors"
              >
                <span>Explore Solution Architecture</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
