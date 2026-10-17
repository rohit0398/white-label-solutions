import type { Metadata } from "next";
import { FAQS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { AdminCrmShowcase } from "@/components/sections/AdminCrmShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "E-Commerce Website & App Development Company | Mechatron Lab",
  description:
    "Launch an online store and native iOS & Android apps in 2–4 weeks. Complete Next.js web store, Flutter apps, and CRM on your cloud with 0% revenue cut.",
  keywords: [
    "ecommerce development company",
    "ecommerce website development company",
    "ecommerce app development company",
    "custom ecommerce development",
    "flutter ecommerce app",
    "nextjs ecommerce store",
    "pre-built ecommerce store",
    "white label ecommerce platform",
    "self hosted ecommerce platform",
  ],
  alternates: {
    canonical: "/solutions/ecommerce",
    languages: {
      en: "/solutions/ecommerce",
      es: "/es/solutions/ecommerce",
      de: "/de/solutions/ecommerce",
      fr: "/fr/solutions/ecommerce",
      hi: "/hi/solutions/ecommerce",
    },
  },
  openGraph: {
    title: "E-Commerce Website & App Development Company | Mechatron Lab",
    description:
      "Launch an online store and native iOS & Android apps in 2–4 weeks. Complete Next.js web store, Flutter apps, and CRM on your cloud with 0% revenue cut.",
    url: "/solutions/ecommerce",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website & App Development Company | Mechatron Lab",
    description:
      "Launch an online store and native iOS & Android shopping apps in 2–4 weeks with 0% revenue cuts on your private cloud.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceSolutionPillarPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "Pre-Built E-Commerce Store", item: "/solutions/ecommerce" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "Pre-Built E-Commerce Store & Mobile Apps (Complete Package)",
    description:
      "Complete pre-built white-label e-commerce architecture including Next.js web store, Flutter iOS & Android apps, and central operations CRM deployed to client cloud with 0% commission.",
    price: "4999.00",
    url: "/solutions/ecommerce",
    operatingSystem: "Web, iOS, Android, Cloud (AWS, GCP, Azure, DigitalOcean)",
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
          mode="all"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Complete E-Commerce Store" },
          ]}
          badge="Pre-Built &amp; Ready to Launch · 2–4 Week Deployment · 0% Revenue Cut"
          headline="Pre-Built E-Commerce Store &amp; Mobile Apps. Ready to Launch."
          subtitle="Pre-built, production-ready architecture designed for rapid deployment. High-speed Next.js web store, native Flutter iOS &amp; Android apps, and operations CRM deployed directly into your own private cloud account. You pay once. You keep 100% of your sales."
          anchors={[
            { label: "01 Web Storefront", href: "#hero" },
            { label: "02 Native Apps", href: "#mobile-apps" },
            { label: "03 Operations CRM", href: "#admin-crm" },
          ]}
        />
        <TechStackStrip mode="all" />
        <LiveTicker />
        <AppShowcase index="01" />
        <AdminCrmShowcase index="02" />
        <HowItWorks index="03" />
        <Work mode="all" index="04" />
        <Pricing index="05" />
        <Faq />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
