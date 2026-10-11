import React from "react";
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

export default function HomePage() {
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
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Navbar />

      <main className="flex-1">
        <Hero
          mode="all"
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
