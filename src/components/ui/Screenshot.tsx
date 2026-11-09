"use client";
import { useMessages } from "@/components/site/useMessages";
import Image from "@/components/ui/LocalizedImage";
import { imageDimensions } from "@/lib/image-dimensions";
import React from "react";
import { cn } from "@/lib/utils";

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/** A real screenshot, shown plainly: thin border, small radius, no fake browser chrome. */
export function Screenshot({ src, alt, caption, priority, sizes = "(max-width: 768px) 100vw, 1040px", className }: ScreenshotProps) {
  const translateCopy = useMessages();

  return (
    <figure className={cn("space-y-3", className)}>
      <div className="overflow-hidden rounded-md border border-line bg-wash">
        <Image
          src={src}
          {...imageDimensions(src)}
          sizes={sizes}
          alt={translateCopy(alt)}
          loading={priority ? "eager" : "lazy"}
          className="block w-full h-auto"
        />
      </div>
      {caption && <figcaption className="text-sm text-ink-3">{translateCopy(caption)}</figcaption>}
    </figure>
  );
}
