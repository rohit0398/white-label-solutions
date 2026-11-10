import { SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Screenshot } from "@/components/ui/Screenshot";
import { DemoButton } from "@/components/site/DemoButton";
import { buttonClass } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeadingBadge } from "@/components/ui/HeadingBadge";

export const metadata: Metadata = {
  title: "Electronics Store and Android App Case Study",
  description:
    "See how an electronics retailer connected its storefront, Android app, inventory, and warehouse fulfillment.",
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
    title: "Electronics Store and Android App Case Study",
    description:
      "See how an electronics retailer connected its storefront, Android app, inventory, and warehouse fulfillment.",
    url: "/case-studies/mechatron-lab",
    images: ["/showcase/mechatron-store.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronics Store and Android App Case Study",
    description:
      "See how an electronics retailer connected its storefront, Android app, inventory, and warehouse fulfillment.",
    images: ["/showcase/mechatron-store.png"],
  },
};

export default function MechatronLabCaseStudyPage() {
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
        name: "Case Studies",
        item: `${siteUrl}/#work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mechatron Lab",
        item: `${siteUrl}/case-studies/mechatron-lab`,
      },
    ],
  };

  const metrics = [
    { label: "Catalog", value: "Technical parts", desc: "Robotics and electronics products" },
    { label: "Shopping channels", value: "Web and Android", desc: "A storefront and shopping app" },
    { label: "Fulfillment", value: "Multi-Hub", desc: "Mohali & Shillong warehouses" },
    { label: "Operations", value: "Admin panel", desc: "Products, stock, and orders" },
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
            <Link href="/#work" className="hover:text-ink">Work</Link>
            <span>/</span>
            <span className="text-ink">Mechatron Lab</span>
          </nav>

          <div className="mb-3">
            <HeadingBadge category="ecommerce">
              Case study · Electronics &amp; Robotics
            </HeadingBadge>
          </div>
          <AnimatedHeadline
            as="h1"
            variant="ecommerce"
            className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight"
          >
            Building an Electronics Store with Multi-Warehouse Fulfillment
          </AnimatedHeadline>

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
            src="/showcase/commerce-storefront.webp"
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
              The store and admin panel run on the retailer’s cloud account. The team can manage orders and stock across its warehouses from one place.
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
                The order workflow generates invoices with the configured GST breakdown for the sale.
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
            src="/showcase/commerce-admin.webp"
            alt="Mechatron Lab admin panel"
            caption="The operations dashboard used daily to manage warehouse orders and inventory alerts."
          />
        </div>

        <section className="wrap space-y-3">
          <h2 className="text-xl font-semibold">Planning a similar launch?</h2>
          <p className="text-ink-2">Review your catalog, checkout, and order workflows before choosing a package.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/blog/ecommerce-website-development" className="underline underline-offset-4">Read the e-commerce website launch guide</Link>
            <Link href="/solutions/ecommerce#admin-crm" className="underline underline-offset-4">Explore the order and inventory panel</Link>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="wrap border-t border-line pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Need a setup like Mechatron Lab?</h2>
              <p className="mt-2 text-sm text-ink-2">Tell us how you manage products, stock, and fulfillment today. We’ll explain what the standard package covers and what needs custom work.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
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
