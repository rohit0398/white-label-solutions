"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { MobileAppScreenshots } from "@/components/ui/MobileAppScreenshots";
import { SHOWCASE_PROJECTS } from "@/lib/constants";
import { Smartphone, Bell, Zap, ShieldCheck } from "lucide-react";

const appProjects = SHOWCASE_PROJECTS.filter((p) => p.playStoreUrl);

export interface AppShowcaseProps {
  id?: string;
  index?: string;
  title?: string;
  intro?: string;
}

export function AppShowcase({
  id = "mobile-apps",
  index = "02",
  title = "Native iOS & Android Shopping Apps",
  intro = "Built from a single high-performance Flutter 3.x codebase and published under your own Apple App Store and Google Play developer accounts. Sub-second catalog browsing, instant push alerts, and 0% commission.",
}: AppShowcaseProps = {}) {
  const highlights = [
    {
      icon: <Zap className="h-4 w-4 text-accent" />,
      label: "Engine & Performance",
      value: "Flutter 3.x native binaries, 60fps scrolling & offline cart sync",
    },
    {
      icon: <Bell className="h-4 w-4 text-accent" />,
      label: "Push Notifications",
      value: "Automated FCM & APNs alerts for order dispatch and flash sales",
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-accent" />,
      label: "Store Ownership",
      value: "Published directly to your Google Play & Apple Developer accounts",
    },
  ];

  return (
    <Section id={id} index={index} title={title} intro={intro} bare>
      {/* Feature Highlights Grid */}
      <div className="wrap mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-line bg-paper hover:border-ink/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                {h.icon}
                <span className="text-xs font-mono text-ink-3 uppercase font-semibold">
                  {h.label}
                </span>
              </div>
              <p className="text-sm font-medium text-ink leading-relaxed">{h.value}</p>
            </div>
          ))}
        </div>

        {/* Live Published Store Links */}
        <p className="mt-4 text-xs text-ink-3">
          Live published apps:{" "}
          {appProjects.map((p, i) => (
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
      </div>

      {/* Real Mobile App Screenshots Showcase */}
      <div className="wrap-wide">
        <MobileAppScreenshots />
      </div>
    </Section>
  );
}
