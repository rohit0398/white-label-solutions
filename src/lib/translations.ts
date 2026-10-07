import { Language } from "@/types";

export interface TranslationDictionary {
  nav: {
    work: string;
    pricing: string;
    faq: string;
    bookDemo: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    ctaDemo: string;
    ctaWork: string;
    facts: string;
  };
}

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिंदी" },
];

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: { work: "Work", pricing: "Pricing", faq: "FAQ", bookDemo: "Book a demo" },
    hero: {
      headline: "Your store, your apps, your code.",
      subtitle:
        "We set up a complete online store, Android and iOS apps and an admin panel on your own cloud account. You pay once. You keep every sale.",
      ctaDemo: "Book a demo",
      ctaWork: "See live stores",
      facts: "From $4,999 one-time · 0% commission · Live in 2–3 weeks",
    },
  },
  es: {
    nav: { work: "Proyectos", pricing: "Precios", faq: "Preguntas", bookDemo: "Reservar demo" },
    hero: {
      headline: "Tu tienda, tus apps, tu código.",
      subtitle:
        "Instalamos una tienda online completa, apps para Android e iOS y un panel de administración en tu propia nube. Pagas una vez. Te quedas con cada venta.",
      ctaDemo: "Reservar demo",
      ctaWork: "Ver tiendas activas",
      facts: "Desde $4,999 pago único · 0% comisión · Lista en 2–3 semanas",
    },
  },
  de: {
    nav: { work: "Projekte", pricing: "Preise", faq: "FAQ", bookDemo: "Demo buchen" },
    hero: {
      headline: "Ihr Shop, Ihre Apps, Ihr Code.",
      subtitle:
        "Wir richten einen kompletten Online-Shop, Android- und iOS-Apps und ein Admin-Panel in Ihrer eigenen Cloud ein. Einmal zahlen. Jeden Umsatz behalten.",
      ctaDemo: "Demo buchen",
      ctaWork: "Live-Shops ansehen",
      facts: "Ab 4.999 $ einmalig · 0 % Provision · Live in 2–3 Wochen",
    },
  },
  fr: {
    nav: { work: "Réalisations", pricing: "Tarifs", faq: "FAQ", bookDemo: "Réserver une démo" },
    hero: {
      headline: "Votre boutique, vos apps, votre code.",
      subtitle:
        "Nous installons une boutique en ligne complète, des apps Android et iOS et un back-office sur votre propre cloud. Vous payez une fois. Vous gardez chaque vente.",
      ctaDemo: "Réserver une démo",
      ctaWork: "Voir les boutiques",
      facts: "À partir de 4 999 $ une fois · 0 % de commission · En ligne en 2–3 semaines",
    },
  },
  hi: {
    nav: { work: "प्रोजेक्ट्स", pricing: "कीमतें", faq: "सवाल", bookDemo: "डेमो बुक करें" },
    hero: {
      headline: "आपका स्टोर, आपके ऐप्स, आपका कोड।",
      subtitle:
        "हम आपके अपने क्लाउड अकाउंट पर पूरा ऑनलाइन स्टोर, एंड्रॉइड और iOS ऐप्स और एडमिन पैनल सेट करते हैं। एक बार भुगतान करें। हर बिक्री आपकी।",
      ctaDemo: "डेमो बुक करें",
      ctaWork: "लाइव स्टोर्स देखें",
      facts: "₹3,99,000 से, एक बार · 0% कमीशन · 2–3 हफ़्तों में लाइव",
    },
  },
};
