import { Language } from "@/types";

export interface LocalizedSeo {
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
}

export const LOCALIZED_SEO: Record<Language, LocalizedSeo> = {
  en: {
    title: "White-Label Software Platforms | E-Commerce, Short Drama & OTT | Mechatron Lab",
    description:
      "Production-ready white-label software platforms for e-commerce, 9:16 short-drama, and 16:9 cinematic video streaming. Deployed to your private cloud in 2–4 weeks with 0% revenue cut.",
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
      "nextjs web application development",
    ],
    ogLocale: "en_US",
  },
  es: {
    title: "Plataformas de Software Marca Blanca | E-Commerce, Micro-Dramas y OTT | Mechatron Lab",
    description:
      "Plataformas de software listas para producción: comercio electrónico, micro-dramas 9:16 y streaming de video OTT 16:9. Desplegado en tu propia nube en 2–4 semanas sin comisiones.",
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
    title: "White-Label Software-Plattformen | E-Commerce, Kurzserien & OTT | Mechatron Lab",
    description:
      "Einsatzbereite Software-Plattformen für E-Commerce, 9:16 vertikale Kurzserien und 16:9 Video-Streaming. In 2–4 Wochen in Ihrer privaten Cloud bereitgestellt – 0 % Umsatzprovision.",
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
    title: "Plateformes Logicielles en Marque Blanche | E-Commerce, Séries Courtes & OTT | Mechatron Lab",
    description:
      "Plateformes logicielles prêtes à l'emploi pour le e-commerce, mini-séries 9:16 et streaming vidéo OTT 16:9. Déployées sur votre cloud privé en 2 à 4 semaines avec 0% commission.",
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
    title: "व्हाइट-लेबल सॉफ्टवेयर प्लेटफ़ॉर्म | ई-कॉमर्स, शॉर्ट-ड्रामा और ओटीटी | Mechatron Lab",
    description:
      "ई-कॉमर्स, 9:16 वर्टिकल शॉर्ट-ड्रामा और 16:9 सिनेमैटिक वीडियो स्ट्रीमिंग के लिए प्रोडक्शन-रेडी सॉफ्टवेयर प्लेटफ़ॉर्म। 2–4 हफ्तों में आपके प्राइवेट क्लाउड पर डिप्लॉय, 0% कमीशन।",
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
    title: "White-Label OTT Platform & Short-Video Drama Apps | Deployed on Your Cloud",
    description:
      "Production-ready white-label OTT streaming & 9:16 vertical drama apps. Deployed on your Cloudflare/AWS cloud with zero subscriber fees and full source code custody.",
    keywords: [
      "white label ott platform",
      "short video drama app development",
      "reelshort clone app with source code",
      "dramabox white label platform",
      "ready to deploy streaming app",
      "ott platform one time payment self hosted",
      "video streaming app developers",
    ],
    ogLocale: "en_US",
  },
  es: {
    title: "Plataforma OTT Marca Blanca y Apps de Series Cortas 9:16 | En Tu Nube",
    description:
      "Plataforma de streaming OTT marca blanca lista para producción y apps de micro-dramas verticales 9:16. Desplegado en tu propia nube con 0% comisión y código fuente 100%.",
    keywords: [
      "plataforma ott marca blanca",
      "desarrollo app drama corto vertical",
      "clon reelshort con codigo fuente",
      "streaming video autohospedado pago unico",
      "app de streaming lista para desplegar",
    ],
    ogLocale: "es_ES",
  },
  de: {
    title: "White-Label OTT-Streaming-Plattform & Kurzfilm-Apps 9:16 | Eigene Cloud",
    description:
      "Einsatzbereite White-Label OTT-Plattform und 9:16 vertikale Kurzserien-Apps. In Ihrer eigenen Cloud gehostet mit 0 % Gebühren pro Abonnent und vollem Quellcode-Eigentum.",
    keywords: [
      "white label ott plattform",
      "kurzdrama serien app entwicklung",
      "reelshort klon quellcode",
      "video streaming plattform einmalzahlung",
      "einsatzbereite streaming app",
    ],
    ogLocale: "de_DE",
  },
  fr: {
    title: "Plateforme OTT Marque Blanche & Applications Courts-Métrages 9:16 | Sur Votre Cloud",
    description:
      "Solution de streaming OTT marque blanche et applications de mini-séries verticales 9:16. Déployé sur votre cloud avec 0% commission et pleine propriété du code source.",
    keywords: [
      "plateforme ott marque blanche",
      "application mini serie video vertical",
      "clone reelshort code source",
      "streaming video heberge paiement unique",
      "solution streaming prete au deploiement",
    ],
    ogLocale: "fr_FR",
  },
  hi: {
    title: "व्हाइट-लेबल ओटीटी प्लेटफ़ॉर्म और शॉर्ट-ड्रामा ऐप्स | आपके अपने क्लाउड पर",
    description:
      "रेडी-टू-डिप्लॉय व्हाइट-लेबल ओटीटी स्ट्रीमिंग प्लेटफ़ॉर्म और 9:16 वर्टिकल शॉर्ट-ड्रामा ऐप्स (रीलशॉर्ट स्टाइल)। बिना किसी सब्सक्राइबर कमीशन और 100% सोर्स कोड ओनरशिप के साथ।",
    keywords: [
      "व्हाइट लेबल ओटीटी प्लेटफॉर्म",
      "शॉर्ट वीडियो ड्रामा ऐप डेवलपमेंट",
      "रीलशॉर्ट क्लोन ऐप सोर्स कोड",
      "सेल्फ होस्टेड वीडियो स्ट्रीमिंग ऐप",
      "रेडी टू डिप्लॉय वीडियो ऐप",
    ],
    ogLocale: "hi_IN",
  },
};

export const LOCALIZED_SHORT_DRAMA_SEO: Record<Language, LocalizedSeo> = {
  en: {
    title: "White-Label 9:16 Short-Drama Streaming Platform | Apps & Web | Mechatron Lab",
    description:
      "Launch your branded 9:16 vertical short-drama platform in 2–4 weeks. Complete Flutter iOS & Android apps, Next.js web streaming player, and Video CMS with 0% revenue cut.",
    keywords: [
      "short drama platform",
      "reelshort clone app with source code",
      "dramabox white label platform",
      "vertical video streaming platform",
      "micro drama software solution",
      "short drama apps and website",
    ],
    ogLocale: "en_US",
  },
  es: {
    title: "Plataforma de Micro-Dramas 9:16 Marca Blanca | Apps y Web | Mechatron Lab",
    description:
      "Lanza tu plataforma de videos cortos 9:16 en 2–4 semanas. Apps nativas iOS/Android, reproductor web móvil y panel Video CMS en tu propia nube con 0% comisión.",
    keywords: [
      "plataforma micro drama 9:16",
      "clon reelshort con codigo fuente",
      "dramabox marca blanca",
      "streaming videos verticales",
      "software series cortas",
    ],
    ogLocale: "es_ES",
  },
  de: {
    title: "White-Label 9:16 Kurzserien-Streaming-Plattform | Apps & Web | Mechatron Lab",
    description:
      "Starten Sie Ihre eigene 9:16 vertikale Kurzserien-Plattform in 2–4 Wochen. Flutter iOS/Android Apps, Next.js Web-Player und Video CMS in Ihrer Cloud ohne Umsatzprovision.",
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
    title: "Plateforme de Mini-Séries 9:16 en Marque Blanche | Apps & Web | Mechatron Lab",
    description:
      "Lancez votre plateforme de courts-métrages verticaux 9:16 en 2–4 semaines. Apps Flutter iOS/Android, lecteur web Next.js et Video CMS sur votre cloud avec 0% commission.",
    keywords: [
      "plateforme mini serie 9:16",
      "clone reelshort code source",
      "dramabox marque blanche",
      "streaming video vertical",
      "application courts metrages",
    ],
    ogLocale: "fr_FR",
  },
  hi: {
    title: "व्हाइट-लेबल 9:16 शॉर्ट-ड्रामा स्ट्रीमिंग प्लेटफ़ॉर्म | ऐप्स और वेब | Mechatron Lab",
    description:
      "2–4 हफ्तों में अपना ब्रांडेड 9:16 वर्टिकल शॉर्ट-ड्रामा प्लेटफ़ॉर्म लॉन्च करें। फ्लटर iOS और एंड्रॉइड ऐप्स, Next.js वेब प्लेयर और वीडियो सीएमएस बिना किसी कमीशन के।",
    keywords: [
      "शॉर्ट ड्रामा प्लेटफॉर्म",
      "रीलशॉर्ट क्लोन ऐप सोर्स कोड",
      "ड्रामाबॉक्स व्हाइट लेबल",
      "वर्टिकल वीडियो स्ट्रीमिंग",
      "शॉर्ट सीरीज सॉफ्टवेयर",
    ],
    ogLocale: "hi_IN",
  },
};
