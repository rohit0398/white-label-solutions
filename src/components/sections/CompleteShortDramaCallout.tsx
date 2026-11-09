"use client";
import { englishMessage } from "@/lib/messages";
import { useSite } from "@/components/site/SiteProvider";
import { displayPackagePrice, FAMILY_PACKAGE } from "@/lib/pricing-catalog";
import React from "react";
import { Smartphone, Globe, Clapperboard } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteShortDramaCallout() {
  const { language, currency } = useSite();

  return (
    <CompletePackageCallout
      wide
      badge={englishMessage("CompleteShortDramaCallout.all.in.one.short.drama.suite.b8cf31a")}
      title={englishMessage("CompleteShortDramaCallout.looking.for.the.complete.short.drama.solutio.46c7dc7")}
      subtitle={englishMessage("CompleteShortDramaCallout.need.both.the.native.mobile.apps.and.the.res.48084a8")}
      price={displayPackagePrice(FAMILY_PACKAGE["short-drama"], language, currency)}
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Smartphone,
          title: englishMessage("CompleteShortDramaCallout.native.flutter.apps.ios.android.8b02328"),
          desc: englishMessage("CompleteShortDramaCallout.60fps.vertical.swipe.gestures.in.app.purchas.31838e1"),
        },
        {
          icon: Globe,
          title: englishMessage("CompleteShortDramaCallout.next.js.16.web.streaming.player.c593441"),
          desc: englishMessage("CompleteShortDramaCallout.mobile.first.vertical.web.portal.with.sub.se.c082104"),
        },
        {
          icon: Clapperboard,
          title: englishMessage("CompleteShortDramaCallout.video.cms.encoding.console.1588be0"),
          desc: englishMessage("CompleteShortDramaCallout.automated.cloudflare.stream.transcoding.dyna.d20cd34"),
        },
      ]}
      guarantees={[
        "Deployed to your AWS / Cloudflare Cloud",
        "100% Subscriber & Video Custody",
        "0% Platform Commission",
      ]}
      ctaText={englishMessage("CompleteShortDramaCallout.view.platform")}
      ctaHref="/solutions/short-drama"
    />
  );
}
