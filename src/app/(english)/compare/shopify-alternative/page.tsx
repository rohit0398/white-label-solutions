import { displayPackagePrice, FAMILY_PACKAGE } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";

export const metadata: Metadata = {
  title: "Shopify Alternative for a Private Cloud Store",
  description:
    "Compare Shopify with a store deployed to your cloud. Review setup, hosting, payment fees, shopping apps, and optional source code licensing.",
  keywords: [
    "shopify alternative no monthly fees",
    "shopify alternative self hosted",
    "shopify alternative with mobile app",
    "white label ecommerce platform",
    "ecommerce website one time cost",
    "self hosted online store",
  ],
  alternates: {
    canonical: "/compare/shopify-alternative",
  },
  openGraph: {
    title: "Shopify Alternative for a Private Cloud Store",
    description:
      "Compare Shopify with a store deployed to your cloud. Review setup, hosting, payment fees, shopping apps, and optional source code licensing.",
    url: "/compare/shopify-alternative",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Alternative for a Private Cloud Store",
    description:
      "Compare Shopify with a store deployed to your cloud. Review setup, hosting, payment fees, shopping apps, and optional source code licensing.",
    images: ["/og-image.png"],
  },
};

export default function ShopifyAlternativePage() {
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
        name: "Shopify Alternative",
        item: `${siteUrl}/compare/shopify-alternative`,
      },
    ],
  };

  const comparisonRows = [
    {
      feature: "Monthly software fees",
      mechatron: "No monthly platform license fee. Hosting and ongoing support are separate.",
      shopify: "Plan and billing term determine the subscription; see current pricing",
    },
    {
      feature: "Sales commission / GMV cut",
      mechatron: "No platform commission. Payment processing fees still apply.",
      shopify: "Third-party transaction fees depend on plan, region and payment provider",
    },
    {
      feature: "Native Android & iPhone apps",
      mechatron: "Included in launch package",
      shopify: "Customer-facing native apps may require a separate service or integration",
    },
    {
      feature: "Source code access",
      mechatron: displayPackagePrice("source-code-license", "en-US") + " optional commercial license",
      shopify: "Shopify’s hosted platform is proprietary.",
    },
    {
      feature: "Customer data & servers",
      mechatron: "Deployed to your AWS, Google Cloud, or Azure account",
      shopify: "Hosted on Shopify shared multi-tenant servers",
    },
    {
      feature: "Multi-warehouse management",
      mechatron: "Built-in with automated routing by postal code",
      shopify: "Inventory locations are supported; advanced routing needs vary",
    },
    {
      feature: "Order profit & margin tracking",
      mechatron: "Built-in: matches supplier costs against each order",
      shopify: "Reporting and accounting requirements depend on plan and integrations",
    },
    {
      feature: "Custom logic & gateways",
      mechatron: "Source code changes with the license. Custom integrations are scoped separately.",
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

      <main className="flex-1 py-16 sm:pt-12 sm:pb-24 space-y-20">
        {/* Intro */}
        <div className="wrap">
          <nav className="flex items-center gap-2 text-xs font-mono text-ink-3 mb-6">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink">Shopify Alternative</span>
          </nav>

          <div className="mb-3">
            <HeadingBadge category="ecommerce">
              Comparison Guide · Self-Hosted Commerce
            </HeadingBadge>
          </div>
          <AnimatedHeadline
            as="h1"
            variant="ecommerce"
            className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight"
          >
            A Shopify Alternative for a Private Cloud Store
          </AnimatedHeadline>

          <p className="mt-6 text-lg text-ink-2 leading-relaxed">
            Compare subscription fees, payment costs, integrations, and source code access for your own business.
            Launch a customized online store, native mobile apps, and an all-in-one Admin & CRM
            deployed directly on your private cloud account.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="#comparison" className="underline underline-offset-4">Compare features and costs</a>
            <Link href="/blog/ecommerce-website-development-cost#packages" className="underline underline-offset-4">See e-commerce package prices</Link>
          </div>
        </div>

        {/* 2 Models Contrast */}
        <div className="wrap">
          <div className="grid sm:grid-cols-2 gap-8 border-y border-line py-10">
            <div className="space-y-3">
              <span className="font-mono text-xs text-ink-3 uppercase">Traditional SaaS</span>
              <h2 className="text-xl font-semibold tracking-tight">The recurring SaaS model</h2>
              <p className="text-sm text-ink-2 leading-relaxed">
                Your total SaaS cost depends on the plan, billing term, country, payment provider, and optional apps you select. Compare those costs against private-cloud deployment, maintenance, and licensing rather than assuming one fee applies to every merchant.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-accent uppercase font-medium">Your private cloud</span>
              <h2 className="text-xl font-semibold tracking-tight">The white-label model</h2>
              <p className="text-sm text-ink-2 leading-relaxed">
                The complete package starts at {displayPackagePrice(FAMILY_PACKAGE.ecommerce, "en-US")} for setup of the store, apps, and admin panel on your cloud account. Cloud hosting is billed separately and varies with traffic, storage, backups, and integrations. We charge no platform revenue share; payment-provider fees still apply.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div id="comparison" className="wrap-wide scroll-mt-24">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">Detailed comparison</h2>
          <p className="text-sm text-ink-2 mb-6">Consult <a className="underline" href="https://www.shopify.com/pricing">Shopify’s current pricing</a> and <a className="underline" href="https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges">billing documentation</a> for your country, payment setup, and billing term. This is a scope comparison, not a personalized cost quotation.</p>
          <div role="region" aria-label="Shopify comparison table" tabIndex={0} className="overflow-x-auto border-t border-line">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Comparison of the private cloud e-commerce offer and Shopify</caption>
              <thead>
                <tr className="border-b border-line text-xs font-mono text-ink-3">
                  <th scope="col" className="py-3 pr-4 font-normal">Capability</th>
                  <th scope="col" className="py-3 px-4 font-semibold text-ink">Mechatron White-Label</th>
                  <th scope="col" className="py-3 pl-4 font-normal">Shopify / SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <th scope="row" className="py-3.5 pr-4 font-medium text-ink">{row.feature}</th>
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
            Explore an electronics store with multi-warehouse fulfillment and a marketplace that serves both wholesale and retail buyers.
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
              <h2 className="text-2xl font-semibold tracking-tight">Plan your store migration</h2>
              <p className="mt-2 text-sm text-ink-2">Bring your current catalog, payment setup, and integrations. We’ll help you compare the work involved.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <DemoButton size="sm">Book a demo</DemoButton>
              <Link href="/solutions/ecommerce#pricing" className={buttonClass("link", "sm")}>
                View e-commerce pricing →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
