"use client";
import { useMemo } from "react";
import { useSite } from "@/components/site/SiteProvider";
import { createLocalizer } from "@/lib/messages";

export function useMessages() {
  const { language, messages } = useSite();
  return useMemo(() => createLocalizer(language, messages), [language, messages]);
}
