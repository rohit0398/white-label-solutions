import { basePath } from "@/lib/site-config";
import { ECOMMERCE_PATHS, LEGACY_ECOMMERCE_PATHS } from "@/lib/solution-paths";

export const ECOMMERCE_PACKAGES = {
  platform: "ecommerce",
  app: "app-launch",
  web: "web-launch",
} as const;

export function ecommerceOfferForPath(pathname: string): keyof typeof ECOMMERCE_PACKAGES | undefined {
  switch (basePath(pathname)) {
    case ECOMMERCE_PATHS.platform: return "platform";
    case ECOMMERCE_PATHS.app:
    case LEGACY_ECOMMERCE_PATHS.app: return "app";
    case ECOMMERCE_PATHS.web:
    case LEGACY_ECOMMERCE_PATHS.web: return "web";
  }
}
