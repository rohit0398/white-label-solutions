import type { Metadata } from "next";
import { SHORT_DRAMA_FAQS, SHORT_DRAMA_APP_PRICING_TIERS, OTT_SHOWCASE_PROJECTS } from "@/lib/constants";
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
import { Screenshot } from "@/components/ui/Screenshot";
import { OttCmsShowcase } from "@/components/sections/OttCmsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CompleteShortDramaCallout } from "@/components/sections/CompleteShortDramaCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";
import { Smartphone, Zap, ShieldCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Short-Drama Mobile App Development | iOS & Android | Mechatron Lab",
  description:
    "Build a custom 9:16 short-drama mobile app with 60FPS vertical swipe, VIP passes, and in-app ads. Published to App Store & Google Play in 2–4 weeks with 0% fees.",
  keywords: [
    "short drama mobile app development",
    "short drama app development company",
    "vertical video streaming app",
    "reelshort clone app developers",
    "dramabox white label app",
    "short drama reels app",
    "flutter video streaming app",
    "short drama app with source code",
  ],
  alternates: {
    canonical: "/solutions/short-drama-app-development",
  },
  openGraph: {
    title: "Short-Drama Mobile App Development | iOS & Android",
    description:
      "Build a custom 9:16 short-drama mobile app with 60FPS vertical swipe, VIP passes, and in-app ads. Published to App Store & Google Play in 2–4 weeks with 0% fees.",
    url: "/solutions/short-drama-app-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/showcase/ott-drama-app.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Short-Drama Mobile App Development | iOS & Android",
    description:
      "Build a custom 9:16 short-drama mobile app with 60FPS vertical swipe, VIP passes, and private cloud deployment in 2–4 weeks.",
    images: ["/showcase/ott-drama-app.jpg"],
  },
};

export default function ShortDramaAppDevelopmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Short-Drama Mobile App Development", item: "/solutions/short-drama-app-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(SHORT_DRAMA_FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "Short-Drama Mobile App Platform (9:16 Vertical Reels)",
    description:
      "Custom white-label 9:16 vertical short-drama streaming app with VIP subscriptions, rewarded video ads, cliffhanger episode paywalls, and Cloudflare Stream encoding.",
    price: "2999.00",
    url: "/solutions/short-drama-app-development",
    operatingSystem: "iOS, Android, Cloud",
    applicationCategory: "EntertainmentApplication",
    reviewCount: "42",
    siteUrl,
  });

  const tickerItems = [
    { title: "Vertical Swiper", detail: "Native 60FPS Flutter Gesture Mechanics" },
    { title: "VIP Subscriptions", detail: "Apple StoreKit & Google Play In-App Purchases" },
    { title: "Rewarded Video Ads", detail: "Google AdMob & Unity Ads for Free-Tier Unlocks" },
    { title: "Wholesale CDN", detail: "Cloudflare Stream Video Ingest · Zero Egress Fees" },
    { title: "0% Revenue Cut", detail: "Keep 100% of Subscription & Ad Revenue" },
    { title: "Deployment Speed", detail: "Production App Store Launch in 2–4 Weeks" },
  ];

  const appRolloutSteps = [
    {
      when: "Week 1",
      title: "UI Theming, Iconography & Paywall Configuration",
      text: "We configure your brand assets, splash screens, dark mode palette, VIP pass tiers, and Cloudflare Stream credentials.",
    },
    {
      when: "Week 2",
      title: "Private Cloud Video CMS & Video Ingest Pipeline",
      text: "We deploy the Video CMS console on your cloud, hook up automated 9:16 video encoding, and configure signed playback token verification.",
    },
    {
      when: "Week 3",
      title: "Flutter iOS & Android Compiles + StoreKit Billing",
      text: "We build native Flutter binaries, integrate Apple In-App Purchase and Google Play Billing, and hook up Google AdMob rewarded video ads.",
    },
    {
      when: "Week 4",
      title: "App Store Submission & Production Deployment",
      text: "We submit both apps under your corporate developer accounts, assist through store approval review, and deliver full unencrypted Git repository access.",
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
          category="drama"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Short-Drama Apps" },
          ]}
          badge="ReelShort &amp; DramaBox Architecture · 0% Revenue Cut"
          headline="Short-Drama Mobile App Development."
          subtitle="Launch your branded vertical micro-drama streaming apps for iOS &amp; Android in 2–4 weeks. Native Flutter apps, addictive 60FPS swipe mechanics, recurring VIP subscriptions, rewarded video ads, cliffhanger episode paywalls, and central Video CMS deployed directly onto your private cloud for a flat one-time fee."
          anchors={[
            { label: "01 Mobile App", href: "#app-architecture" },
            { label: "02 Video CMS", href: "#video-cms" },
            { label: "03 4-Week Rollout", href: "#rollout" },
            { label: "04 Production Proof", href: "#production-apps" },
            { label: "05 Pricing ($2,999)", href: "#pricing" },
          ]}
          ctaDemoText="Book short-drama demo"
          tierId="ott-streaming"
          footerNote="Published under your developer accounts · Full source code option · Keep 100% of sales"
        />

        {/* Engineering Tech Stack Strip */}
        <TechStackStrip
          mode="short-drama-app"
          headline="Native Mobile App Architecture (Flutter &amp; Cloudflare Stream)"
          subheadline="Native 60FPS rendering on iOS and Android devices"
        />

        {/* Live Ticker */}
        <LiveTicker items={tickerItems} ariaLabel="Short-drama streaming capabilities ticker" />

        {/* Feature Highlights Grid */}
        <Section
          id="app-architecture"
          index="01 · Native Mobile App Architecture"
          title="Native 9:16 Vertical Short-Drama Apps (iOS & Android)."
          intro="Unified Flutter codebase compiling to native machine code. High-retention 60FPS vertical swipe player engineered for serialized 1–2 minute drama episodes with cliffhanger paywall gates and VIP subscription checkout."
          wide
        >
          <div className="max-w-3xl mx-auto w-full group my-8">
            <Screenshot
              src="/showcase/ott-drama-app-showcase.jpg"
              alt="Native 9:16 vertical short-drama mobile app interface"
              caption="Native Flutter 9:16 Drama App · 60FPS Swipe Physics · VIP Episode Gating · AdMob Rewarded Video"
              className="transition-transform duration-300"
            />
          </div>

          <div className="wrap-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-line">
            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Fluid 60FPS Swipe</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Native Flutter gesture physics. Users swipe vertically to advance to the next episode with pre-cached zero-buffering transitions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">VIP Subscriptions (SVOD)</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Weekly, monthly, and annual VIP streaming passes via Apple StoreKit and Google Play Billing with 0% middleman platform fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Automated Episode Gating</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Configure free preview episodes (e.g., Ep 1–5 free) and gate the remaining 60–80 episodes behind VIP passes or rewarded video ads.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-line bg-wash/40 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-base text-ink">Rewarded Video Ads (AVOD)</h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                Integrated with Google AdMob &amp; Unity Ads. Free-tier viewers watch a 30s rewarded video ad to unlock their next episode for free.
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
          title="From Raw Assets to Google Play & App Store"
          badge="Rapid 2–4 Week Mobile App Rollout"
          steps={appRolloutSteps}
        />

        {/* Work / Production Showcase */}
        <Work
          id="production-apps"
          index="04 · Production Experience"
          title="Battle-Tested Video &amp; Entertainment Applications"
          intro="Our engineering team has built and deployed entertainment streaming applications operating at multi-million scale."
          projects={OTT_SHOWCASE_PROJECTS}
        />

        {/* Cross-Sell Callout Box to Base Short-Drama Package */}
        <CompleteShortDramaCallout />

        {/* Dedicated Child Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          id="pricing"
          index="05 · Pricing &amp; Licensing"
          title="Transparent Short-Drama App Pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no subscriber seat fees, and 0% revenue cut."
          tiers={SHORT_DRAMA_APP_PRICING_TIERS}
          hideCalculator
        />

        {/* FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Short-Drama Platform Questions"
          intro="Everything you need to know about app publishing, Cloudflare Stream video costs, and source code ownership."
          items={SHORT_DRAMA_FAQS}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch your 9:16 short-drama streaming app?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the mobile swipe player, the VIP subscription checkout, and the Cloudflare Stream video pipeline."
          ctaDemo="Book short-drama walkthrough →"
          tierId="ott-streaming"
        />
      </main>

      <Footer />
    </div>
  );
}
