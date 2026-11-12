import { basePath } from "@/lib/site-config";
import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";

export const SHORT_DRAMA_SCREENSHOT_SIZES = "(min-width: 816px) 768px, calc(100vw - 48px)";

export const SHORT_DRAMA_PACKAGES = {
  platform: "short-drama",
  app: "short-drama-app-launch",
  web: "short-drama-web-launch",
} as const;

export type ShortDramaOffer = keyof typeof SHORT_DRAMA_PACKAGES;

export function shortDramaOfferForPath(pathname: string): ShortDramaOffer | undefined {
  switch (basePath(pathname)) {
    case SHORT_DRAMA_PATHS.platform: return "platform";
    case SHORT_DRAMA_PATHS.app: return "app";
    case SHORT_DRAMA_PATHS.web: return "web";
  }
}
