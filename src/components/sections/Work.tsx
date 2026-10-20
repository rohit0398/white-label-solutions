"use client";

import React from "react";
import Link from "next/link";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { ShowcaseProject } from "@/types";
import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

const linkCls =
  "inline-flex items-center gap-1 text-ink underline underline-offset-4 decoration-line hover:decoration-ink active:opacity-75 transition-colors";

export interface WorkProps {
  id?: string;
  index?: string;
  title?: string;
  intro?: string;
  projects?: ShowcaseProject[];
  mode?: "all" | "web" | "app";
}

export function Work({ id = "work", index, title, intro, projects, mode = "all" }: WorkProps = {}) {
  const { language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const activeProjects = (projects || SHOWCASE_PROJECTS).map((p) => {
    if (mode === "app" && p.id === "mechatron-lab") {
      return {
        ...p,
        screenshotUrl: "/showcase/mechatron-app/screen-1.png",
      };
    }
    return p;
  });
  const activeIndex = index !== undefined ? index : t.work.index;
  const activeTitle = title || t.work.title;
  const activeIntro = intro !== undefined ? intro : t.work.intro;

  return (
    <Section
      id={id}
      index={activeIndex}
      title={activeTitle}
      intro={activeIntro}
    >
      <ul className="border-t border-line divide-y divide-line">
        {activeProjects.map((p, idx) => {
          const translatedProject = !projects && t.work.projects[idx] ? t.work.projects[idx] : p;
          return (
            <li
              key={p.id}
              className="group py-8 px-4 -mx-4 rounded-xl grid gap-5 sm:grid-cols-[1fr_12rem] sm:gap-8 sm:items-start transition-all duration-300 hover:bg-wash/60 hover:shadow-xs"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-ink group-hover:text-ink transition-colors">
                    {translatedProject.title}
                  </h3>
                  <span className="relative flex h-2 w-2" title="Live production deployment">
                    <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="text-xs font-mono text-ink-3">{translatedProject.industry}</span>
                </div>
                <p className="mt-2 text-ink-2 leading-relaxed text-sm">{translatedProject.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
                  {p.url.startsWith("/") ? (
                    <Link href={p.url} className={linkCls}>
                      <span>Explore Architecture</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ) : (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                      <span>
                        {p.url.includes("play.google.com")
                          ? "Google Play Store"
                          : p.url.replace(/^https?:\/\//, "")}
                      </span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                  {p.playStoreUrl && p.playStoreUrl !== p.url && (
                    <a href={p.playStoreUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                      <span>{t.work.androidApp}</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                  {p.appDownloadUrl && (
                    <a href={p.appDownloadUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                      <span>{p.appDownloadLabel || "Download test APK"}</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                  {p.caseStudyUrl && (
                    <Link href={p.caseStudyUrl} className={linkCls}>
                      <span>
                        {p.caseStudyUrl.includes("/blog/")
                          ? "Architecture Blueprint"
                          : t.work.caseStudy}
                      </span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                        →
                      </span>
                    </Link>
                  )}
                </div>
                {p.demoAccess && (
                  <p className="mt-3 text-xs text-ink-3 leading-relaxed max-w-xl">
                    {p.demoAccess.googleLogin ? "Sign in with Google, or use a test number " : "Test numbers "}
                    <span className="font-mono text-ink-2">{p.demoAccess.phones.join(", ")}</span>
                    . OTP <span className="font-mono font-semibold text-ink">{p.demoAccess.otp}</span>.
                  </p>
                )}
              </div>

              {p.screenshotUrl && (
                p.url.startsWith("/") ? (
                  <Link
                    href={p.url}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block overflow-hidden rounded-md border border-line bg-wash group-hover:border-ink/60 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.screenshotUrl}
                      alt={`${translatedProject.title} screenshot`}
                      loading="lazy"
                      className="block w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </Link>
                ) : (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block overflow-hidden rounded-md border border-line bg-wash group-hover:border-ink/60 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.screenshotUrl}
                      alt={`${translatedProject.title} storefront screenshot`}
                      loading="lazy"
                      className="block w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </a>
                )
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
