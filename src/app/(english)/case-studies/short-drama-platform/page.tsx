import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Screenshot } from "@/components/ui/Screenshot";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";
import { ShortDramaLiveAccess } from "@/components/sections/ShortDramaLiveAccess";

const title = "Short Drama App Case Study for Vertical Streaming";
const description = "How an entertainment studio launched vertical episode playback, coin unlocks, and a publishing panel on its own cloud.";
const canonical = "/case-studies/short-drama-platform";
const image = "/showcase/microdrama-web-player.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, images: [image] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ShortDramaCaseStudyPage() {
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
        name: "Short Drama",
        item: siteUrl + "/solutions/short-drama",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${siteUrl}/case-studies/short-drama-platform`,
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
            Building a Short Drama Platform for Vertical Episodes
          </AnimatedHeadline>

          <p className="text-lg text-ink-2 leading-relaxed max-w-3xl">
            An entertainment studio needed a mobile player for short vertical episodes. Its team also needed to publish shows and change how viewers unlock episodes without updating the app.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <DemoButton size="sm" tierId={SHORT_DRAMA_PACKAGES.platform}>
              Book a Short Drama walkthrough
            </DemoButton>
            <Link href="/solutions/short-drama" className={buttonClass("secondary", "sm")}>
              View short-drama platform specs
            </Link>
          </div>
        </div>

        <ShortDramaLiveAccess emphasis="both" landing />

        {/* Screenshot (Proportionate showcase framing) */}
        <div className="wrap-wide">
          <Screenshot
            src={image}
            sizes="(min-width: 1088px) 1040px, calc(100vw - 48px)"
            alt="MicroDrama browser player with a vertical video and an episode list"
            caption="MicroDrama demo showing the browser player and episode list."
            className="shadow-md"
          />
        </div>

        {/* Narrative / Highlights */}
        <div className="wrap space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we built</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              The project combined a vertical player, episode unlocks, and a publishing panel on the studio’s cloud.
            </p>
          </div>

          <dl className="divide-y divide-line border-y border-line">
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Vertical episode playback</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                The Flutter player prepares the next episode while viewers watch, reducing the wait when they swipe.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Coin and ad unlocks</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                The team could make early episodes free and require coins or a rewarded ad for selected later episodes.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Cloudflare Stream Integration</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Cloudflare Stream encoded and delivered multiple video quality levels. The studio paid for video usage through its own account.
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

        <section className="wrap space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Project outcome</h2>
          <p className="text-ink-2 leading-relaxed">The studio could publish series, offer free previews, and charge for selected episodes. We scope coin wallets separately for new launches.</p>
          <Link href="/blog/short-drama-app-development" className="inline-block text-sm underline underline-offset-4">
            Read the Short Drama launch guide
          </Link>
        </section>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Launch your short-drama platform</h2>
              <p className="mt-2 text-sm text-ink-2">The platform includes mobile apps, a website, and an admin panel. The source code license is available as an add-on.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <DemoButton size="sm" tierId={SHORT_DRAMA_PACKAGES.platform}>Book a walkthrough</DemoButton>
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
