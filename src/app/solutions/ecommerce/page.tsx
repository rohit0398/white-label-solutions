import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Complete White-Label E-Commerce Platform | Online Store, Mobile Apps & Admin CRM",
  description:
    "Pre-built, easily customized white-label e-commerce solution. High-speed web store, Flutter Android & iOS mobile apps, and an all-in-one Admin Panel & CRM deployed on your own cloud.",
  keywords: [
    "white label ecommerce platform",
    "custom ecommerce development with mobile app",
    "ready made online store with android ios app",
    "ecommerce admin panel and crm",
    "self hosted ecommerce solution",
  ],
  alternates: {
    canonical: "https://solutions.mechatronlab.com/solutions/ecommerce",
  },
  openGraph: {
    title: "Complete White-Label E-Commerce Platform | Mechatron Lab",
    description: "Web storefront, Flutter iOS/Android apps, and Admin CRM deployed directly onto your cloud.",
    url: "https://solutions.mechatronlab.com/solutions/ecommerce",
    images: ["/showcase/desktop_navbar_fixed.png"],
  },
};

export default function EcommerceSolutionPillarPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://solutions.mechatronlab.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "E-Commerce Solution",
        item: "https://solutions.mechatronlab.com/solutions/ecommerce",
      },
    ],
  };

  const blocks = [
    {
      n: "01",
      title: "High-speed online storefront (Website)",
      subtitle: "Tailored to your brand colors and fonts",
      description:
        "Fast, conversion-focused online store designed for any catalogue size. Supports instant variant switching, high-resolution product lookbooks, automated tax calculation breakdowns, and checkout supporting cards, UPI, COD, and PayPal.",
      points: [
        "Sub-second page loads that maximize conversion",
        "Built-in Google search engine optimization (SEO)",
        "Stripe, PayPal, Razorpay, Cashfree, UPI, and COD integrations",
      ],
    },
    {
      n: "02",
      title: "Native Android & iPhone mobile apps",
      subtitle: "Unified Flutter codebase for iOS and Android",
      description:
        "A branded shopping app published directly on Google Play Store and Apple App Store under your company's developer accounts. Includes promotional push notifications, offline cart caching, and biometric login.",
      points: [
        "Published under your company developer accounts",
        "Free, unlimited promotional push notifications for flash sales",
        "Fast biometric face/fingerprint login for returning buyers",
      ],
    },
    {
      n: "03",
      title: "All-in-one Admin Panel & CRM",
      subtitle: "Central operations and inventory command center",
      description:
        "Manage inventory across multiple store locations and regional warehouses with automated dispatch routing. Monitor stock velocity with smart reorder alerts, track true margins per order after supplier costs, and edit layouts visually.",
      points: [
        "Multi-warehouse routing and stock allocation by pincode",
        "Real-time profit tracking linked directly to supplier invoice costs",
        "Visual homepage layout editor without code changes",
      ],
    },
    {
      n: "04",
      title: "100% private cloud deployment",
      subtitle: "AWS, Google Cloud (GCP), Azure, or VPS",
      description:
        "We never host your store on shared multi-tenant servers. The complete system is deployed inside your private cloud account. You hold all master server keys, keep customer data private, and pay standard hosting rates ($20–$50/mo) with 0% platform cuts.",
      points: [
        "Zero percentage cuts on your sales volume",
        "100% full source code license available ($1,999)",
        "Complete data sovereignty and privacy compliance (GDPR/DPDP)",
      ],
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
        <div className="wrap">
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3 mb-6">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink">Solutions</span>
          </nav>

          <p className="font-mono text-xs text-ink-3 mb-3">Solution pillar</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            The complete white-label e-commerce platform
          </h1>

          <p className="mt-6 text-lg text-ink-2 leading-relaxed">
            Everything your business needs to sell online at scale. Web storefront,
            native mobile apps, and an all-in-one operations dashboard—pre-built and
            deployed onto your private cloud in 2 to 3 weeks.
          </p>
        </div>

        {/* 4 Blocks */}
        <div className="wrap space-y-16">
          {blocks.map((block) => (
            <div key={block.n} className="border-t border-line pt-10 grid sm:grid-cols-[4rem_1fr] gap-4">
              <span className="font-mono text-sm text-ink-3 pt-1">{block.n}</span>
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{block.title}</h2>
                  <p className="text-xs font-mono text-ink-3 mt-1">{block.subtitle}</p>
                </div>
                <p className="text-sm text-ink-2 leading-relaxed">{block.description}</p>
                <ul className="space-y-2 text-xs text-ink-2 pt-2">
                  {block.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-ink-3 select-none">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Ready to launch on your cloud?</h2>
              <p className="mt-2 text-sm text-ink-2">Get started in 2–3 weeks with fixed, transparent pricing.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <DemoButton size="sm">Book a demo</DemoButton>
              <Link href="/#pricing" className={buttonClass("link", "sm")}>
                View pricing packages →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
