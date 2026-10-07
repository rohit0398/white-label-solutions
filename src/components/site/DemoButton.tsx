"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/components/site/SiteProvider";

interface DemoButtonProps {
  tierId?: string;
  variant?: "primary" | "secondary" | "link";
  size?: "sm" | "md";
  className?: string;
  children?: React.ReactNode;
}

/** Opens the demo request dialog. Lets server components include the CTA. */
export function DemoButton({
  tierId,
  variant = "primary",
  size = "md",
  className,
  children = "Book a demo",
}: DemoButtonProps) {
  const { openDemo } = useSite();
  return (
    <Button variant={variant} size={size} className={className} onClick={() => openDemo(tierId)}>
      {children}
    </Button>
  );
}
