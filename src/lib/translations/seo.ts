import { Language } from "@/types";

export interface LocalizedSeo {
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
}

export const LOCALIZED_SEO: Record<Language, LocalizedSeo> = {
  en: {
    title: "White-Label E-Commerce Platform & Mobile Apps | Deployed on Your Cloud",
    description:
      "Production-ready white-label e-commerce platform & mobile apps. Fast online store, iOS & Android apps, and Admin CRM deployed on your cloud with 0% revenue cuts.",
    keywords: [
      "buy readymade ecommerce website and mobile app",
      "white label ecommerce platform with mobile app",
      "self hosted ecommerce platform one time payment",
      "shopify alternative with no monthly fees",
      "ready made online store with android and ios app",
      "ecommerce platform you own without revenue cut",
      "ecommerce admin panel with crm and multi warehouse",
      "custom ecommerce website development US Europe India",
      "mechatron lab ecommerce solutions",
    ],
    ogLocale: "en_US",
  },
  es: {
    title: "Plataforma E-Commerce Marca Blanca y Apps Móviles | En Tu Propia Nube",
    description:
      "Solución de comercio electrónico marca blanca lista para usar. Tienda web ultra-rápida, apps nativas para Android e iOS y panel de administración CRM desplegados en tu propia nube (AWS, GCP, Azure). 100% propiedad del código, 0% comisiones por venta.",
    keywords: [
      "comprar tienda online y app movil hecha",
      "plataforma ecommerce marca blanca",
      "software ecommerce pago unico hosting propio",
      "alternativa shopify sin cuotas mensuales",
      "tienda online con app android e ios",
      "plataforma comercio electronico sin comisiones",
      "panel de administracion ecommerce con crm multialmacen",
    ],
    ogLocale: "es_ES",
  },
  de: {
    title: "White-Label E-Commerce-Plattform & Mobile Apps | Eigene Cloud",
    description:
      "Einsatzbereite White-Label E-Commerce-Lösung. Schneller Web-Shop, native Android- & iOS-Apps und Admin-Panel/CRM direkt in Ihrer Cloud (AWS, GCP, Azure). 100 % Quellcode-Eigentum, 0 % Umsatzprovision.",
    keywords: [
      "fertigen online shop mit app kaufen",
      "white label ecommerce plattform",
      "selbst gehostetes ecommerce einmalzahlung",
      "shopify alternative ohne monatliche gebuehren",
      "online shop mit android und ios app",
      "ecommerce plattform ohne provisionsabgaben",
      "admin panel crm mehrlager bestandsverwaltung",
    ],
    ogLocale: "de_DE",
  },
  fr: {
    title: "Plateforme E-Commerce Marque Blanche & Apps Mobiles | Sur Votre Cloud",
    description:
      "Solution e-commerce en marque blanche prête à l'emploi. Boutique web haute performance, applications Android et iOS natives, et back-office CRM déployés sur votre cloud (AWS, GCP, Azure). 100% code source, 0% commission.",
    keywords: [
      "acheter boutique en ligne et application mobile",
      "plateforme ecommerce marque blanche",
      "solution ecommerce auto-hebergee paiement unique",
      "alternative shopify sans abonnement",
      "boutique en ligne avec app android et ios",
      "plateforme ecommerce sans commission sur ventes",
      "back office crm gestion multi entrepots",
    ],
    ogLocale: "fr_FR",
  },
  hi: {
    title: "व्हाइट-लेबल ई-कॉमर्स प्लेटफ़ॉर्म और मोबाइल ऐप्स | आपके अपने क्लाउड पर",
    description:
      "रेडीमेड व्हाइट-लेबल ई-कॉमर्स सॉल्यूशन। सुपर-फास्ट वेब स्टोर, एंड्रॉइड और iOS मोबाइल ऐप्स और ऑल-इन-वन एडमिन CRM सीधे आपके प्राइवेट क्लाउड (AWS, GCP, Azure) पर। 100% सोर्स कोड ओनरशिप, 0% बिक्री कमीशन।",
    keywords: [
      "रेडीमेड ईकॉमर्स वेबसाइट और मोबाइल ऐप",
      "व्हाइट लेबल ईकॉमर्स प्लेटफॉर्म",
      "सेल्फ होस्टेड ईकॉमर्स वन टाइम पेमेंट",
      "शॉपिफाई अल्टरनेटिव बिना मंथली फीस",
      "एंड्रॉयड और आईओएस ऐप के साथ ऑनलाइन स्टोर",
      "बिना कमीशन का ईकॉमर्स प्लेटफॉर्म",
      "मल्टी वेयरहाउस ईकॉमर्स एडमिन पैनल और सीआरएम",
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
