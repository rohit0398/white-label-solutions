"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { useSite } from "@/components/site/SiteProvider";
import { useMessages } from "@/components/site/useMessages";
import { localizedPath, basePath, isLanguage, LOCALIZED_PATHS, type LocalizedPath } from "@/lib/site-config";

export default function LocalizedLink({ href, children, hrefLang, title, ...props }: ComponentProps<typeof Link>) {
  const { language } = useSite();
  const translateCopy = useMessages();
  const path = typeof href === "string" ? href : undefined;
  const cleanPath = path?.split(/[?#]/)[0] || "/";
  const internal = Boolean(path?.startsWith("/") && !path.startsWith("//"));
  const translated = LOCALIZED_PATHS.includes(basePath(cleanPath) as LocalizedPath);
  const targetLanguage = hrefLang && isLanguage(hrefLang) ? hrefLang : language;
  const target = internal && translated ? localizedPath(cleanPath, targetLanguage) + path!.slice(cleanPath.length) : href;
  const englishResource = internal && !translated && language !== "en" && !props["aria-hidden"] && props.tabIndex !== -1;
  const englishLabel = new Intl.DisplayNames([language], { type: "language" }).of("en");
  return <Link {...props} href={target} lang={englishResource ? language : props.lang} hrefLang={englishResource ? "en" : hrefLang} title={title ? translateCopy(title) : undefined}>
    {translateCopy(children)}{englishResource && <span className="ml-1 text-[0.85em] opacity-80">({englishLabel})</span>}
  </Link>;
}
