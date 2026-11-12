import { OTT_PATHS } from "@/lib/solution-paths";
import type { ArchitectureModuleContent } from "@/components/sections/ArchitectureModule";
import { englishMessage } from "@/lib/messages";

const mobileScreens = [
  { src: "/showcase/microdrama-mobile-player.webp", alt: englishMessage("ShortDrama.media.mobilePlayer") },
  { src: "/showcase/microdrama-mobile-feed.webp", alt: englishMessage("ShortDrama.top.app.feedImage") },
];

const catalogScreens = [
  { src: "/showcase/microdrama-catalog.webp", alt: englishMessage("ShortDrama.top.platform.image") },
  { src: "/showcase/microdrama-web-genres.webp", alt: englishMessage("OttOverview.web.genresImage") },
];

const websiteScreens = [
  ...catalogScreens,
  { src: "/showcase/microdrama-web-player.webp", alt: englishMessage("ShortDrama.top.web.image") },
];

const adminScreens = [
  { src: "/showcase/microdrama-admin-series.webp", alt: englishMessage("ShortDrama.media.series") },
  { src: "/showcase/microdrama-admin-episodes.webp", alt: englishMessage("ShortDrama.media.episodes") },
  { src: "/showcase/microdrama-admin-analytics.webp", alt: englishMessage("ShortDrama.media.analytics") },
];

export const shortDramaAppModule: ArchitectureModuleContent = {
  title: englishMessage("StreamingArchitecture.shortDrama.app.title"),
  intro: englishMessage("StreamingArchitecture.shortDrama.app.intro"),
  points: [
    englishMessage("ShortDrama.top.app.playback"),
    englishMessage("ShortDrama.architecture.app.vip"),
    englishMessage("ShortDrama.architecture.app.publish"),
  ],
  portrait: true,
  galleryLabel: englishMessage("ShortDrama.top.app.previewCaption"),
  imageNote: englishMessage("StreamingArchitecture.example.mobile"),
  images: mobileScreens,
};

export const shortDramaWebModule: ArchitectureModuleContent = {
  title: englishMessage("StreamingArchitecture.shortDrama.web.title"),
  intro: englishMessage("StreamingArchitecture.shortDrama.web.intro"),
  points: [
    englishMessage("ShortDrama.top.web.sharing"),
    englishMessage("ShortDrama.architecture.web.browse"),
    englishMessage("ShortDrama.top.web.checkout"),
  ],
  images: websiteScreens,
};

export const shortDramaAdminModule: ArchitectureModuleContent = {
  title: englishMessage("ShortDrama.top.platform.admin"),
  intro: englishMessage("StreamingArchitecture.admin.intro"),
  points: [
    englishMessage("ShortDrama.architecture.admin.publish"),
    englishMessage("ShortDrama.architecture.admin.access"),
    englishMessage("ShortDrama.top.platform.analytics"),
  ],
  galleryLabel: englishMessage("OttOverview.microdramaExample"),
  imageNote: englishMessage("StreamingArchitecture.example.admin"),
  images: adminScreens,
};

export const ottAppModule: ArchitectureModuleContent = {
  title: englishMessage("StreamingArchitecture.ott.app.title"),
  intro: englishMessage("StreamingArchitecture.ott.app.intro"),
  points: [
    englishMessage("StreamingArchitecture.ott.app.casting"),
    englishMessage("StreamingArchitecture.ott.app.downloads"),
    englishMessage("ott-streaming.in.app.subscriptions.1fc298c"),
  ],
  portrait: true,
  galleryLabel: englishMessage("ShortDrama.top.app.previewCaption"),
  imageNote: englishMessage("StreamingArchitecture.example.mobile"),
  images: mobileScreens,
};

export const ottWebModule: ArchitectureModuleContent = {
  title: englishMessage("StreamingArchitecture.ott.web.title"),
  intro: englishMessage("StreamingArchitecture.ott.web.intro"),
  points: [
    englishMessage("OttOverview.web.catalog"),
    englishMessage("StreamingArchitecture.ott.web.adaptive"),
    englishMessage("StreamingArchitecture.ott.web.billing"),
  ],
  galleryLabel: englishMessage("OttOverview.microdramaExample"),
  imageNote: englishMessage("StreamingArchitecture.example.web"),
  images: websiteScreens,
};

export const ottAdminModule: ArchitectureModuleContent = {
  title: englishMessage("StreamingArchitecture.ott.admin.title"),
  intro: englishMessage("StreamingArchitecture.ott.admin.intro"),
  points: [
    englishMessage("StreamingArchitecture.ott.admin.publish"),
    englishMessage("OttOverview.monetization"),
    englishMessage("OttOverview.analytics"),
  ],
  galleryLabel: englishMessage("OttOverview.microdramaExample"),
  imageNote: englishMessage("StreamingArchitecture.example.admin"),
  images: adminScreens,
};

export const ottPlatformModules = [
  {
    ...ottAppModule,
    link: {
      href: OTT_PATHS.app,
      label: englishMessage("ShortDrama.architecture.app.link"),
    },
  },
  {
    ...ottWebModule,
    images: catalogScreens,
    link: {
      href: OTT_PATHS.web,
      label: englishMessage("ShortDrama.architecture.web.link"),
    },
  },
  { ...ottAdminModule, id: "video-cms" },
];
