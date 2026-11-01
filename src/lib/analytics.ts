/** Explicit destinations keep organic lead reporting separate from Ads conversions. */
export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18503943905";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || (GOOGLE_TAG_ID.startsWith("G-") ? GOOGLE_TAG_ID : undefined);
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || (GOOGLE_TAG_ID.startsWith("AW-") ? GOOGLE_TAG_ID : undefined);
const ADS_DESTINATION = ADS_ID && process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
  ? ADS_ID + "/" + process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
  : undefined;
type EventParams = Record<string, string | number | boolean | undefined>;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (GA_ID) window.gtag("event", eventName, { ...params, send_to: GA_ID });
}
export function trackLeadSubmission(packageName: string) {
  // A sales inquiry has no realized purchase value. Keep submitted form PII out of analytics.
  trackEvent("generate_lead", { package_id: packageName });
  if (ADS_DESTINATION && typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: ADS_DESTINATION });
  }
}
export function trackWhatsAppClick(location: string = "Direct") {
  trackEvent("contact", { contact_method: "whatsapp", placement: location });
}
export function updateGoogleConsent(granted: boolean) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const state = granted ? "granted" : "denied";
    window.gtag("consent", "update", { ad_storage: state, ad_user_data: state, ad_personalization: state, analytics_storage: state });
  }
}
