"use client";

import { Clock3 } from "lucide-react";
import { useMessages } from "@/components/site/useMessages";
import { englishMessage } from "@/lib/messages";
import { cn } from "@/lib/utils";

export function LaunchTimeline({ className }: { className?: string }) {
  const translate = useMessages();

  return (
    <p className={cn("flex items-center gap-2 text-sm font-semibold leading-relaxed text-accent sm:text-base", className)}>
      <Clock3 aria-hidden="true" className="size-4 shrink-0" />
      <span>{translate(englishMessage("LaunchTimeline.label"))}</span>
    </p>
  );
}
