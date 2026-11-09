"use client";

import { useState } from "react";
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
  const t = useMessages();
  const [paused, setPaused] = useState(false);
  const items = [0, 1, 2, 3].flatMap((repeat) =>
    capabilities[offer].map((capability) => (
      <li key={`${repeat}-${capability}`} aria-hidden={repeat > 0 || undefined} className="flex items-center gap-2">
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-amber-500" />
        {t(capability)}
      </li>
    ))
  );

  return (
    <aside aria-label={t(englishMessage("ShortDrama.strip.label"))} className="border-t border-line bg-wash/60">
      <div className="wrap-wide flex items-center gap-3 py-2">
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="short-drama-capabilities-track" data-paused={paused}>
            <ul className="short-drama-capabilities-list">{items}</ul>
            <ul className="short-drama-capabilities-list" aria-hidden="true">{items}</ul>
          </div>
        </div>
        <button
          type="button"
          className="hidden min-h-8 min-w-24 shrink-0 cursor-pointer rounded-md border border-line px-2.5 text-xs font-medium text-ink hover:border-ink/50 motion-safe:lg:block"
          onClick={() => setPaused(!paused)}
        >
          {t(paused ? englishMessage("ShortDrama.strip.resume") : englishMessage("ShortDrama.strip.pause"))}
        </button>
      </div>
    </aside>
  );
}
