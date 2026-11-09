"use client";

import { usePathname } from "next/navigation";
import { useMessages } from "@/components/site/useMessages";
import { BRAND } from "@/lib/constants";
import { englishMessage } from "@/lib/messages";
import { shortDramaOfferForPath } from "@/lib/short-drama-offers";

export function useContactWhatsApp() {
  const pathname = usePathname();
  const translateCopy = useMessages();
  const offer = shortDramaOfferForPath(pathname);
  if (!offer) return BRAND.contact.whatsappUrl;

  const messages = {
    platform: englishMessage("ShortDrama.top.platform.whatsapp"),
    app: englishMessage("ShortDrama.top.app.whatsapp"),
    web: englishMessage("ShortDrama.top.web.whatsapp"),
  };
  const url = new URL(BRAND.contact.whatsappUrl);
  url.searchParams.set("text", translateCopy(messages[offer]));
  return url.toString();
}
