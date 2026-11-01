"use client";
import { useMessages } from "@/components/site/useMessages";

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
  const translateCopy = useMessages();

  const { openDemo } = useSite();
  return (
    <Button variant={variant} size={size} className={className} onClick={() => openDemo(tierId)}>
      {translateCopy(children)}
    </Button>
  );
}
