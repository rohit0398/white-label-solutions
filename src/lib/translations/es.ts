import { TranslationDictionary } from "./types";

export const es: TranslationDictionary = {
  nav: {
    solutions: "Soluciones",
    work: "Proyectos",
    pricing: "Precios",
    faq: "Preguntas",
    bookDemo: "Reservar demo",
  },
  hero: {
    badge: "Entrega en 2–4 semanas · 0% comisión de ventas · Nube privada (AWS · GCP · Azure)",
    headline: "Sé dueño de tu tienda, tus apps y tu código.",
    subtitle:
      "Instalamos una tienda online completa, apps para Android e iOS y un panel de administración en tu propia nube. Pagas una vez. Te quedas con cada venta.",
    anchors: {
      storefront: "01 Tienda Web",
      apps: "02 Apps Móviles",
      admin: "03 Panel CRM",
    },
    ctaDemo: "Reservar demo",
    ctaWork: "Ver tiendas activas",
    facts: "Desde $4,999 pago único · 0% comisión · Lista en 2–4 semanas",
  },
  whatYouGet: {
    index: "01",
    title: "Qué incluye",
    intro:
      "Tu marca en la web, Google Play y App Store. Totalmente sincronizada en tu propia nube privada.",
    tabs: {
      storefront: "01 Tienda Web",
      apps: "02 Apps Nativas (iOS y Android)",
      admin: "03 Panel y CRM (Operaciones)",
    },
    modules: {
      storefront: {
        title: "Tienda online de alta velocidad",
        summary:
          "Una tienda rápida con tus colores y tipografía. Búsqueda inteligente, variantes, checkout con impuestos y SEO optimizado. Pagos con tarjeta, PayPal, transferencias o contra entrega.",
        caption:
          "Tienda web con carga en menos de un segundo ejecutándose en tus propios servidores en la nube.",
        highlights: [
          { label: "Velocidad", value: "< 0.9s tiempo de carga" },
          { label: "Pasarelas", value: "Stripe, PayPal, transferencias, COD" },
          { label: "Impuestos", value: "Cálculo automático de IVA / Tax" },
        ],
      },
      apps: {
        title: "Apps móviles nativas con tu marca",
        summary:
          "Desarrolladas con una base unificada en Flutter y publicadas bajo tus cuentas de desarrollador en Google Play y Apple App Store. Notificaciones push y acceso biométrico incluidos.",
        caption:
          "Apps móviles nativas conectadas en tiempo real al catálogo y almacén de tu nube.",
        highlights: [
          { label: "Código", value: "Flutter (Código Único)" },
          { label: "Tiendas de Apps", value: "Google Play + Apple App Store" },
          { label: "Fidelización", value: "Notificaciones push gratis y biometría" },
        ],
      },
      admin: {
        title: "Panel de control y CRM todo en uno",
        summary:
          "Tu centro de operaciones. Control de inventario multialmacén, alertas de reposición de stock, cálculo del margen real por pedido y editor visual de portada sin necesidad de programar.",
        caption:
          "Panel operativo utilizado a diario para gestionar envíos multialmacén e historial de clientes.",
        highlights: [
          { label: "Operaciones", value: "Envíos multialmacén" },
          { label: "Margen real", value: "Cálculo de beneficio tras costes" },
          { label: "Editor visual", value: "Cambio de banners sin programar" },
        ],
      },
    },
    adminHeading: "Capacidades del Panel de Control Incluidas",
    adminFeatures: [
      {
        title: "Control multialmacén",
        description: "Stock por ubicación. Los pedidos se envían desde el almacén más cercano con stock.",
      },
      {
        title: "Alertas de reposición",
        description: "Muestra cuántos días de inventario quedan según el ritmo real de ventas.",
      },
      {
        title: "Margen neto por pedido",
        description: "Compara el coste del proveedor con cada venta para ver el beneficio real.",
      },
      {
        title: "Pedidos y clientes",
        description: "Pedidos web, app, teléfono y mayoristas en una sola lista unificada.",
      },
      {
        title: "Editor de portada",
        description: "Cambia banners y productos destacados en móvil y web sin programadores.",
      },
    ],
    appStoreBadge: "Google Play Store",
    webStoreBadge: "Tienda Web",
  },
  howItWorks: {
    index: "02",
    title: "Cómo funciona",
    badge: "Evita 6 meses de desarrollo · Lanza tu tienda y apps en 2–4 semanas",
    steps: [
      {
        when: "Día 1",
        title: "Llamada de alcance y requisitos",
        text: "Una llamada de 30 minutos para revisar tu catálogo, pasarelas de pago, impuestos y preferencias de nube.",
      },
      {
        when: "Semana 1",
        title: "Personalización de marca y diseño",
        text: "Aplicamos tu logo, colores, fuentes, dominio propio e impuestos. Importamos tus catálogos de productos actuales.",
      },
      {
        when: "Semana 2–3",
        title: "Despliegue en tu nube y compilación de apps",
        text: "Desplegamos todo en tu propia cuenta de AWS, GCP o Azure. Compilamos y probamos las apps móviles para iOS y Android.",
      },
      {
        when: "Semana 3–4",
        title: "Publicación en tiendas de apps y entrega",
        text: "Enviamos las apps a App Store y Google Play con tus cuentas. Te entregamos todas las claves maestras y el 100% del código fuente.",
      },
      {
        when: "Tras el lanzamiento",
        title: "Garantía de ingeniería de 30 días",
        text: "Eres 100% independiente sin comisiones por ventas, respaldado por 30 días de soporte técnico de lanzamiento.",
      },
    ],
  },
  work: {
    index: "03",
    title: "Tiendas activas hoy en producción",
    intro: "Tres empresas de diferentes sectores, cada una alojada en su propia cuenta de nube privada.",
    androidApp: "App Android",
    caseStudy: "Caso de éxito",
    projects: [
      {
        title: "Mechatron Lab",
        industry: "Electrónica y robótica",
        description:
          "+1.000 referencias, dos almacenes, facturación con impuestos, asistente con IA y app Android.",
      },
      {
        title: "eStoreAlley",
        industry: "Marketplace mayorista y minorista",
        description:
          "Directorio multisede con precios para mayoristas, checkout Stripe y app nativa en Google Play.",
      },
      {
        title: "Style Gear",
        industry: "Moda y calzado",
        description:
          "Tienda de ropa con variantes de color/talla, zoom de fotos de alta resolución y checkout rápido.",
      },
    ],
  },
  pricing: {
    index: "04",
    title: "Precios",
    intro:
      "Deja de alquilar tu tienda. Cómprala una vez, sé su dueño para siempre. Precio único fijo y cero comisiones.",
    currencyLabel: "Seleccionar divisa",
    popularBadge: "Más popular",
    tiers: [
      {
        name: "Lanzamiento",
        tagline: "Tienda, apps y panel de control, adaptados con tu marca y desplegados en 2–4 semanas.",
        ctaText: "Reservar demo",
        deliverables: [
          "Tienda web con el diseño de tu marca",
          "Apps para Android e iOS en tus cuentas de desarrollador",
          "Panel de administración y CRM con control multialmacén",
          "Stripe, PayPal, transferencias bancarias y contra reembolso",
          "Generación automática de facturas e impuestos (IVA / Tax)",
          "Despliegue directo en tu cuenta de AWS, GCP o Azure",
          "30 días de garantía y soporte de lanzamiento",
        ],
      },
      {
        name: "Código fuente",
        tagline: "Opcional. Los repositorios completos con derecho a modificarlos, alojarlos o revenderlos.",
        ctaText: "Consultar licencia",
        deliverables: [
          "Tienda (Next.js), apps (Flutter), backend y panel de control",
          "Repositorios Git sin encriptar",
          "Documentación completa de base de datos y despliegue",
          "Licencia comercial perpetua sin pagos recurrentes",
        ],
      },
      {
        name: "Horas de desarrollo",
        tagline: "Ingenieros dedicados para integraciones ERP, sincronizaciones o funciones a medida.",
        ctaText: "Hablar con el equipo",
        deliverables: [
          "Integración con ERPs, software contable y almacenes",
          "Precios B2B, presupuestos y checkout a medida",
          "Mantenimiento de infraestructura, copias de seguridad y parches",
          "Bolsas de horas o retención mensual",
        ],
      },
    ],
    tco: {
      title: "Comparativa de coste total a 3 años (TCO)",
      subtitle: "Lo que gasta un comercio promedio durante 36 meses de ventas online.",
      colItem: "Concepto",
      colMechatron: "Mechatron (Tu Nube Privada)",
      colShopify: "Shopify Plus / SaaS",
      rows: [
        {
          label: "Configuración inicial y lanzamiento",
          mechatron: "pago único de instalación",
          shopify: "$10,000 – $25,000+ agencia",
        },
        {
          label: "Licencia de software a 3 años",
          mechatron: "$0 (cero cuotas recurrentes)",
          shopify: "$72,000+ ($2,000/mes mín.)",
        },
        {
          label: "Servidores en la nube a 3 años",
          mechatron: "~$720 – $1,440 (~$20–$40/mes en tu AWS/GCP)",
          shopify: "Incluido en la cuota de la plataforma",
        },
        {
          label: "Comisión por ventas a 3 años (1.5% en $50k/mes)",
          mechatron: "$0 (solo comisión de tu banco/pasarela)",
          shopify: "~$27,000+ en comisiones de plataforma",
        },
        {
          label: "Propiedad del código y base de datos",
          mechatron: "100% propiedad total disponible",
          shopify: "0% (bloqueo por proveedor SaaS)",
        },
        {
          label: "Coste total estimado a 3 años",
          mechatron: "~$5,719 – $6,439 (pago único + tu hosting)",
          shopify: "$90,000 – $150,000+ (cuotas + plugins + %)",
        },
      ],
    },
    calculator: {
      headline: "Sé dueño de tu plataforma. Quédate con el 100% de tus ventas.",
      subtitle:
        "Calculadora interactiva de ahorro a 3 años: arrastra las ventas mensuales para ver cuánto ahorras frente a comisiones SaaS.",
      salesVolume: "Volumen de ventas mensual:",
      comparisonTitle: "Comparativa estimada de costes a 3 años",
      shopifyLabel: "Shopify Plus / SaaS (Cuota mensual + 1.5% ventas + plugins):",
      mechatronLabel: "Mechatron (Instalación única + coste real de tus servidores):",
      savingsTitle: "Ahorro estimado para tu negocio a 3 años",
      savingsSubtitle: "Conserva el 100% de tu facturación sin comisiones de plataforma",
      savingsAction: "Recupera tu margen",
    },
  },
  faq: {
    index: "05",
    title: "Preguntas frecuentes",
    intro: "Respuestas claras sobre alojamiento, propiedad del código, apps móviles y migración.",
    items: [
      {
        q: "¿Dónde se aloja la tienda?",
        a: "En tu propia cuenta de AWS, Google Cloud o Azure. La configuramos allí y te entregamos las contraseñas, claves y dominios. Tus datos de clientes nunca pasan por nuestros servidores.",
      },
      {
        q: "¿Hay cuotas mensuales?",
        a: "No. Pagas una única vez por la instalación y luego solo tu factura habitual de hosting en tu nube (generalmente $20–50/mes). No cobramos ninguna comisión por tus ventas.",
      },
      {
        q: "¿Recibo el código fuente?",
        a: "Con la licencia de código fuente, sí: la tienda, las apps en Flutter, el backend y el panel de administración en repositorios Git sin encriptar. Puedes modificarlo o revenderlo.",
      },
      {
        q: "¿Cómo funcionan las aplicaciones móviles?",
        a: "Están creadas con Flutter, por lo que una sola base de código genera tanto la app de Android como la de iOS. Se publican bajo tus cuentas e incluyen notificaciones push y biometría.",
      },
      {
        q: "¿Pueden migrar nuestros datos desde Shopify o WooCommerce?",
        a: "Sí. Migramos tus productos, categorías, fotos y clientes, configurando redirecciones 301 para no perder tu posicionamiento en Google.",
      },
      {
        q: "¿Qué métodos de pago e impuestos están soportados?",
        a: "Stripe y PayPal para ventas internacionales, transferencias y contra reembolso. Genera facturas automáticas con IVA o impuestos locales para cada pedido.",
      },
    ],
  },
  closing: {
    headline: "Tu nube. Tus clientes. Tu código.",
    description:
      "¿Listo para lanzar en tu propia cuenta de AWS, GCP o Azure? Agenda una llamada de 30 minutos con nuestros ingenieros para ver una demo en directo y resolver tus dudas.",
    ctaDemo: "Reservar demo",
    whatsappText: "O contáctanos por WhatsApp",
  },
  leadModal: {
    title: "Reservar demo",
    subtitle:
      "Una llamada de 30 minutos. Te mostramos la tienda y la app en directo y resolvemos las dudas de tu proyecto.",
    nameLabel: "Nombre",
    namePlaceholder: "Nombre completo",
    emailLabel: "Correo corporativo",
    emailPlaceholder: "nombre@empresa.com",
    phoneLabel: "Teléfono o WhatsApp",
    phonePlaceholder: "Número móvil o WhatsApp",
    companyLabel: "Empresa",
    optional: "(opcional)",
    companyPlaceholder: "Nombre de tu tienda o empresa",
    submitBtn: "Solicitar demo →",
    submitting: "Enviando solicitud...",
    whatsappText: "O escríbenos directamente por",
    successTitle: "Gracias",
    successDesc: "Te escribiremos en menos de 24 horas laborales para coordinar la hora.",
    closeBtn: "Cerrar",
  },
  footer: {
    tagline: "Tiendas y apps de comercio electrónico instaladas en tu propia nube.",
    colWork: "Proyectos",
    colProduct: "Producto",
    colContact: "Contacto",
    whatsIncluded: "Qué incluye",
    comparedToShopify: "Comparativa con Shopify",
    pricing: "Precios",
    copyright: "100% Propiedad en tu Nube Privada. Todos los derechos reservados.",
  },
};
