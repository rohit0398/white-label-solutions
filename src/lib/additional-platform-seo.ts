import type { Metadata } from "next";
import { additionalPlatform } from "@/lib/content/additional-platforms";
import type { AdditionalPlatformId } from "@/lib/additional-platform-paths";
import { SITE_URL } from "@/lib/site-config";

export function additionalPlatformMetadata(id: AdditionalPlatformId): Metadata {
  const platform = additionalPlatform(id);
  return {
    title: platform.seoTitle,
    description: platform.description,
    alternates: { canonical: platform.path, languages: {} },
    openGraph: { type: "website", title: platform.seoTitle, description: platform.description, url: platform.path, images: [{ url: platform.image, alt: platform.title }] },
    twitter: { card: "summary_large_image", title: platform.seoTitle, description: platform.description, images: [platform.image] },
  };
}

/** Quote-based software: no fabricated zero-price Offer or review ratings. */
export function additionalPlatformSchema(id: AdditionalPlatformId) {
  const platform = additionalPlatform(id);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}${platform.path}#software`,
    name: platform.title,
    description: platform.description,
    url: `${SITE_URL}${platform.path}`,
    operatingSystem: platform.operatingSystem,
    applicationCategory: "BusinessApplication",
    screenshot: SITE_URL + platform.image,
    provider: { "@type": "Organization", name: "Mechatron Lab Solutions", url: SITE_URL },
  };
}
