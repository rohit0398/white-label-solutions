"use client";

import React, { useState } from "react";
import { ADMIN_FEATURES, SHOWCASE_PROJECTS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Screenshot } from "@/components/ui/Screenshot";

const appLinks = SHOWCASE_PROJECTS.filter((p) => p.playStoreUrl);

interface ModuleItem {
  id: "storefront" | "apps" | "admin";
  n: string;
  tabLabel: string;
  title: string;
  summary: string;
  screenshot: string;
  caption: string;
  highlights: { label: string; value: string }[];
}

const modules: ModuleItem[] = [
  {
    id: "storefront",
    n: "01",
    tabLabel: "01 Storefront (Web)",
    title: "High-speed online store",
    summary:
      "A fast storefront in your colours and typography. Search, product variants, tax-correct checkout, and SEO are built in. Customers pay by card, UPI, PayPal, or cash on delivery.",
    screenshot: "/showcase/mechatron-store.png",
    caption: "Sub-second responsive web storefront running directly on client-owned cloud servers.",
    highlights: [
      { label: "Page speed", value: "< 0.9s load time" },
      { label: "Gateways", value: "Stripe, PayPal, UPI, COD" },
      { label: "Tax compliance", value: "Automated GST / VAT / Sales Tax" },
    ],
  },
  {
    id: "apps",
    n: "02",
    tabLabel: "02 Native Apps (iOS & Android)",
    title: "Branded mobile shopping apps",
    summary:
      "Built from a unified Flutter codebase and published under your company's Google Play and Apple App Store accounts. Push notifications, offline caching, and biometric login are included out of the box.",
    screenshot: "/showcase/estorealley-store.png",
    caption: "Native mobile apps connected in real time to the cloud catalog and warehouse database.",
    highlights: [
      { label: "Codebase", value: "Flutter (Single Source)" },
      { label: "App Stores", value: "Google Play + Apple App Store" },
      { label: "Engagement", value: "Free push notifications & Biometrics" },
    ],
  },
  {
    id: "admin",
    n: "03",
    tabLabel: "03 Admin & CRM (Operations)",
    title: "All-in-one Admin Panel & CRM",
    summary:
      "Your central operations dashboard. Manage inventory across multiple warehouses, monitor low-stock reorder velocity, calculate true profit per order against supplier costs, and visually edit layouts without code.",
    screenshot: "/showcase/admin-dashboard.png",
    caption: "The operations dashboard used daily to manage multi-hub fulfillment and customer history.",
    highlights: [
      { label: "Warehouses", value: "Multi-hub pincode dispatch" },
      { label: "Margin engine", value: "Real gross profit per invoice" },
      { label: "Customizer", value: "Visual drag-and-drop homepage tiles" },
    ],
  },
];

export function WhatYouGet() {
  const [activeTab, setActiveTab] = useState<ModuleItem["id"]>("storefront");
  const current = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <Section
      id="what-you-get"
      index="01"
      title="What you get"
      intro="Three core modules sharing one backend, all deployed into your private cloud account."
      bare
    >
      {/* Interactive Segmented Switcher */}
      <div className="wrap mb-10">
        <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-lg border border-line bg-wash w-full sm:w-auto">
          {modules.map((m) => {
            const isActive = m.id === activeTab;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveTab(m.id)}
                className={`flex-1 sm:flex-initial text-left px-3.5 py-2 rounded-md text-xs font-mono transition-all duration-200 cursor-pointer select-none active:scale-[0.97] ${
                  isActive
                    ? "bg-paper text-ink font-semibold shadow-xs border border-line shimmer-badge"
                    : "text-ink-3 hover:text-ink hover:bg-paper/60 hover:-translate-y-0.5"
                }`}
              >
                {m.tabLabel}
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

          {current.id === "apps" && (
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

          {current.id === "admin" && (
            <div className="mt-6 pt-4 border-t border-line">
              <h4 className="text-xs font-mono uppercase text-ink-3 mb-3">Admin capabilities</h4>
              <dl className="divide-y divide-line">
                {ADMIN_FEATURES.slice(0, 3).map((f) => (
                  <div key={f.id} className="py-2.5 grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 text-xs">
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
