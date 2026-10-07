import React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "link";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper rounded-md hover:bg-ink/90 hover:shadow-md active:bg-ink",
  secondary:
    "border border-line bg-paper text-ink rounded-md hover:border-ink hover:bg-wash hover:shadow-xs active:bg-line/40",
  link:
    "text-ink underline decoration-line underline-offset-4 hover:decoration-ink active:opacity-75 active:scale-100 hover:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "text-sm h-9 px-3.5",
  md: "text-[15px] h-11 px-5",
};

/** Shared class builder so links (`<a>`, `<Link>`) can look like buttons. */
export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], variant === "link" ? "" : sizes[size], className);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => (
    <button ref={ref} type={type} className={buttonClass(variant, size, className)} {...props} />
  )
);

Button.displayName = "Button";
