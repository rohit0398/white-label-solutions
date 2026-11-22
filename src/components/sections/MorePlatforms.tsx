"use client";

import { ArrowRight, Building2, CalendarDays, CarFront, Sun, Utensils } from "lucide-react";
import Image from "@/components/ui/LocalizedImage";
import Link from "@/components/ui/LocalizedLink";
import { Section } from "@/components/ui/Section";
import { ShortDramaCardRail } from "@/components/sections/ShortDramaCardRail";
import { useMessages } from "@/components/site/useMessages";
import { ADDITIONAL_PLATFORM_PATHS, ADDITIONAL_PLATFORM_SUMMARIES, OTHER_PLATFORMS_HREF } from "@/lib/additional-platform-paths";
import { englishMessage } from "@/lib/messages";

const icons = { "taxi-booking": CarFront, "food-delivery": Utensils, "appointment-booking": CalendarDays, "real-estate": Building2, "solar-crm": Sun };

export function PlatformCards({ screenshots = false }: { screenshots?: boolean }) {
  const t = useMessages();
  const cards = ADDITIONAL_PLATFORM_SUMMARIES.map(platform => {
    const Icon = icons[platform.id];
    return (
      <li key={platform.id}>
        <Link href={ADDITIONAL_PLATFORM_PATHS[platform.id]} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-wash/30 transition-colors hover:border-ink-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          {screenshots && (
            <div className="relative aspect-video overflow-hidden border-b border-line bg-wash">
              <Image src={platform.image} alt={t(platform.title)} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" loading="lazy" className="object-contain" />
            </div>
          )}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <Icon aria-hidden="true" className="mb-4 size-5 text-accent" />
            <h3 className="text-lg font-semibold tracking-tight">{t(platform.title)}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{t(platform.summary)}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-ink-3">{t(englishMessage("MorePlatforms.price"))}</span>
              <span className="inline-flex items-center gap-1 font-medium">
                {t(englishMessage("MorePlatforms.details"))}
                <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </li>
    );
  });
  return screenshots ? (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cards}</ul>
  ) : (
    <ShortDramaCardRail label={t(englishMessage("MorePlatforms.title"))} desktopColumns="md:grid-cols-2 lg:grid-cols-3">{cards}</ShortDramaCardRail>
  );
}

export function MorePlatforms() {
  const t = useMessages();
  return (
    <Section id="more-platforms" title={englishMessage("MorePlatforms.title")} intro={englishMessage("MorePlatforms.intro")} wide>
      <PlatformCards />
      <Link href={OTHER_PLATFORMS_HREF} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink">
        {t(englishMessage("MorePlatforms.view"))}<ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </Section>
  );
}
