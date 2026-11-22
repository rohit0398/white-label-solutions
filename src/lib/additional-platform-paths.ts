import { englishMessage } from "@/lib/messages";

export const SOLUTIONS_CATALOG_PATH = "/solutions";
export const OTHER_PLATFORMS_HREF = `${SOLUTIONS_CATALOG_PATH}#other-platforms`;
export const LEGACY_MORE_PLATFORMS_PATH = "/solutions/more-platforms";
export const ADDITIONAL_PLATFORM_PATHS = {
  "taxi-booking": "/solutions/launch-taxi-booking-platform",
  "food-delivery": "/solutions/launch-food-delivery-platform",
  "appointment-booking": "/solutions/launch-appointment-booking-platform",
  "real-estate": "/solutions/launch-real-estate-platform",
  "solar-crm": "/solutions/launch-solar-crm",
} as const;
export type AdditionalPlatformId = keyof typeof ADDITIONAL_PLATFORM_PATHS;

export const ADDITIONAL_PLATFORM_GUIDE_SLUGS = {
  "taxi-booking": "launch-white-label-taxi-booking-app",
  "food-delivery": "white-label-food-delivery-platform-guide",
  "appointment-booking": "appointment-booking-software-staff-calendar",
  "real-estate": "real-estate-listing-website-lead-generation",
  "solar-crm": "solar-crm-lead-to-installation-workflow",
} as const satisfies Record<AdditionalPlatformId, string>;

export const ADDITIONAL_PLATFORM_SUMMARIES = [
  { id: "taxi-booking", title: englishMessage("MorePlatforms.taxi.title"), summary: englishMessage("MorePlatforms.taxi.summary"), image: "/showcase/platforms/splitte-cover.webp" },
  { id: "food-delivery", title: englishMessage("MorePlatforms.food.title"), summary: englishMessage("MorePlatforms.food.summary"), image: "/showcase/platforms/foodie-customer-home.webp" },
  { id: "appointment-booking", title: englishMessage("MorePlatforms.appointments.title"), summary: englishMessage("MorePlatforms.appointments.summary"), image: "/showcase/platforms/carepoint-desk-dashboard.webp" },
  { id: "real-estate", title: englishMessage("MorePlatforms.estate.title"), summary: englishMessage("MorePlatforms.estate.summary"), image: "/showcase/platforms/aurum-home.webp" },
  { id: "solar-crm", title: englishMessage("MorePlatforms.solar.title"), summary: englishMessage("MorePlatforms.solar.summary"), image: "/showcase/platforms/solar-crm-dashboard.webp" },
] as const satisfies readonly { id: AdditionalPlatformId; title: string; summary: string; image: string }[];

export function isAdditionalPlatformId(value: string): value is AdditionalPlatformId {
  return Object.hasOwn(ADDITIONAL_PLATFORM_PATHS, value);
}

export function additionalInquiryForPath(pathname: string): AdditionalPlatformId | "more-platforms" | undefined {
  const path = pathname.split(/[?#]/)[0].replace(/\/$/, "").replace(/^\/en(?=\/)/, "");
  if (path === LEGACY_MORE_PLATFORMS_PATH) return "more-platforms";
  return ADDITIONAL_PLATFORM_SUMMARIES.find(platform =>
    ADDITIONAL_PLATFORM_PATHS[platform.id] === path || `/blog/${ADDITIONAL_PLATFORM_GUIDE_SLUGS[platform.id]}` === path,
  )?.id;
}
