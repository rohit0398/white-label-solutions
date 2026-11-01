import { createLocalizer, englishMessage } from "@/lib/messages";
import { getLocaleMessages } from "@/lib/locale-messages";
import type { Language } from "@/types";
import { FAMILY_PACKAGE, schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
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

export default function EcommerceSolutionPillarPage({ language = "en" }: { language?: Language }) {
  const translateCopy = createLocalizer(language, getLocaleMessages(language));

  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: translateCopy(englishMessage("ecommerce.home.70f8bb9")), item: language === "en" ? "/" : `/${language}` },
    { name: translateCopy(englishMessage("ecommerce.solutions.05b004a")), item: "/solutions" },
    { name: translateCopy(englishMessage("ecommerce.pre.built.e.commerce.store.f5dda60")), item: language === "en" ? "/solutions/ecommerce" : `/${language}/solutions/ecommerce` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(translateCopy(FAQS));
  const softwareSchema = generateSoftwareSchema({
    name: translateCopy(englishMessage("ecommerce.pre.built.e.commerce.store.mobile.apps.compl.6e7c01d")),
    description:
      translateCopy(englishMessage("ecommerce.complete.pre.built.white.label.e.commerce.ar.93dfe17")),
    price: schemaPrice(FAMILY_PACKAGE["ecommerce"]),
    url: language === "en" ? "/solutions/ecommerce" : `/${language}/solutions/ecommerce`,
    operatingSystem: "Web, iOS, Android, Cloud (AWS, GCP, Azure, DigitalOcean)",
    applicationCategory: "BusinessApplication",
    siteUrl,
  });

  return (
    <div data-page-family="ecommerce" data-page-template="shared" className="min-h-screen flex flex-col bg-paper text-ink">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={softwareSchema} />

      <Navbar />

      <main className="flex-1">
        <Hero
          category="ecommerce"
          mode="all"
          breadcrumbs={[
            { label: translateCopy(englishMessage("ecommerce.home.70f8bb9")), href: "/" },
            { label: translateCopy(englishMessage("ecommerce.solutions.05b004a")), href: "/solutions" },
            { label: translateCopy(englishMessage("ecommerce.complete.e.commerce.store.513e59f")) },
          ]}
          badge={translateCopy(translateCopy(englishMessage("ecommerce.pre.built.ready.to.launch.2.4.week.deploymen.3636217")))}
          headline={translateCopy(englishMessage("ecommerce.pre.built.e.commerce.store.mobile.apps.ready.f9105e8"))}
          subtitle={translateCopy(englishMessage("ecommerce.pre.built.production.ready.architecture.desi.3d7f316"))}
          anchors={[
            { label: translateCopy(englishMessage("ecommerce.01.web.storefront.18c172c")), href: "#hero" },
            { label: translateCopy(englishMessage("ecommerce.02.native.apps.2c3c671")), href: "#mobile-apps" },
            { label: translateCopy(englishMessage("ecommerce.03.operations.crm.c5abd12")), href: "#admin-crm" },
          ]}
        />
        <TechStackStrip mode="all" />
        <LiveTicker />
        <AppShowcase index="01" />
        <AdminCrmShowcase index="02" />
        <HowItWorks index="03" />
        <Work mode="all" index="04" />
        <Pricing index="05" />
        <Faq items={translateCopy(FAQS)} />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
