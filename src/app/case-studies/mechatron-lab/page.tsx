import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Screenshot } from "@/components/ui/Screenshot";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Case Study: Mechatron Lab Technical E-Commerce Store & Android App",
  description:
    "See how Mechatron Lab scaled to 1,000+ technical hardware SKUs with an AI shopping assistant, multi-warehouse fulfillment, and native Android app on their private cloud.",
  keywords: [
    "mechatron lab ecommerce case study",
    "technical hardware online store",
    "white label ecommerce case study",
    "multi warehouse inventory ecommerce",
    "self hosted ecommerce case study",
  ],
  alternates: {
    canonical: "/case-studies/mechatron-lab",
  },
  openGraph: {
    title: "Case Study: Mechatron Lab Technical Store & Android App",
    description: "1,000+ SKUs, AI shopping assistant, multi-warehouse inventory, and native Android app on client-owned cloud.",
    url: "/case-studies/mechatron-lab",
    images: ["/showcase/mechatron-store.png"],
  },
};

export default function MechatronLabCaseStudyPage() {
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
        name: "Case Studies",
        item: "https://solutions.mechatronlab.com/#work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mechatron Lab",
        item: "https://solutions.mechatronlab.com/case-studies/mechatron-lab",
      },
    ],
  };

  const metrics = [
    { label: "Catalog scale", value: "1,000+ SKUs", desc: "Technical robotics & electronic parts" },
    { label: "Page speed", value: "0.9s", desc: "Sub-second load times worldwide" },
    { label: "Fulfillment", value: "Multi-Hub", desc: "Mohali & Shillong warehouses" },
    { label: "Platform cut", value: "0%", desc: "Zero revenue cuts or per-order fees" },
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
            <span className="text-ink">Mechatron Lab</span>
          </nav>

          <p className="font-mono text-xs text-ink-3 mb-3">Case study · Electronics & robotics</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            How Mechatron Lab scaled to 1,000+ hardware SKUs with multi-warehouse dispatch
          </h1>

          <p className="mt-6 text-lg text-ink-2 leading-relaxed">
            A high-growth technical hardware distributor needed an e-commerce platform capable of handling
            thousands of complex spare parts, real-time GST tax calculations, automated inventory dispatch
            across regional hubs, and a native mobile shopping app on Google Play—all running on their private cloud.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="https://mechatronlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("primary", "sm")}
            >
              Visit live store (mechatronlab.com) ↗
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN"
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
            src="/showcase/mechatron-store.png"
            alt="Mechatron Lab live online storefront"
            caption="Mechatron Lab web storefront running on the client's own cloud."
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

        {/* Architecture details */}
        <div className="wrap space-y-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">The solution architecture</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              Mechatron Lab was deployed directly onto the client&apos;s private cloud account.
              Instead of paying thousands in monthly SaaS subscriptions and 2% per-order commissions,
              the client maintains 100% control over their database, customer orders, and server keys.
            </p>
          </div>

          <dl className="divide-y divide-line border-y border-line">
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">AI shopping assistant</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                An embedded assistant that guides shoppers through technical parts, recommends compatible motor drivers, and configures DIY kits directly into the cart.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Multi-warehouse fulfillment</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Smart routing dispatches orders from either the Mohali or Shillong warehouse based on physical stock and delivery location to cut transit times.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Automated GST tax invoicing</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                Automated 18% GST invoice generation with clear base price and tax breakdowns, creating ready-to-print B2B and B2C tax invoices instantly.
              </dd>
            </div>
            <div className="py-5 grid sm:grid-cols-[14rem_1fr] gap-2 sm:gap-6">
              <dt className="font-medium text-ink">Synchronized Android app</dt>
              <dd className="text-ink-2 text-sm leading-relaxed">
                A native Android application on Google Play that synchronizes directly with the web catalogue, allowing returning customers to reorder spares with biometric login.
              </dd>
            </div>
          </dl>
        </div>

        {/* Admin screenshot */}
        <div className="wrap-wide">
          <Screenshot
            src="/showcase/admin-dashboard.png"
            alt="Mechatron Lab admin panel"
            caption="The operations dashboard used daily to manage warehouse orders and inventory alerts."
          />
        </div>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Need a setup like Mechatron Lab?</h2>
              <p className="mt-2 text-sm text-ink-2">Turnkey setup in 2–4 weeks with zero platform commissions.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <DemoButton size="sm">Book a demo</DemoButton>
              <Link href="/case-studies/estorealley" className={buttonClass("link", "sm")}>
                Next case study: eStoreAlley →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
