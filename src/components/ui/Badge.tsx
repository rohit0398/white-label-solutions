import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "cyan" | "emerald" | "amber" | "outline" | "live";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    outline: "bg-slate-900/60 text-slate-300 border-slate-700/60",
    live: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 flex items-center gap-1.5",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5 font-medium rounded-full",
    md: "text-xs px-2.5 py-1 font-semibold rounded-full tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
}
