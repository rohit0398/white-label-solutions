import { ShoppingBag, Smartphone, Tv } from "lucide-react";
import { MICRODRAMA_DEMO, SHOWCASE_PROJECTS } from "@/lib/constants";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { englishMessage } from "@/lib/messages";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";

export const homePlatforms = [
  {
    family: "ecommerce",
    title: englishMessage("HomeHero.e.commerce.d395b71"),
    desc: englishMessage("HomeChooser.ecommerce.description"),
    action: englishMessage("HomeChooser.ecommerce.action"),
    proof: { href: CASE_STUDIES.electronics.path, label: englishMessage("HomeProof.inventoryCase") },
    icon: ShoppingBag,
    demoTier: "ecommerce",
    app: { href: "/solutions/ecommerce-app-development", price: "app-launch" },
    web: { href: "/solutions/ecommerce-website-development", price: "web-launch" },
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
    title: englishMessage("ShortDrama.top.platform.title"),
    desc: englishMessage("HomeChooser.shortDrama.description"),
    action: englishMessage("HomeChooser.shortDrama.action"),
    proof: { href: CASE_STUDIES.shortDrama.path, label: englishMessage("HomeProof.dramaCase") },
    icon: Smartphone,
    demoTier: SHORT_DRAMA_PACKAGES.platform,
    app: { href: "/solutions/short-drama-app-development", price: SHORT_DRAMA_PACKAGES.app },
    web: { href: "/solutions/short-drama-website-development", price: SHORT_DRAMA_PACKAGES.web },
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
    title: englishMessage("OttOverview.platform.title"),
    desc: englishMessage("HomeChooser.ott.description"),
    action: englishMessage("HomeChooser.ott.action"),
    proof: { href: CASE_STUDIES.ott.path, label: englishMessage("HomeProof.ottCase") },
    icon: Tv,
    demoTier: OTT_PACKAGES.platform,
    app: { href: "/solutions/ott-app-development", price: OTT_PACKAGES.app },
    web: { href: "/solutions/ott-website-development", price: OTT_PACKAGES.web },
    preview: {
      src: CASE_STUDIES.ott.image,
      alt: englishMessage("HomeProof.ottImage"),
      note: englishMessage("HomeProof.ott"),
      href: CASE_STUDIES.ott.path,
      action: englishMessage("HomeProof.ottCase"),
    },
  },
] as const;
