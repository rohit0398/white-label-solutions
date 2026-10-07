import { TranslationDictionary } from "./types";

export const de: TranslationDictionary = {
  nav: {
    solutions: "Lösungen",
    work: "Projekte",
    pricing: "Preise",
    faq: "FAQ",
    bookDemo: "Demo buchen",
  },
  hero: {
    badge: "2–4 Wochen Bereitstellung · 0 % Umsatzprovision · Eigene Cloud (AWS · GCP · Azure)",
    headline: "Besitzen Sie Ihren Shop, Ihre Apps und Ihren Code.",
    subtitle:
      "Wir richten einen kompletten Online-Shop, Android- und iOS-Apps und ein Admin-Panel in Ihrer eigenen Cloud ein. Einmal zahlen. Jeden Umsatz behalten.",
    anchors: {
      storefront: "01 Web-Shop",
      apps: "02 Mobile Apps",
      admin: "03 CRM & Admin",
    },
    ctaDemo: "Demo buchen",
    ctaWork: "Live-Shops ansehen",
    facts: "Ab 4.999 $ einmalig · 0 % Provision · Live in 2–4 Wochen",
  },
  whatYouGet: {
    index: "01",
    title: "Leistungsumfang",
    intro:
      "Ihre Marke im Web, bei Google Play und im App Store. Voll synchronisiert über ein privates Cloud-Backend.",
    tabs: {
      storefront: "01 Web-Shop (Storefront)",
      apps: "02 Native Apps (iOS & Android)",
      admin: "03 Admin-Panel & CRM",
    },
    modules: {
      storefront: {
        title: "Hochmoderner High-Speed-Shop",
        summary:
          "Ein schneller Online-Shop in Ihren Markenfarben und Typografie. Integrierte Suche, Varianten, steuerkonformer Checkout und SEO. Zahlungen per Kreditkarte, PayPal, Lastschrift oder Nachnahme.",
        caption:
          "Web-Shop mit Ladezeiten unter einer Sekunde direkt auf Ihren eigenen Cloud-Servern.",
        highlights: [
          { label: "Geschwindigkeit", value: "< 0,9s Ladezeit" },
          { label: "Zahlungsanbieter", value: "Stripe, PayPal, SEPA, Nachnahme" },
          { label: "Steuerkonformität", value: "Automatische MwSt.-/USt.-Rechnungen" },
        ],
      },
      apps: {
        title: "Native Shopping-Apps mit Ihrer Marke",
        summary:
          "Entwickelt aus einer einheitlichen Flutter-Codebasis und veröffentlicht unter Ihren eigenen Entwicklerkonten bei Google Play und Apple App Store. Push-Nachrichten und biometrischer Login inklusive.",
        caption:
          "Native Apps in Echtzeit mit Ihrem Cloud-Katalog und Lagerbestand synchronisiert.",
        highlights: [
          { label: "Codebasis", value: "Flutter (Einheitliche Quelle)" },
          { label: "App Stores", value: "Google Play + Apple App Store" },
          { label: "Kundenbindung", value: "Kostenlose Push-Nachrichten & Biometrie" },
        ],
      },
      admin: {
        title: "All-in-One Admin-Panel & CRM",
        summary:
          "Ihre zentrale Steuerungszentrale. Mehrlagerverwaltung, automatische Nachbestell-Warnungen, Ermittlung der tatsächlichen Marge pro Bestellung und visuelle Banneranpassung ohne Programmieraufwand.",
        caption:
          "Betriebs-Dashboard für die tägliche Auftragsabwicklung und Kundenhistorie.",
        highlights: [
          { label: "Logistik", value: "Mehrlager-Fulfillment" },
          { label: "Margenanalyse", value: "Echte Deckungsbeiträge nach Wareneinsatz" },
          { label: "Inhaltseditor", value: "Visuelle Banner-Updates ohne Code" },
        ],
      },
    },
    adminHeading: "Enthaltene Admin-Funktionen",
    adminFeatures: [
      {
        title: "Bestände über mehrere Lager",
        description: "Bestandszahlen pro Standort. Bestellungen werden aus dem nächstgelegenen Lager versendet.",
      },
      {
        title: "Nachbestell-Warnungen",
        description: "Zeigt die verbleibende Reichweite in Tagen basierend auf der tatsächlichen Verkaufsgeschwindigkeit.",
      },
      {
        title: "Deckungsbeitrag pro Bestellung",
        description: "Lieferantenkosten werden direkt abgeglichen, damit Sie Ihren echten Gewinn sehen.",
      },
      {
        title: "Bestellungen und Kunden",
        description: "Web-, App-, Telefon- und B2B-Aufträge in einer übersichtlichen Liste mit kompletter Historie.",
      },
      {
        title: "Startseiten-Editor",
        description: "Banner und hervorgehobene Artikel flexibel und ohne Entwickler für Mobile und Desktop anpassen.",
      },
    ],
    appStoreBadge: "Google Play Store",
    webStoreBadge: "Web-Shop",
  },
  howItWorks: {
    index: "02",
    title: "Ablauf & Bereitstellung",
    badge: "Sparen Sie 6 Monate Entwicklungszeit · Launch in 2–4 Wochen",
    steps: [
      {
        when: "Tag 1",
        title: "Kickoff- & Anforderungsgespräch",
        text: "Ein 30-minütiges Gespräch zur Abstimmung von Produktkatalog, Zahlungs-Gateways, Steuerregeln und Cloud-Infrastruktur.",
      },
      {
        when: "Woche 1",
        title: "Branding & Storefront-Anpassung",
        text: "Ihr Logo, Schriftarten, Markenfarben, Ihre Domain und Steuerregeln werden hinterlegt. Wir importieren Ihre bestehenden Produkte.",
      },
      {
        when: "Woche 2–3",
        title: "Cloud-Deployment & App-Kompilierung",
        text: "Das System wird direkt in Ihrem AWS-, GCP- oder Azure-Konto aufgesetzt. Flutter-Apps für iOS und Android werden gebaut und getestet.",
      },
      {
        when: "Woche 3–4",
        title: "App-Store-Einreichung & Übergabe",
        text: "Die Apps werden über Ihre Firmenkonten bei Apple und Google eingereicht. Sie erhalten alle Master-Keys, Datenbankzugänge und 100 % Quellcode.",
      },
      {
        when: "Nach dem Launch",
        title: "30 Tage technische Gewährleistung",
        text: "Vollständige Unabhängigkeit ohne laufende Umsatzprovisionen, abgesichert durch 30 Tage direkten Entwickler-Support.",
      },
    ],
  },
  work: {
    index: "03",
    title: "Erfolgreich im Produktiveinsatz",
    intro: "Drei Unternehmen aus verschiedenen Branchen – jeweils in der eigenen privaten Cloud.",
    androidApp: "Android-App",
    caseStudy: "Fallstudie",
    projects: [
      {
        title: "Mechatron Lab",
        industry: "Elektronik- & Roboterbauteile",
        description:
          "Über 1.000 Artikel, zwei Lagerstandorte, Rechnungsstellung mit MwSt., KI-Teileassistent und native Android-App.",
      },
      {
        title: "eStoreAlley",
        industry: "B2B- & B2C-Großhandelsmarktplatz",
        description:
          "Multi-Vendor-Verzeichnis mit gestaffelten Händlerpreisen, Stripe-Checkout und eigener Google Play App.",
      },
      {
        title: "Style Gear",
        industry: "Mode & Lifestyle",
        description:
          "Bekleidungs-Shop mit Größen-/Farbvarianten, hochauflösendem Bildzoom und schnellem Checkout.",
      },
    ],
  },
  pricing: {
    index: "04",
    title: "Preise",
    intro:
      "Mieten Sie Ihren Shop nicht länger. Einmal kaufen, für immer besitzen. Fester Einmalpreis ohne wiederkehrende Umsatzabgaben.",
    currencyLabel: "Währung auswählen",
    popularBadge: "Meistgewählt",
    tiers: [
      {
        name: "Launch",
        tagline: "Shop, Apps und Admin-Panel, in Ihrem Branding und in 2–4 Wochen in Ihrer Cloud bereitgestellt.",
        ctaText: "Demo buchen",
        deliverables: [
          "Web-Shopfront in Ihrem Markendesign",
          "Android- und iOS-Apps unter Ihren eigenen Entwicklerkonten",
          "Admin-Panel und CRM mit Mehrlager-Bestandsverwaltung",
          "Stripe, PayPal, SEPA-Lastschrift und Nachnahme integriert",
          "Automatische Erstellung steuerkonformer Rechnungen (MwSt.)",
          "Direkte Bereitstellung in Ihrem AWS-, GCP- oder Azure-Konto",
          "30 Tage persönlicher Support nach dem Go-Live",
        ],
      },
      {
        name: "Quellcode",
        tagline: "Erweiterung. Die vollständigen Repositorien mit dem Recht zur Modifikation, Hosting oder Weiterverkauf.",
        ctaText: "Lizenz anfragen",
        deliverables: [
          "Storefront (Next.js), Apps (Flutter), Backend und Admin",
          "Unverschlüsselte Git-Repositorien",
          "Umfassende Dokumentation für Datenbank und Server",
          "Dauerhafte kommerzielle Lizenz ohne wiederkehrende Gebühren",
        ],
      },
      {
        name: "Entwicklerzeit",
        tagline: "Dedizierte Ingenieure für ERP-Integrationen, Schnittstellen oder individuelle Features.",
        ctaText: "Kontakt aufnehmen",
        deliverables: [
          "ERP-, Buchhaltungs- und Warenwirtschafts-Anbindung",
          "B2B-Preislogik, Staffelpreise und individueller Checkout",
          "Hosting-Wartung, Datensicherungen und Sicherheitsupdates",
          "Stundenkontingente oder monatliches Retainer-Modell",
        ],
      },
    ],
    tco: {
      title: "3-Jahres-Gesamtkostenvergleich (TCO)",
      subtitle: "Typische Kosten eines Online-Händlers über 36 Monate hinweg.",
      colItem: "Posten",
      colMechatron: "Mechatron (Ihre eigene Cloud)",
      colShopify: "Shopify Plus / SaaS",
      rows: [
        {
          label: "Einrichtung & Go-Live",
          mechatron: "einmalige Einrichtung",
          shopify: "10.000 – 25.000 €+ Agenturkosten",
        },
        {
          label: "Software-Lizenzgebühren über 3 Jahre",
          mechatron: "0 € (keine wiederkehrende Plattformgebühr)",
          shopify: "72.000 €+ (mind. 2.000 €/Monat)",
        },
        {
          label: "Cloud-Serverkosten über 3 Jahre",
          mechatron: "~720 – 1.440 € (~20–40 €/Monat bei AWS/GCP)",
          shopify: "In den SaaS-Kosten enthalten",
        },
        {
          label: "Umsatzprovision über 3 Jahre (1,5 % bei 50.000 €/Monat)",
          mechatron: "0 € (nur normale Bank-/Gatewaygebühren)",
          shopify: "~27.000 €+ Plattformabgaben",
        },
        {
          label: "Volles Quellcode- & Datenbank-Eigentum",
          mechatron: "100 % Eigentum möglich",
          shopify: "0 % (vollständige Anbieterabhängigkeit)",
        },
        {
          label: "Geschätzte 3-Jahres-Gesamtkosten",
          mechatron: "~5.719 – 6.439 € (Setup + echtes Hosting)",
          shopify: "90.000 – 150.000 €+ (Basis + Apps + %)",
        },
      ],
    },
    calculator: {
      headline: "Besitzen Sie Ihre Plattform. Behalten Sie 100 % Ihres Umsatzes.",
      subtitle:
        "Interaktiver 3-Jahres-Ersparnisrechner: Verschieben Sie den monatlichen Umsatzregler, um Ihre Ersparnis gegenüber SaaS-Plattformen zu sehen.",
      salesVolume: "Monatlicher Umsatz:",
      comparisonTitle: "Geschätzter 3-Jahres-Kostenvergleich",
      shopifyLabel: "Shopify Plus / SaaS (Monatliche Gebühren + 1,5 % Umsatz + Plugins):",
      mechatronLabel: "Mechatron (Einmalige Einrichtung + Ihre Cloud-Hostingkosten):",
      savingsTitle: "Geschätzte Ersparnis für Ihr Unternehmen über 3 Jahre",
      savingsSubtitle: "100 % des Umsatzes behalten bei 0 % Plattformprovision",
      savingsAction: "Volle Marge sichern",
    },
  },
  faq: {
    index: "05",
    title: "Häufig gestellte Fragen",
    intro: "Klare Antworten zu Cloud-Hosting, Code-Eigentum, Apps und Shop-Migration.",
    items: [
      {
        q: "Wo wird der Shop gehostet?",
        a: "In Ihrem eigenen AWS-, Google Cloud- oder Azure-Konto. Wir richten das System dort ein und übergeben alle Admin-Passwörter, Datenbank-Schlüssel und Domains. Ihre Kundendaten liegen niemals auf unseren Servern.",
      },
      {
        q: "Fallen monatliche Plattformgebühren an?",
        a: "Nein. Sie zahlen einmalig für die Bereitstellung und anschließend nur Ihre reguläre Cloud-Rechnung (meist 20–50 €/Monat für kleine bis mittlere Shops). Wir erheben keinerlei Umsatzprovisionen.",
      },
      {
        q: "Erhalte ich den Quellcode?",
        a: "Mit der Quellcode-Lizenz ja: Shopfront, Flutter-Apps, Backend und Admin-Panel als unverschlüsselte Git-Repositorien. Sie können den Code frei anpassen oder an eigene Kunden weiterverkaufen.",
      },
      {
        q: "Wie funktionieren die mobilen Apps?",
        a: "Sie basieren auf Flutter – eine Codebasis erzeugt sowohl die Android- als auch die iOS-App. Sie werden über Ihre Entwicklerkonten veröffentlicht und unterstützen Push-Mitteilungen und biometrischen Login.",
      },
      {
        q: "Können Daten aus Shopify oder WooCommerce migriert werden?",
        a: "Ja. Wir übernehmen Produkte, Kategorien, Bilder und Kundenstammdaten und richten 301-Weiterleitungen ein, damit Ihre Google-Rankings erhalten bleiben.",
      },
      {
        q: "Welche Zahlungsmethoden und Steuern werden unterstützt?",
        a: "Stripe und PayPal für internationale Bestellungen, SEPA-Lastschrift sowie Nachnahme. Automatische Rechnungsstellung mit MwSt. für jede Bestellung.",
      },
    ],
  },
  closing: {
    headline: "Ihre Cloud. Ihre Kundendaten. Ihr Code.",
    description:
      "Bereit für den Start in Ihrer eigenen AWS-, GCP- oder Azure-Cloud? Vereinbaren Sie ein unverbindliches 30-minütiges Gespräch mit unseren Ingenieuren, um die Architektur und Live-Apps kennenzulernen.",
    ctaDemo: "Demo buchen",
    whatsappText: "Oder per WhatsApp kontaktieren",
  },
  leadModal: {
    title: "Demo buchen",
    subtitle:
      "Ein 30-minütiges Gespräch. Wir zeigen Ihnen einen Live-Shop sowie die mobilen Apps und beantworten alle Fragen zu Ihrem Setup.",
    nameLabel: "Name",
    namePlaceholder: "Vollständiger Name",
    emailLabel: "Geschäftliche E-Mail",
    emailPlaceholder: "name@unternehmen.de",
    phoneLabel: "Telefon oder WhatsApp",
    phonePlaceholder: "Mobil- oder WhatsApp-Nummer",
    companyLabel: "Unternehmen",
    optional: "(optional)",
    companyPlaceholder: "Name Ihres Shops oder Unternehmens",
    submitBtn: "Demo-Termin anfragen →",
    submitting: "Wird gesendet...",
    whatsappText: "Oder schreiben Sie uns auf",
    successTitle: "Vielen Dank",
    successDesc: "Wir melden uns innerhalb eines Werktages per E-Mail zur Terminabstimmung.",
    closeBtn: "Schließen",
  },
  footer: {
    tagline: "E-Commerce-Shops und native Apps – eingerichtet in Ihrer eigenen Cloud.",
    colWork: "Projekte",
    colProduct: "Produkt",
    colContact: "Kontakt",
    whatsIncluded: "Leistungsumfang",
    comparedToShopify: "Vergleich mit Shopify",
    pricing: "Preise",
    copyright: "100 % Eigentum in Ihrer privaten Cloud. Alle Rechte vorbehalten.",
  },
};
