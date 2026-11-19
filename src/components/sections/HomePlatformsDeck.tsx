"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { DemoButton } from "@/components/site/DemoButton";
import { useSite } from "@/components/site/SiteProvider";
import { useMessages } from "@/components/site/useMessages";
import { homePlatforms } from "@/components/sections/home-platforms";
import Link from "@/components/ui/LocalizedLink";
import { Screenshot } from "@/components/ui/Screenshot";
import { Section } from "@/components/ui/Section";
import { trackEvent } from "@/lib/analytics";
import { englishMessage } from "@/lib/messages";
import { displayPackagePrice } from "@/lib/pricing-catalog";

const rotationInterval = 60_000;
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(onChange: () => void) {
  const motion = window.matchMedia(reducedMotionQuery);
  motion.addEventListener("change", onChange);
  return () => motion.removeEventListener("change", onChange);
}
function readReducedMotion() { return window.matchMedia(reducedMotionQuery).matches; }
function serverReducedMotion() { return false; }

export function HomePlatformsDeck() {
  const translate = useMessages();
  const { currency, language } = useSite();
  const [active, setActive] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, readReducedMotion, serverReducedMotion);
  const [rotationPreference, setRotationPreference] = useState<boolean | null>(null);
  const rotationEnabled = rotationPreference ?? !reducedMotion;
  const { family, title, preview, demoTier, app, web } = homePlatforms[active];
  const options = [
    { ...app, label: englishMessage("HomeProof.appsOnly") },
    { ...web, label: englishMessage("HomeProof.websiteOnly") },
  ];

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck || !rotationEnabled) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let inView = !("IntersectionObserver" in window);
    let hovered = window.matchMedia("(hover: hover)").matches && deck.matches(":hover");
    let focused = deck.contains(document.activeElement);
    function schedule() {
      clearTimeout(timer);
      if (!inView || hovered || focused || document.hidden) return;
      timer = setTimeout(() => setActive(index => (index + 1) % homePlatforms.length), rotationInterval);
    }
    function pointerEnter(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      hovered = true;
      schedule();
    }
    function pointerLeave() { hovered = false; schedule(); }
    function focusIn() { focused = true; schedule(); }
    function focusOut(event: FocusEvent) {
      focused = event.relatedTarget instanceof Node && deck!.contains(event.relatedTarget);
      schedule();
    }
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
        inView = entry.intersectionRatio >= 0.25;
        schedule();
      }, { threshold: 0.25 })
      : null;
    observer?.observe(deck);
    deck.addEventListener("pointerenter", pointerEnter);
    deck.addEventListener("pointerleave", pointerLeave);
    deck.addEventListener("focusin", focusIn);
    deck.addEventListener("focusout", focusOut);
    document.addEventListener("visibilitychange", schedule);
    schedule();
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      deck.removeEventListener("pointerenter", pointerEnter);
      deck.removeEventListener("pointerleave", pointerLeave);
      deck.removeEventListener("focusin", focusIn);
      deck.removeEventListener("focusout", focusOut);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [active, rotationEnabled]);

  return (
    <Section id="platforms" title={englishMessage("HomeProof.title")} wide>
      <div ref={deckRef}>
        <div className="flex flex-wrap gap-2 border-b border-line pb-4" role="group" aria-label={translate(englishMessage("HomeProof.title"))}>
          {homePlatforms.map(({ family, title, icon: Icon }, index) => (
            <button
              key={family}
              type="button"
              aria-pressed={active === index}
              aria-controls="home-platform-preview"
              onClick={() => {
                setActive(index);
                trackEvent("select_platform", { platform: family, placement: "HomePlatformsDeck" });
              }}
              className={active === index
                ? "inline-flex min-h-10 items-center gap-2 rounded-md border border-ink bg-ink px-3 py-2 text-sm font-medium text-paper"
                : "inline-flex min-h-10 items-center gap-2 rounded-md border border-line bg-wash px-3 py-2 text-sm text-ink-2 hover:text-ink"}
            >
              <Icon aria-hidden="true" className="size-4 shrink-0" />
              {translate(title)}
            </button>
          ))}
          <button
            type="button"
            aria-controls="home-platform-preview"
            aria-label={translate(englishMessage(rotationEnabled ? "HomeProof.pauseRotation" : "HomeProof.resumeRotation"))}
            title={translate(englishMessage(rotationEnabled ? "HomeProof.pauseRotation" : "HomeProof.resumeRotation"))}
            onClick={() => setRotationPreference(!rotationEnabled)}
            className="ml-auto grid size-10 shrink-0 place-items-center rounded-md border border-line text-ink-3 transition-colors hover:bg-wash hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {rotationEnabled ? <Pause aria-hidden="true" className="size-3.5" /> : <Play aria-hidden="true" className="size-3.5" />}
          </button>
        </div>

        <div key={family} id="home-platform-preview" className="home-platform-reveal mt-7 grid gap-6 lg:min-h-[22rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{translate(title)}</h3>
            <p className="text-sm leading-relaxed text-ink-2 sm:text-base">{translate(preview.note)}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <DemoButton tierId={demoTier}>{englishMessage("ShortDrama.top.walkthrough")}</DemoButton>
              {preview.href.startsWith("/") ? (
                <Link href={preview.href} className="text-sm underline underline-offset-4">{preview.action}</Link>
              ) : (
                <a
                  href={preview.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("view_product_example", { platform: family, placement: "HomePlatformsDeck" })}
                  className="text-sm underline underline-offset-4"
                >
                  {translate(preview.action)}
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm text-ink-2">
              {options.map(({ href, label, price }) => (
                <Link key={href} href={href} className="underline underline-offset-4">
                  {label} · {displayPackagePrice(price, language, currency)}
                </Link>
              ))}
            </div>
          </div>
          <Screenshot
            src={preview.src}
            alt={preview.alt}
            sizes="(min-width: 1088px) 550px, (min-width: 1024px) 53vw, calc(100vw - 48px)"
            className="home-platform-shot [&>div]:aspect-video [&_img]:h-full [&_img]:object-contain"
          />
        </div>
      </div>
    </Section>
  );
}
