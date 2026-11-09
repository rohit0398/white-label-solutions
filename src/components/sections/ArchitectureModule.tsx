"use client";

import { ArrowRight, Check } from "lucide-react";
import { useMessages } from "@/components/site/useMessages";
import Link from "@/components/ui/LocalizedLink";
import { ScreenshotGallery } from "@/components/ui/ScreenshotGallery";
import { englishMessage } from "@/lib/messages";
import { cn } from "@/lib/utils";

export interface ArchitectureModuleContent {
  title: string;
  intro: string;
  points: readonly string[];
  images: readonly { src: string; alt: string }[];
  portrait?: boolean;
  galleryLabel?: string;
  imageNote?: string;
  link?: { href: string; label: string };
}

interface ArchitectureModuleProps extends ArchitectureModuleContent {
  id?: string;
  heading?: "h2" | "h3";
}

export function ArchitectureModule({
  id, title, intro, points, images, portrait, galleryLabel, imageNote, link, heading: Heading = "h3",
}: ArchitectureModuleProps) {
  const translate = useMessages();

  return (
    <div id={id} className={cn(
      "grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:grid-rows-2 lg:gap-x-12 lg:gap-y-4",
      Heading === "h3" && "border-t border-line pt-7",
    )}>
      <div className="max-w-xl space-y-2 lg:col-start-1 lg:row-start-1 lg:self-end">
        <Heading className={cn(
          "font-semibold leading-tight tracking-tight text-ink",
          Heading === "h2" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
        )}>{translate(title)}</Heading>
        <p className="text-sm leading-relaxed text-ink-2 sm:text-base">{translate(intro)}</p>
        {imageNote && <p className="text-xs leading-relaxed text-ink-2">{translate(imageNote)}</p>}
      </div>

      <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
        <ScreenshotGallery
          label={galleryLabel ?? imageNote ?? title}
          images={images}
          portrait={portrait}
          previousLabel={englishMessage("ShortDrama.architecture.gallery.previous")}
          nextLabel={englishMessage("ShortDrama.architecture.gallery.next")}
        />
      </div>

      <div className="lg:col-start-1 lg:row-start-2">
        <ul className="space-y-2.5 text-sm leading-relaxed text-ink-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{translate(point)}</span>
            </li>
          ))}
        </ul>
        {link && (
          <Link href={link.href} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline">
            {link.label}
            <ArrowRight aria-hidden="true" className="size-3.5 shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
