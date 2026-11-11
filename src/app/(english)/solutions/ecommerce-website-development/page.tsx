import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import { englishMessage } from "@/lib/messages";
import type { Metadata } from "next";
import { ECOMMERCE_WEB_PRICING_TIERS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { EcommerceArchitecture } from "@/components/sections/EcommerceArchitecture";
import { EcommerceProof } from "@/components/sections/EcommerceProof";
import { EcommerceRollout } from "@/components/sections/EcommerceRollout";
import { CompleteStoreCallout } from "@/components/sections/CompleteStoreCallout";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, generateSoftwareSchema } from "@/lib/schema";

const title = "E-Commerce Website Development for Online Stores";
const description = "Launch a branded online store with browser checkout, product pages, and an admin panel for orders and inventory on your cloud account.";
const canonical = "/solutions/ecommerce-website-development";

const faqs = [
  { q: "What does the website package include?", a: "It includes a branded storefront, browser checkout, and an admin panel for products, orders, and stock." },
  { q: "Can you move products from my existing store?", a: "We review your catalog and export format before estimating migration work. Tell us which products, customer records, and order history you need to move." },
  { q: "Is source code included in the website launch?", a: "The website launch covers deployment. A commercial source code license for the storefront and admin panel is available as an add-on." },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", title, description, url: canonical, images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function EcommerceWebsiteDevelopmentPage() {
  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "E-Commerce Website Development", item: "/solutions/ecommerce-website-development" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(faqs);
  const softwareSchema = generateSoftwareSchema({
    name: title,
    description,
    price: schemaPrice("web-launch"),
    url: "/solutions/ecommerce-website-development",
    operatingSystem: "Web, Cloud (AWS, GCP, Azure, DigitalOcean)",
    applicationCategory: "BusinessApplication",
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
          badge="Online store and admin panel"
          headline="E-Commerce Website Development"
          subtitle="Launch a storefront with product pages, browser checkout, and an admin panel for orders and inventory. We deploy the store to your cloud account."
          anchors={[
            { label: englishMessage("EcommerceProof.title"), href: "#work" },
            { label: englishMessage("ShortDrama.top.included"), href: "#architecture" },
            { label: englishMessage("ShortDrama.top.pricing"), href: "#pricing" },
          ]}
        />
        <EcommerceProof offer="web" />
        <TechStackStrip mode="web" wide headline={englishMessage("EcommerceArchitecture.techTitle")}
          subheadline={englishMessage("constants.deployment.to.your.aws.google.cloud.or.azure.98716f6")} />
        <EcommerceArchitecture offer="web" />
        <EcommerceRollout offer="web" />

        {/* Child Cross-Sell Callout Box */}
        <CompleteStoreCallout />

        <Pricing
          index=""
          title="Website pricing"
          intro="The launch fee covers the storefront and admin panel. Hosting, payment processing, and the optional source code license are separate."
          hideCalculator
          tiers={ECOMMERCE_WEB_PRICING_TIERS}
        />

        <Faq index="" items={faqs} />
        <Closing tierId="web-launch" headline={englishMessage("EcommerceClosing.title")} description={englishMessage("EcommerceClosing.description")} />
      </main>

      <Footer />
    </div>
  );
}
