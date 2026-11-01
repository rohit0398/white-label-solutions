"use client";
import { englishMessage } from "@/lib/messages";
import { useMessages } from "@/components/site/useMessages";

import { priceText } from "@/lib/pricing-catalog";
import React from "react";
import { Smartphone, Monitor, Clapperboard } from "lucide-react";
import { CompletePackageCallout } from "@/components/sections/CompletePackageCallout";

export function CompleteOttCallout() {
  const translateCopy = useMessages();

  return (
    <CompletePackageCallout
      badge={translateCopy(englishMessage("CompleteOttCallout.unified.entertainment.stack.73d544a"))}
      title={translateCopy(englishMessage("CompleteOttCallout.looking.for.the.complete.ott.short.drama.sol.abdc4ab"))}
      subtitle={translateCopy(englishMessage("CompleteOttCallout.need.both.9.16.vertical.drama.reels.and.16.9.9ecf0f5"))}
      price={priceText(englishMessage("CompleteOttCallout..price.launch.6843b00"))}
      priceLabel="one-time investment"
      pillars={[
        {
          icon: Smartphone,
          title: englishMessage("CompleteOttCallout.9.16.vertical.drama.apps.760f07a"),
          desc: englishMessage("CompleteOttCallout.60fps.vertical.swipe.gestures.vip.subscripti.0f58fb6"),
        },
        {
          icon: Monitor,
          title: englishMessage("CompleteOttCallout.16.9.widescreen.portal.453123b"),
          desc: englishMessage("CompleteOttCallout.next.js.web.smart.tv.streaming.hub.with.sub.588d279"),
        },
        {
          icon: Clapperboard,
          title: englishMessage("CompleteOttCallout.video.cms.encoding.46449d7"),
          desc: englishMessage("CompleteOttCallout.automated.cloudflare.stream.aws.mediaconvert.8e1ef28"),
        },
      ]}
      guarantees={[
        "Deployed to your AWS / Cloudflare Cloud",
        "100% Subscriber & Video Custody",
        "0% Platform Commission",
      ]}
      ctaText={priceText(englishMessage("CompleteOttCallout.explore.complete.streaming.package.price.lau.0f64828"))}
      ctaHref="/solutions/ott-streaming"
    />
  );
}
