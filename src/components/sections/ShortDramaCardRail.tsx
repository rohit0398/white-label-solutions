"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useMessages } from "@/components/site/useMessages";
import { englishMessage } from "@/lib/messages";

const autoPlayQuery = "(width < 48rem) and (prefers-reduced-motion: no-preference)";
const controlClass = "size-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-ink-3 transition-colors hover:bg-paper hover:text-ink focus-visible:text-ink";

function moveCard(track: HTMLUListElement, direction: -1 | 1) {
  const end = track.scrollWidth - track.clientWidth;
  if (end <= 0) return;

  const positions = Array.from(track.children, (card) => Math.min(end, (card as HTMLElement).offsetLeft));
  const current = track.scrollLeft;
  const next = direction === 1
    ? positions.find((position) => position > current + 2)
    : positions.reverse().find((position) => position < current - 2);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  track.scrollTo({
    left: next ?? (direction === 1 ? 0 : end),
    behavior: reduceMotion || next === undefined ? "instant" : "smooth",
  });
}

export function ShortDramaCardRail({
  label,
  desktopColumns,
  children,
}: {
  label: string;
  desktopColumns: string;
  children: ReactNode;
}) {
  const t = useMessages();
  const trackRef = useRef<HTMLUListElement>(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const playbackLabel = t(paused ? englishMessage("ShortDrama.strip.resume") : englishMessage("ShortDrama.strip.pause"));

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.intersectionRatio >= 0.5), { threshold: 0.5 });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused || !inView) return;

    const autoplay = window.matchMedia(autoPlayQuery);
    const timer = window.setInterval(() => {
      if (autoplay.matches && !document.hidden) moveCard(track, 1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [inView, paused]);

  function navigate(direction: -1 | 1) {
    setPaused(true);
    if (trackRef.current) moveCard(trackRef.current, direction);
  }

  return (
    <div role="group" aria-label={label}>
      <ul
        ref={trackRef}
        onPointerDown={() => setPaused(true)}
        className={`relative grid auto-cols-[82%] grid-flow-col gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [&>li]:snap-start md:auto-cols-auto md:grid-flow-row md:overflow-visible md:snap-none md:pb-0 ${desktopColumns}`}
      >
        {children}
      </ul>
      <div className="mt-1 flex items-center justify-end md:hidden">
        <button
          type="button"
          className={`hidden motion-safe:inline-flex ${controlClass}`}
          aria-label={playbackLabel}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play className="size-3.5" aria-hidden="true" /> : <Pause className="size-3.5" aria-hidden="true" />}
        </button>
        <button type="button" className={`inline-flex ${controlClass}`} aria-label={t(englishMessage("ShortDrama.rail.previous"))} onClick={() => navigate(-1)}>
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
        <button type="button" className={`inline-flex ${controlClass}`} aria-label={t(englishMessage("ShortDrama.rail.next"))} onClick={() => navigate(1)}>
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
