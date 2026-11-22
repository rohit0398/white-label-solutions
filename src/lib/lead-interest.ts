import { additionalInquiryForPath } from "@/lib/additional-platform-paths";
import { SHORT_DRAMA_PACKAGES, shortDramaOfferForPath } from "@/lib/short-drama-offers";
import { OTT_PACKAGES, ottOfferForPath } from "@/lib/ott-offers";
import { ECOMMERCE_PACKAGES, ecommerceOfferForPath } from "@/lib/ecommerce-offers";

/** Keep explicit CTA choices; infer a platform for generic navigation CTAs. */
export function resolveInitialPackage(tierId?: string, pathname?: string): string {
  if (tierId && tierId !== "launch") {
    if (tierId === "source-code-license") return "source-code";
    if (tierId === "dedicated-support") return "developer-time";
    if (tierId === "short-drama-base") return SHORT_DRAMA_PACKAGES.platform;
    if (tierId === "ott-streaming") return OTT_PACKAGES.platform;
    return tierId;
  }
  const path = (pathname || "").toLowerCase();
  const additional = additionalInquiryForPath(path);
  if (additional) return additional;
  const offer = shortDramaOfferForPath(path);
  if (offer) return SHORT_DRAMA_PACKAGES[offer];
  const ottOffer = ottOfferForPath(path);
  if (ottOffer) return OTT_PACKAGES[ottOffer];
  const ecommerceOffer = ecommerceOfferForPath(path);
  if (ecommerceOffer) return ECOMMERCE_PACKAGES[ecommerceOffer];
  if (path.includes("short-drama")) return SHORT_DRAMA_PACKAGES.platform;
  if (path.includes("ott") || path.includes("streaming")) return OTT_PACKAGES.platform;
  if (path.includes("ecommerce") || path.includes("shopify")) return "ecommerce";
  if (path.includes("source-code")) return "source-code";
  return tierId || "ecommerce";
}
