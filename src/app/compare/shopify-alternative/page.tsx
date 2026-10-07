import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Shopify Alternative with No Monthly Fees & Mobile Apps Included | Mechatron Lab",
  description:
    "Looking for a self-hosted Shopify alternative? Launch an online store, native Android & iPhone apps, and all-in-one Admin & CRM deployed on your own cloud. Keep 100% of your sales with 0% platform cuts.",
  keywords: [
    "shopify alternative no monthly fees",
    "shopify alternative self hosted",
    "shopify alternative with mobile app",
    "white label ecommerce platform",
    "ecommerce website one time cost",
    "shopify alternative india us europe",
  ],
  alternates: {
    canonical: "/compare/shopify-alternative",
  },
  openGraph: {
    title: "Shopify Alternative with No Monthly Fees & Mobile Apps Included",
    description: "Keep 100% of your customer revenue. Deploy on your own AWS/GCP/Azure cloud with full code rights.",
    url: "/compare/shopify-alternative",
    images: ["/og-image.png"],
  },
};

export default function ShopifyAlternativePage() {
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
        name: "Shopify Alternative",
        item: "https://solutions.mechatronlab.com/compare/shopify-alternative",
      },
    ],
  };

  const comparisonRows = [
    {
      feature: "Monthly software fees",
      mechatron: "$0 / month (private cloud hosting only)",
      shopify: "$39 to $2,300+ / month (Shopify Plus)",
    },
    {
      feature: "Sales commission / GMV cut",
      mechatron: "0% (keep 100% of your revenue)",
      shopify: "0.5% to 2.0% on third-party gateways",
    },
    {
      feature: "Native Android & iPhone apps",
      mechatron: "Included in launch package",
      shopify: "Costly 3rd-party apps ($300–$1,500/mo)",
    },
    {
      feature: "Source code ownership",
      mechatron: "Full unrestricted Git repos option ($1,999)",
      shopify: "0% (Proprietary platform; lock-in)",
    },
    {
      feature: "Customer data & servers",
      mechatron: "100% private on your AWS, GCP, or Azure account",
      shopify: "Hosted on Shopify shared multi-tenant servers",
    },
    {
      feature: "Multi-warehouse management",
      mechatron: "Built-in with automated routing by postal code",
      shopify: "Requires third-party app subscriptions",
    },
    {
      feature: "Order profit & margin tracking",
      mechatron: "Built-in: matches supplier costs against each order",
      shopify: "Requires separate ERP or accounting add-on",
    },
    {
      feature: "Custom logic & gateways",
      mechatron: "Direct source code modification",
      shopify: "Restricted by Shopify Liquid & Checkout limits",
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
            <span className="text-ink">Shopify Alternative</span>
          </nav>

          <p className="font-mono text-xs text-ink-3 mb-3">Comparison guide</p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            The self-hosted Shopify alternative with zero monthly software fees
          </h1>

          <p className="mt-6 text-lg text-ink-2 leading-relaxed">
            Stop giving away 2% of your revenue and hundreds every month in app subscriptions.
            Launch a customized online store, native mobile apps, and an all-in-one Admin & CRM
            deployed directly on your private cloud account.
          </p>
        </div>

        {/* 2 Models Contrast */}
        <div className="wrap">
          <div className="grid sm:grid-cols-2 gap-8 border-y border-line py-10">
            <div className="space-y-3">
              <span className="font-mono text-xs text-ink-3 uppercase">Traditional SaaS</span>
              <h3 className="text-xl font-semibold tracking-tight">The recurring SaaS model</h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                An established store typically spends $24,000 to $90,000+ over three years on Shopify Plus fees, payment gateway cuts, and required 3rd-party app builder plugins without ever owning the code or data infrastructure.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-accent uppercase font-medium">Your private cloud</span>
              <h3 className="text-xl font-semibold tracking-tight">The white-label model</h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                A fixed setup of $4,999 deploys your store, native mobile apps, and admin directly onto your AWS, GCP, or Azure account. Your private cloud hosting costs run ~$20–$50/mo, with zero platform cuts on sales.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="wrap">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Detailed comparison</h2>
          <div className="overflow-x-auto border-t border-line">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs font-mono text-ink-3">
                  <th className="py-3 pr-4 font-normal">Capability</th>
                  <th className="py-3 px-4 font-semibold text-ink">Mechatron White-Label</th>
                  <th className="py-3 pl-4 font-normal">Shopify / SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3.5 pr-4 font-medium text-ink">{row.feature}</td>
                    <td className="py-3.5 px-4 font-medium text-accent">{row.mechatron}</td>
                    <td className="py-3.5 pl-4 text-ink-3">{row.shopify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Proof Callout */}
        <div className="wrap p-8 rounded-lg border border-line bg-wash space-y-4">
          <h3 className="text-lg font-semibold tracking-tight">Active stores running on this model</h3>
          <p className="text-sm text-ink-2 leading-relaxed">
            Mechatron Lab powers over 1,000 SKUs with an Android app and multi-warehouse routing. eStoreAlley operates an international marketplace directory with Stripe checkout and Google Play app.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/case-studies/mechatron-lab" className={buttonClass("link", "sm")}>
              Mechatron Lab case study →
            </Link>
            <Link href="/case-studies/estorealley" className={buttonClass("link", "sm")}>
              eStoreAlley case study →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Ready to migrate away from SaaS lock-in?</h2>
              <p className="mt-2 text-sm text-ink-2">Schedule a walkthrough with our solution architects.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <DemoButton size="sm">Book a demo</DemoButton>
              <Link href="/#pricing" className={buttonClass("link", "sm")}>
                View pricing plans →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
