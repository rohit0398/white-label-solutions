"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ShoppingBag, Clapperboard, Tv, Sparkles } from "lucide-react";

export type BadgeCategory = "default" | "ecommerce" | "drama" | "ott";

export interface HeadingBadgeProps {
  children: React.ReactNode;
  category?: BadgeCategory;
  className?: string;
  showIcon?: boolean;
}

/**
 * Automatically infers badge category from text content if not explicitly specified.
 */
function inferCategory(text: string): BadgeCategory {
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
    lower.includes("svod") ||
    lower.includes("broadcast")
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

const CATEGORY_STYLES: Record<
  BadgeCategory,
  {
    container: string;
    beacon: string;
    icon: React.ReactElement;
  }
> = {
  ecommerce: {
    container:
      "border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-700 dark:text-emerald-300 shimmer-badge-ecommerce hover:border-emerald-500/60 hover:shadow-[0_0_20px_-3px_rgba(52,211,153,0.35)]",
    beacon: "bg-emerald-400",
    icon: <ShoppingBag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 animate-pulse-subtle" />,
  },
  drama: {
    container:
      "border-amber-500/30 bg-amber-500/[0.06] text-amber-700 dark:text-amber-300 shimmer-badge-drama hover:border-amber-500/60 hover:shadow-[0_0_20px_-3px_rgba(245,158,11,0.35)]",
    beacon: "bg-amber-400",
    icon: <Clapperboard className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 animate-pulse-subtle" />,
  },
  ott: {
    container:
      "border-cyan-500/30 bg-cyan-500/[0.06] text-cyan-700 dark:text-cyan-300 shimmer-badge-ott hover:border-cyan-500/60 hover:shadow-[0_0_20px_-3px_rgba(56,189,248,0.35)]",
    beacon: "bg-cyan-400",
    icon: <Tv className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 animate-pulse-subtle" />,
  },
  default: {
    container:
      "border-line bg-wash text-ink-2 shimmer-badge hover:border-ink/40 hover:text-ink hover:shadow-xs",
    beacon: "bg-accent",
    icon: <Sparkles className="w-3.5 h-3.5 text-accent shrink-0 animate-pulse-subtle" />,
  },
};

/**
 * Single, unified heading badge for page hero sections.
 * Displays domain icon, dual-ring live radar beacon, and existing badge text with category-tuned micro-animation.
 */
export function HeadingBadge({
  children,
  category,
  className,
  showIcon = true,
}: HeadingBadgeProps) {
  // Infer category from children if string and category not explicitly passed
  const activeCategory: BadgeCategory =
    category ||
    (typeof children === "string" ? inferCategory(children) : "default");

  const style = CATEGORY_STYLES[activeCategory];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono select-none cursor-default transition-all duration-300 hover:scale-[1.015] hover:-translate-y-0.5 active:scale-[0.99] backdrop-blur-md",
        style.container,
        className
      )}
    >
      {showIcon && style.icon}

      {/* Dual-ring active radar beacon */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className={cn(
            "animate-radar-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            style.beacon
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            style.beacon
          )}
        />
      </span>

      {/* Existing badge text */}
      <span className="truncate">{children}</span>
    </div>
  );
}
