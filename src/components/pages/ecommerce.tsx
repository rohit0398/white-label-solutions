import { createLocalizer, englishMessage } from "@/lib/messages";
import { getLocaleMessages } from "@/lib/locale-messages";
import type { Language } from "@/types";
import { FAMILY_PACKAGE, schemaPrice } from "@/lib/pricing-catalog";
import { languageAlternates, SITE_URL } from "@/lib/site-config";
import type { Metadata } from "next";
import { FAQS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { EcommerceArchitecture } from "@/components/sections/EcommerceArchitecture";
import { EcommerceProof } from "@/components/sections/EcommerceProof";
import { EcommerceRollout } from "@/components/sections/EcommerceRollout";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import Link from "@/components/ui/LocalizedLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

const title = "White-Label E-Commerce Platform for Web and Mobile";
const description = "Launch an online store and iOS and Android shopping apps. Manage orders and multi-warehouse inventory from one admin panel on your cloud.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/solutions/ecommerce",
    languages: languageAlternates("/solutions/ecommerce"),
  },
  openGraph: {
    title,
    description,
    url: "/solutions/ecommerce",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
            { label: englishMessage("EcommerceProof.title"), href: "#work" },
            { label: englishMessage("ShortDrama.top.included"), href: "#architecture" },
            { label: englishMessage("ShortDrama.top.pricing"), href: "#pricing" },
          ]}
        />
        <EcommerceProof />
        <TechStackStrip
          mode="all"
          wide
          headline={englishMessage("EcommerceArchitecture.techTitle")}
          subheadline={englishMessage("constants.deployment.to.your.aws.google.cloud.or.azure.98716f6")}
        />
        <EcommerceArchitecture />
        <EcommerceRollout offer="all" />
        <Pricing index="" intro={englishMessage("EcommercePricing.intro")} hideCalculator>
          <Link href="/compare/shopify-alternative" className="text-sm font-medium underline underline-offset-4">
            {englishMessage("EcommercePricing.compare")}
          </Link>
        </Pricing>
        <Faq index="" items={translateCopy(FAQS)} />
        <Closing headline={englishMessage("EcommerceClosing.title")} description={englishMessage("EcommerceClosing.description")} />
      </main>

      <Footer />
    </div>
  );
}
