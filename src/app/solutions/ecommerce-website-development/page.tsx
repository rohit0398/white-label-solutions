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
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "E-Commerce Website Development Company | Next.js | Mechatron Lab",
  description:
    "High-speed Next.js online stores with sub-second page loads, automated tax invoices, and multi-warehouse CRM deployed on your cloud in 2–4 weeks.",
  keywords: [
    "ecommerce website development company",
    "nextjs ecommerce store",
    "ecommerce web development",
    "custom ecommerce website",
    "b2b ecommerce website development",
    "self hosted ecommerce store",
  ],
  alternates: {
    canonical: "/solutions/ecommerce-website-development",
  },
  openGraph: {
    title: "E-Commerce Website Development Company | Next.js",
    description:
      "High-speed Next.js online stores with sub-second page loads, automated tax invoices, and multi-warehouse CRM deployed on your cloud in 2–4 weeks.",
    url: "/solutions/ecommerce-website-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website Development Company | Next.js",
    description:
      "High-speed online storefronts and operations CRM deployed directly to your private cloud with 0% revenue cut.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceWebsiteDevelopmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "E-Commerce Website Development", item: "/solutions/ecommerce-website-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "Custom E-Commerce Website Development (Next.js & Admin CRM)",
    description:
      "Custom e-commerce website development with sub-second page loads, automated tax invoicing, and multi-warehouse CRM deployed to private cloud with 0% commission.",
    price: "2999.00",
    url: "/solutions/ecommerce-website-development",
    operatingSystem: "Web, Cloud (AWS, GCP, Azure, DigitalOcean)",
    applicationCategory: "BusinessApplication",
    reviewCount: "128",
    siteUrl,
  });

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="flex-1">
        <Hero
          category="ecommerce"
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
