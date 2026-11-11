import { ShoppingBag, Smartphone, Tv } from "lucide-react";
import { MICRODRAMA_DEMO, SHOWCASE_PROJECTS } from "@/lib/constants";
import { englishMessage } from "@/lib/messages";
import { OTT_PACKAGES } from "@/lib/ott-offers";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";

export const homePlatforms = [
  {
    family: "ecommerce",
    title: englishMessage("HomeHero.e.commerce.d395b71"),
    desc: englishMessage("HomeChooser.ecommerce.description"),
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
    icon: Tv,
    demoTier: OTT_PACKAGES.platform,
    app: { href: "/solutions/ott-app-development", price: OTT_PACKAGES.app },
    web: { href: "/solutions/ott-website-development", price: OTT_PACKAGES.web },
    preview: {
      src: "/showcase/microdrama-catalog.webp",
      alt: englishMessage("ShortDrama.top.platform.image"),
      note: englishMessage("HomeProof.ott"),
      href: "/case-studies/ott-streaming-network",
      action: englishMessage("Footer.24.7.linear.ott.network.case.study.7abd557"),
    },
  },
] as const;
