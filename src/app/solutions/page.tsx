import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { ShoppingBag, Globe, Smartphone, Clapperboard, Layers, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "White-Label Software Solutions Catalog | Mechatron Lab",
  description:
    "Explore pre-built software platforms for e-commerce, 9:16 short drama, and OTT video streaming. Private cloud deployment with 100% code ownership & 0% fees.",
  keywords: [
    "white label software solutions",
    "white label ecommerce platform",
    "white label ott video streaming",
    "short drama app clone source code",
    "production ready software deployment",
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "White-Label Software Solutions Catalog | Mechatron Lab",
    description:
      "Explore pre-built software platforms for e-commerce, 9:16 short drama, and OTT video streaming. Private cloud deployment with 100% code ownership & 0% fees.",
    url: "/solutions",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label Software Solutions Catalog | Mechatron Lab",
    description:
      "Explore pre-built software platforms for e-commerce, 9:16 short drama, and OTT video streaming with 0% fees.",
    images: ["/og-image.png"],
  },
};

export default function SolutionsCatalogPage() {
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
        name: "Solutions",
        item: `${siteUrl}/solutions`,
      },
    ],
  };

  const solutions = [
    {
      id: "ecommerce",
      title: "Pre-Built E-Commerce Store & Mobile Apps",
      subtitle: "Ready-to-launch Next.js storefront, Flutter mobile apps & Admin CRM",
      badge: "Complete ($4,999)",
      icon: ShoppingBag,
      href: "/solutions/ecommerce",
      status: "Ready for Deployment",
      stats: [
        { label: "Deployment Speed", val: "2–4 Weeks" },
        { label: "Platform Take Rate", val: "0% Cut" },
        { label: "Mobile Apps", val: "iOS & Android" },
      ],
      points: [
        "Pre-built, production-ready architecture designed for rapid deployment in 2–4 weeks",
        "Sub-second Next.js web storefront with automated tax & inventory sync",
        "Unified Flutter mobile app published directly to your Google Play & App Store accounts",
        "Pre-integrated payment gateways (Stripe, PayPal, UPI, COD) with 0% transaction fees",
      ],
      cta: "Explore E-Commerce Store & Apps →",
    },
    {
      id: "ecommerce-website-development",
      title: "E-Commerce Website Development",
      subtitle: "Sub-second Next.js web storefront & central operations CRM",
      badge: "Web Only ($2,999)",
      icon: Globe,
      href: "/solutions/ecommerce-website-development",
      status: "Ready for Deployment",
      stats: [
        { label: "Page Speed", val: "< 0.9s Next.js" },
        { label: "Platform Cut", val: "0% Commission" },
        { label: "Deployment", val: "Your Cloud" },
      ],
      points: [
        "Sub-second React Server Components web store optimized for Google Core Web Vitals",
        "Operations Admin CRM with multi-warehouse stock management and margin tracking",
        "Automated tax compliance generating GST, EU VAT, or US sales-tax invoices per order",
        "Pre-integrated payment gateways (Stripe, PayPal, Apple Pay, Google Pay, UPI, COD)",
      ],
      cta: "Explore Web Development →",
    },
    {
      id: "ecommerce-app-development",
      title: "E-Commerce Mobile App Development",
      subtitle: "Native iOS & Android mobile shopping apps built with Flutter",
      badge: "Mobile Apps",
      icon: Smartphone,
      href: "/solutions/ecommerce-app-development",
      status: "Ready for Deployment",
      stats: [
        { label: "Rendering Speed", val: "60 FPS Flutter" },
        { label: "App Store Cut", val: "0% (Exempt)" },
        { label: "Platforms", val: "iOS & Android" },
      ],
      points: [
        "Unified Flutter 3.x codebase compiling directly to native iOS and Android machine code",
        "100% approval guarantee published directly under your corporate Apple & Google Play accounts",
        "Free unlimited push notifications (FCM & APNs) for abandoned cart recovery and order tracking",
        "1-tap fast checkout with Apple Pay, Google Pay, Stripe, PayPal, Razorpay & biometric sign-in",
      ],
      cta: "Explore Mobile App Development →",
    },
    // --- 9:16 Short-Drama Solutions ---
    {
      id: "short-drama",
      title: "9:16 Short-Drama Streaming Platform",
      subtitle: "Complete mobile apps, mobile-web player & central Video CMS",
      badge: "Complete ($4,999)",
      icon: Clapperboard,
      href: "/solutions/short-drama",
      status: "Flagship Drama Suite",
      stats: [
        { label: "Formats", val: "iOS + Android + Web" },
        { label: "Monetization", val: "SVOD + Rewarded Ads" },
        { label: "Bandwidth Egress", val: "$0 (Cloudflare)" },
      ],
      points: [
        "Complete 9:16 vertical drama platform: Flutter iOS & Android apps and mobile-first web player",
        "TikTok-style 60FPS vertical swipe gestures with chapter scrubbers and continuous autoplay",
        "Weekly, monthly & annual VIP subscription passes via Stripe, Apple StoreKit & Google Play",
        "Video CMS with automated Cloudflare Stream encoding and episode paywall rule controls",
      ],
      cta: "Explore Complete Drama Suite →",
    },
    {
      id: "short-drama-app-development",
      title: "Short-Drama Mobile App Development",
      subtitle: "Native 9:16 iOS & Android vertical drama apps + Video CMS",
      badge: "Mobile Apps ($2,999)",
      icon: Smartphone,
      href: "/solutions/short-drama-app-development",
      status: "Ready for Deployment",
      stats: [
        { label: "Rendering", val: "60 FPS Flutter" },
        { label: "Monetization", val: "VIP + Video Ads" },
        { label: "Deployment", val: "2–4 Weeks" },
      ],
      points: [
        "Native Flutter iOS & Android apps with seamless 60FPS vertical swipe gesture mechanics",
        "In-App Purchase VIP subscriptions via Apple StoreKit and Google Play Billing",
        "Rewarded video ads (Google AdMob / Unity Ads) to unlock cliffhanger episodes for free",
        "Cloudflare Stream raw ingest integration with 0% platform revenue cut",
      ],
      cta: "Explore Drama Mobile App →",
    },
    {
      id: "short-drama-website-development",
      title: "Short-Drama Web Streaming Development",
      subtitle: "Mobile-first 9:16 vertical web streaming portal + Video CMS",
      badge: "Web Only ($2,999)",
      icon: Globe,
      href: "/solutions/short-drama-website-development",
      status: "Ready for Deployment",
      stats: [
        { label: "Format", val: "9:16 Mobile-Web" },
        { label: "Monetization", val: "Stripe VIP Passes" },
        { label: "Buffer Speed", val: "< 1.0s HLS" },
      ],
      points: [
        "Sub-second Next.js 16 vertical web player with instant social media deep-link autoplay",
        "Direct Stripe recurring VIP subscription checkout with 0% app-store commission tax",
        "Central Video CMS with episode paywall rules, DRM signed URLs, and viewer drop-off analytics",
        "Search-engine-optimized series, episode & synopsis title pages for viral organic reach",
      ],
      cta: "Explore Drama Web Platform →",
    },

    // --- 16:9 Cinematic OTT Solutions ---
    {
      id: "ott-streaming",
      title: "Cinematic OTT Video Platform",
      subtitle: "16:9 widescreen Next.js web portal, native mobile apps & Video CMS",
      badge: "Complete ($4,999)",
      icon: Clapperboard,
      href: "/solutions/ott-streaming",
      status: "Flagship Streaming",
      stats: [
        { label: "Platforms", val: "Web + iOS + Android" },
        { label: "Monetization", val: "SVOD + Video Ads" },
        { label: "Encoding", val: "1080p / 4K ABR" },
      ],
      points: [
        "Complete 16:9 video platform: Next.js widescreen web portal and Flutter iOS & Android apps",
        "Sub-second buffer via adaptive HLS bitrates on Cloudflare Stream & AWS MediaConvert",
        "Recurring SVOD subscription passes (monthly/annual) and Google AdMob / VAST video ads",
        "Video CMS with viewer retention curves, DRM signed token authorization, and catalog tools",
      ],
      cta: "Explore Complete OTT Platform →",
    },
    {
      id: "ott-video-streaming-development",
      title: "Cinematic Video Streaming Platform",
      subtitle: "16:9 widescreen streaming web portal & adaptive HLS bitrates",
      badge: "Web Only ($2,999)",
      icon: Globe,
      href: "/solutions/ott-video-streaming-development",
      status: "Ready for Deployment",
      stats: [
        { label: "Resolution", val: "4K HDR / 1080p" },
        { label: "Monetization", val: "Stripe SVOD" },
        { label: "Bitrates", val: "Adaptive HLS" },
      ],
      points: [
        "Next.js 16 responsive widescreen web portal for movies, documentaries, and full seasons",
        "Sub-second initial frame buffer via adaptive HLS bitrates on multi-CDN edge",
        "Stripe recurring billing for monthly, quarterly, and annual VIP streaming passes",
        "Search engine optimized series, cast, and episode synopsis pages for organic traffic",
      ],
      cta: "Explore Cinematic Streaming Portal →",
    },
    {
      id: "ott-app-development",
      title: "Cinematic OTT Mobile App Development",
      subtitle: "Native 16:9 widescreen iOS & Android streaming apps + Video CMS",
      badge: "Mobile Apps ($2,999)",
      icon: Smartphone,
      href: "/solutions/ott-app-development",
      status: "Ready for Deployment",
      stats: [
        { label: "Platforms", val: "iOS & Android" },
        { label: "Features", val: "AirPlay + Chromecast" },
        { label: "Offline", val: "Encrypted Downloads" },
      ],
      points: [
        "Hardware-accelerated 60FPS video playback with adaptive bitrate auto-scaling",
        "1-tap TV casting via Chromecast and Apple AirPlay with lockscreen playback controls",
        "Encrypted local video downloads for offline playback during flights and road trips",
        "Apple StoreKit & Google Play Billing integration for recurring monthly/annual VIP passes",
      ],
      cta: "Explore Streaming Mobile Apps →",
    },
  ];

  const upcomingSolutions = [
    {
      title: "On-Demand Delivery & Logistics",
      desc: "Multi-branch dispatch engine, real-time rider GPS tracking, and vendor portals.",
      eta: "Q3 2026",
    },
    {
      title: "EdTech & Learning Management (LMS)",
      desc: "Course video streaming, student progress tracking, quizzes, and recurring certificates.",
      eta: "Q4 2026",
    },
    {
      title: "Multi-Vendor B2B Marketplace",
      desc: "Wholesale ordering, quotation workflows, tiered merchant commission splits, and net-30 terms.",
      eta: "Custom Inquiry",
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
        {/* Header */}
        <div className="wrap space-y-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink">Solutions</span>
          </nav>

          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-wash text-xs font-mono text-ink-2 select-none shimmer-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Production Architectures · 100% Cloud Ownership</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Production-Ready White-Label Software Architectures
          </h1>

          <p className="text-lg sm:text-xl text-ink-2 leading-relaxed max-w-3xl">
            Production-grade, fully customized digital platforms built for scale. Deployed directly into your company’s private cloud with zero platform cuts and complete Git source code ownership.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <DemoButton size="md">
              Schedule solutions consultation →
            </DemoButton>
            <Link href="/compare/shopify-alternative" className={buttonClass("secondary", "md")}>
              Compare vs SaaS subscriptions
            </Link>
          </div>
        </div>

        {/* Live Flagship Solutions Grid */}
        <div className="wrap space-y-10">
          <div className="border-t border-line pt-10">
            <span className="font-mono text-xs text-ink-3 uppercase block mb-1">Flagship Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Ready-to-Deploy Platforms
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="rounded-2xl border border-line bg-paper p-7 sm:p-9 flex flex-col justify-between space-y-8 hover:border-ink/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="h-12 w-12 rounded-xl bg-wash border border-line flex items-center justify-center text-ink group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-wash border border-line text-ink-2">
                          {sol.badge}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-accent font-medium">
                          {sol.status}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs font-mono text-ink-3 mt-1">
                        {sol.subtitle}
                      </p>
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-3 gap-3 p-3 rounded-lg bg-wash/60 border border-line text-xs font-mono">
                      {sol.stats.map((st) => (
                        <div key={st.label}>
                          <span className="text-[11px] text-ink-3 block">{st.label}</span>
                          <span className="font-semibold text-ink text-xs">{st.val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Feature Points */}
                    <ul className="space-y-2.5 text-xs text-ink-2 leading-relaxed">
                      {sol.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-accent font-bold select-none">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-line flex items-center justify-between">
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent transition-colors underline underline-offset-4 decoration-line group-hover:decoration-accent"
                    >
                      <span>{sol.cta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why White-Label Architecture */}
        <div className="wrap">
          <div className="rounded-2xl border border-line bg-wash p-8 sm:p-10 space-y-6">
            <span className="font-mono text-xs text-accent uppercase font-semibold">The Architectural Philosophy</span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              Why Companies Choose Production-Ready Cloud Deployments
            </h3>
            <p className="text-sm text-ink-2 max-w-3xl leading-relaxed">
              When software powers your core revenue, renting SaaS creates two fatal bottlenecks: escalating subscriber taxation (2–5% of GMV + $2/sub) and zero customization freedom. We bridge the gap: you receive mature, enterprise-tested architectures, customized and deployed directly into your AWS, Cloudflare, or GCP accounts with 100% source code ownership.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-line">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <h4 className="font-semibold text-sm text-ink">Complete Code Custody</h4>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Git repositories delivered into your GitHub or GitLab organization with no hidden obfuscation or encrypted binaries.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" />
                  <h4 className="font-semibold text-sm text-ink">Zero Revenue Tax</h4>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Payment processors (Stripe, PayPal, UPI) deposit directly into your bank account. We take 0% of transaction or subscription fees.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-accent" />
                  <h4 className="font-semibold text-sm text-ink">Private Cloud Hosting</h4>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Customer data, video assets, and user catalogs remain stored strictly in your own cloud infrastructure, fully compliant with GDPR and data sovereignty laws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Pipeline */}
        <div className="wrap space-y-8">
          <div className="border-t border-line pt-10">
            <span className="font-mono text-xs text-ink-3 uppercase block mb-1">Roadmap &amp; Custom Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Upcoming Software Architectures
            </h2>
            <p className="mt-2 text-sm text-ink-2 max-w-2xl">
              We also design and deploy custom enterprise platforms. Have a specialized industry requirement? Speak with our principal architects.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {upcomingSolutions.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-line bg-paper space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-ink">{item.title}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-wash border border-line text-ink-3">
                    {item.eta}
                  </span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Ready to review a live architecture?
              </h2>
              <p className="mt-2 text-sm text-ink-2">
                Schedule a 30-minute private walkthrough of the codebase, admin panels, and mobile apps.
              </p>
            </div>
            <div className="shrink-0">
              <DemoButton size="md">
                Book private walkthrough →
              </DemoButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
