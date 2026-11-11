"use client";
import { useMessages } from "@/components/site/useMessages";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/components/site/SiteProvider";
import { trackEvent } from "@/lib/analytics";

interface DemoButtonProps {
  tierId?: string;
  variant?: "primary" | "secondary" | "link";
  size?: "sm" | "md";
  className?: string;
  children?: React.ReactNode;
  trackingPlacement?: string;
}

/** Opens the demo request dialog. Lets server components include the CTA. */
export function DemoButton({
  tierId,
  variant = "primary",
  size = "md",
  className,
  children = "Book a demo",
  trackingPlacement,
}: DemoButtonProps) {
  const translateCopy = useMessages();

  const { openDemo } = useSite();
  return (
    <Button variant={variant} size={size} className={className} onClick={() => {
      openDemo(tierId);
      if (trackingPlacement) {
        trackEvent("walkthrough_click", { placement: trackingPlacement, package_id: tierId });
      }
    }}>
      {translateCopy(children)}
    </Button>
  );
}
