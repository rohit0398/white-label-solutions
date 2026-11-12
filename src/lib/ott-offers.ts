import { OTT_PATHS } from "@/lib/solution-paths";
import { basePath } from "@/lib/site-config";

export const OTT_PACKAGES = {
  platform: "cinematic-base",
  app: "cinematic-app-launch",
  web: "cinematic-web-launch",
} as const;

export type OttOffer = keyof typeof OTT_PACKAGES;

export function ottOfferForPath(pathname: string): OttOffer | undefined {
  switch (basePath(pathname)) {
    case OTT_PATHS.platform: return "platform";
    case OTT_PATHS.app: return "app";
    case OTT_PATHS.web: return "web";
  }
}
