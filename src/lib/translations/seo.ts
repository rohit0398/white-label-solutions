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
      "Pre-built, easily configured white-label e-commerce solution. Fast online store, Android & iPhone mobile apps, and all-in-one Admin Panel & CRM deployed directly onto your private cloud (AWS, GCP, Azure). 100% source code ownership with zero platform fees or revenue cuts.",
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
      "Schlüsselfertige White-Label E-Commerce-Lösung. Schneller Web-Shop, native Android- & iOS-Apps und Admin-Panel/CRM direkt in Ihrer Cloud (AWS, GCP, Azure). 100 % Quellcode-Eigentum, 0 % Umsatzprovision.",
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
