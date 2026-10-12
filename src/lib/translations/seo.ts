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
    title: "OTT Platform Development Company | Video Apps | Mechatron Lab",
    description:
      "Launch your branded streaming platform like Netflix in 2–4 weeks. Widescreen web portal, iOS & Android apps, and Video CMS on your cloud with 0% fees.",
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
    title: "Desarrollo de Plataforma OTT | Apps de Streaming | Mechatron Lab",
    description:
      "Lanza tu plataforma de video como Netflix en 2–4 semanas. Portal web 16:9, apps iOS/Android y Video CMS en tu propia nube con 0% comisión.",
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
    title: "OTT Plattform Entwicklung | Video Streaming Apps | Mechatron Lab",
    description:
      "Starten Sie Ihre Video-Streaming-Plattform wie Netflix in 2–4 Wochen. Breitbild-Webportal, iOS/Android-Apps und Video CMS in Ihrer Cloud ohne Provision.",
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
    title: "Développement Plateforme OTT | Applications Vidéo | Mechatron Lab",
    description:
      "Lancez votre plateforme de streaming type Netflix en 2 à 4 semaines. Portail web 16:9, apps iOS/Android et CMS sur votre cloud avec 0% commission.",
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
    title: "ओटीटी प्लेटफ़ॉर्म डेवलपमेंट | वीडियो स्ट्रीमिंग ऐप्स | Mechatron Lab",
    description:
      "नेटफ्लिक्स जैसा अपना ब्रांडेड वीडियो स्ट्रीमिंग प्लेटफ़ॉर्म 2–4 हफ्तों में लॉन्च करें। वेब पोर्टल, मोबाइल ऐप्स और CMS बिना किसी कमीशन के।",
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
    title: "Short-Drama App Development Company | Video Streaming | Mechatron Lab",
    description:
      "Launch your branded short-drama app like ReelShort in 2–4 weeks. Complete 9:16 iOS & Android apps, web player, and CMS on your private cloud with 0% revenue cut.",
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
    title: "Desarrollo de Apps de Micro-Dramas 9:16 | Streaming | Mechatron Lab",
    description:
      "Lanza tu app de micro-dramas tipo ReelShort en 2–4 semanas. Apps nativas 9:16 iOS/Android, reproductor web y CMS en tu propia nube sin comisiones.",
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
    title: "9:16 Kurzserien App Entwicklung | Video Streaming | Mechatron Lab",
    description:
      "Starten Sie Ihre Kurzserien-App wie ReelShort in 2–4 Wochen. 9:16 iOS & Android Apps, Web-Player und CMS in Ihrer Cloud ohne Provision.",
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
    title: "Développement d'Apps Mini-Séries 9:16 | Streaming | Mechatron Lab",
    description:
      "Lancez votre application de mini-séries type ReelShort en 2 à 4 semaines. Apps 9:16 iOS/Android, lecteur web et CMS sur votre cloud avec 0% commission.",
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
    title: "9:16 शॉर्ट-ड्रामा ऐप डेवलपमेंट | वीडियो स्ट्रीमिंग | Mechatron Lab",
    description:
      "2–4 हफ्तों में रीलशॉर्ट जैसा अपना शॉर्ट-ड्रामा ऐप लॉन्च करें। 9:16 iOS और एंड्रॉइड ऐप्स, वेब प्लेयर और CMS बिना किसी कमीशन के।",
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

