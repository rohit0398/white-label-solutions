import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** Small running number shown above the heading, e.g. "01". */
  index?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  wide?: boolean;
  /** Render children without a width wrapper (caller handles `wrap` / `wrap-wide`). */
  bare?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * One step of the page. Separated from the previous one by a hairline,
 * never by a card or background change.
 */
export function Section({ id, index, title, intro, wide, bare, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("border-t border-line py-20 sm:py-28", className)}>
      {(index || title || intro) && (
        <header className={wide ? "wrap-wide mb-12" : "wrap mb-12"}>
          {index && <p className="font-mono text-xs text-ink-3 mb-4">{index}</p>}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              {title}
            </h2>
          )}
          {intro && <p className="mt-4 text-lg text-ink-2 leading-relaxed">{intro}</p>}
        </header>
      )}
      {bare ? children : <div className={wide ? "wrap-wide" : "wrap"}>{children}</div>}
    </section>
  );
}
