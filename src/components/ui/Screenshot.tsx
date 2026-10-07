import React from "react";
import { cn } from "@/lib/utils";

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  priority?: boolean;
  className?: string;
}

/** A real screenshot, shown plainly: thin border, small radius, no fake browser chrome. */
export function Screenshot({ src, alt, caption, priority, className }: ScreenshotProps) {
  return (
    <figure className={cn("space-y-3", className)}>
      <div className="overflow-hidden rounded-md border border-line bg-wash">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="block w-full h-auto aspect-[16/10] object-cover object-top"
        />
      </div>
      {caption && <figcaption className="text-sm text-ink-3">{caption}</figcaption>}
    </figure>
  );
}
