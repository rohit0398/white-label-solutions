import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glow" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-xl active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 border border-blue-500/40",
      glow: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 border border-blue-400/30 hover:shadow-cyan-500/25",
      secondary:
        "bg-slate-800/80 hover:bg-slate-700 text-slate-100 border border-slate-700/80 hover:border-slate-600",
      outline:
        "bg-transparent hover:bg-slate-800/60 text-slate-200 border border-slate-700/80 hover:border-slate-500",
      ghost: "bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
