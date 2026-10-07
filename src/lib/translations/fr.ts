import { TranslationDictionary } from "./types";

export const fr: TranslationDictionary = {
  nav: {
    solutions: "Solutions",
    work: "Réalisations",
    pricing: "Tarifs",
    faq: "FAQ",
    bookDemo: "Réserver une démo",
  },
  hero: {
    badge: "Livraison en 2–4 semaines · 0 % de commission · Cloud privé (AWS · GCP · Azure)",
    headline: "Possédez votre boutique, vos apps et votre code.",
    subtitle:
      "Nous installons une boutique en ligne complète, des apps Android et iOS et un back-office sur votre propre cloud. Vous payez une fois. Vous gardez chaque vente.",
    anchors: {
      storefront: "01 Boutique Web",
      apps: "02 Apps Mobiles",
      admin: "03 Back-office CRM",
    },
    ctaDemo: "Réserver une démo",
    ctaWork: "Voir les boutiques",
    facts: "À partir de 4 999 $ une fois · 0 % de commission · En ligne en 2–4 semaines",
  },
  whatYouGet: {
    index: "01",
    title: "Ce qui est inclus",
    intro:
      "Votre marque sur le web, Google Play et l'App Store. Parfaitement synchronisée sur un backend cloud privé.",
    tabs: {
      storefront: "01 Boutique Web",
      apps: "02 Apps Natives (iOS & Android)",
      admin: "03 Back-office & CRM (Opérations)",
    },
    modules: {
      storefront: {
        title: "Boutique e-commerce ultra-rapide",
        summary:
          "Une boutique rapide à vos couleurs et typographie. Moteur de recherche, variantes, tunnel d'achat avec taxes et SEO intégrés. Paiements par carte bancaire, PayPal ou virement.",
        caption:
          "Boutique web affichant un temps de chargement inférieur à une seconde sur vos propres serveurs cloud.",
        highlights: [
          { label: "Vitesse", value: "< 0,9s temps de chargement" },
          { label: "Paiements", value: "Stripe, PayPal, virement, CB" },
          { label: "Fiscalité", value: "Facturation TVA automatique" },
        ],
      },
      apps: {
        title: "Applications mobiles natives à votre marque",
        summary:
          "Conçues avec une base de code unifiée Flutter et publiées sous vos propres comptes Google Play et Apple App Store. Notifications push gratuites et connexion biométrique incluses.",
        caption:
          "Applications mobiles natives synchronisées en temps réel avec votre catalogue et stock cloud.",
        highlights: [
          { label: "Code", value: "Flutter (Code Source Unique)" },
          { label: "Stores", value: "Google Play + Apple App Store" },
          { label: "Engagement", value: "Notifications push gratuites & biométrie" },
        ],
      },
      admin: {
        title: "Back-office et CRM tout-en-un",
        summary:
          "Votre centre opérationnel. Gestion des stocks multi-entrepôts, alertes de réapprovisionnement, calcul de la marge réelle par commande et éditeur visuel de page d'accueil sans code.",
        caption:
          "Tableau de bord utilisé au quotidien pour gérer la préparation multi-dépôts et les clients.",
        highlights: [
          { label: "Logistique", value: "Expédition multi-entrepôts" },
          { label: "Marge réelle", value: "Calcul de profit après coût d'achat" },
          { label: "Éditeur visuel", value: "Mise à jour des bannières sans code" },
        ],
      },
    },
    adminHeading: "Fonctionnalités du Back-office Incluses",
    adminFeatures: [
      {
        title: "Gestion multi-entrepôts",
        description: "Quantités par site. Les commandes sont expédiées depuis l'entrepôt le plus proche.",
      },
      {
        title: "Alertes de réassort",
        description: "Indique l'autonomie restante en jours selon le rythme réel des ventes.",
      },
      {
        title: "Marge brute par commande",
        description: "Compare le coût d'achat fournisseur à chaque vente pour mesurer le profit réel.",
      },
      {
        title: "Commandes et clients",
        description: "Commandes web, apps et grossistes dans une liste unique avec l'historique complet.",
      },
      {
        title: "Éditeur de page d'accueil",
        description: "Modifiez vos bannières et produits phares sur mobile et desktop sans développeur.",
      },
    ],
    appStoreBadge: "Google Play Store",
    webStoreBadge: "Boutique Web",
  },
  howItWorks: {
    index: "02",
    title: "Comment ça marche",
    badge: "Évitez 6 mois de développement · Lancez boutique & apps en 2–4 semaines",
    steps: [
      {
        when: "Jour 1",
        title: "Appel de cadrage et périmètre",
        text: "Un échange de 30 minutes pour définir votre catalogue, passerelles de paiement, règles de TVA et cloud choisi.",
      },
      {
        when: "Semaine 1",
        title: "Personnalisation graphique et identité",
        text: "Votre logo, couleurs, typographies, nom de domaine et taxes sont configurés. Nous importons votre catalogue de produits.",
      },
      {
        when: "Semaine 2–3",
        title: "Déploiement sur votre cloud et compilation apps",
        text: "L'infrastructure est déployée sur votre compte AWS, GCP ou Azure. Les applications Flutter pour iOS et Android sont compilées et testées.",
      },
      {
        when: "Semaine 3–4",
        title: "Publication sur les stores et livraison finale",
        text: "Les apps sont soumises à l'App Store et Google Play sous vos comptes entreprise. Vous recevez toutes les clés d'accès et 100 % du code source.",
      },
      {
        when: "Après le lancement",
        title: "Garantie technique de 30 jours",
        text: "Indépendance totale sans aucune commission sur vos ventes, avec 30 jours d'assistance technique dédiée incluse.",
      },
    ],
  },
  work: {
    index: "03",
    title: "En production aujourd'hui",
    intro: "Trois entreprises de secteurs différents, chacune déployée sur son propre cloud privé.",
    androidApp: "App Android",
    caseStudy: "Étude de cas",
    projects: [
      {
        title: "Mechatron Lab",
        industry: "Électronique et robotique",
        description:
          "+1 000 références, deux entrepôts, facturation avec TVA, assistant IA pour pièces et app Android.",
      },
      {
        title: "eStoreAlley",
        industry: "Marketplace de gros et détail",
        description:
          "Annuaire multi-vendeurs avec tarification grossiste, paiement Stripe et app Android sur le Play Store.",
      },
      {
        title: "Style Gear",
        industry: "Mode et prêt-à-porter",
        description:
          "Boutique de vêtements avec variantes taille/couleur, zoom image haute définition et paiement rapide.",
      },
    ],
  },
  pricing: {
    index: "04",
    title: "Tarifs",
    intro:
      "Arrêtez de louer votre boutique. Achetez-la une fois, possédez-la pour toujours. Forfait unique fixe, sans aucune commission.",
    currencyLabel: "Sélectionner la devise",
    popularBadge: "Le plus populaire",
    tiers: [
      {
        name: "Lancement",
        tagline: "Boutique, applications et back-office personnalisés et déployés sur votre cloud en 2–4 semaines.",
        ctaText: "Réserver une démo",
        deliverables: [
          "Boutique web aux couleurs de votre marque",
          "Applications Android et iOS publiées sous vos comptes développeur",
          "Back-office et CRM avec gestion multi-entrepôts",
          "Stripe, PayPal, virement bancaire et paiement à la livraison",
          "Facturation conforme avec TVA automatisée",
          "Déploiement direct sur votre compte AWS, Google Cloud ou Azure",
          "30 jours de garantie et support technique après le lancement",
        ],
      },
      {
        name: "Code source",
        tagline: "Option. L'intégralité des dépôts avec le droit de modifier, héberger ou revendre.",
        ctaText: "En savoir plus sur la licence",
        deliverables: [
          "Boutique (Next.js), apps (Flutter), backend API et back-office",
          "Dépôts Git non chiffrés",
          "Documentation complète pour la base de données et les serveurs",
          "Licence commerciale perpétuelle sans abonnement",
        ],
      },
      {
        name: "Temps développeur",
        tagline: "Ingénieurs dédiés pour vos intégrations ERP, synchronisations ou fonctionnalités sur mesure.",
        ctaText: "Échanger avec nous",
        deliverables: [
          "Intégrations ERP, logiciel comptable et logistique",
          "Tarification B2B, devis et processus d'achat sur mesure",
          "Maintenance de l'hébergement, sauvegardes et mises à jour",
          "Forfaits d'heures ou contrat mensuel dédié",
        ],
      },
    ],
    tco: {
      title: "Comparatif du coût total sur 3 ans (TCO)",
      subtitle: "Ce qu'un commerçant moyen dépense réellement sur 36 mois de vente en ligne.",
      colItem: "Élément",
      colMechatron: "Mechatron (Votre Cloud Privé)",
      colShopify: "Shopify Plus / Plateformes SaaS",
      rows: [
        {
          label: "Configuration initiale & lancement",
          mechatron: "forfait d'installation unique",
          shopify: "10 000 – 25 000 €+ agence web",
        },
        {
          label: "Licence logicielle sur 3 ans",
          mechatron: "0 € (aucun abonnement récurrent)",
          shopify: "72 000 €+ (min. 2 000 €/mois)",
        },
        {
          label: "Serveurs cloud sur 3 ans",
          mechatron: "~720 – 1 440 € (~20–40 €/mois sur votre AWS/GCP)",
          shopify: "Inclus dans l'abonnement SaaS",
        },
        {
          label: "Commission sur les ventes sur 3 ans (1,5 % sur 50k €/mois)",
          mechatron: "0 € (uniquement frais bancaires normaux)",
          shopify: "~27 000 €+ de prélèvements SaaS",
        },
        {
          label: "Propriété du code et des données",
          mechatron: "100 % propriété totale disponible",
          shopify: "0 % (dépendance totale à l'éditeur)",
        },
        {
          label: "Coût total estimé sur 3 ans",
          mechatron: "~5 719 – 6 439 € (installation + vrai hébergement)",
          shopify: "90 000 – 150 000 €+ (forfait + apps + commissions)",
        },
      ],
    },
    calculator: {
      headline: "Possédez votre plateforme. Gardez 100 % de vos ventes.",
      subtitle:
        "Simulateur interactif d'économies sur 3 ans : faites glisser vos ventes mensuelles pour comparer votre dépense.",
      salesVolume: "Volume de ventes mensuel :",
      comparisonTitle: "Comparatif des coûts estimés sur 3 ans",
      shopifyLabel: "Shopify Plus / SaaS (Abonnement mensuel + 1,5 % commission + plugins) :",
      mechatronLabel: "Mechatron (Installation unique + hébergement cloud réel) :",
      savingsTitle: "Économies estimées pour votre entreprise sur 3 ans",
      savingsSubtitle: "Conservez 100 % de votre chiffre d'affaires sans commission de plateforme",
      savingsAction: "Reprenez vos marges",
    },
  },
  faq: {
    index: "05",
    title: "Foire aux questions",
    intro: "Des réponses transparentes sur l'hébergement, la propriété du code, les applications et la migration.",
    items: [
      {
        q: "Où la boutique est-elle hébergée ?",
        a: "Dans votre propre compte AWS, Google Cloud ou Azure. Nous installons la solution et vous remettons tous les accès admin, clés et noms de domaine. Vos données clients ne transitent jamais par nos serveurs.",
      },
      {
        q: "Y a-t-il un abonnement mensuel ?",
        a: "Non. Vous payez une seule fois l'installation, puis uniquement votre facture d'hébergement cloud habituelle (généralement 20 à 50 €/mois). Nous ne prenons aucune commission sur vos ventes.",
      },
      {
        q: "Est-ce que je reçois le code source ?",
        a: "Avec la licence de code source, oui : la boutique, les applications Flutter, le backend et le back-office sous forme de dépôts Git non chiffrés. Vous pouvez le modifier ou le revendre à vos clients.",
      },
      {
        q: "Comment fonctionnent les applications mobiles ?",
        a: "Elles sont développées avec Flutter : une seule base de code produit à la fois l'application Android et iOS. Elles sont publiées sur vos comptes et intègrent les notifications push et la biométrie.",
      },
      {
        q: "Pouvez-vous migrer nos données depuis Shopify ou WooCommerce ?",
        a: "Oui. Nous transférons vos produits, catégories, images et comptes clients, et configurons des redirections 301 pour préserver votre référencement Google.",
      },
      {
        q: "Quels moyens de paiement et taxes sont gérés ?",
        a: "Stripe et PayPal pour les paiements internationaux, virements et paiement à la livraison. Factures avec TVA européenne générées automatiquement pour chaque commande.",
      },
    ],
  },
  closing: {
    headline: "Votre cloud. Vos données clients. Votre code.",
    description:
      "Prêt à lancer votre boutique sur votre propre compte AWS, GCP ou Azure ? Planifiez un échange de 30 minutes avec notre équipe technique pour découvrir l'architecture et les applications en direct.",
    ctaDemo: "Réserver une démo",
    whatsappText: "Ou écrivez-nous sur WhatsApp",
  },
  leadModal: {
    title: "Réserver une démo",
    subtitle:
      "Un échange de 30 minutes. Nous vous montrons la boutique et l'application en direct et répondons à toutes vos questions.",
    nameLabel: "Nom",
    namePlaceholder: "Nom complet",
    emailLabel: "E-mail professionnel",
    emailPlaceholder: "nom@entreprise.fr",
    phoneLabel: "Téléphone ou WhatsApp",
    phonePlaceholder: "Numéro de mobile ou WhatsApp",
    companyLabel: "Entreprise",
    optional: "(optionnel)",
    companyPlaceholder: "Nom de votre boutique ou entreprise",
    submitBtn: "Demander une démo →",
    submitting: "Envoi en cours...",
    whatsappText: "Ou écrivez-nous sur",
    successTitle: "Merci",
    successDesc: "Nous vous contacterons sous 24 heures ouvrées pour convenir d'un créneau.",
    closeBtn: "Fermer",
  },
  footer: {
    tagline: "Boutiques e-commerce et applications mobiles déployées sur votre propre cloud.",
    colWork: "Réalisations",
    colProduct: "Produit",
    colContact: "Contact",
    whatsIncluded: "Ce qui est inclus",
    comparedToShopify: "Comparatif avec Shopify",
    pricing: "Tarifs",
    copyright: "100 % Propriété sur votre Cloud Privé. Tous droits réservés.",
  },
};
