import React from "react";
import type { Metadata } from "next";
import { ALL_HOME_SHOWCASE_PROJECTS, BRAND } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/sections/HomeHero";
import { LiveTicker } from "@/components/sections/LiveTicker";
import { HomePlatformsDeck } from "@/components/sections/HomePlatformsDeck";
import { HomeComparison } from "@/components/sections/HomeComparison";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { Work } from "@/components/sections/Work";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "White-Label Software Platforms | OTT & Commerce | Mechatron Lab",
  description:
    "Production-ready software platforms for 9:16 short drama, OTT video streaming, and e-commerce. Deployed to your private cloud in 2–4 weeks with 0% revenue cut.",
  keywords: [
    "white label software platforms",
    "pre-built ecommerce store",
    "short drama platform",
    "white label ott platform",
    "reelshort clone app",
    "netflix clone app",
    "self hosted ecommerce platform",
    "private cloud software deployment",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      de: "/de",
      fr: "/fr",
      hi: "/hi",
    },
  },
  openGraph: {
    title: "White-Label Software Platforms | OTT & Commerce",
    description:
      "Production-ready software platforms for 9:16 short drama, OTT video streaming, and e-commerce. Deployed to your private cloud in 2–4 weeks with 0% revenue cut.",
    url: "/",
    siteName: "Mechatron Lab Solutions",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label Software Platforms | OTT & Commerce",
    description:
      "Production-ready software platforms for 9:16 short drama, OTT streaming, and e-commerce with 0% revenue cut.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solutions.mechatronlab.com";

  const breadcrumbs = [
    { name: "Home", item: "/" },
  ];

  const homeTickerItems = [
    { title: "Production Scale", detail: "1M+ Active Entertainment Viewers · Multi-Million Stream Scale" },
    { title: "Commercial Freedom", detail: "0% Revenue Cut · Keep 100% of Sales & Subscriptions" },
    { title: "Private Cloud VPC", detail: "100% Client-Owned AWS, GCP, Azure & Cloudflare Accounts" },
    { title: "Deployment Speed", detail: "Production App Store Launch in 2–4 Weeks" },
    { title: "Code Custody", detail: "Unencrypted Git Repository Access Available" },
    { title: "Transparent Pricing", detail: "$4,999 Flagship Suites · $2,999 Modular Launch" },
  ];

  const homeRolloutSteps = [
    {
      when: "Week 1",
      title: "Platform Selection, Branding & Cloud Account Setup",
      text: "We configure your custom branding, logo, typography, domain, and connect your private AWS, GCP, or Cloudflare accounts.",
    },
    {
      when: "Week 2",
      title: "Private Cloud Deployment & Central Backoffice Setup",
      text: "We deploy the operations CRM or Video CMS console directly onto your cloud, configuring payment gateways and automated ingest pipelines.",
    },
    {
      when: "Week 3",
      title: "Native Flutter Mobile Apps & Store Configurations",
      text: "We build native iOS & Android applications with your custom bundle IDs, setting up in-app purchases and push notifications.",
    },
    {
      when: "Week 4",
      title: "App Store Publishing, Performance Audits & Handover",
      text: "We assist through Apple App Store and Google Play reviews, perform security audits, and deliver master server access and unencrypted Git code.",
    },
  ];

  const combinedFaqs = [
    {
      q: "What types of software platforms can you deploy?",
      a: "We deploy three production-ready architectures: (1) Full-stack E-Commerce stores with native shopping apps and inventory CRM, (2) 9:16 vertical short-drama platforms with 60FPS swipe player and paywalls, and (3) 16:9 cinematic video streaming portals with TV casting and Video CMS.",
    },
    {
      q: "Where is the software hosted?",
      a: "Everything is deployed directly to your own private cloud account (AWS, Google Cloud, Microsoft Azure, Cloudflare, or your private VPS). You hold all master administrative keys and database access. There is zero shared multi-tenant hosting.",
    },
    {
      q: "Do you take any percentage or commission from my sales?",
      a: "Zero. We take 0% commission. Payment processors (Stripe, Apple In-App Purchase, Google Play Billing, PayPal, UPI) deposit 100% of customer funds directly into your bank account.",
    },
    {
      q: "Can I buy only the mobile apps or only the website?",
      a: "Yes. In addition to our $4,999 all-in-one base suites (which include both web and native mobile apps + backoffice), we offer standalone modular packages for $2,999 (e.g. Website Only + CRM, or Mobile App Only + CRM).",
    },
    {
      q: "Do I own the source code?",
      a: "Yes. All tiers include the option for full unencrypted Git repository source code with a perpetual commercial license, ensuring zero vendor lock-in.",
    },
    {
      q: "How fast can we launch?",
      a: "Because the core architecture is already pre-built and battle-tested, typical deployment, branding customization, and cloud configuration takes 2 to 4 weeks.",
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(combinedFaqs);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mechatron Lab Solutions",
    url: siteUrl,
    description:
      "Production-ready white-label software platforms for e-commerce, 9:16 short-drama, and 16:9 cinematic video streaming.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Mechatron Lab Solutions",
    url: siteUrl,
    logo: `${siteUrl}/brand/logo_icon.svg`,
    description:
      "Software development and engineering solutions deploying white-label platforms to client private cloud infrastructure.",
    email: BRAND.contact.email,
    telephone: BRAND.contact.whatsappDisplay,
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={websiteSchema} />
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />

      <Navbar />

      <main className="flex-1">
        {/* Minimalist Multi-Platform Hero */}
        <HomeHero />

        {/* Live Performance & Capabilities Strip */}
        <LiveTicker items={homeTickerItems} ariaLabel="Platform capabilities and production scale ticker" />

        {/* Interactive 3-Platform Showcase Deck */}
        <HomePlatformsDeck />

        {/* The Ownership Advantage: 3-Way Economics Comparison */}
        <HomeComparison />

        {/* Modern Engineering Stack Strip */}
        <TechStackStrip
          mode="all"
          headline="Production-Tested Technologies. Zero Outdated Legacy Code."
          subheadline="Next.js 16, Flutter 3.x, Cloudflare Stream & PostgreSQL"
        />

        {/* Cross-Disciplinary Production Portfolio (Video + Retail) */}
        <Work
          id="work"
          index="03 · Production Experience"
          title="Battle-Tested Platforms Running in Production"
          intro="Enterprise entertainment and retail systems built and deployed by our team, operating at scale on private clouds."
          projects={ALL_HOME_SHOWCASE_PROJECTS}
        />

        {/* 4-Week Cloud Rollout Roadmap */}
        <HowItWorks
          id="how-it-works"
          index="04 · 4-Week Rollout"
          title="From Initial Blueprint to Live Production"
          badge="Rapid 2–4 Week Deployment · Private Cloud VPC"
          steps={homeRolloutSteps}
        />

        {/* Flat-Fee Pricing & Developer Hours */}
        <Pricing
          id="pricing"
          index="05 · Pricing & Licensing"
          title="Simple, transparent flat pricing"
          intro="Flat one-time fee. No recurring monthly SaaS rent, no subscriber seat fees, and 0% revenue cut. Includes full private cloud deployment."
        />

        {/* Comprehensive Multi-Platform FAQ */}
        <Faq
          id="faq"
          index="06 · Frequently Asked Questions"
          title="Frequently Asked Questions"
          intro="Clear answers on private cloud hosting, source code licensing, and app store approvals."
          items={combinedFaqs}
        />

        {/* Closing Conversion Banner */}
        <Closing
          headline="Ready to launch on your own private cloud?"
          description="Talk directly with our solutions engineering team. We’ll demonstrate the live applications, the backoffice consoles, and guide you through the deployment roadmap."
          ctaDemo="Book platform walkthrough →"
        />
      </main>

      <Footer />
    </div>
  );
}
