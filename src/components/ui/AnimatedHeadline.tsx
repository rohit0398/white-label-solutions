import React from "react";
import { cn } from "@/lib/utils";

export type HeadlineVariant = "default" | "ecommerce" | "drama" | "ott";

interface AnimatedHeadlineProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  variant?: HeadlineVariant;
  withAmbientAura?: boolean;
}

/**
 * Automatically infers headline variant from text content if not explicitly provided.
 */
function inferHeadlineVariant(text: string): HeadlineVariant {
  const lower = text.toLowerCase();
  if (
    lower.includes("drama") ||
    lower.includes("reelshort") ||
    lower.includes("vertical") ||
    lower.includes("dramabox")
  ) {
    return "drama";
  }
  if (
    lower.includes("ott") ||
    lower.includes("streaming") ||
    lower.includes("cinema") ||
    lower.includes("cinematic") ||
    lower.includes("svod")
  ) {
    return "ott";
  }
  if (
    lower.includes("ecommerce") ||
    lower.includes("e-commerce") ||
    lower.includes("store") ||
    lower.includes("shop") ||
    lower.includes("retail") ||
    lower.includes("shopify")
  ) {
    return "ecommerce";
  }
  return "default";
}

function getShimmerClass(variant: HeadlineVariant): string {
  switch (variant) {
    case "ecommerce":
      return "text-shimmer-ecommerce";
    case "drama":
      return "text-shimmer-drama";
    case "ott":
      return "text-shimmer-ott";
    case "default":
    default:
      return "text-shimmer-default";
  }
}

function getAuraGradient(variant: HeadlineVariant): string {
  switch (variant) {
    case "ecommerce":
      return "from-emerald-500/15 via-emerald-400/5 to-transparent";
    case "drama":
      return "from-amber-500/15 via-rose-500/5 to-transparent";
    case "ott":
      return "from-cyan-500/15 via-indigo-500/5 to-transparent";
    case "default":
    default:
      return "from-accent/10 via-ink/5 to-transparent";
  }
}

/**
 * Renders a high-impact headline with staggered kinetic entrance (slide + blur clear),
 * domain-tailored continuous radiant gradient shimmer, and soft ambient aura backlight.
 */
export function AnimatedHeadline({
  children,
  className,
  as: Component = "h1",
  variant,
  withAmbientAura = true,
}: AnimatedHeadlineProps) {
  // If children is not a plain string, render as-is inside the tag
  if (typeof children !== "string") {
    return <Component className={className}>{children}</Component>;
  }

  const text = children.trim();
  const activeVariant = variant || inferHeadlineVariant(text);
  const shimmerClass = getShimmerClass(activeVariant);
  const auraGradient = getAuraGradient(activeVariant);

  const auraElement = withAmbientAura ? (
    <span
      className={cn(
        "pointer-events-none absolute -top-10 -left-6 -z-10 w-72 sm:w-[480px] h-28 sm:h-36 rounded-full blur-3xl opacity-60 bg-gradient-to-r transition-all duration-700",
        auraGradient
      )}
      aria-hidden="true"
    />
  ) : null;

  // Scenario 1: Text contains two distinct sentences separated by period
  if (text.includes(". ") && !text.endsWith("...")) {
    const periodIdx = text.indexOf(". ");
    const part1 = text.slice(0, periodIdx + 1).trim();
    const part2 = text.slice(periodIdx + 2).trim();

    return (
      <Component className={cn("relative", className)}>
        {auraElement}
        <span className="inline-block animate-hero-title-1">{part1}</span>{" "}
        <span className={cn("inline-block animate-hero-title-2", shimmerClass)}>
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
      <Component className={cn("relative", className)}>
        {auraElement}
        <span className="inline-block animate-hero-title-1">{part1}</span>{" "}
        <span className={cn("inline-block animate-hero-title-2", shimmerClass)}>
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
      <Component className={cn("relative", className)}>
        {auraElement}
        <span className={cn("inline-block animate-hero-title-1", shimmerClass)}>
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
    <Component className={cn("relative", className)}>
      {auraElement}
      <span className="inline-block animate-hero-title-1">{part1}</span>{" "}
      <span className={cn("inline-block animate-hero-title-2", shimmerClass)}>
        {part2}
      </span>
    </Component>
  );
}

