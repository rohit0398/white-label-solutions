import React from "react";
import { Smartphone, Monitor, Clapperboard } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteOttCallout() {
  return (
    <CompletePackageCallout
      badge="Unified Entertainment Stack"
      title="Looking for the Complete OTT & Short-Drama Solution?"
      subtitle="Need both 9:16 vertical drama reels AND 16:9 cinematic widescreen streaming? Launch the unified streaming platform on your private cloud with shared media catalog, cross-device sync, and zero recurring platform cuts."
      price="$4,999"
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Smartphone,
          title: "9:16 Vertical Drama Apps",
          desc: "60FPS vertical swipe gestures, VIP subscription passes, and rewarded video ads for iOS & Android.",
        },
        {
          icon: Monitor,
          title: "16:9 Widescreen Portal",
          desc: "Next.js web & smart TV streaming hub with sub-second adaptive HLS playback and Stripe recurring VIP billing.",
        },
        {
          icon: Clapperboard,
          title: "Video CMS & Encoding",
          desc: "Automated Cloudflare Stream / AWS MediaConvert transcoding pipeline with DRM URL signing and paywall editor.",
        },
      ]}
      guarantees={[
        "Deployed to your AWS / Cloudflare Cloud",
        "100% Subscriber & Video Custody",
        "0% Platform Commission",
      ]}
      ctaText="Explore Complete Streaming Package ($4,999)"
      ctaHref="/solutions/ott-streaming"
    />
  );
}
