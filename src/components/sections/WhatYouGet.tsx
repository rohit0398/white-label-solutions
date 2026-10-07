"use client";

import React, { useState } from "react";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";
import { useSite } from "@/components/site/SiteProvider";
import { TRANSLATIONS } from "@/lib/translations";

const appLinks = SHOWCASE_PROJECTS.filter((p) => p.playStoreUrl);

type ModuleKey = "storefront" | "apps" | "admin";

export function WhatYouGet() {
  const { language } = useSite();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;
  const [activeTab, setActiveTab] = useState<ModuleKey>("storefront");

  const moduleConfigs: Record<
    ModuleKey,
    {
      n: string;
      tabLabel: string;
      title: string;
      summary: string;
      screenshot: string;
      caption: string;
      highlights: { label: string; value: string }[];
    }
  > = {
    storefront: {
      n: "01",
      tabLabel: t.whatYouGet.tabs.storefront,
      title: t.whatYouGet.modules.storefront.title,
      summary: t.whatYouGet.modules.storefront.summary,
      screenshot: "/showcase/mechatron-store.png",
      caption: t.whatYouGet.modules.storefront.caption,
      highlights: t.whatYouGet.modules.storefront.highlights,
    },
    apps: {
      n: "02",
      tabLabel: t.whatYouGet.tabs.apps,
      title: t.whatYouGet.modules.apps.title,
      summary: t.whatYouGet.modules.apps.summary,
      screenshot: "/showcase/estorealley-store.png",
      caption: t.whatYouGet.modules.apps.caption,
      highlights: t.whatYouGet.modules.apps.highlights,
    },
    admin: {
      n: "03",
      tabLabel: t.whatYouGet.tabs.admin,
      title: t.whatYouGet.modules.admin.title,
      summary: t.whatYouGet.modules.admin.summary,
      screenshot: "/showcase/admin-dashboard.png",
      caption: t.whatYouGet.modules.admin.caption,
      highlights: t.whatYouGet.modules.admin.highlights,
    },
  };

  const current = moduleConfigs[activeTab];

  return (
    <Section
      id="what-you-get"
      index={t.whatYouGet.index}
      title={t.whatYouGet.title}
      intro={t.whatYouGet.intro}
      bare
    >
      {/* Interactive Segmented Switcher */}
      <div className="wrap mb-10">
        <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-lg border border-line bg-wash w-full sm:w-auto">
          {(["storefront", "apps", "admin"] as ModuleKey[]).map((key) => {
            const isActive = key === activeTab;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`flex-1 sm:flex-initial text-left px-3.5 py-2 rounded-md text-xs font-mono transition-all duration-200 cursor-pointer select-none active:scale-[0.97] ${
                  isActive
                    ? "bg-paper text-ink font-semibold shadow-xs border border-line shimmer-badge"
                    : "text-ink-3 hover:text-ink hover:bg-paper/60 hover:-translate-y-0.5"
                }`}
              >
                {moduleConfigs[key].tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Module Showcase Card */}
      <div className="wrap space-y-6">
        <div className="border border-line rounded-lg p-6 sm:p-8 bg-paper hover:border-ink/40 transition-all duration-300 hover:shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-line">
            <div>
              <span className="font-mono text-xs text-ink-3">{current.n}</span>
              <h3 className="text-2xl font-semibold tracking-tight text-ink mt-0.5">
                {current.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>Active module</span>
            </span>
          </div>

          <p className="mt-4 text-ink-2 leading-relaxed text-[15px]">
            {current.summary}
          </p>

          {/* Interactive Highlights Strip */}
          <div className="mt-6 pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-4">
            {current.highlights.map((h, i) => (
              <div
                key={i}
                className="p-3 rounded-md bg-wash/40 border border-line/50 hover:border-ink/40 hover:bg-wash transition-all duration-200 group/box"
              >
                <span className="text-[11px] font-mono text-ink-3 uppercase block group-hover/box:text-ink-2">
                  {h.label}
                </span>
                <p className="text-xs font-medium text-ink mt-0.5">{h.value}</p>
              </div>
            ))}
          </div>

          {activeTab === "apps" && (
            <p className="mt-6 pt-4 border-t border-line text-xs text-ink-3">
              Live published apps:{" "}
              {appLinks.map((p, i) => (
                <React.Fragment key={p.id}>
                  {i > 0 && ", "}
                  <a
                    href={p.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink font-medium"
                  >
                    {p.title}
                  </a>
                </React.Fragment>
              ))}{" "}
              on Google Play.
            </p>
          )}

          {activeTab === "admin" && (
            <div className="mt-6 pt-4 border-t border-line">
              <h4 className="text-xs font-mono uppercase text-ink-3 mb-3">
                {t.whatYouGet.adminHeading}
              </h4>
              <dl className="divide-y divide-line">
                {t.whatYouGet.adminFeatures.map((f, idx) => (
                  <div key={idx} className="py-2.5 grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 text-xs">
                    <dt className="text-ink font-medium">{f.title}</dt>
                    <dd className="text-ink-2">{f.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Screenshot Preview with Smooth Transition */}
      <div className="wrap-wide mt-10 group">
        <Screenshot
          key={current.screenshot}
          src={current.screenshot}
          alt={current.title}
          caption={current.caption}
          className="transition-transform duration-300 group-hover:scale-[1.008]"
        />
      </div>
    </Section>
  );
}
