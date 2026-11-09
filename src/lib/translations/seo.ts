import { Language } from "@/types";

export interface LocalizedSeo {
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
}

export const LOCALIZED_SEO: Record<Language, LocalizedSeo> = {
  en: {
    title: "White-Label Software Platforms | OTT & Commerce | Mechatron Lab",
    description:
      "Production-ready software platforms for 9:16 short drama, OTT video streaming, and e-commerce. Deployed to your private cloud in 2–4 weeks with 0% revenue cut.",
    keywords: [
      "white label software platforms",
      "pre-built ecommerce store",
      "short drama platform",
      "white label ott platform",
      "reelshort clone app",
      "netflix clone app",
      "self hosted ecommerce platform",
      "private cloud software deployment",
      "flutter app development",
      "nextjs web development",
    ],
    ogLocale: "en_US",
  },
  es: {
    title: "Plataformas Software Marca Blanca | OTT y E-Commerce | Mechatron Lab",
    description:
      "Plataformas de software para micro-dramas 9:16, streaming OTT 16:9 y e-commerce. Desplegado en tu propia nube en 2–4 semanas sin comisiones.",
    keywords: [
      "plataformas software marca blanca",
      "tienda ecommerce marca blanca",
      "plataforma micro drama 9:16",
      "plataforma ott streaming",
      "clon reelshort con codigo fuente",
      "desarrollo software nube propia",
    ],
    ogLocale: "es_ES",
  },
  de: {
    title: "White-Label Software-Plattformen | OTT & E-Commerce | Mechatron Lab",
    description:
      "Software-Plattformen für 9:16 Kurzserien, OTT Video-Streaming und E-Commerce. In 2–4 Wochen in Ihrer privaten Cloud bereitgestellt – 0 % Provision.",
    keywords: [
      "white label software plattformen",
      "fertiger online shop eigene cloud",
      "kurzserien streaming plattform",
      "ott video plattform einmalzahlung",
      "reelshort klon app",
      "software entwicklung private cloud",
    ],
    ogLocale: "de_DE",
  },
  fr: {
    title: "Plateformes Logicielles Marque Blanche | OTT & E-Commerce | Mechatron Lab",
    description:
      "Plateformes logicielles pour mini-séries 9:16, streaming OTT et e-commerce. Déployées sur votre cloud privé en 2 à 4 semaines avec 0% commission.",
    keywords: [
      "plateformes logicielles marque blanche",
      "boutique ecommerce marque blanche",
      "plateforme mini series 9:16",
      "plateforme streaming video ott",
      "clone reelshort code source",
      "deploiement cloud prive",
    ],
    ogLocale: "fr_FR",
  },
  hi: {
    title: "व्हाइट-लेबल सॉफ्टवेयर प्लेटफ़ॉर्म | OTT और ई-कॉमर्स | Mechatron Lab",
    description:
      "9:16 शॉर्ट-ड्रामा, OTT वीडियो स्ट्रीमिंग और ई-कॉमर्स सॉफ्टवेयर। 2–4 हफ्तों में आपके प्राइवेट क्लाउड पर डिप्लॉय, 0% कमीशन।",
    keywords: [
      "व्हाइट लेबल सॉफ्टवेयर प्लेटफॉर्म",
      "रेडीमेड ईकॉमर्स स्टोर",
      "शॉर्ट ड्रामा प्लेटफॉर्म",
      "ओटीटी वीडियो स्ट्रीमिंग ऐप",
      "रीलशॉर्ट क्लोन ऐप",
      "प्राइवेट क्लाउड सॉफ्टवेयर",
    ],
    ogLocale: "hi_IN",
  },
};

export const LOCALIZED_OTT_SEO: Record<Language, LocalizedSeo> = {
  en: {
    title: "White-Label OTT Streaming Platform",
    description:
      "Launch a branded streaming service for movies and series with a website and iOS and Android apps. Manage your catalog, subscriptions, and ads in one place.",
    keywords: [
      "ott platform development company",
      "video streaming app development",
      "reelshort clone app with source code",
      "netflix clone app",
      "ready to deploy streaming app",
      "ott platform one time payment self hosted",
      "video streaming app developers",
    ],
    ogLocale: "en_US",
  },
  es: {
    title: "Plataforma de streaming OTT de marca blanca",
    description:
      "Lanza tu propio servicio de streaming de películas y series con un sitio web y apps para iOS y Android. Gestiona el catálogo, las suscripciones y los anuncios desde un solo panel.",
    keywords: [
      "desarrollo plataforma ott",
      "desarrollo app streaming video",
      "clon netflix con codigo fuente",
      "streaming video autohospedado pago unico",
      "app de streaming lista para desplegar",
    ],
    ogLocale: "es_ES",
  },
  de: {
    title: "White-Label-OTT-Streaming-Plattform",
    description:
      "Starten Sie Ihren eigenen Streamingdienst für Filme und Serien mit einer Website und Apps für iOS und Android. Verwalten Sie Katalog, Abos und Werbung zentral.",
    keywords: [
      "ott plattform entwicklung",
      "video streaming app entwicklung",
      "netflix klon quellcode",
      "video streaming plattform einmalzahlung",
      "einsatzbereite streaming app",
    ],
    ogLocale: "de_DE",
  },
  fr: {
    title: "Plateforme de streaming OTT en marque blanche",
    description:
      "Lancez votre service de streaming de films et de séries avec un site et des applications iOS et Android. Gérez le catalogue, les abonnements et la publicité au même endroit.",
    keywords: [
      "developpement plateforme ott",
      "application streaming video",
      "clone netflix code source",
      "streaming video heberge paiement unique",
      "solution streaming prete au deploiement",
    ],
    ogLocale: "fr_FR",
  },
  hi: {
    title: "व्हाइट लेबल OTT स्ट्रीमिंग प्लेटफ़ॉर्म",
    description:
      "फ़िल्मों और सीरीज़ के लिए अपने ब्रांड की स्ट्रीमिंग सेवा शुरू करें। वेबसाइट और iOS व Android ऐप के साथ कैटलॉग, सदस्यता और विज्ञापन एक ही पैनल से संभालें।",
    keywords: [
      "ओटीटी प्लेटफॉर्म डेवलपमेंट",
      "वीडियो स्ट्रीमिंग ऐप डेवलपमेंट",
      "नेटफ्लिक्स क्लोन ऐप सोर्स कोड",
      "सेल्फ होस्टेड वीडियो स्ट्रीमिंग ऐप",
      "रेडी टू डिप्लॉय वीडियो ऐप",
    ],
    ogLocale: "hi_IN",
  },
};

export const LOCALIZED_SHORT_DRAMA_SEO: Record<Language, LocalizedSeo> = {
  en: {
    title: "White-Label Short Drama Streaming Platform",
    description:
      "Launch a branded short drama platform with iOS and Android apps, a website, and one admin panel. Deploy it to your own cloud account.",
    keywords: [
      "short drama app development company",
      "reelshort clone app with source code",
      "dramabox white label platform",
      "vertical video streaming platform",
      "micro drama software solution",
      "short drama apps and website",
    ],
    ogLocale: "en_US",
  },
  es: {
    title: "Plataforma de streaming de microdramas",
    description:
      "Lanza una plataforma de microdramas con tu marca, apps para iOS y Android, sitio web y un solo panel de administración. Instálala en tu propia nube.",
    keywords: [
      "desarrollo app micro drama 9:16",
      "clon reelshort con codigo fuente",
      "dramabox marca blanca",
      "streaming videos verticales",
      "software series cortas",
    ],
    ogLocale: "es_ES",
  },
  de: {
    title: "Streaming-Plattform für Kurzserien",
    description:
      "Starten Sie eine Plattform für Kurzserien unter Ihrer Marke mit iOS- und Android-Apps, Website und zentraler Verwaltung in Ihrer eigenen Cloud.",
    keywords: [
      "kurzdrama plattform white label",
      "reelshort klon app",
      "dramabox alternative software",
      "vertikales video streaming",
      "kurzfilm serien app",
    ],
    ogLocale: "de_DE",
  },
  fr: {
    title: "Plateforme de streaming de mini-séries verticales",
    description:
      "Lancez une plateforme de mini-séries à votre marque avec des apps iOS et Android, un site et une interface de gestion, sur votre propre cloud.",
    keywords: [
      "developpement app mini serie 9:16",
      "clone reelshort code source",
      "dramabox marque blanche",
      "streaming video vertical",
      "application courts metrages",
    ],
    ogLocale: "fr_FR",
  },
  hi: {
    title: "शॉर्ट ड्रामा स्ट्रीमिंग प्लेटफ़ॉर्म",
    description:
      "अपने ब्रांड का शॉर्ट ड्रामा प्लेटफ़ॉर्म लॉन्च करें। iOS और Android ऐप, वेबसाइट और एक एडमिन पैनल, सब आपके अपने क्लाउड खाते में।",
    keywords: [
      "शॉर्ट ड्रामा ऐप डेवलपमेंट",
      "रीलशॉर्ट क्लोन ऐप सोर्स कोड",
      "ड्रामाबॉक्स व्हाइट लेबल",
      "वर्टिकल वीडियो स्ट्रीमिंग",
      "शॉर्ट सीरीज सॉफ्टवेयर",
    ],
    ogLocale: "hi_IN",
  },
};

