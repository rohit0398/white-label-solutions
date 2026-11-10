import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Screenshot } from "@/components/ui/Screenshot";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";

const title = "OTT Case Study for a Live TV and On-Demand Network";
const description = "How a broadcaster brought scheduled live channels and an on-demand catalog together on its private cloud.";
const canonical = "/case-studies/ott-streaming-network";
const image = "/showcase/ott-cinematic-web.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, images: [image] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function OttStreamingCaseStudyPage() {
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
        name: "OTT Streaming",
        item: siteUrl + "/solutions/ott-streaming",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${siteUrl}/case-studies/ott-streaming-network`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Navbar />

      <main className="flex-1 py-16 sm:pt-12 sm:pb-24 space-y-20">
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
            Building a Live TV and On-Demand OTT Network
          </AnimatedHeadline>

          <p className="text-lg text-ink-2 leading-relaxed max-w-3xl">
            A television and film distributor needed one service for scheduled channels and on-demand titles. Viewers needed a program guide and playback across devices. The distributor wanted to manage subscriber data in its own cloud.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <DemoButton size="sm" tierId={OTT_PACKAGES.platform}>
              Book an OTT walkthrough
            </DemoButton>
            <Link href="/solutions/ott-streaming" className={buttonClass("secondary", "sm")}>
              View OTT platform specs
            </Link>
          </div>
        </div>

        {/* Screenshot */}
        <div className="wrap-wide">
          <Screenshot
            src={image}
            alt="Widescreen OTT product preview featuring a movie catalog"
            caption="Widescreen OTT product preview showing a sample movie catalog."
          />
        </div>

        {/* Narrative / Highlights */}
        <div className="wrap space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we built</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              The project combined on-demand playback with a custom live-channel pipeline, program scheduling, and support for TV viewing.
            </p>
          </div>

          <dl className="divide-y divide-line border-y border-line">
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Adaptive 4K Multi-Bitrate Engine</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                The player could select a video quality level based on connection speed and supported devices.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">24/7 Live Linear Ingest &amp; EPG</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                The network brought live feeds into the platform, scheduled channels in a program guide, and managed audio and captions.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Cross-Platform Casting &amp; TV Apps</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                The project included casting from mobile apps and work for dedicated TV platforms.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">DRM &amp; Tokenized Security</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Signed playback URLs controlled access to streams. DRM compatibility was part of the custom project scope.
              </dd>
            </div>
          </dl>
        </div>

        <section className="wrap space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Project outcome</h2>
          <p className="text-ink-2 leading-relaxed">The network could manage live channels and on-demand titles within the same service. The standard OTT package covers on-demand streaming. We scope live channel ingest, dedicated TV apps, and advanced DRM separately.</p>
          <Link href="/blog/ott-video-streaming-development" className="inline-block text-sm underline underline-offset-4">
            Read the OTT streaming guide
          </Link>
        </section>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Launch your television &amp; OTT network</h2>
              <p className="mt-2 text-sm text-ink-2">Tell us which channels, devices, and catalog you need to support. We’ll scope the broadcast work and optional source code license with you.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <DemoButton size="sm" tierId={OTT_PACKAGES.platform}>Book a walkthrough</DemoButton>
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
