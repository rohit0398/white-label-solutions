"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import { useMessages } from "@/components/site/useMessages";
import Image from "@/components/ui/LocalizedImage";

type GalleryImage = { src: string; alt: string };

interface ScreenshotGalleryProps {
  label: string;
  images: readonly GalleryImage[];
  previousLabel: string;
  nextLabel: string;
  portrait?: boolean;
}

const intervalMs = 9000;
const imageVisibility = 0.05;
const autoplayVisibility = 0.35;
const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
const arrowButton = "absolute top-1/2 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full";
const arrowIcon = "flex size-7 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-sm transition-colors hover:bg-paper";

function scrollToSlide(track: HTMLUListElement, index: number, smooth = true) {
  track.scrollTo({
    left: index * track.clientWidth,
    behavior: smooth && !window.matchMedia(reduceMotionQuery).matches ? "smooth" : "instant",
  });
}

function moveSlide(track: HTMLUListElement, step: -1 | 1, count: number) {
  if (!track.clientWidth) return;
  let index = Math.round(track.scrollLeft / track.clientWidth);

  if (index <= 0 || index > count) {
    index = index <= 0 ? count : 1;
    scrollToSlide(track, index, false);
  }

  scrollToSlide(track, index + step);
}

export function ScreenshotGallery({ label, images, previousLabel, nextLabel, portrait = false }: ScreenshotGalleryProps) {
  const translate = useMessages();
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<ReadonlySet<string>>(() => new Set());
  const [nativeLazyFallback, setNativeLazyFallback] = useState(false);
  const [inView, setInView] = useState(false);
  const [manual, setManual] = useState(false);
  const count = images.length;
  const looping = count > 1;
  const activeSlide = looping ? active + 1 : active;
  const slides = looping ? [images[count - 1], ...images, images[0]] : images;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (looping) scrollToSlide(track, 1, false);

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setNativeLazyFallback(true));
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(settleTimer.current);
      };
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleSources: string[] = [];
      for (const entry of entries) {
        if (entry.target === track) {
          setInView(entry.intersectionRatio >= autoplayVisibility);
          continue;
        }

        const src = (entry.target as HTMLElement).dataset.imageSrc;
        if (src && entry.intersectionRatio >= imageVisibility) {
          observer.unobserve(entry.target);
          visibleSources.push(src);
        }
      }
      if (visibleSources.length) setLoaded((sources) => new Set([...sources, ...visibleSources]));
    }, { threshold: [imageVisibility, autoplayVisibility] });

    observer.observe(track);
    Array.from(track.children).forEach((slide) => observer.observe(slide));
    return () => {
      observer.disconnect();
      clearTimeout(settleTimer.current);
    };
  }, [images, looping]);

  useEffect(() => {
    if (!inView || manual || !looping) return;
    const motion = window.matchMedia(reduceMotionQuery);
    const timer = window.setInterval(() => {
      const track = trackRef.current;
      const gallery = galleryRef.current;
      if (track && gallery && !motion.matches && !document.hidden && !gallery.matches(":hover, :focus-within")) {
        moveSlide(track, 1, count);
      }
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [count, inView, looping, manual]);

  function handleScroll(track: HTMLUListElement) {
    if (!track.clientWidth || !looping) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(index <= 0 ? count - 1 : index > count ? 0 : index - 1);

    clearTimeout(settleTimer.current);
    if (index > 0 && index <= count) return;

    // A duplicate at each end keeps the swipe continuous. Jump to its matching slide once scrolling settles.
    settleTimer.current = setTimeout(() => {
      const width = track.clientWidth;
      if (!width) return;
      if (track.scrollLeft < 2) scrollToSlide(track, count, false);
      else if (track.scrollLeft >= (count + 1) * width - 2) scrollToSlide(track, 1, false);
    }, 120);
  }

  function navigate(step: -1 | 1) {
    setManual(true);
    if (trackRef.current) moveSlide(trackRef.current, step, count);
  }

  function handleKeys(event: KeyboardEvent<HTMLUListElement>) {
    if (!looping || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const track = event.currentTarget;
    switch (event.key) {
      case "ArrowLeft":
        navigate(-1);
        break;
      case "ArrowRight":
        navigate(1);
        break;
      case "Home":
        setManual(true);
        scrollToSlide(track, 1, false);
        break;
      case "End":
        setManual(true);
        scrollToSlide(track, count, false);
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  function handleTouchMove(event: TouchEvent<HTMLUListElement>) {
    const start = touchStart.current;
    const touch = event.touches[0];
    if (!start || !touch) return;

    const dx = Math.abs(touch.clientX - start.x);
    const dy = Math.abs(touch.clientY - start.y);
    if (dx > 10 && dx > dy) setManual(true);
  }

  const sizes = portrait
    ? "(min-width: 1024px) 224px, 192px"
    : "(min-width: 1088px) 570px, (min-width: 1024px) 55vw, calc(100vw - 48px)";

  return (
    <div
      ref={galleryRef}
      role="group"
      aria-label={translate(label)}
      className={portrait ? "relative mx-auto w-full max-w-48 lg:max-w-56" : "relative w-full"}
    >
      <ul
        ref={trackRef}
        tabIndex={looping ? 0 : undefined}
        onKeyDown={handleKeys}
        onScroll={(event) => handleScroll(event.currentTarget)}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
        }}
        onTouchMove={handleTouchMove}
        onWheel={(event) => {
          if (event.deltaX || event.shiftKey) setManual(true);
        }}
        className="screenshot-gallery-track flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-lg border border-line bg-wash"
      >
        {slides.map(({ src, alt }, index) => {
          const duplicate = looping && (index === 0 || index === count + 1);
          return (
            <li
              key={index + "-" + src}
              data-image-src={src}
              aria-hidden={duplicate || index !== activeSlide || undefined}
              className={`relative w-full shrink-0 snap-start ${portrait ? "aspect-[328/718]" : "aspect-[1280/633]"}`}
            >
              {(nativeLazyFallback || loaded.has(src)) && (
                <Image src={src} alt={duplicate ? "" : alt} fill sizes={sizes} loading="lazy" draggable={false} className="object-contain" />
              )}
            </li>
          );
        })}
      </ul>
      {looping && (
        <>
          <button type="button" className={`${arrowButton} left-0`} onClick={() => navigate(-1)} aria-label={translate(previousLabel)}>
            <span className={arrowIcon}><ChevronLeft aria-hidden="true" className="size-4" /></span>
          </button>
          <button type="button" className={`${arrowButton} right-0`} onClick={() => navigate(1)} aria-label={translate(nextLabel)}>
            <span className={arrowIcon}><ChevronRight aria-hidden="true" className="size-4" /></span>
          </button>
          <span aria-live={manual ? "polite" : "off"} className="sr-only">{translate(images[active]?.alt ?? "")}</span>
        </>
      )}
    </div>
  );
}

