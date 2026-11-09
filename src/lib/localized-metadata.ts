import type { Metadata } from "next";
import { languageAlternates, localizedPath } from "@/lib/site-config";
import { type LandingFamily, type LandingLocale } from "@/lib/site-config";
import { LOCALIZED_SEO, LOCALIZED_OTT_SEO, LOCALIZED_SHORT_DRAMA_SEO } from "@/lib/translations/seo";

const commerceSeo = {
  es: { title: "Plataforma E-Commerce y Apps | Mechatron Lab", description: "Tienda online, apps iOS y Android y panel de gestión en tu nube. Plataforma e-commerce de marca blanca con pago único y sin reparto de ingresos." },
  de: { title: "E-Commerce-Plattform und Apps | Mechatron Lab", description: "Onlineshop, iOS- und Android-Apps und zentrale Verwaltung in Ihrer Cloud. White-Label-Commerce mit einmaliger Bereitstellung ohne Umsatzbeteiligung." },
  fr: { title: "Plateforme E-Commerce et Applications | Mechatron Lab", description: "Boutique web, applications iOS et Android et gestion centralisée dans votre cloud. E-commerce en marque blanche sans partage de revenus." },
  hi: { title: "ई-कॉमर्स प्लेटफ़ॉर्म और मोबाइल ऐप | Mechatron Lab", description: "आपके क्लाउड पर ऑनलाइन स्टोर, iOS और Android ऐप तथा एडमिन पैनल। एक बार डिप्लॉयमेंट शुल्क दें और बिना आय साझा किए अपना ई-कॉमर्स चलाएँ।" },
};

export const familyPath = (family: LandingFamily) => family === "home" ? "/" : `/solutions/${family}`;

export function landingMetadata(locale: LandingLocale, family: LandingFamily): Metadata {
  const seo = family === "ott-streaming" ? LOCALIZED_OTT_SEO[locale]
    : family === "short-drama" ? LOCALIZED_SHORT_DRAMA_SEO[locale] : LOCALIZED_SEO[locale];
  const title = family === "ecommerce" ? commerceSeo[locale].title : seo.title;
  const path = localizedPath(familyPath(family), locale);
  const description = family === "ecommerce" ? commerceSeo[locale].description : seo.description;
  const image = family === "ott-streaming" ? "/showcase/microdrama-catalog.webp" : "/og-image.png";
  return {
    title, description, keywords: seo.keywords,
    alternates: { canonical: path, languages: languageAlternates(familyPath(family)) },
    openGraph: { type: "website", locale: seo.ogLocale, title, description, url: path, siteName: "Mechatron Lab Solutions", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

