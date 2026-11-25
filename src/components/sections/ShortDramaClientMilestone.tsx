"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMessages } from "@/components/site/useMessages";
import { englishMessage } from "@/lib/messages";

export function ShortDramaClientMilestone() {
  const t = useMessages();
  const artworkRef = useRef<HTMLAnchorElement>(null);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const artwork = artworkRef.current;
    if (!artwork || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.5) return;
      setHighlighted(true);
      observer.disconnect();
    }, { threshold: 0.5 });

    observer.observe(artwork);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="short-drama-client-milestone"
      className="border-t border-amber-500/20 bg-amber-500/[0.04] py-10 sm:py-14 lg:py-16"
    >
      <div className="wrap-wide grid items-center gap-5 sm:grid-cols-[minmax(0,1fr)_10rem] sm:gap-8 lg:grid-cols-[minmax(0,1fr)_12rem]">
        <div>
          <h2 id="short-drama-client-milestone" className="max-w-[26ch] text-[clamp(1.875rem,5vw,3rem)] leading-[1.1] font-semibold tracking-tight text-ink">
            {t(englishMessage("ShortDrama.clientMilestone.heading"))}
          </h2>
          <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-ink-2 sm:mt-4 sm:text-lg">
            {t(englishMessage("ShortDrama.clientMilestone.description"))}
          </p>
        </div>
        <a
          ref={artworkRef}
          href="https://play.google.com/store/apps/details?id=com.app.alright&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer nofollow"
          data-highlighted={highlighted}
          className="short-drama-milestone-tile group relative block w-full max-w-40 justify-self-start rounded-2xl border border-current/30 bg-current/5 p-1.5 text-amber-300 hover:border-current/60 focus-visible:border-current/60 sm:max-w-none [[data-theme=light]_&]:text-amber-700"
        >
          <Image
            src="/showcase/play-download-milestone.webp"
            alt=""
            width={198}
            height={98}
            loading="lazy"
            unoptimized
            className="block h-auto w-full rounded-xl"
          />
          <span className="flex items-center justify-center gap-1.5 px-1 py-2.5 text-center text-xs font-semibold group-hover:underline group-focus-visible:underline">
            {t(englishMessage("MobileAppScreenshots.view.on.google.play.5733cc6"))}
            <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
