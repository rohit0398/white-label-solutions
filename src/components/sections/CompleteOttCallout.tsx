"use client";

import { OTT_PATHS } from "@/lib/solution-paths";
import { englishMessage } from "@/lib/messages";
import { useSite } from "@/components/site/SiteProvider";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { displayPackagePrice } from "@/lib/pricing-catalog";
import React from "react";
import { Smartphone, Monitor, Clapperboard } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteOttCallout() {
  const { language, currency } = useSite();

  return (
    <CompletePackageCallout
      wide
      badge={englishMessage("CompleteShortDramaCallout.all.in.one.short.drama.suite.b8cf31a")}
      title={englishMessage("constants.complete.ott.suite.1409006")}
      subtitle={englishMessage("OttOverview.platform.intro")}
      price={displayPackagePrice(OTT_PACKAGES.platform, language, currency)}
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Smartphone,
          title: englishMessage("StreamingArchitecture.ott.app.title"),
          desc: englishMessage("OttOverview.app.intro"),
        },
        {
          icon: Monitor,
          title: englishMessage("StreamingArchitecture.ott.web.title"),
          desc: englishMessage("OttOverview.web.intro"),
        },
        {
          icon: Clapperboard,
          title: englishMessage("StreamingArchitecture.ott.admin.title"),
          desc: englishMessage("StreamingArchitecture.ott.admin.intro"),
        },
      ]}
      guarantees={[
        "Deployed to your AWS / Cloudflare Cloud",
        "100% Subscriber & Video Custody",
        "0% Platform Commission",
      ]}
      ctaText={englishMessage("CompleteShortDramaCallout.view.platform")}
      ctaHref={OTT_PATHS.platform}
    />
  );
}
