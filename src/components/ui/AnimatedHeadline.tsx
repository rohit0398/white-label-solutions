import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

/**
 * Renders a high-impact headline with staggered kinetic entrance (slide + blur clear)
 * and continuous radiant gradient shimmer across the accent phrase.
 */
export function AnimatedHeadline({
  children,
  className,
  as: Component = "h1",
}: AnimatedHeadlineProps) {
  // If children is not a plain string, render as-is inside the tag
  if (typeof children !== "string") {
    return <Component className={className}>{children}</Component>;
  }

  const text = children.trim();

  // Scenario 1: Text contains two distinct sentences separated by period
  if (text.includes(". ") && !text.endsWith("...")) {
    const periodIdx = text.indexOf(". ");
    const part1 = text.slice(0, periodIdx + 1).trim();
    const part2 = text.slice(periodIdx + 2).trim();

    return (
      <Component className={className}>
        <span className="inline-block animate-hero-title-1">{part1}</span>{" "}
        <span className="inline-block animate-hero-title-2 text-gradient-shimmer">
          {part2}
        </span>
      </Component>
    );
  }

  // Scenario 1b: Text contains title & subtitle separated by colon
  if (text.includes(": ")) {
    const colonIdx = text.indexOf(": ");
    const part1 = text.slice(0, colonIdx + 1).trim();
    const part2 = text.slice(colonIdx + 2).trim();

    return (
      <Component className={className}>
        <span className="inline-block animate-hero-title-1">{part1}</span>{" "}
        <span className="inline-block animate-hero-title-2 text-gradient-shimmer">
          {part2}
        </span>
      </Component>
    );
  }

  // Scenario 2: Single phrase. Split into leading subject and radiant tail phrase
  const words = text.split(/\s+/);

  if (words.length <= 2) {
    // 1-2 words: entire headline shimmers
    return (
      <Component className={className}>
        <span className="inline-block animate-hero-title-1 text-gradient-shimmer">
          {text}
        </span>
      </Component>
    );
  }

  // Split words: first half enters first, second half enters with continuous radiant shimmer
  const splitPoint = Math.ceil(words.length / 2);
  const part1 = words.slice(0, splitPoint).join(" ");
  const part2 = words.slice(splitPoint).join(" ");

  return (
    <Component className={className}>
      <span className="inline-block animate-hero-title-1">{part1}</span>{" "}
      <span className="inline-block animate-hero-title-2 text-gradient-shimmer">
        {part2}
      </span>
    </Component>
  );
}
