import type { Metadata } from "next";
import { FAQS, ECOMMERCE_WEB_PRICING_TIERS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { AdminCrmShowcase } from "@/components/sections/AdminCrmShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Work } from "@/components/sections/Work";
import { CompleteStoreCallout } from "@/components/sections/CompleteStoreCallout";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";

export const metadata: Metadata = {
  title: "E-Commerce Website Development | Next.js Online Store & Admin CRM | Mechatron Lab",
  description:
    "Custom e-commerce website development with sub-second page loads, automated tax invoicing, and multi-warehouse CRM. Deployed to your private cloud with 0% commission.",
  keywords: [
    "ecommerce website development",
    "build ecommerce website",
    "ecommerce web development",
    "ecommerce site development",
    "develop e commerce website",
    "custom ecommerce development",
    "ecommerce development company",
    "ecommerce development services",
    "b2b ecommerce website development",
    "creating an ecommerce website",
    "nextjs ecommerce website",
  ],
  alternates: {
    canonical: "/solutions/ecommerce-website-development",
  },
  openGraph: {
    title: "E-Commerce Website Development | Mechatron Lab",
    description:
      "Sub-second Next.js web storefront and central operations CRM deployed on your own private cloud with zero monthly software fees.",
    url: "/solutions/ecommerce-website-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website Development | Mechatron Lab",
    description:
      "High-speed online storefront and operations CRM deployed directly to your private cloud with 0% revenue cut.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceWebsiteDevelopmentPage() {
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
      {
        "@type": "ListItem",
        position: 3,
        name: "E-Commerce Website Development",
        item: `${siteUrl}/solutions/ecommerce-website-development`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Custom E-Commerce Website Development (Next.js & Admin CRM)",
    operatingSystem: "Web, Cloud (AWS, GCP, Azure, DigitalOcean)",
    applicationCategory: "BusinessApplication",
    description:
      "Custom e-commerce website development with sub-second page loads, automated tax invoicing, and multi-warehouse CRM deployed to private cloud with 0% commission.",
    offers: {
      "@type": "Offer",
      price: "2999.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/solutions/ecommerce-website-development`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
    provider: {
      "@type": "Organization",
      name: "Mechatron Lab Solutions",
      url: siteUrl,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <Navbar />

      <main className="flex-1">
        <Hero
          mode="web"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "E-Commerce Website Development" },
          ]}
          badge="Next.js 16 Storefront · Sub-Second Page Speeds · 0% Sales Cut"
          headline="Custom E-Commerce Website Development."
          subtitle="Launch a high-speed online storefront and operations CRM in 2–4 weeks. Engineered with Next.js, automated tax invoices, and multi-warehouse inventory deployed directly onto your own private cloud account with zero monthly software fees."
          anchors={[
            { label: "01 Web Storefront (Next.js)", href: "#hero" },
            { label: "02 Operations CRM", href: "#admin-crm" },
          ]}
        />
        <TechStackStrip mode="web" />
        <LiveTicker />
        <AdminCrmShowcase index="01" />
        <HowItWorks index="02" />
        <Work mode="web" index="03" />

        {/* Child Cross-Sell Callout Box */}
        <CompleteStoreCallout />


        {/* Child Reduced Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          title="Simple, transparent web pricing"
          intro="Fixed-cost Next.js storefront and Admin CRM launch with zero recurring software fees. Optional unencrypted source code license and dedicated developer hours."
          tiers={ECOMMERCE_WEB_PRICING_TIERS}
        />

        <Faq />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
