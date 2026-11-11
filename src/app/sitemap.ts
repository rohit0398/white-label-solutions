import type { MetadataRoute } from "next";
import { SITE_URL, LANGUAGES, LOCALIZED_PATHS, localizedPath, languageAlternates } from "@/lib/site-config";
import { CASE_STUDIES, CASE_STUDIES_PATH } from "@/lib/content/case-studies";

const englishPaths = [
  "/",
  "/compare/shopify-alternative",
  "/solutions",
  "/solutions/ecommerce-website-development",
  "/solutions/ecommerce-app-development",
  "/solutions/ecommerce",
  "/solutions/ott-streaming",
  "/solutions/short-drama",
  "/solutions/short-drama-app-development",
  "/solutions/short-drama-website-development",
  "/solutions/ott-website-development",
  "/solutions/ott-app-development",
  CASE_STUDIES_PATH,
  ...Object.values(CASE_STUDIES).map(study => study.path),
  "/blog",
  "/blog/short-drama-app-development",
  "/blog/build-app-like-reelshort",
  "/blog/build-app-like-dramabox",
  "/blog/short-drama-app-development-cost",
  "/blog/short-drama-monetization",
  "/blog/ott-video-streaming-development",
  "/blog/ecommerce-website-development-cost",
  "/blog/ecommerce-website-development",
  "/blog/ecommerce-app-development",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/refund-policy"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return englishPaths.flatMap(path => {
    const translated = LOCALIZED_PATHS.includes(path as typeof LOCALIZED_PATHS[number]);
    return (translated ? LANGUAGES : ["en"] as const).map(language => ({
      url: SITE_URL + localizedPath(path, language),
      ...(translated ? { alternates: { languages: Object.fromEntries(Object.entries(languageAlternates(path)).map(([key, value]) => [key, SITE_URL + value])) } } : {}),
    }));
  });
}
