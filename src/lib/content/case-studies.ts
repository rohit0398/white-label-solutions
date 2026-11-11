export const CASE_STUDIES_PATH = "/case-studies";

export const CASE_STUDIES = {
  shortDrama: {
    path: "/case-studies/short-drama-platform",
    title: "A short drama app for vertical episodes",
    category: "Short drama",
    description: "How a studio set up swipeable episodes, paid unlocks, and a publishing dashboard for its short drama catalog.",
    image: "/showcase/microdrama-web-player.webp",
    alt: "MicroDrama browser player with a vertical video and episode list",
    caption: "MicroDrama test build showing the browser player and episode list.",
    previewLabel: "Test build shown",
  },
  ott: {
    path: "/case-studies/ott-streaming-network",
    title: "An OTT platform for live TV and on-demand video",
    category: "OTT streaming",
    description: "How a broadcaster brought scheduled channels, a program guide, and an on-demand catalog into one service.",
    image: "/showcase/ott-cinematic-web.webp",
    alt: "OTT product preview with a widescreen movie catalog",
    caption: "Illustrative OTT product preview showing a sample movie catalog.",
    previewLabel: "Illustration shown",
  },
  electronics: {
    path: "/case-studies/mechatron-lab",
    title: "An electronics store with multi-warehouse fulfillment",
    category: "E-commerce",
    description: "How Mechatron Lab connected its electronics storefront and Android app to a shared catalog, inventory, and order management.",
    image: "/showcase/commerce-storefront.webp",
    alt: "Mechatron Lab storefront showing electronics and robotics products",
    caption: "Mechatron Lab's electronics and robotics storefront.",
  },
  directory: {
    path: "/case-studies/estorealley",
    title: "A directory for retail and wholesale stores",
    category: "E-commerce",
    description: "How eStoreAlley gave independent brands a place to list their stores and send shoppers and stockists directly to them.",
    image: "/showcase/commerce-marketplace.webp",
    alt: "eStoreAlley directory for retail and wholesale stores",
    caption: "eStoreAlley's directory for independent brands and online stores.",
  },
} as const;

export type CaseStudy = (typeof CASE_STUDIES)[keyof typeof CASE_STUDIES];
