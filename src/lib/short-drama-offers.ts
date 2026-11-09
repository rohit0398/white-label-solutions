import { basePath } from "@/lib/site-config";

export const SHORT_DRAMA_SCREENSHOT_SIZES = "(min-width: 816px) 768px, calc(100vw - 48px)";

export const SHORT_DRAMA_PACKAGES = {
  platform: "short-drama",
  app: "short-drama-app-launch",
  web: "short-drama-web-launch",
} as const;

export type ShortDramaOffer = keyof typeof SHORT_DRAMA_PACKAGES;

export function shortDramaOfferForPath(pathname: string): ShortDramaOffer | undefined {
  switch (basePath(pathname)) {
    case "/solutions/short-drama": return "platform";
    case "/solutions/short-drama-app-development": return "app";
    case "/solutions/short-drama-website-development": return "web";
  }
}
