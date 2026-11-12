import { ECOMMERCE_PATHS, OTT_PATHS } from "@/lib/solution-paths";
import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import { ShoppingBag, Smartphone, Tv } from "lucide-react";
import { MICRODRAMA_DEMO, SHOWCASE_PROJECTS } from "@/lib/constants";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { englishMessage } from "@/lib/messages";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";

export const homePlatforms = [
  {
    family: "ecommerce",
    href: ECOMMERCE_PATHS.platform,
    title: englishMessage("HomeHero.e.commerce.d395b71"),
    desc: englishMessage("HomeChooser.ecommerce.description"),
    action: englishMessage("HomeChooser.ecommerce.action"),
    proof: { href: CASE_STUDIES.electronics.path, label: englishMessage("HomeProof.inventoryCase") },
    icon: ShoppingBag,
    demoTier: "ecommerce",
    app: { href: ECOMMERCE_PATHS.app, price: "app-launch" },
    web: { href: ECOMMERCE_PATHS.web, price: "web-launch" },
    preview: {
      src: "/showcase/commerce-storefront.webp",
      alt: englishMessage("Hero.mechatron.lab.online.store.built.on.the.plat.0e5abc6"),
      note: englishMessage("HomeProof.ecommerce"),
      href: SHOWCASE_PROJECTS[0].url,
      action: englishMessage("EcommerceProof.openStore"),
    },
  },
  {
    family: "short-drama",
    href: SHORT_DRAMA_PATHS.platform,
    title: englishMessage("ShortDrama.top.platform.title"),
    desc: englishMessage("HomeChooser.shortDrama.description"),
    action: englishMessage("HomeChooser.shortDrama.action"),
    proof: { href: CASE_STUDIES.shortDrama.path, label: englishMessage("HomeProof.dramaCase") },
    icon: Smartphone,
    demoTier: SHORT_DRAMA_PACKAGES.platform,
    app: { href: SHORT_DRAMA_PATHS.app, price: SHORT_DRAMA_PACKAGES.app },
    web: { href: SHORT_DRAMA_PATHS.web, price: SHORT_DRAMA_PACKAGES.web },
    preview: {
      src: "/showcase/microdrama-web-player.webp",
      alt: englishMessage("ShortDrama.top.web.image"),
      note: englishMessage("HomeProof.shortDrama"),
      href: MICRODRAMA_DEMO.websiteUrl,
      action: englishMessage("HomeProof.openDemo"),
    },
  },
  {
    family: "ott-streaming",
    href: OTT_PATHS.platform,
    title: englishMessage("OttOverview.platform.title"),
    desc: englishMessage("HomeChooser.ott.description"),
    action: englishMessage("HomeChooser.ott.action"),
    proof: { href: CASE_STUDIES.ott.path, label: englishMessage("HomeProof.ottCase") },
    icon: Tv,
    demoTier: OTT_PACKAGES.platform,
    app: { href: OTT_PATHS.app, price: OTT_PACKAGES.app },
    web: { href: OTT_PATHS.web, price: OTT_PACKAGES.web },
    preview: {
      src: CASE_STUDIES.ott.image,
      alt: englishMessage("HomeProof.ottImage"),
      note: englishMessage("HomeProof.ott"),
      href: CASE_STUDIES.ott.path,
      action: englishMessage("HomeProof.ottCase"),
    },
  },
] as const;
