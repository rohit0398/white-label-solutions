"use client";

import { useMessages } from "@/components/site/useMessages";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import { Section } from "@/components/ui/Section";
import { englishMessage } from "@/lib/messages";
import type { ShortDramaOffer } from "@/lib/short-drama-offers";

const shortDramaRollout = {
  platform: {
    title: englishMessage("ShortDramaRollout.platform.title"),
    review: englishMessage("ShortDramaRollout.platform.review"),
    launch: englishMessage("ShortDramaRollout.platform.launch"),
  },
  app: {
    title: englishMessage("ShortDramaRollout.app.title"),
    review: englishMessage("ShortDramaRollout.app.review"),
    launch: englishMessage("ShortDramaRollout.app.launch"),
  },
  web: {
    title: englishMessage("ShortDramaRollout.web.title"),
    review: englishMessage("ShortDramaRollout.web.review"),
    launch: englishMessage("ShortDramaRollout.web.launch"),
  },
};

const ottRollout = {
  platform: {
    title: englishMessage("OttRollout.platform.title"),
    review: englishMessage("OttRollout.platform.review"),
    launch: shortDramaRollout.platform.launch,
  },
  app: {
    title: englishMessage("OttRollout.app.title"),
    review: englishMessage("OttRollout.app.review"),
    launch: shortDramaRollout.app.launch,
  },
  web: {
    title: englishMessage("OttRollout.web.title"),
    review: englishMessage("OttRollout.web.review"),
    launch: shortDramaRollout.web.launch,
  },
};

export function StreamingRollout({ offer, family }: { offer: ShortDramaOffer; family: "short-drama" | "ott" }) {
  const translate = useMessages();
  const ott = family === "ott";
  const rollout = (ott ? ottRollout : shortDramaRollout)[offer];
  const steps = [
    {
      title: englishMessage("ShortDramaRollout.share.title"),
      text: ott ? englishMessage("OttRollout.share.text") : englishMessage("ShortDramaRollout.share.text"),
    },
    {
      title: ott ? englishMessage("OttRollout.catalog.title") : englishMessage("ShortDramaRollout.catalog.title"),
      text: ott ? englishMessage("OttRollout.catalog.text") : englishMessage("ShortDramaRollout.catalog.text"),
    },
    {
      title: englishMessage("ShortDramaRollout.review.title"),
      text: rollout.review,
    },
    {
      title: englishMessage("ShortDramaRollout.launch.title"),
      text: rollout.launch,
    },
  ];

  return (
    <Section
      id="rollout"
      wide
      title={rollout.title}
      intro={<span className="block max-w-2xl">{translate(englishMessage("ShortDramaRollout.estimate"))}</span>}
    >
      <LaunchSteps steps={translate(steps)} />
      {offer !== "web" && (
        <p className="mt-5 text-sm leading-relaxed text-ink-2">
          {translate(englishMessage("ShortDramaRollout.storeReview"))}
        </p>
      )}
    </Section>
  );
}
