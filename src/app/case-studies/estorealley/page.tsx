import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Screenshot } from "@/components/ui/Screenshot";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Case Study: eStoreAlley Wholesale Directory & Global Marketplace",
  description:
    "See how eStoreAlley built an international wholesale directory and marketplace with Stripe checkout, multi-vendor merchant listings, and a Google Play Android app.",
  keywords: [
    "estorealley ecommerce case study",
    "wholesale directory marketplace",
    "white label marketplace solution",
    "stripe multi currency ecommerce",
    "readymade marketplace app",
  ],
  alternates: {
    canonical: "/case-studies/estorealley",
  },
  openGraph: {
    title: "Case Study: eStoreAlley Wholesale Directory & Marketplace",
    description: "International wholesale directory, multi-vendor listings, Stripe v3 checkout, and Google Play app.",
    url: "/case-studies/estorealley",
    images: ["/showcase/estorealley-store.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: eStoreAlley Wholesale Directory & Global Marketplace",
    description: "International wholesale marketplace with Stripe checkout and Google Play Android app.",
    images: ["/showcase/estorealley-store.png"],
  },
};

export default function EStoreAlleyCaseStudyPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://white-label-solutions.vercel.app");

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
        item: `${siteUrl}/#work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "eStoreAlley",
        item: `${siteUrl}/case-studies/estorealley`,
      },
    ],
  };

  const metrics = [
    { label: "Platform model", value: "Wholesale + Retail", desc: "Dual B2B & B2C merchant listings" },
    { label: "Payment gateway", value: "Stripe v3", desc: "Multi-currency checkout worldwide" },
    { label: "Mobile channel", value: "Google Play", desc: "Dedicated Android marketplace app" },
    { label: "Platform cut", value: "0%", desc: "Zero percentage fees on volume" },
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
        <div className="wrap">
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3 mb-6">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/#work" className="hover:text-ink">Work</Link>
            <span>/</span>
            <span className="text-ink">eStoreAlley</span>
          </nav>

          <p className="font-mono text-xs text-ink-3 mb-3">Case study · Retail & wholesale directory</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            How eStoreAlley built an international wholesale directory and marketplace
          </h1>

          <p className="mt-6 text-lg text-ink-2 leading-relaxed">
            eStoreAlley required a commercial platform capable of serving both retail shoppers
            and verified wholesale suppliers. They needed tiered pricing visibility, international Stripe payments,
            verified merchant profiles, and a published mobile application on Google Play.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="https://estorealley.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("primary", "sm")}
            >
              Visit live store (estorealley.web.app) ↗
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.estorealley.app&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("secondary", "sm")}
            >
              Google Play app ↗
            </a>
          </div>
        </div>

        {/* Screenshot */}
        <div className="wrap-wide">
          <Screenshot
            src="/showcase/estorealley-store.png"
            alt="eStoreAlley live marketplace directory storefront"
            caption="eStoreAlley storefront operating on client-owned cloud servers."
          />
        </div>

        {/* Metrics */}
        <div className="wrap">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-line">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl font-semibold font-mono text-ink">{m.value}</div>
                <div className="text-xs font-medium text-ink">{m.label}</div>
                <div className="text-[11px] text-ink-3 leading-snug">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative / Highlights */}
        <div className="wrap space-y-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Key platform capabilities</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              By avoiding proprietary SaaS marketplace tools that charge monthly fees plus 5% transaction cuts,
              eStoreAlley launched on client-owned cloud servers with full source code flexibility.
            </p>
          </div>

          <dl className="divide-y divide-line border-y border-line">
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Tiered B2B & B2C pricing</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Wholesale buyers see volume price breaks, minimum order quantities (MOQ), and credit terms, while retail shoppers see standard consumer pricing.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Global Stripe integration</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Multi-currency processing supporting Visa, Mastercard, Apple Pay, and European payment methods directly to the merchant&apos;s bank account.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Verified merchant profiles</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Directory storefront with structured business information, store locations, and direct inquiry links for B2B wholesale buyers.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Google Play mobile app</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                A dedicated mobile application giving buyers an app experience with instant catalogue search and order tracking.
              </dd>
            </div>
          </dl>
        </div>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Launch a marketplace on your cloud</h2>
              <p className="mt-2 text-sm text-ink-2">Production-ready deployment in 2–4 weeks with zero percentage revenue cuts.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <DemoButton size="sm">Book a demo</DemoButton>
              <Link href="/case-studies/mechatron-lab" className={buttonClass("link", "sm")}>
                Mechatron Lab case study →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
