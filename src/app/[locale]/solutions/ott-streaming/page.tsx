import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Language } from "@/types";
import { LOCALIZED_OTT_SEO } from "@/lib/translations/seo";
import OttStreamingSolutionPage from "@/app/solutions/ott-streaming/page";

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
  const seo = LOCALIZED_OTT_SEO[lang] ?? LOCALIZED_OTT_SEO.en;
  const canonicalPath = locale === "en" ? "/solutions/ott-streaming" : `/${locale}/solutions/ott-streaming`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/solutions/ott-streaming",
        es: "/es/solutions/ott-streaming",
        de: "/de/solutions/ott-streaming",
        fr: "/fr/solutions/ott-streaming",
        hi: "/hi/solutions/ott-streaming",
        "x-default": "/solutions/ott-streaming",
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

export default async function LocalizedOttStreamingSolutionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as Language)) {
    notFound();
  }

  return <OttStreamingSolutionPage />;
}
