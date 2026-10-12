import React from "react";
import { Smartphone, Globe, Clapperboard } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteShortDramaCallout() {
  return (
    <CompletePackageCallout
      badge="All-in-One Short-Drama Suite"
      title="Looking for the Complete Short-Drama Solution?"
      subtitle="Need both the native mobile apps AND the responsive mobile-web streaming portal? Launch the unified 9:16 vertical drama platform on your private cloud with shared subscriber sync and zero recurring platform cuts."
      price="$4,999"
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Smartphone,
          title: "Native Flutter Apps (iOS & Android)",
          desc: "60FPS vertical swipe gestures, In-App Purchase VIP passes, and Google AdMob rewarded video ads.",
        },
        {
          icon: Globe,
          title: "Next.js 16 Web Streaming Player",
          desc: "Mobile-first vertical web portal with sub-second HLS playback, social episode sharing, and Stripe VIP checkout.",
        },
        {
          icon: Clapperboard,
          title: "Video CMS & Encoding Console",
          desc: "Automated Cloudflare Stream transcoding, dynamic teaser paywall rules, and viewer drop-off analytics.",
        },
      ]}
      guarantees={[
        "Deployed to your AWS / Cloudflare Cloud",
        "100% Subscriber & Video Custody",
        "0% Platform Commission",
      ]}
      ctaText="Explore Complete Drama Package ($4,999)"
      ctaHref="/solutions/short-drama"
    />
  );
}
