import { ECOMMERCE_PATHS } from "@/lib/solution-paths";
import { schemaPrice } from "@/lib/pricing-catalog";
import { SITE_URL } from "@/lib/site-config";
import { englishMessage } from "@/lib/messages";
import type { Metadata } from "next";
import { ECOMMERCE_APP_PRICING_TIERS } from "@/lib/constants";
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

const title = "Launch an E-Commerce App for iOS & Android";
const description = "Launch white-label shopping apps for iOS and Android with product browsing, checkout, and order updates.";
const canonical = ECOMMERCE_PATHS.app;

const faqs = [
  { q: "Can the apps connect to my existing store?", a: "We review your catalog, inventory, and order APIs before confirming what can connect and what needs custom work." },
  { q: "Who submits the apps?", a: "We help prepare and submit the apps through your Apple and Google developer accounts. The stores review the apps after submission." },
  { q: "Does the app package include source code?", a: "The app launch covers deployment and submission support. The Flutter source code license is available as an add-on." },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", title, description, url: canonical, images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function EcommerceAppDevelopmentPage() {
  const siteUrl = SITE_URL;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Solutions", item: "/solutions" },
    { name: "E-Commerce App Development", item: ECOMMERCE_PATHS.app },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(siteUrl, breadcrumbs);
  const faqSchema = generateFaqSchema(faqs);
  const softwareSchema = generateSoftwareSchema({
    name: title,
    description,
    price: schemaPrice("app-launch"),
    url: ECOMMERCE_PATHS.app,
    operatingSystem: "iOS, Android",
    applicationCategory: "ShoppingApplication",
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
          mode="app"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "E-Commerce App Development" },
          ]}
          badge="Shopping apps for iOS and Android"
          headline="Launch an e-commerce app for iOS and Android"
          subtitle={description}
          anchors={[
            { label: englishMessage("EcommerceProof.appTitle"), href: "#work" },
            { label: englishMessage("ShortDrama.top.included"), href: "#architecture" },
            { label: englishMessage("ShortDrama.top.pricing"), href: "#pricing" },
          ]}
        />
        <EcommerceProof offer="app" />
        <TechStackStrip mode="app" wide headline={englishMessage("EcommerceArchitecture.techTitle")}
          subheadline={englishMessage("constants.deployment.to.your.aws.google.cloud.or.azure.98716f6")} />
        <EcommerceArchitecture offer="app" />
        <EcommerceRollout offer="app" />

        {/* Child Cross-Sell Callout Box */}
        <CompleteStoreCallout />

        <Pricing
          index=""
          title="Mobile app pricing"
          intro="The launch fee covers the iOS and Android apps and submission support. Source code licensing and custom integrations are available separately."
          hideCalculator
          tiers={ECOMMERCE_APP_PRICING_TIERS}
        />

        <Faq index="" items={faqs} />
        <Closing tierId="app-launch" headline={englishMessage("EcommerceClosing.title")} description={englishMessage("EcommerceClosing.description")} />
      </main>

      <Footer />
    </div>
  );
}
