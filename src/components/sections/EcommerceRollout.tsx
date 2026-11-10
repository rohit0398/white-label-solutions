"use client";

import { useMessages } from "@/components/site/useMessages";
import { LaunchSteps } from "@/components/ui/LaunchSteps";
import Link from "@/components/ui/LocalizedLink";
import { Section } from "@/components/ui/Section";
import { englishMessage } from "@/lib/messages";

const reviewByOffer = {
  all: englishMessage("EcommerceRollout.review.all"),
  app: englishMessage("EcommerceRollout.review.app"),
  web: englishMessage("EcommerceRollout.review.web"),
};

const launchByOffer = {
  all: englishMessage("ShortDramaRollout.platform.launch"),
  app: englishMessage("ShortDramaRollout.app.launch"),
  web: englishMessage("ShortDramaRollout.web.launch"),
};

export function EcommerceRollout({ offer }: { offer: keyof typeof reviewByOffer }) {
  const translate = useMessages();
  const steps = [
    { title: englishMessage("EcommerceRollout.catalog.title"), text: englishMessage("EcommerceRollout.catalog.text") },
    { title: englishMessage("EcommerceRollout.checkout.title"), text: englishMessage("EcommerceRollout.checkout.text") },
    { title: englishMessage("EcommerceRollout.review.title"), text: reviewByOffer[offer] },
    { title: englishMessage("ShortDramaRollout.launch.title"), text: launchByOffer[offer] },
  ];

  return (
    <Section id="how-it-works" wide title={englishMessage("EcommerceRollout.title")} intro={englishMessage("EcommerceRollout.estimate")}>
      <LaunchSteps steps={translate(steps)} />
      {offer !== "web" && <p className="mt-5 text-sm leading-relaxed text-ink-2">{translate(englishMessage("ShortDramaRollout.storeReview"))}</p>}
      <Link
        href={offer === "app" ? "/blog/ecommerce-app-development" : "/blog/ecommerce-website-development"}
        className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
      >
        {englishMessage("EcommerceRollout.readGuide")}
      </Link>
    </Section>
  );
}
