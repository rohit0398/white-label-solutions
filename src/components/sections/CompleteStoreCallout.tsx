import React from "react";
import { Store, Globe, Smartphone, ShieldCheck } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteStoreCallout() {
  return (
    <CompletePackageCallout
      badge="All-in-One Package"
      title="Looking for the Complete E-Commerce Solution?"
      subtitle="Need both the web storefront and mobile shopping apps? Launch the unified stack on your private cloud with shared real-time inventory and zero recurring platform cuts."
      price="$4,999"
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Globe,
          title: "Next.js 16 Web Storefront",
          desc: "Sub-second page speeds, headless checkout, dynamic SEO metadata, and custom domain branding.",
        },
        {
          icon: Smartphone,
          title: "Native iOS & Android Apps",
          desc: "Flutter 3.x native binaries published under your developer accounts with push notification engine.",
        },
        {
          icon: ShieldCheck,
          title: "Central Operations CRM",
          desc: "Multi-warehouse stock, automated GST/VAT tax invoices, order routing, and customer analytics.",
        },
      ]}
      guarantees={[
        "Deployed to your AWS / GCP / Azure",
        "100% Data & User Ownership",
        "0% Platform Commission",
      ]}
      ctaText="Explore Complete Store Package ($4,999)"
      ctaHref="/solutions/ecommerce"
    />
  );
}
