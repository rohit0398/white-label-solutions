import type { Metadata } from "next";
import { FAQS, ECOMMERCE_APP_PRICING_TIERS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Work } from "@/components/sections/Work";
import { CompleteStoreCallout } from "@/components/sections/CompleteStoreCallout";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";

export const metadata: Metadata = {
  title: "E-Commerce App Development (iOS & Android) | Flutter Shopping Apps | Mechatron Lab",
  description:
    "Custom white-label e-commerce mobile app development for iOS and Android. High-performance Flutter apps published under your developer accounts with 0% revenue cut.",
  keywords: [
    "ecommerce app development",
    "white label ecommerce app",
    "flutter ecommerce app",
    "custom ecommerce mobile app development",
    "ios and android ecommerce app",
    "ecommerce mobile app development company",
    "ready made ecommerce app",
    "flutter ecommerce",
    "ecommerce app with payment gateway",
    "ecommerce app developers",
    "shopping app development",
  ],
  alternates: {
    canonical: "/solutions/ecommerce-app-development",
  },
  openGraph: {
    title: "E-Commerce Mobile App Development (iOS & Android) | Mechatron Lab",
    description:
      "High-performance native iOS & Android shopping apps built with Flutter. Published under your developer accounts with 0% platform commissions.",
    url: "/solutions/ecommerce-app-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce App Development (iOS & Android) | Mechatron Lab",
    description:
      "Native iOS & Android mobile shopping apps built with Flutter. Deployed under your Apple and Google Play accounts with 0% commission.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceAppDevelopmentPage() {
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
        name: "E-Commerce App Development",
        item: `${siteUrl}/solutions/ecommerce-app-development`,
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
    name: "E-Commerce Mobile App Development (Flutter iOS & Android)",
    operatingSystem: "iOS, Android",
    applicationCategory: "ShoppingApplication",
    description:
      "Custom white-label e-commerce mobile app development for iOS and Android. High-performance Flutter shopping apps published under your developer accounts with 0% revenue cut.",
    offers: {
      "@type": "Offer",
      price: "2999.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/solutions/ecommerce-app-development`,
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
          mode="app"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "E-Commerce App Development" },
          ]}
          badge="Flutter 3.x Engine · iOS &amp; Android · 0% App Store Commission"
          headline="Branded E-Commerce Mobile App Development."
          subtitle="Launch native iOS and Android shopping apps in 2–4 weeks. Built from a single high-performance Flutter codebase, published directly under your own Apple App Store and Google Play developer accounts with zero commission."
          anchors={[
            { label: "01 Native Shopping Apps (Flutter)", href: "#mobile-apps" },
          ]}
        />
        <TechStackStrip mode="app" />
        <LiveTicker />
        <AppShowcase index="01" />
        <HowItWorks index="02" />
        <Work mode="app" index="03" />
        
        {/* Child Cross-Sell Callout Box */}
        <CompleteStoreCallout />


        {/* Child Reduced Pricing ($2,999 / $999 / $15/hr) */}
        <Pricing
          title="Simple, transparent app pricing"
          intro="Fixed-cost Flutter mobile app launch with zero recurring software fees. Optional unencrypted source code license and dedicated developer hours."
          tiers={ECOMMERCE_APP_PRICING_TIERS}
        />

        <Faq />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
