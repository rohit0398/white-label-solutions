import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { Screenshot } from "@/components/ui/Screenshot";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { displayPackagePrice } from "@/lib/pricing-catalog";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import {
  Clock,
  Calendar,
  Tv,
  Film,
  Lock,
  Cast,
  Server,
  ArrowRight,
  Sparkles,
  Smartphone,
} from "lucide-react";

const updated = "2026-11-10";
const title = "OTT Streaming Development Guide for Web and Mobile";
const description = "Plan an OTT streaming service for web and mobile. Compare adaptive playback, content protection, TV casting, and launch costs.";
const guideSections = [
  { id: "platform", label: "Platform components" },
  { id: "playback", label: "Adaptive playback" },
  { id: "content-protection", label: "Content protection" },
  { id: "tv-viewing", label: "TV viewing" },
  { id: "costs", label: "Package and costs" },
  { id: "launch-checklist", label: "Launch checklist" },
];

export const metadata: Metadata = {
  title,
  description,
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
    title,
    description,
    url: "/blog/ott-video-streaming-development",
    type: "article",
    images: ["/showcase/microdrama-catalog.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/showcase/microdrama-catalog.webp"],
  },
};

export default function OttVideoStreamingDevelopmentPage() {
  const siteUrl = SITE_URL;

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
    headline: title,
    description,
    image: [`${siteUrl}/showcase/microdrama-catalog.webp`],
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
    dateModified: updated,
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

      <main className="flex-1 py-14 sm:pt-10 sm:pb-20">
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
              {title}
            </AnimatedHeadline>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-ink-3 pt-2">
              <span>By Mechatron Lab Engineering Team</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={updated}>Updated 10 November 2026</time>
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
              <span>What to plan before building</span>
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Start with your catalog, the devices your audience uses, and the access rules your content licenses require. This guide explains how the browser player, mobile apps, publishing tools, and video delivery fit together. It also covers what to test and budget for before launch.
            </p>
          </div>

          <nav aria-label="Article contents" className="space-y-3 rounded-xl border border-line p-5">
            <h2 className="font-semibold">In this guide</h2>
            <ol className="grid gap-x-6 gap-y-2 text-sm text-ink-2 sm:grid-cols-2">
              {guideSections.map(({ id, label }) => (
                <li key={id}><a href={"#" + id} className="underline underline-offset-4">{label}</a></li>
              ))}
            </ol>
          </nav>

          {/* Section 1: The Modern OTT Platform Anatomy */}
          <section id="platform" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              1. Modern OTT Architecture: Core Building Blocks of a Streaming Service
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Most OTT launches need a viewer experience, a publishing workflow, and a way to deliver video. Choose which screens to support first.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="p-5 rounded-xl border border-line bg-wash/50 space-y-2">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <Film className="h-4 w-4" />
                  <span>16:9 Widescreen Web Portal</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Viewers can browse films and series, open a title page, and watch in the browser. See the{" "}
                  <Link href="/solutions/ott-website-development" className="underline underline-offset-4">OTT website offer</Link>.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-line bg-wash/50 space-y-2">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <Smartphone className="h-4 w-4" />
                  <span>Cross-Platform Native Apps</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  See the{" "}
                  <Link href="/solutions/ott-app-development" className="underline underline-offset-4">OTT app offer</Link>{" "}
                  for widescreen playback, offline viewing, and casting on compatible devices.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-line bg-wash/50 space-y-2">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <Server className="h-4 w-4" />
                  <span>Central Video CMS &amp; Ingest</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Use the admin panel to publish movies and series, manage viewer access, and review viewing data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Adaptive Bitrate Ladder & HLS Delivery */}
          <section id="playback" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              2. How adaptive playback works
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              An adaptive HLS stream offers the same video at several quality levels. The player can switch levels as connection speed changes. The table shows example settings to test against your catalog and devices.
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
              Test startup time, playback interruptions, and quality changes on the connections your audience actually uses.
            </p>
          </section>

          {/* Section 3: Digital Rights Management (DRM) */}
          <section id="content-protection" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              3. Content protection and DRM
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Check your content licenses for any digital rights management (DRM) requirements. Confirm supported devices and browsers before choosing an integration.
            </p>
            <div className="space-y-3 p-5 rounded-xl border border-line bg-wash/40">
              <ul className="space-y-2 text-xs text-ink-2">
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Google Widevine.</strong> A DRM system supported on platforms including Android and Chrome. Verify support on the devices in your launch plan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Apple FairPlay Streaming.</strong> Apple’s DRM for protected HLS playback on supported Apple platforms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Signed playback URLs.</strong> These limit access to video URLs. If your content license requires DRM, scope that separately.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: TV Casting & Cross-Device Sync */}
          <section id="tv-viewing" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              4. TV Casting &amp; Living Room Viewing: Google Cast and Apple AirPlay 2
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Decide whether viewers should cast from a phone or open a dedicated app on the TV. Casting is part of the mobile offer. Dedicated TV apps are custom work.
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
          <section id="costs" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              5. What’s included and what to budget for
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Budget separately for software setup, video storage and delivery, hosting, and payment fees. Our standard package covers on-demand streaming. Source code licensing, live channel ingest, dedicated TV apps, and advanced DRM are scoped separately.
            </p>
            <div className="p-6 rounded-2xl border border-line bg-wash space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <span className="font-semibold text-sm text-ink">OTT Video Streaming Platform</span>
                <span className="text-accent font-mono font-semibold text-sm">{displayPackagePrice(OTT_PACKAGES.platform, "en-US")} one-time deployment</span>
              </div>
              <ul className="space-y-2 text-xs text-ink-2">
                <li>✓ Widescreen streaming website with a browsable catalog</li>
                <li>✓ Native Flutter iOS &amp; Android apps with offline downloading &amp; TV casting</li>
                <li>✓ Central Video CMS with multi-bitrate HLS encoding and signed token security</li>
                <li>✓ Stripe recurring subscription billing (SVOD) &amp; Google AdMob video ads (AVOD)</li>
                <li>✓ Deployed directly into your private AWS, GCP, or Cloudflare accounts</li>
                <li>✓ 0% platform commission · You own all customer accounts and video assets</li>
              </ul>
            </div>
            <Screenshot
              src="/showcase/microdrama-admin-series.webp"
              sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
              alt="MicroDrama admin catalog with series records and publishing controls"
              caption="MicroDrama’s admin panel shows how a video team can organize and publish a series catalog."
            />
          </section>

          <section id="launch-checklist" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">6. OTT launch checklist</h2>
            <p className="text-ink-2 leading-relaxed">
              Use a few real titles to check the whole path from upload to playback. If you’re launching mobile apps, plan for store review after submission.
            </p>
            <LaunchSteps compact steps={[
              { title: "Prepare the first titles", text: "Gather master files, captions, artwork, and release dates. Confirm where and on which devices each title can play." },
              { title: "Set up access and billing", text: "Check which titles viewers can watch for free or with a subscription. Test purchase, renewal, and cancellation." },
              { title: "Test on launch devices", text: "Try playback and resume on real browsers and phones. Test casting or offline downloads if they’re part of your package." },
              { title: "Assign launch responsibilities", text: "Confirm who publishes the site, submits apps, monitors streaming costs, and responds to playback or payment problems." },
            ]} />
            <p className="text-sm leading-relaxed text-ink-2">
              For a custom broadcast example, read the{" "}
              <Link href="/case-studies/ott-streaming-network" className="underline underline-offset-4">live TV and on-demand OTT case study</Link>.
            </p>
          </section>

          <section aria-labelledby="ott-sources" className="space-y-3">
            <h2 id="ott-sources" className="text-xl font-semibold">Technical references</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li><a href="https://developer.apple.com/documentation/http-live-streaming" className="underline underline-offset-4">Apple’s HTTP Live Streaming documentation</a></li>
              <li><a href="https://developers.google.com/widevine/drm/overview" className="underline underline-offset-4">Google’s Widevine overview and supported platforms</a></li>
              <li><a href="https://developer.apple.com/streaming/fps/" className="underline underline-offset-4">Apple’s FairPlay Streaming overview</a></li>
            </ul>
          </section>

          {/* Bottom Conversion Box */}
          <div className="p-8 sm:p-10 rounded-2xl border border-line bg-wash text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-xs font-mono text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Launch Your Cinematic OTT Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink max-w-xl mx-auto">
              See how the OTT platform would work for your catalog
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 max-w-lg mx-auto leading-relaxed">
              See how viewers browse and watch, how your team manages the catalog, and what it takes to deploy on your cloud.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <DemoButton tierId={OTT_PACKAGES.platform} size="md">
                Book a platform walkthrough
              </DemoButton>
              <Link
                href="/solutions/ott-streaming"
                className="inline-flex items-center gap-1.5 px-4 h-11 rounded-md border border-line bg-paper hover:bg-wash text-ink text-xs font-mono font-medium transition-colors"
              >
                <span>Explore the OTT streaming platform</span>
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
