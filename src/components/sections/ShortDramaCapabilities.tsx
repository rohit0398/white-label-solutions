"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { useMessages } from "@/components/site/useMessages";
import { englishMessage } from "@/lib/messages";
import type { ShortDramaOffer } from "@/lib/short-drama-offers";

const capabilities = {
  platform: [
    englishMessage("ShortDrama.strip.platform.publish"),
    englishMessage("ShortDrama.strip.platform.access"),
    englishMessage("ShortDrama.strip.platform.deploy"),
  ],
  app: [
    englishMessage("ShortDrama.strip.app.swipe"),
    englishMessage("ShortDrama.strip.app.alerts"),
    englishMessage("ShortDrama.strip.app.publish"),
  ],
  web: [
    englishMessage("ShortDrama.strip.web.watch"),
    englishMessage("ShortDrama.strip.web.share"),
    englishMessage("ShortDrama.strip.web.checkout"),
  ],
};

export function ShortDramaCapabilities({ offer }: { offer: ShortDramaOffer }) {
  return <StreamingCapabilities capabilities={capabilities[offer]} label={englishMessage("ShortDrama.strip.label")} />;
}

export function StreamingCapabilities({ capabilities, label, theme = "drama" }: {
  capabilities: readonly string[];
  label: string;
  theme?: "drama" | "ott";
}) {
  const t = useMessages();
  const [paused, setPaused] = useState(false);
  const playbackLabel = t(paused ? englishMessage("ShortDrama.strip.resume") : englishMessage("ShortDrama.strip.pause"));
  const items = [0, 1, 2, 3].flatMap((repeat) =>
    capabilities.map((capability) => (
      <li key={`${repeat}-${capability}`} aria-hidden={repeat > 0 || undefined} className="flex items-center gap-2">
        <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${theme === "ott" ? "bg-cyan-500" : "bg-amber-500"}`} />
        {t(capability)}
      </li>
    ))
  );

  return (
    <aside aria-label={t(label)} className="border-t border-line bg-wash/60">
      <div className="wrap-wide flex items-center gap-3 py-2">
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="motion-safe:capabilities-motion" data-paused={paused}>
            <ul className="short-drama-capabilities-list">{items}</ul>
            <ul className="short-drama-capabilities-list" aria-hidden="true">{items}</ul>
          </div>
        </div>
        <button
          type="button"
          aria-label={playbackLabel}
          className="hidden size-11 shrink-0 cursor-pointer items-center justify-center rounded-md border border-line text-xs font-medium text-ink hover:border-ink/50 motion-safe:flex lg:h-8 lg:min-w-24 lg:px-2.5"
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? <Play className="size-3.5 lg:hidden" aria-hidden="true" /> : <Pause className="size-3.5 lg:hidden" aria-hidden="true" />}
          <span className="hidden lg:inline">{playbackLabel}</span>
        </button>
      </div>
    </aside>
  );
}
