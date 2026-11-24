import type { NextConfig } from "next";
import { LEGACY_SHORT_DRAMA_PATHS, SHORT_DRAMA_PATHS } from "./src/lib/short-drama-paths";
import { ECOMMERCE_PATHS, LEGACY_ECOMMERCE_PATHS, LEGACY_OTT_PATHS, OTT_PATHS } from "./src/lib/solution-paths";

const solutionMoves = [
  [LEGACY_SHORT_DRAMA_PATHS, SHORT_DRAMA_PATHS],
  [LEGACY_ECOMMERCE_PATHS, ECOMMERCE_PATHS],
  [LEGACY_OTT_PATHS, OTT_PATHS],
] as const;

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  async redirects() {
    const redirects: { source: string; destination: string; permanent: boolean }[] = solutionMoves.flatMap(([previous, current]) =>
      (["platform", "app", "web"] as const).flatMap(offer =>
        ["", "/en"].map(prefix => ({
          source: prefix + previous[offer],
          destination: current[offer],
          permanent: true,
        })),
      ),
    );
    for (const prefix of ["", "/en"]) {
      redirects.push({
        source: prefix + "/solutions/more-platforms",
        destination: "/solutions",
        permanent: true,
      });
      redirects.push({
        source: prefix + "/solutions/ott-video-streaming-development",
        destination: OTT_PATHS.web,
        permanent: true,
      });
    }
    return redirects;
  },
};

export default nextConfig;
