import type { Language } from "@/types";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://solutions.mechatronlab.com");
const parsedUrl = new URL(configuredUrl);
if (!["https:", "http:"].includes(parsedUrl.protocol) || parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, query, or fragment.");
}
export const SITE_URL = parsedUrl.origin;
export const LANGUAGES: Language[] = ["en", "es", "de", "fr", "hi"];
export const LOCALIZED_PATHS = ["/", "/solutions/ecommerce", "/solutions/short-drama", "/solutions/ott-streaming"] as const;
export type LocalizedPath = typeof LOCALIZED_PATHS[number];
export function isLanguage(value: string): value is Language {
  return LANGUAGES.includes(value as Language);
}
export function basePath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isLanguage(segments[0])) segments.shift();
  return "/" + segments.join("/");
}
export function localizedPath(pathname: string, language: Language) {
  const path = basePath(pathname);
  if (!LOCALIZED_PATHS.includes(path as LocalizedPath)) return path;
  return language === "en" ? path : `/${language}${path === "/" ? "" : path}`;
}
export function languageAlternates(pathname: string) {
  return Object.fromEntries([
    ...LANGUAGES.map(language => [language, localizedPath(pathname, language)]),
    ["x-default", basePath(pathname)],
  ]);
}

export type LandingLocale = Exclude<Language, "en">;
export type LandingFamily = "home" | "ecommerce" | "short-drama" | "ott-streaming";
export const TRANSLATED_LANGUAGES = LANGUAGES.filter((language): language is LandingLocale => language !== "en");
