import { Language } from "@/types";

export interface TranslationDictionary {
  nav: {
    overview: string;
    showcase: string;
    adminTour: string;
    architecture: string;
    pricing: string;
    shopifyAlt: string;
    caseStudies: string;
    bookDemo: string;
  };
  hero: {
    pill: string;
    headlinePart1: string;
    headlineHighlight: string;
    subtitle: string;
    badgeCloud: string;
    badgeApps: string;
    badgeCrm: string;
    badgeCode: string;
    ctaDemo: string;
    ctaExplore: string;
    statStores: string;
    statStoresSub: string;
    statPricing: string;
    statPricingSub: string;
    statCommission: string;
    statCommissionSub: string;
    statCloud: string;
    statCloudSub: string;
  };
  showcase: {
    badge: string;
    title: string;
    subtitle: string;
    visitStore: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
];

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      overview: "Overview",
      showcase: "Active Stores",
      adminTour: "Admin & CRM",
      architecture: "Cloud Architecture",
      pricing: "Pricing",
      shopifyAlt: "Shopify Alternative",
      caseStudies: "Case Studies",
      bookDemo: "Book Demo",
    },
    hero: {
      pill: "Pre-Built White-Label E-Commerce Platform • Deployed on Your Cloud",
      headlinePart1: "Own Your Complete Online Store, ",
      headlineHighlight: "Mobile Apps & Admin CRM.",
      subtitle:
        "A pre-built, easily customized e-commerce solution deployed directly onto your private cloud (AWS, Google Cloud, or Azure). You own 100% of your customer records, data, and source code. Keep every dollar of your sales with zero platform cuts.",
      badgeCloud: "Deployed on Your Cloud (AWS / GCP / Azure)",
      badgeApps: "Branded Android & iPhone (iOS) Apps",
      badgeCrm: "All-in-One Admin Panel & Customer CRM",
      badgeCode: "100% Full Source Code Ownership",
      ctaDemo: "Schedule a Live Store & App Demo",
      ctaExplore: "Explore Live Working Stores",
      statStores: "Active Client Stores",
      statStoresSub: "Proven in the Real World Across Hardware, Wholesale & Fashion",
      statPricing: "$4,999",
      statPricingSub: "Fixed Turnkey Setup & Launch (No Hidden Fees)",
      statCommission: "0% Royalty",
      statCommissionSub: "Keep 100% of Your Revenue • Zero Per-Order Commissions",
      statCloud: "100% Your Cloud",
      statCloudSub: "Private Data, Servers & Databases Completely in Your Control",
    },
    showcase: {
      badge: "Verified Client Stores",
      title: "Online Stores Powered by Our Platform",
      subtitle:
        "Don't settle for unverified templates or risky freelance code. Our white-label e-commerce platform powers high-volume technical catalogs, international wholesale directories, and modern D2C apparel.",
      visitStore: "Visit Live Store",
    },
    pricing: {
      badge: "Transparent Turnkey Pricing",
      title: "Fair, Predictable Pricing with Zero Platform Fees",
      subtitle:
        "No monthly recurring percentage commissions. No vendor lock-in. Pay once for turnkey launch on your cloud, add perpetual source code rights whenever you are ready.",
    },
  },
  es: {
    nav: {
      overview: "Inicio",
      showcase: "Tiendas Activas",
      adminTour: "Admin y CRM",
      architecture: "Arquitectura Cloud",
      pricing: "Precios",
      shopifyAlt: "Alternativa a Shopify",
      caseStudies: "Casos de Éxito",
      bookDemo: "Reservar Demo",
    },
    hero: {
      pill: "Plataforma de Comercio Electrónico Marca Blanca • En Tu Propia Nube",
      headlinePart1: "Sé Dueño de Tu Tienda Online Completa, ",
      headlineHighlight: "Apps Móviles y CRM de Administración.",
      subtitle:
        "Una solución preconstruida y fácilmente configurable desplegada directamente en tu nube privada (AWS, Google Cloud o Azure). Conserva el 100% de tus ventas sin comisiones de plataforma.",
      badgeCloud: "Desplegado en Tu Nube (AWS / GCP / Azure)",
      badgeApps: "Apps Nativas para Android e iPhone (iOS)",
      badgeCrm: "Panel de Administración y CRM Todo en Uno",
      badgeCode: "100% Propiedad del Código Fuente",
      ctaDemo: "Agendar Demo en Vivo de la Tienda y App",
      ctaExplore: "Explorar Tiendas Activas en Vivo",
      statStores: "Tiendas Activas de Clientes",
      statStoresSub: "Probado en el mundo real en ferretería, mayoristas y moda",
      statPricing: "$4,999",
      statPricingSub: "Configuración y lanzamiento llave en mano fijo",
      statCommission: "0% Comisión",
      statCommissionSub: "Conserva el 100% de tus ingresos sin pagos por pedido",
      statCloud: "100% Tu Nube",
      statCloudSub: "Datos y servidores privados totalmente bajo tu control",
    },
    showcase: {
      badge: "Tiendas de Clientes Verificadas",
      title: "Tiendas Online Impulsadas por Nuestra Plataforma",
      subtitle:
        "No te arriesgues con plantillas no verificadas. Nuestra plataforma de marca blanca impulsa catálogos técnicos de gran volumen, directorios mayoristas internacionales y marcas D2C.",
      visitStore: "Visitar Tienda en Vivo",
    },
    pricing: {
      badge: "Precios Transparentes Llave en Mano",
      title: "Precios Claros y Predecibles Sin Comisiones de Plataforma",
      subtitle:
        "Sin comisiones recurrentes sobre tus ventas. Paga una vez por el lanzamiento llave en mano en tu nube y adquiere los derechos del código fuente.",
    },
  },
  de: {
    nav: {
      overview: "Übersicht",
      showcase: "Aktive Shops",
      adminTour: "Admin & CRM",
      architecture: "Cloud-Architektur",
      pricing: "Preise",
      shopifyAlt: "Shopify-Alternative",
      caseStudies: "Fallstudien",
      bookDemo: "Demo buchen",
    },
    hero: {
      pill: "Vorgefertigte White-Label E-Commerce-Plattform • Auf Ihrer Cloud",
      headlinePart1: "Besitzen Sie Ihren kompletten Online-Shop, ",
      headlineHighlight: "Mobile Apps & Admin-CRM.",
      subtitle:
        "Eine vorgefertigte, leicht konfigurierbare E-Commerce-Lösung, die direkt in Ihrer privaten Cloud (AWS, Google Cloud oder Azure) bereitgestellt wird. 100% Datenkontrolle und 0% Plattformgebühren.",
      badgeCloud: "Bereitgestellt auf Ihrer Cloud (AWS / GCP / Azure)",
      badgeApps: "Branded Apps für Android & iPhone (iOS)",
      badgeCrm: "All-in-One Admin-Panel & Kunden-CRM",
      badgeCode: "100% Quellcode-Eigentum",
      ctaDemo: "Live-Demo für Shop & Apps vereinbaren",
      ctaExplore: "Aktive Live-Shops entdecken",
      statStores: "Aktive Kunden-Shops",
      statStoresSub: "In der Praxis bewährt für Hardware, Großhandel und Mode",
      statPricing: "4.999 $",
      statPricingSub: "Feste schlüsselfertige Bereitstellung (Keine versteckten Gebühren)",
      statCommission: "0% Provision",
      statCommissionSub: "100% Ihres Umsatzes bleibt bei Ihnen • Keine Gebühren pro Bestellung",
      statCloud: "100% Ihre Cloud",
      statCloudSub: "Private Daten & Server vollständig unter Ihrer Kontrolle",
    },
    showcase: {
      badge: "Verifizierte Kunden-Shops",
      title: "Online-Shops, die mit unserer Plattform betrieben werden",
      subtitle:
        "Verlassen Sie sich nicht auf ungeprüfte Skripte. Unsere White-Label-Plattform betreibt technische Kataloge, internationale B2B-Verzeichnisse und moderne D2C-Modeshops.",
      visitStore: "Live-Shop ansehen",
    },
    pricing: {
      badge: "Transparente Festpreise",
      title: "Faire, planbare Preise ohne laufende Plattformgebühren",
      subtitle:
        "Keine monatlichen prozentualen Umsatzabzüge. Einmalige Bereitstellung auf Ihrer Cloud mit vollem Quellcode-Zugriff.",
    },
  },
  fr: {
    nav: {
      overview: "Aperçu",
      showcase: "Boutiques Actives",
      adminTour: "Admin & CRM",
      architecture: "Architecture Cloud",
      pricing: "Tarifs",
      shopifyAlt: "Alternative à Shopify",
      caseStudies: "Études de Cas",
      bookDemo: "Réserver Démo",
    },
    hero: {
      pill: "Plateforme E-Commerce Marque Blanche • Déployée sur Votre Cloud",
      headlinePart1: "Soyez propriétaire de votre boutique en ligne, ",
      headlineHighlight: "Applications mobiles et CRM Admin.",
      subtitle:
        "Une solution e-commerce clé en main déployée directement sur votre cloud privé (AWS, Google Cloud ou Azure). Vous conservez 100% de vos ventes avec 0% de commission prélevée.",
      badgeCloud: "Déployé sur Votre Cloud (AWS / GCP / Azure)",
      badgeApps: "Applications Android & iPhone (iOS)",
      badgeCrm: "Tableau de Bord Admin & CRM Tout-en-un",
      badgeCode: "Propriété Totale du Code Source à 100%",
      ctaDemo: "Planifier une Démo de la Boutique et des Apps",
      ctaExplore: "Explorer les Boutiques en Ligne Actives",
      statStores: "Boutiques Clientes Actives",
      statStoresSub: "Éprouvé sur le terrain dans le matériel, la vente en gros et la mode",
      statPricing: "4 999 $",
      statPricingSub: "Lancement clé en main à prix fixe (Aucun frais caché)",
      statCommission: "0% Commission",
      statCommissionSub: "Gardez 100% de vos revenus sans frais par commande",
      statCloud: "100% Votre Cloud",
      statCloudSub: "Données privées et serveurs sous votre contrôle absolu",
    },
    showcase: {
      badge: "Boutiques Clientes Vérifiées",
      title: "Boutiques en Ligne Propulsées par Notre Plateforme",
      subtitle:
        "Ne risquez pas votre activité avec des scripts non testés. Notre solution propulse des catalogues techniques, des annuaires de vente en gros et des marques de mode.",
      visitStore: "Visiter la Boutique",
    },
    pricing: {
      badge: "Tarifs Clairs et Transparents",
      title: "Tarifs Prévisibles Sans Frais de Plateforme Récurrents",
      subtitle:
        "Pas de prélèvement sur votre chiffre d'affaires. Déploiement clé en main sur votre cloud avec licence de code source illimitée.",
    },
  },
  hi: {
    nav: {
      overview: "होम",
      showcase: "लाइव स्टोर्स",
      adminTour: "एडमिन व CRM",
      architecture: "क्लाउड आर्किटेक्चर",
      pricing: "कीमतें",
      shopifyAlt: "शॉपिफाइ का विकल्प",
      caseStudies: "केस स्टडीज",
      bookDemo: "डेमो बुक करें",
    },
    hero: {
      pill: "रेडीमेड व्हाइट-लेबल ई-कॉमर्स प्लेटफॉर्म • आपके प्राइवेट क्लाउड पर डिप्लॉय",
      headlinePart1: "अपना खुद का ऑनलाइन स्टोर, ",
      headlineHighlight: "मोबाइल ऐप्स और ऑल-इन-वन एडमिन CRM पाएं।",
      subtitle:
        "एक प्री-बिल्ट ई-कॉमर्स सॉल्यूशन जो सीधे आपके निजी AWS, Google Cloud या Azure अकाउंट पर इंस्टॉल होता है। 100% कस्टमर डेटा और सोर्स कोड आपका। किसी प्लेटफॉर्म को कमीशन देने की ज़रूरत नहीं।",
      badgeCloud: "आपके क्लाउड पर डिप्लॉयड (AWS / GCP / Azure)",
      badgeApps: "ब्रांडेड एंड्रॉइड और आईफोन (iOS) ऐप्स",
      badgeCrm: "ऑल-इन-वन एडमिन पैनल और कस्टमर CRM",
      badgeCode: "100% सोर्स कोड का मालिकाना हक",
      ctaDemo: "स्टोर और ऐप का लाइव डेमो शेड्यूल करें",
      ctaExplore: "लाइव चल रहे क्लाइंट स्टोर्स देखें",
      statStores: "सक्रिय क्लाइंट स्टोर्स",
      statStoresSub: "हार्डवेयर, होलसेल और फैशन में वास्तविक रूप से टेस्टेड",
      statPricing: "₹3,99,000",
      statPricingSub: "फिक्स्ड टर्नकी सेटअप और लॉन्च (कोई छुपा शुल्क नहीं)",
      statCommission: "0% रॉयल्टी",
      statCommissionSub: "अपनी 100% कमाई खुद रखें • प्रति आर्डर कोई कमीशन नहीं",
      statCloud: "100% आपका क्लाउड",
      statCloudSub: "प्राइवेट डेटा, सर्वर और डेटाबेस पूरी तरह आपके नियंत्रण में",
    },
    showcase: {
      badge: "सत्यापित क्लाइंट स्टोर्स",
      title: "हमारे प्लेटफॉर्म द्वारा संचालित ऑनलाइन स्टोर्स",
      subtitle:
        "अनवेरिफाइड स्क्रिप्ट्स पर भरोसा न करें। हमारा व्हाइट-लेबल प्लेटफॉर्म 1,000+ टेक्निकल पार्ट्स, इंटरनेशनल होलसेल डायरेक्ट्रीज और फैशन स्टोर्स को सफलतापूर्वक चला रहा है।",
      visitStore: "लाइव स्टोर देखें",
    },
    pricing: {
      badge: "पारदर्शी टर्नकी मूल्य",
      title: "बिना किसी मासिक कमीशन के स्पष्ट और पारदर्शी कीमतें",
      subtitle:
        "आपके सेल्स टर्नओवर पर 0% कमीशन। एक बार फिक्स्ड सेटअप कराएं और अपने क्लाउड पर हमेशा के लिए चलाएं।",
    },
  },
};
