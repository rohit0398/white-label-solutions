"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

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
  title = englishMessage("AppShowcase.native.ios.android.shopping.apps.e2cd3e2"),
  intro = englishMessage("AppShowcase.built.from.a.single.high.performance.flutter.530dfa1"),
}: AppShowcaseProps = {}) {
  const translateCopy = useMessages();

  const highlights = [
    {
      icon: <Zap className="h-4 w-4 text-accent" />,
      label: englishMessage("AppShowcase.engine.performance.e89d531"),
      value: englishMessage("AppShowcase.flutter.3.x.native.binaries.60fps.scrolling.0684135"),
    },
    {
      icon: <Bell className="h-4 w-4 text-accent" />,
      label: englishMessage("AppShowcase.push.notifications.b8fe58f"),
      value: englishMessage("AppShowcase.automated.fcm.apns.alerts.for.order.dispatch.1995924"),
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-accent" />,
      label: englishMessage("AppShowcase.store.ownership.3fc8d98"),
      value: englishMessage("AppShowcase.published.directly.to.your.google.play.apple.818a3ee"),
    },
  ];

  return (
    <Section id={id} index={index} title={translateCopy(title)} intro={intro} bare>
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
                  {translateCopy(h.label)}
                </span>
              </div>
              <p className="text-sm font-medium text-ink leading-relaxed">{translateCopy(h.value)}</p>
            </div>
          ))}
        </div>

        {/* Live Published Store Links */}
        <p className="mt-4 text-xs text-ink-3">{translateCopy(englishMessage("AppShowcase.live.published.apps.7838a8d"))}{" "}
          {translateCopy(appProjects.map((p, i) => (
            <React.Fragment key={p.id}>
              {i > 0 && ", "}
              <a
                href={p.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink font-medium"
              >
                {translateCopy(p.title)}
              </a>
            </React.Fragment>
          )))}{" "}{translateCopy(englishMessage("AppShowcase.on.google.play.7d5ff20"))}</p>
      </div>

      {/* Real Mobile App Screenshots Showcase */}
      <div className="wrap-wide">
        <MobileAppScreenshots />
      </div>
    </Section>
  );
}
