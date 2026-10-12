import type { Metadata } from "next";
import { OTT_FAQS, CINEMATIC_OTT_APP_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
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
import { OttPlayerPreview } from "@/components/widgets/OttPlayerPreview";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CompleteOttCallout } from "@/components/sections/CompleteOttCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { Smartphone, ShieldCheck, Zap, Download, Tv } from "lucide-react";

export const metadata: Metadata = {
  title: "OTT Mobile App Development Company | iOS, Android & TV Agency | Mechatron Lab",
  description:
    "Enterprise OTT mobile app development company & engineering agency. We build 16:9 widescreen streaming apps for iOS, Android, and Smart TV with AirPlay, Chromecast, and Video CMS.",
  keywords: [
    "ott mobile app development company",
    "video streaming app development agency",
    "netflix clone app development company",
    "flutter video streaming app developers",
    "vod mobile app development agency",
    "smart tv app development company",
    "white label streaming app development agency",
    "custom ott app developers",
  ],
  alternates: {
    canonical: "/solutions/ott-app-development",
  },
  openGraph: {
    title: "OTT Mobile App Development Company | iOS, Android & TV Agency",
    description:
      "Custom 16:9 widescreen OTT streaming app development agency. Native Flutter iOS & Android apps with adaptive HLS playback, TV casting, and Video CMS.",
    url: "/solutions/ott-app-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTT Mobile App Development Company | iOS, Android & TV Agency",
    description:
      "Enterprise OTT streaming app development company. Deploy custom Netflix-style video apps on your private cloud.",
    images: ["/showcase/ott-cinematic-web.jpg"],
  },
};

export default function OttAppDevelopmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Cinematic OTT Mobile App Development", item: "/solutions/ott-app-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(OTT_FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "Cinematic OTT Mobile App Platform (iOS & Android)",
    description:
      "White-label 16:9 cinematic video streaming mobile apps for iOS & Android with adaptive HLS playback, TV casting, VIP subscriptions, and central Video CMS.",
    price: "2999.00",
    url: "/solutions/ott-app-development",
    operatingSystem: "iOS, Android, Android TV",
    applicationCategory: "MultimediaApplication",
    reviewCount: "34",
    siteUrl,
  });

  const tickerItems = [
    { title: "Native Flutter Apps", detail: "iOS & Android · 60FPS Hardware-Accelerated Playback" },
    { title: "Adaptive Bitrates", detail: "Sub-Second Buffer · 1080p, 720p, 480p Auto-Scale" },
    { title: "Chromecast & AirPlay", detail: "1-Tap Big-Screen TV Casting Support" },
    { title: "Offline Storage", detail: "Encrypted Local Downloads for On-the-Go Watching" },
    { title: "Private Cloud", detail: "Deployed to Your AWS / Cloudflare Account in 2–4 Weeks" },
  ];

  const ottAppRolloutSteps = [
    {
      when: "Week 1",
      title: "Mobile App UI Design, Theming & Encoding Pipeline",
      text: "We configure your brand logo, app splash screen, dark cinematic theme tokens, and Cloudflare Stream video credentials.",
    },
    {
      when: "Week 2",
      title: "Private Cloud Video CMS & Multi-Bitrate Ingest",
      text: "We deploy the Video CMS console on your cloud, set up automated HLS encoding, and configure DRM signed playback tokens.",
    },
    {
      when: "Week 3",
      title: "Flutter iOS & Android Compiles + TV Casting",
      text: "We compile native Flutter apps with Apple StoreKit and Google Play Billing for VIP passes, and integrate AirPlay & Chromecast support.",
    },
    {
      when: "Week 4",
      title: "App Store Submissions & Production Delivery",
      text: "We submit both apps under your corporate developer accounts, assist through store approval review, and deliver 100% unencrypted Git repository source code.",
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
            { label: "Cinematic OTT Apps" },
          ]}
          badge="16:9 Widescreen Mobile Architecture · 0% Revenue Cut"
          headline="Cinematic OTT Mobile App Development (iOS &amp; Android)."
          subtitle="Launch your branded Netflix-style video streaming apps for iOS &amp; Android in 2–4 weeks. Native Flutter apps, adaptive HLS multi-bitrate streaming, AirPlay &amp; Chromecast TV streaming, In-App Purchase VIP subscriptions, and central Video CMS deployed directly onto your private cloud for a flat one-time fee."
          anchors={[
            { label: "01 Live Streaming Demo", href: "#interactive-demo" },
            { label: "02 App Capabilities", href: "#app-features" },
            { label: "03 Video CMS Console", href: "#video-cms" },
            { label: "04 4-Week Rollout", href: "#rollout" },
            { label: "05 Production Proof", href: "#production-apps" },
            { label: "06 Pricing ($2,999)", href: "#pricing" },
          ]}
          ctaDemoText="Book streaming app demo"
          tierId="ott-streaming"
          footerNote="Published under your developer accounts · Full source code option · Keep 100% of subscribers"
        />

        {/* Engineering Tech Stack Strip */}
        <TechStackStrip
          mode="ott-app"
          headline="Flutter Native Video Streaming Architecture (iOS, Android &amp; TV)"
          subheadline="60FPS hardware acceleration with DRM playback security"
        />

        {/* Live Ticker */}
        <LiveTicker items={tickerItems} ariaLabel="Cinematic streaming capabilities ticker" />

        {/* Interactive Dual-Format Player Preview Section */}
        <section id="interactive-demo" className="py-16 border-t border-line">
          <div className="wrap-wide space-y-6">
            <OttPlayerPreview />
          </div>
        </section>

        {/* Mobile App Feature Grid */}
        <Section
          id="app-features"
          index="01 · Mobile Streaming Power"
          title="Engineered for Binge-Watching on Every Screen."
          intro="Native mobile applications for iOS and Android optimized for smooth video playback, offline downloads, and seamless big-screen TV casting."
          wide
        >
          <div className="wrap-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Native 60FPS Player</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Hardware-accelerated video decoding with gesture brightness/volume controls, double-tap seek, and picture-in-picture mode.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Tv className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Chromecast &amp; AirPlay</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                1-tap casting to smart TVs, Apple TV, Google TV, and Roku with lockscreen audio controls and remote playback sync.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Download className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Encrypted Downloads</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Offline video playback for flights and commutes. Encrypted local storage protects video assets from extraction.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">In-App VIP Subscriptions</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Native Apple StoreKit and Google Play Billing for monthly and annual VIP passes with zero middleman SaaS rent.
              </p>
            </div>
          </div>
        </Section>

        {/* Video CMS Showcase */}
        <OttCmsShowcase index="02" />

        {/* 4-Week Rollout */}
        <HowItWorks
          id="rollout"
          index="03 · 4-Week Deployment"
          title="From Raw Assets to Live App Store Binaries"
          badge="Rapid 2–4 Week Mobile App Rollout"
          steps={ottAppRolloutSteps}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index="04 · Production Experience"
          title="Battle-Tested Video &amp; Entertainment Platforms"
          intro="Our engineering team has built and deployed entertainment streaming applications operating at multi-million scale."
          projects={OTT_SHOWCASE_PROJECTS}
        />

        {/* Cross-Sell Callout Box to Complete Package */}
        <CompleteOttCallout />

        {/* Dedicated Child Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          id="pricing"
          index="05 · Pricing &amp; Licensing"
          title="Transparent Streaming App Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no bandwidth markups, and 0% revenue cut."
          tiers={CINEMATIC_OTT_APP_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Cinematic OTT Platform Questions"
          intro="Clear answers on video CDN bandwidth economics, transcoding pipelines, DRM signed URLs, and source code ownership."
          items={OTT_FAQS}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your cinematic video streaming apps?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the Flutter widescreen player, the AirPlay/Chromecast integration, and the Video CMS console."
          ctaDemo="Book streaming app walkthrough →"
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
