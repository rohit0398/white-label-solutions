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
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "E-Commerce Mobile App Development Company | Flutter iOS & Android Agency | Mechatron Lab",
  description:
    "Custom e-commerce mobile app development company & agency. We build high-conversion Flutter shopping apps for iOS & Android, native checkout, push notifications, and private cloud sync.",
  keywords: [
    "ecommerce mobile app development company",
    "ecommerce app development agency",
    "flutter ecommerce app development company",
    "shopping app development agency",
    "mobile commerce app development company",
    "custom shopping app developers",
    "white label ecommerce app development agency",
    "ios android ecommerce app agency",
  ],
  alternates: {
    canonical: "/solutions/ecommerce-app-development",
  },
  openGraph: {
    title: "E-Commerce Mobile App Development Company | Flutter Agency",
    description:
      "Enterprise e-commerce mobile app development agency. Native iOS & Android shopping apps built with Flutter, published under your corporate accounts.",
    url: "/solutions/ecommerce-app-development",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Mobile App Development Company | Flutter Agency",
    description:
      "Native iOS & Android mobile shopping apps built with Flutter. Deployed under your Apple and Google Play accounts with 0% commission.",
    images: ["/og-image.png"],
  },
};

export default function EcommerceAppDevelopmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "E-Commerce App Development", item: "/solutions/ecommerce-app-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(FAQS);
  const softwareSchema = generateSoftwareSchema({
    name: "E-Commerce Mobile App Development (Flutter iOS & Android)",
    description:
      "Custom white-label e-commerce mobile app development for iOS and Android. High-performance Flutter shopping apps published under your developer accounts with 0% revenue cut.",
    price: "2999.00",
    url: "/solutions/ecommerce-app-development",
    operatingSystem: "iOS, Android",
    applicationCategory: "ShoppingApplication",
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
          mode="app"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "E-Commerce App Development" },
          ]}
          badge="Flutter 3.x Native Apps · 60 FPS Fluid Experience · 0% Revenue Cut"
          headline="E-Commerce Mobile App Development (iOS &amp; Android)."
          subtitle="Deploy branded native mobile shopping apps for iOS and Android in 2–4 weeks. Built with Flutter, native 1-tap checkout, push notifications, and private cloud sync with zero monthly platform cuts."
          anchors={[
            { label: "01 Mobile Shopping Apps (Flutter)", href: "#mobile-apps" },
            { label: "02 Push Notifications & Loyalty", href: "#hero" },
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
          intro="Fixed-cost iOS and Android mobile app launch with zero recurring monthly SaaS cuts. Optional unencrypted source code license and dedicated developer hours."
          tiers={ECOMMERCE_APP_PRICING_TIERS}
        />

        <Faq />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
