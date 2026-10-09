import type { Metadata } from "next";
import { FAQS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";

export const metadata: Metadata = {
  title: "Complete White-Label E-Commerce Platform | Online Store, Mobile Apps & Admin CRM",
  description:
    "Own your white-label e-commerce platform. Modern web store, iOS & Android apps, and Admin CRM deployed on your cloud with zero monthly fees and 0% commission.",
  keywords: [
    "white label ecommerce platform",
    "custom ecommerce development with mobile app",
    "ready made online store with android ios app",
    "ecommerce admin panel and crm",
    "self hosted ecommerce solution",
    "ready to deploy ecommerce platform",
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
    title: "The Complete White-Label E-Commerce Platform | Mechatron Lab",
    description:
      "Own your e-commerce platform with zero monthly SaaS fees and 0% commission. Deployed directly into your private cloud.",
    url: "/solutions/ecommerce",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete White-Label E-Commerce Platform | Mechatron Lab",
    description:
      "Modern web store, native iOS & Android apps, and Admin CRM deployed on your cloud with 0% revenue cuts.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceSolutionPillarPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://white-label-solutions.vercel.app";

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
        name: "E-Commerce Platform",
        item: `${siteUrl}/solutions/ecommerce`,
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

      <Navbar />

      <main className="flex-1">
        <Hero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "E-Commerce Platform" },
          ]}
        />
        <LiveTicker />
        <WhatYouGet />
        <HowItWorks />
        <Work />
        <Pricing />
        <Faq />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
