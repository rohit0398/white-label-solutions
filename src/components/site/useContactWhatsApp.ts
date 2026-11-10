"use client";

import { usePathname } from "next/navigation";
import { useMessages } from "@/components/site/useMessages";
import { BRAND } from "@/lib/constants";
import { englishMessage } from "@/lib/messages";
import { shortDramaOfferForPath } from "@/lib/short-drama-offers";
import { ottOfferForPath } from "@/lib/ott-offers";
import { basePath } from "@/lib/site-config";

const ecommerceMessages: Partial<Record<string, string>> = {
  "/solutions/ecommerce": englishMessage("EcommerceContact.platform"),
  "/solutions/ecommerce-app-development": englishMessage("EcommerceContact.app"),
  "/solutions/ecommerce-website-development": englishMessage("EcommerceContact.web"),
};

export function useContactWhatsApp() {
  const pathname = usePathname();
  const translateCopy = useMessages();
  const offer = shortDramaOfferForPath(pathname);
  const ottOffer = ottOfferForPath(pathname);

  const messages = {
    platform: englishMessage("ShortDrama.top.platform.whatsapp"),
    app: englishMessage("ShortDrama.top.app.whatsapp"),
    web: englishMessage("ShortDrama.top.web.whatsapp"),
  };
  const ottMessages = {
    platform: englishMessage("OttOverview.platform.whatsapp"),
    app: englishMessage("OttOverview.app.whatsapp"),
    web: englishMessage("OttOverview.web.whatsapp"),
  };
  const message = offer ? messages[offer] : ottOffer ? ottMessages[ottOffer] : ecommerceMessages[basePath(pathname)];
  if (!message) return BRAND.contact.whatsappUrl;

  const url = new URL(BRAND.contact.whatsappUrl);
  url.searchParams.set("text", translateCopy(message));
  return url.toString();
}
