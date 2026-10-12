import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/solutions/ott-video-streaming-development",
        destination: "/solutions/ott-website-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
