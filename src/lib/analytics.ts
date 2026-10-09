/**
 * Analytics and Conversion Tracking for Google Ads & Analytics
 * Google Tag: AW-18503943905 (White Label Solutions - ML)
 */

export const GOOGLE_TAG_ID =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ||
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ||
  "AW-18503943905";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Dispatches a custom event to Google Ads / GA4
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...params,
      send_to: GOOGLE_TAG_ID,
    });
  }
}

/**
 * Fires when a prospect successfully submits the Book a Demo lead modal.
 * This is the primary Google Ads conversion event ("generate_lead").
 */
export function trackLeadSubmission(packageName: string, value: number = 4999) {
  trackEvent("generate_lead", {
    event_category: "Lead",
    event_label: packageName,
    value,
    currency: "USD",
  });

  // Also dispatch standard conversion for Google Ads
  trackEvent("conversion", {
    send_to: `${GOOGLE_TAG_ID}`,
    value,
    currency: "USD",
  });
}

/**
 * Fires when a prospect clicks to chat on WhatsApp.
 * Secondary high-intent conversion event.
 */
export function trackWhatsAppClick(location: string = "Direct") {
  trackEvent("contact", {
    event_category: "Engagement",
    event_label: `WhatsApp Chat (${location})`,
  });
}

/**
 * Updates Google Consent Mode v2 dynamically
 */
export function updateGoogleConsent(granted: boolean) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const state = granted ? "granted" : "denied";
    window.gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  }
}
