import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TRANSLATIONS } from "@/lib/translations";
import { LOCALIZED_SEO } from "@/lib/translations/seo";
import { Language } from "@/types";
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

const VALID_LOCALES: Language[] = ["en", "es", "de", "fr", "hi"];

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "es" },
    { locale: "de" },
    { locale: "fr" },
    { locale: "hi" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as Language)) {
    return {};
  }

  const lang = locale as Language;
  const seo = LOCALIZED_SEO[lang] ?? LOCALIZED_SEO.en;

  const canonicalPath = locale === "en" ? "/" : `/${locale}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/",
        es: "/es",
        de: "/de",
        fr: "/fr",
        hi: "/hi",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: seo.ogLocale,
      url: canonicalPath,
      title: seo.title,
      description: seo.description,
      siteName: "Mechatron Lab Solutions",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as Language)) {
    notFound();
  }

  const lang = locale as Language;
  const t = TRANSLATIONS[lang] ?? TRANSLATIONS.en;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((faq) => ({
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
        <Hero />
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
