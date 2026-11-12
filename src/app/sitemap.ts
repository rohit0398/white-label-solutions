import { ECOMMERCE_PATHS, OTT_PATHS } from "@/lib/solution-paths";
import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import type { MetadataRoute } from "next";
import { SITE_URL, LANGUAGES, LOCALIZED_PATHS, localizedPath, languageAlternates } from "@/lib/site-config";
import { CASE_STUDIES, CASE_STUDIES_PATH } from "@/lib/content/case-studies";
import { DRAMA_ARTICLES } from "@/lib/content/short-drama-articles";

const englishPaths = [
  "/",
  "/compare/shopify-alternative",
  "/solutions",
  ECOMMERCE_PATHS.web,
  ECOMMERCE_PATHS.app,
  ECOMMERCE_PATHS.platform,
  OTT_PATHS.platform,
  SHORT_DRAMA_PATHS.platform,
  SHORT_DRAMA_PATHS.app,
  SHORT_DRAMA_PATHS.web,
  OTT_PATHS.web,
  OTT_PATHS.app,
  CASE_STUDIES_PATH,
  ...Object.values(CASE_STUDIES).map(study => study.path),
  "/blog",
  ...DRAMA_ARTICLES.map(article => `/blog/${article.slug}`),
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
