import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Language } from "@/types";
import { LOCALIZED_SHORT_DRAMA_SEO } from "@/lib/translations/seo";
import ShortDramaPlatformPage from "@/app/solutions/short-drama/page";

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
  const seo = LOCALIZED_SHORT_DRAMA_SEO[lang] ?? LOCALIZED_SHORT_DRAMA_SEO.en;
  const canonicalPath = locale === "en" ? "/solutions/short-drama" : `/${locale}/solutions/short-drama`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/solutions/short-drama",
        es: "/es/solutions/short-drama",
        de: "/de/solutions/short-drama",
        fr: "/fr/solutions/short-drama",
        hi: "/hi/solutions/short-drama",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalPath,
      siteName: "Mechatron Lab Solutions",
      locale: seo.ogLocale,
      type: "website",
      images: ["/showcase/ott-drama-app.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/showcase/ott-drama-app.jpg"],
    },
  };
}

export default async function LocalizedShortDramaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as Language)) {
    notFound();
  }

  return <ShortDramaPlatformPage />;
}
