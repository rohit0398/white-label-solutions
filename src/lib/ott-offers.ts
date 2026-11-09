import { basePath } from "@/lib/site-config";

export const OTT_PACKAGES = {
  platform: "cinematic-base",
  app: "cinematic-app-launch",
  web: "cinematic-web-launch",
} as const;

export type OttOffer = keyof typeof OTT_PACKAGES;

export function ottOfferForPath(pathname: string): OttOffer | undefined {
  switch (basePath(pathname)) {
    case "/solutions/ott-streaming": return "platform";
    case "/solutions/ott-app-development": return "app";
    case "/solutions/ott-website-development": return "web";
  }
}
