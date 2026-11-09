import { englishMessage } from "@/lib/messages";

import { priceText } from "@/lib/pricing-catalog";
import { packagePrices } from "@/lib/pricing-catalog";
import { ShowcaseProject, PricingTier, AdminFeature, Faq } from "@/types";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@mechatronlab.com";
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919887998663").replace(/[^0-9]/g, "");
const whatsappDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98879 98663";
const whatsappPrefill = encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_PREFILL_TEXT ||
    "Hi Mechatron Lab, I am interested in your White-Label E-Commerce Solution."
);

export const BRAND = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Mechatron Lab Solutions",
  parentCompany: "Mechatron Lab",
  subdomains: {
    solutions: "https://solutions.mechatronlab.com",
    express: "https://express.mechatronlab.com",
    whitelabel: "https://white-label-solution.mechatronlab.com",
  },
  contact: {
    email,
    whatsapp: `+${whatsappNumber}`,
    whatsappDisplay,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${whatsappPrefill}`,
  },
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "launch",
    name: englishMessage("constants.launch.4ad48a0"),
    tagline: englishMessage("constants.store.apps.and.admin.branded.and.deployed.to.7dea6b2"),
    isPopular: true,
    prices: packagePrices("launch"),
    deliverables: [
      englishMessage("constants.web.storefront.in.your.branding.6f29b23"),
      englishMessage("constants.android.and.ios.apps.published.under.your.de.2b54f53"),
      englishMessage("constants.admin.panel.and.crm.with.multi.warehouse.inv.a13872d"),
      englishMessage("constants.stripe.paypal.razorpay.cashfree.upi.and.cash.f1c5013"),
      englishMessage("constants.automatic.gst.vat.or.us.sales.tax.invoices.25db8fc"),
      englishMessage("constants.deployment.to.your.aws.google.cloud.or.azure.98716f6"),
      englishMessage("constants.30.days.of.support.after.launch.6928d92"),
    ],
    ctaText: englishMessage("constants.book.a.demo.a83de8a"),
  },
  {
    id: "source-code-license",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.repositories.with.the.right.fc5bba1"),
    prices: packagePrices("source-code-license"),
    deliverables: [
      englishMessage("constants.storefront.next.js.apps.flutter.backend.and.83125ee"),
      englishMessage("constants.unencrypted.git.repositories.0c486fe"),
      englishMessage("constants.database.and.deployment.documentation.7f653af"),
      englishMessage("constants.perpetual.commercial.licence.no.recurring.fe.f5e8914"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "dedicated-support",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.integrations.erp.sync.or.custo.7b0f3fb"),
    prices: packagePrices("dedicated-support"),
    deliverables: [
      englishMessage("constants.erp.accounting.and.warehouse.integrations.4b89645"),
      englishMessage("constants.b2b.pricing.quotations.and.custom.checkout.l.ec75080"),
      englishMessage("constants.hosting.upkeep.backups.and.security.updates.14ecb0b"),
      englishMessage("constants.hourly.blocks.or.a.monthly.retainer.75f2ccd"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

export const ECOMMERCE_APP_PRICING_TIERS: PricingTier[] = [
  {
    id: "app-launch",
    name: englishMessage("constants.mobile.launch.dc2577a"),
    tagline: englishMessage("constants.native.ios.android.apps.branded.and.publishe.cc1d3cd"),
    isPopular: true,
    prices: packagePrices("app-launch"),
    deliverables: [
      englishMessage("constants.native.ios.android.apps.built.from.unified.f.768526e"),
      englishMessage("constants.published.under.your.apple.developer.google.d3468d7"),
      englishMessage("constants.free.unlimited.push.notifications.fcm.apns.bfec072"),
      englishMessage("constants.native.biometric.login.face.id.touch.id.cb4a8ec"),
      englishMessage("constants.in.app.checkout.apple.pay.google.pay.stripe.8a7fbf9"),
      englishMessage("constants.real.time.api.sync.with.your.product.catalog.aa3741f"),
      englishMessage("constants.30.days.of.post.launch.support.store.review.8b1b60b"),
    ],
    ctaText: englishMessage("constants.book.app.demo.84612a3"),
  },
  {
    id: "app-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.flutter.mobile.app.repositor.776a890"),
    prices: packagePrices("app-source-code"),
    deliverables: [
      englishMessage("constants.complete.flutter.mobile.application.source.c.743c3af"),
      englishMessage("constants.ios.and.android.build.configurations.and.pip.595fce3"),
      englishMessage("constants.unencrypted.git.repository.access.0bb6620"),
      englishMessage("constants.perpetual.commercial.licence.zero.recurring.b90e84b"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "app-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.custom.mobile.features.or.back.3e04406"),
    prices: packagePrices("app-developer-time"),
    deliverables: [
      englishMessage("constants.custom.mobile.screens.brand.widgets.checkout.15f5657"),
      englishMessage("constants.shopify.woocommerce.erp.or.custom.backend.ap.ac86432"),
      englishMessage("constants.app.store.compliance.updates.version.release.b7c6576"),
      englishMessage("constants.hourly.blocks.or.a.monthly.retainer.75f2ccd"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

export const ECOMMERCE_WEB_PRICING_TIERS: PricingTier[] = [
  {
    id: "web-launch",
    name: englishMessage("constants.web.launch.a453119"),
    tagline: englishMessage("constants.high.speed.storefront.and.admin.crm.branded.db44b75"),
    isPopular: true,
    prices: packagePrices("web-launch"),
    deliverables: [
      englishMessage("constants.sub.second.next.js.web.storefront.in.your.br.91fe2fd"),
      englishMessage("constants.operations.admin.crm.with.multi.warehouse.in.1252bcb"),
      englishMessage("constants.stripe.paypal.apple.pay.google.pay.razorpay.83357d8"),
      englishMessage("constants.automatic.gst.eu.vat.or.us.sales.tax.invoice.440fdf6"),
      englishMessage("constants.deployment.to.your.aws.google.cloud.or.azure.98716f6"),
      englishMessage("constants.seo.core.web.vitals.optimization.structured.998f5c5"),
      englishMessage("constants.30.days.of.post.launch.engineering.support.23f6b45"),
    ],
    ctaText: englishMessage("constants.book.web.demo.4fe5214"),
  },
  {
    id: "web-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.storefront.backend.and.crm.r.e59df20"),
    prices: packagePrices("web-source-code"),
    deliverables: [
      englishMessage("constants.next.js.storefront.backend.api.and.admin.crm.afd9009"),
      englishMessage("constants.unencrypted.git.repository.access.with.archi.88ab7f4"),
      englishMessage("constants.database.schema.and.cloud.deployment.scripts.b1f3839"),
      englishMessage("constants.perpetual.commercial.licence.zero.recurring.b90e84b"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "web-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.erp.integrations.custom.checko.082974c"),
    prices: packagePrices("web-developer-time"),
    deliverables: [
      englishMessage("constants.erp.accounting.crm.and.warehouse.integration.8415ae7"),
      englishMessage("constants.b2b.pricing.quotations.and.custom.checkout.r.6f89e26"),
      englishMessage("constants.hosting.upkeep.backups.and.security.updates.c101769"),
      englishMessage("constants.hourly.blocks.or.a.monthly.retainer.75f2ccd"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "mechatron-lab",
    title: "Mechatron Lab",
    industry: englishMessage("constants.electronics.and.robotics.parts.27c015b"),
    description:
      englishMessage("constants.1.000.skus.two.warehouses.gst.invoicing.an.a.4263979"),
    url: "https://mechatronlab.com",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN",
    caseStudyUrl: "/case-studies/mechatron-lab",
    screenshotUrl: "/showcase/mechatron-store.png",
  },
  {
    id: "estore-alley",
    title: "eStoreAlley",
    industry: englishMessage("constants.wholesale.and.retail.marketplace.028c819"),
    description:
      englishMessage("constants.multi.vendor.directory.with.separate.wholesa.625e6a2"),
    url: "https://estorealley.web.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.estorealley.app&hl=en_IN",
    caseStudyUrl: "/case-studies/estorealley",
    screenshotUrl: "/showcase/estorealley-store.png",
  },
  {
    id: "style-gear",
    title: "Style Gear",
    industry: englishMessage("constants.fashion.4706640"),
    description: englishMessage("constants.apparel.store.with.size.and.colour.variants.93e94fe"),
    url: "https://stylegear.co.in",
    screenshotUrl: "/showcase/stylegear-store.png",
  },
];

export const ADMIN_FEATURES: AdminFeature[] = [
  {
    id: "multi-warehouse",
    title: englishMessage("constants.stock.across.warehouses.99f8406"),
    description: englishMessage("constants.counts.per.location.orders.ship.from.the.nea.8b4f92a"),
  },
  {
    id: "reorder-alerts",
    title: englishMessage("constants.reorder.alerts.d99459a"),
    description: englishMessage("constants.shows.how.many.days.of.stock.are.left.based.940920d"),
  },
  {
    id: "profit",
    title: englishMessage("constants.profit.per.order.e0cfdb4"),
    description: englishMessage("constants.supplier.costs.are.matched.against.each.sale.72d3e6b"),
  },
  {
    id: "orders",
    title: englishMessage("constants.orders.and.customers.81393fa"),
    description: englishMessage("constants.web.app.phone.cod.and.wholesale.orders.in.on.64282ed"),
  },
  {
    id: "layout",
    title: englishMessage("constants.homepage.editor.e6c3e84"),
    description: englishMessage("constants.change.banners.and.featured.products.on.desk.ce158c5"),
  },
];

export const FAQS: Faq[] = [
  {
    q: englishMessage("constants.how.much.does.a.pre.built.ecommerce.website.53cbc83"),
    a: priceText(englishMessage("constants.our.launch.package.is.a.transparent.one.time.a47dba4")),
  },
  {
    q: englishMessage("constants.why.is.this.platform.built.with.next.js.and.5f998ed"),
    a: englishMessage("constants.next.js.delivers.sub.second.page.loads.serve.98385b2"),
  },
  {
    q: englishMessage("constants.how.does.the.total.3.year.cost.compare.to.sh.116457d"),
    a: priceText(englishMessage("constants.costs.depend.on.the.platform.plan.payment.pr.a754de2")),
  },
  {
    q: englishMessage("constants.where.is.the.store.hosted.675289f"),
    a: englishMessage("constants.in.your.own.aws.google.cloud.or.azure.accoun.a17e7ef"),
  },
  {
    q: englishMessage("constants.is.there.a.monthly.fee.497ba69"),
    a: englishMessage("constants.no.you.pay.once.for.the.setup.and.then.only.ea16151"),
  },
  {
    q: englishMessage("constants.do.i.get.the.source.code.88e6a86"),
    a: englishMessage("constants.with.the.source.code.licence.yes.the.storefr.ca8fe11"),
  },
  {
    q: englishMessage("constants.how.do.the.mobile.apps.work.a599dde"),
    a: englishMessage("constants.they.re.built.with.flutter.so.one.codebase.p.e20c3cd"),
  },
  {
    q: englishMessage("constants.can.you.move.our.data.from.shopify.or.woocom.a771d2b"),
    a: englishMessage("constants.yes.we.move.your.products.categories.images.48bd9d9"),
  },
  {
    q: englishMessage("constants.which.payment.methods.and.taxes.are.supporte.790a144"),
    a: englishMessage("constants.stripe.and.paypal.for.international.orders.a.df9f7c5"),
  },
];

// --- Short-Drama (9:16 Vertical Reels) Pricing Tiers ---

export const SHORT_DRAMA_BASE_PRICING_TIERS: PricingTier[] = [
  {
    id: "short-drama-base",
    name: englishMessage("constants.complete.drama.suite.f1afa6c"),
    tagline: englishMessage("constants.both.9.16.vertical.drama.mobile.apps.and.res.89a9acd"),
    isPopular: true,
    prices: packagePrices("short-drama-base"),
    deliverables: [
      englishMessage("constants.9.16.vertical.short.drama.flutter.ios.androi.a2453d2"),
      englishMessage("constants.next.js.16.mobile.first.web.streaming.portal.5bf66ff"),
      englishMessage("constants.tiktok.style.60fps.vertical.swipe.player.wit.86beb2a"),
      englishMessage("constants.weekly.monthly.annual.vip.subscription.passe.38ccaa0"),
      englishMessage("constants.rewarded.video.ads.avod.integration.via.goog.b9233f7"),
      englishMessage("constants.video.cms.with.teaser.episode.paywall.rules.4d57bad"),
      englishMessage("constants.cloudflare.stream.automated.encoding.with.ze.61d6828"),
      englishMessage("constants.published.under.your.apple.google.play.devel.454058b"),
      englishMessage("constants.30.days.of.post.launch.engineering.support.23f6b45"),
    ],
    ctaText: englishMessage("constants.book.drama.suite.demo.6d35dde"),
  },
  {
    id: "short-drama-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.flutter.mobile.apps.next.js.b304274"),
    prices: packagePrices("short-drama-source-code"),
    deliverables: [
      englishMessage("constants.full.flutter.apps.next.js.web.portal.and.vid.a3a3e0d"),
      englishMessage("constants.unencrypted.git.repository.access.with.archi.94120a3"),
      englishMessage("constants.cloudflare.stream.encoding.drm.signed.token.1aaf319"),
      englishMessage("constants.perpetual.commercial.license.zero.recurring.235cae1"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "short-drama-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.custom.payment.gateways.ad.net.ade9efb"),
    prices: packagePrices("short-drama-developer-time"),
    deliverables: [
      englishMessage("constants.custom.payment.gateway.and.local.wallet.inte.453c104"),
      englishMessage("constants.rewarded.video.ad.networks.google.admob.appl.5a71cef"),
      englishMessage("constants.app.store.compliance.updates.version.release.b7c6576"),
      englishMessage("constants.hourly.blocks.or.a.dedicated.monthly.develop.f36b3ca"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

export const SHORT_DRAMA_APP_PRICING_TIERS: PricingTier[] = [
  {
    id: "short-drama-app-launch",
    name: englishMessage("constants.drama.app.launch.47d0272"),
    tagline: englishMessage("constants.native.9.16.vertical.drama.apps.ios.android.c74c288"),
    isPopular: true,
    prices: packagePrices("short-drama-app-launch"),
    deliverables: [
      englishMessage("constants.9.16.vertical.short.drama.flutter.ios.androi.a2453d2"),
      englishMessage("constants.tiktok.style.60fps.vertical.swipe.player.wit.86beb2a"),
      englishMessage("constants.weekly.monthly.vip.subscription.passes.via.a.b58228c"),
      englishMessage("constants.rewarded.video.ads.avod.integration.via.goog.cfac4e4"),
      englishMessage("constants.cloudflare.stream.automated.encoding.with.ze.61d6828"),
      englishMessage("constants.video.cms.with.episode.paywall.rules.drop.of.b7a22ac"),
      englishMessage("constants.published.under.your.apple.google.play.devel.454058b"),
      englishMessage("constants.30.days.of.post.launch.engineering.support.23f6b45"),
    ],
    ctaText: englishMessage("constants.book.drama.app.demo.206b92d"),
  },
  {
    id: "short-drama-app-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.flutter.mobile.apps.and.vide.9a852b6"),
    prices: packagePrices("short-drama-app-source-code"),
    deliverables: [
      englishMessage("constants.full.flutter.mobile.apps.and.video.cms.repos.6d79aaa"),
      englishMessage("constants.unencrypted.git.repository.access.with.archi.94120a3"),
      englishMessage("constants.cloudflare.stream.encoding.drm.signed.token.1aaf319"),
      englishMessage("constants.perpetual.commercial.license.zero.recurring.235cae1"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "short-drama-app-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.custom.payment.gateways.ad.net.ade9efb"),
    prices: packagePrices("short-drama-app-developer-time"),
    deliverables: [
      englishMessage("constants.custom.payment.gateway.and.local.wallet.inte.453c104"),
      englishMessage("constants.rewarded.video.ad.networks.google.admob.appl.5a71cef"),
      englishMessage("constants.app.store.compliance.updates.version.release.b7c6576"),
      englishMessage("constants.hourly.blocks.or.a.dedicated.monthly.develop.f36b3ca"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

export const SHORT_DRAMA_WEB_PRICING_TIERS: PricingTier[] = [
  {
    id: "short-drama-web-launch",
    name: englishMessage("constants.drama.web.launch.7ac5a21"),
    tagline: englishMessage("constants.mobile.first.9.16.vertical.web.streaming.por.0fce216"),
    isPopular: true,
    prices: packagePrices("short-drama-web-launch"),
    deliverables: [
      englishMessage("constants.next.js.16.responsive.9.16.mobile.first.web.1cd48fb"),
      englishMessage("constants.sub.second.hls.vertical.player.with.continuo.a4b146f"),
      englishMessage("constants.stripe.recurring.billing.for.weekly.monthly.f812b18"),
      englishMessage("constants.pre.roll.rewarded.video.ads.integration.for.b7e95d5"),
      englishMessage("constants.video.cms.with.episode.paywall.rules.drop.of.b7a22ac"),
      englishMessage("constants.search.engine.optimized.series.episode.synop.465dc7a"),
      englishMessage("constants.deployed.directly.onto.your.private.cloud.wi.4299819"),
      englishMessage("constants.30.days.of.post.launch.engineering.support.23f6b45"),
    ],
    ctaText: englishMessage("constants.book.drama.web.demo.140c74b"),
  },
  {
    id: "short-drama-web-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.next.js.web.portal.video.cms.c081756"),
    prices: packagePrices("short-drama-web-source-code"),
    deliverables: [
      englishMessage("constants.next.js.web.portal.video.cms.and.backend.rep.7fb3587"),
      englishMessage("constants.unencrypted.git.repository.access.with.archi.94120a3"),
      englishMessage("constants.cloudflare.stream.encoding.drm.signed.token.1aaf319"),
      englishMessage("constants.perpetual.commercial.license.zero.recurring.235cae1"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "short-drama-web-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.custom.payment.gateways.ad.net.ade9efb"),
    prices: packagePrices("short-drama-web-developer-time"),
    deliverables: [
      englishMessage("constants.custom.payment.gateway.and.stripe.customer.p.a3166f6"),
      englishMessage("constants.custom.analytics.user.retention.funnel.track.738c131"),
      englishMessage("constants.seo.enhancements.and.international.localizat.b09fa8b"),
      englishMessage("constants.hourly.blocks.or.a.dedicated.monthly.develop.f36b3ca"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

// Alias for existing imports
export const SHORT_DRAMA_PRICING_TIERS = SHORT_DRAMA_APP_PRICING_TIERS;

// --- Cinematic OTT (16:9 Widescreen) Pricing Tiers ---

export const CINEMATIC_OTT_BASE_PRICING_TIERS: PricingTier[] = [
  {
    id: "cinematic-base",
    name: englishMessage("constants.complete.ott.suite.1409006"),
    tagline: englishMessage("constants.both.16.9.widescreen.web.portal.and.native.m.c0cdec3"),
    isPopular: true,
    prices: packagePrices("cinematic-base"),
    deliverables: [
      englishMessage("constants.16.9.widescreen.next.js.16.web.portal.series.dce8d28"),
      englishMessage("constants.flutter.ios.android.native.streaming.apps.wi.4c30bcf"),
      englishMessage("constants.sub.second.buffer.via.hls.js.adaptive.bitrat.b55bae9"),
      englishMessage("constants.stripe.recurring.billing.in.app.purchase.vip.2beb289"),
      englishMessage("constants.video.cms.with.cloud.encoding.pipeline.cloud.78fbf2b"),
      englishMessage("constants.video.ads.avod.integration.via.google.admob.89cf726"),
      englishMessage("constants.search.engine.optimized.series.episode.synop.b8bc919"),
      englishMessage("constants.deployed.directly.onto.your.private.cloud.wi.4299819"),
      englishMessage("constants.30.days.of.post.launch.engineering.support.23f6b45"),
    ],
    ctaText: englishMessage("constants.book.complete.ott.demo.58be96b"),
  },
  {
    id: "cinematic-base-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.flutter.mobile.apps.next.js.c0b773e"),
    prices: packagePrices("cinematic-base-source-code"),
    deliverables: [
      englishMessage("constants.full.flutter.apps.next.js.web.portal.and.vid.a3a3e0d"),
      englishMessage("constants.unencrypted.git.repository.access.with.archi.94120a3"),
      englishMessage("constants.automated.cloud.transcoding.scripts.with.drm.879aed7"),
      englishMessage("constants.perpetual.commercial.license.zero.recurring.235cae1"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "cinematic-base-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.smart.tv.apps.custom.drm.or.li.7361ec3"),
    prices: packagePrices("cinematic-base-developer-time"),
    deliverables: [
      englishMessage("constants.smart.tv.app.builds.android.tv.apple.tv.fire.f6739c8"),
      englishMessage("constants.google.widevine.apple.fairplay.drm.integrati.4702d12"),
      englishMessage("constants.live.24.7.linear.channel.stream.ingest.hls.t.d6c09bf"),
      englishMessage("constants.hourly.blocks.or.a.dedicated.monthly.develop.f36b3ca"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

export const CINEMATIC_OTT_WEB_PRICING_TIERS: PricingTier[] = [
  {
    id: "cinematic-web-launch",
    name: englishMessage("constants.cinematic.web.launch.93c71b2"),
    tagline: englishMessage("constants.16.9.widescreen.streaming.web.portal.and.vid.371f92e"),
    isPopular: true,
    prices: packagePrices("cinematic-web-launch"),
    deliverables: [
      englishMessage("constants.16.9.widescreen.next.js.16.video.portal.seri.93653bf"),
      englishMessage("constants.sub.second.buffer.via.hls.js.adaptive.bitrat.b55bae9"),
      englishMessage("constants.multi.language.subtitle.strips.webvtt.audio.360730b"),
      englishMessage("constants.stripe.recurring.billing.for.monthly.quarter.67e5309"),
      englishMessage("constants.video.cms.with.cloud.encoding.pipeline.cloud.78fbf2b"),
      englishMessage("constants.search.engine.optimized.series.episode.synop.b8bc919"),
      englishMessage("constants.deployed.directly.onto.your.private.cloud.wi.4299819"),
      englishMessage("constants.30.days.of.post.launch.engineering.support.23f6b45"),
    ],
    ctaText: englishMessage("constants.book.web.streaming.demo.ede7625"),
  },
  {
    id: "cinematic-web-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.next.js.video.portal.video.c.e026e77"),
    prices: packagePrices("cinematic-web-source-code"),
    deliverables: [
      englishMessage("constants.next.js.web.streaming.portal.video.cms.api.r.c2980e8"),
      englishMessage("constants.unencrypted.git.repository.access.with.archi.94120a3"),
      englishMessage("constants.automated.cloud.transcoding.scripts.with.drm.879aed7"),
      englishMessage("constants.perpetual.commercial.license.zero.recurring.235cae1"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "cinematic-web-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.smart.tv.apps.custom.drm.or.li.7361ec3"),
    prices: packagePrices("cinematic-web-developer-time"),
    deliverables: [
      englishMessage("constants.smart.tv.app.builds.android.tv.apple.tv.fire.f6739c8"),
      englishMessage("constants.google.widevine.apple.fairplay.drm.integrati.4702d12"),
      englishMessage("constants.live.24.7.linear.channel.stream.ingest.hls.t.d6c09bf"),
      englishMessage("constants.hourly.blocks.or.a.dedicated.monthly.develop.f36b3ca"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

export const CINEMATIC_OTT_APP_PRICING_TIERS: PricingTier[] = [
  {
    id: "cinematic-app-launch",
    name: englishMessage("constants.cinematic.app.launch.85ab161"),
    tagline: englishMessage("constants.native.16.9.widescreen.streaming.apps.ios.an.d5efa1d"),
    isPopular: true,
    prices: packagePrices("cinematic-app-launch"),
    deliverables: [
      englishMessage("constants.flutter.ios.android.16.9.cinematic.widescree.069060f"),
      englishMessage("constants.adaptive.multi.bitrate.hls.playback.with.pic.3016d88"),
      englishMessage("constants.apple.in.app.purchase.google.play.billing.fo.0a9a512"),
      englishMessage("constants.pre.roll.and.mid.roll.video.ads.integration.f459f7f"),
      englishMessage("constants.offline.video.download.encryption.for.on.the.7bbcd27"),
      englishMessage("constants.video.cms.with.cloud.encoding.pipeline.cloud.78fbf2b"),
      englishMessage("constants.published.directly.under.your.apple.google.p.0e020cf"),
      englishMessage("constants.30.days.of.post.launch.engineering.support.23f6b45"),
    ],
    ctaText: englishMessage("constants.book.streaming.app.demo.4014555"),
  },
  {
    id: "cinematic-app-source-code",
    name: englishMessage("constants.source.code.22a35fb"),
    tagline: englishMessage("constants.add.on.the.full.flutter.mobile.apps.and.vide.9a852b6"),
    prices: packagePrices("cinematic-app-source-code"),
    deliverables: [
      englishMessage("constants.full.flutter.mobile.apps.and.video.cms.repos.6d79aaa"),
      englishMessage("constants.unencrypted.git.repository.access.with.archi.94120a3"),
      englishMessage("constants.automated.cloud.transcoding.scripts.with.drm.879aed7"),
      englishMessage("constants.perpetual.commercial.license.zero.recurring.235cae1"),
    ],
    ctaText: englishMessage("constants.ask.about.the.licence.f403a3c"),
  },
  {
    id: "cinematic-app-developer-time",
    name: englishMessage("constants.developer.time.8647533"),
    tagline: englishMessage("constants.engineers.for.smart.tv.apps.custom.drm.or.li.7361ec3"),
    prices: packagePrices("cinematic-app-developer-time"),
    deliverables: [
      englishMessage("constants.smart.tv.app.builds.android.tv.apple.tv.fire.f6739c8"),
      englishMessage("constants.google.widevine.apple.fairplay.drm.integrati.4702d12"),
      englishMessage("constants.live.24.7.linear.channel.stream.ingest.hls.t.d6c09bf"),
      englishMessage("constants.hourly.blocks.or.a.dedicated.monthly.develop.f36b3ca"),
    ],
    ctaText: englishMessage("constants.talk.to.us.9021488"),
  },
];

// Aliases for existing imports
export const CINEMATIC_OTT_PRICING_TIERS = CINEMATIC_OTT_WEB_PRICING_TIERS;
export const OTT_PRICING_TIERS = CINEMATIC_OTT_BASE_PRICING_TIERS;


export const MICRODRAMA_DEMO = {
  websiteUrl: "https://microdrama.mechatronlab.com",
  websiteLabel: "microdrama.mechatronlab.com",
  apkUrl: "https://d3upvzjgckmuz9.cloudfront.net/apk/micro-drama.apk",
  apkLabel: "Download test APK",
  iosBetaUrl: "https://testflight.apple.com/join/gNeTbCKH",
  googleLogin: true,
  phones: [
    "+91 99999 99999",
    "+91 99999 99998",
    "+91 99999 99997",
    "+91 99999 99996",
    "+91 99999 99995",
  ],
  otp: "999999",
};

export const OTT_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "short-drama-platform",
    title: englishMessage("constants.9.16.short.drama.mobile.web.platform.e1d865d"),
    industry: englishMessage("constants.vertical.video.series.cliffhanger.paywalls.87a9171"),
    description:
      englishMessage("constants.live.test.build.of.the.60fps.vertical.swipe.7f0f23b"),
    url: MICRODRAMA_DEMO.websiteUrl,
    appDownloadUrl: MICRODRAMA_DEMO.apkUrl,
    appDownloadLabel: MICRODRAMA_DEMO.apkLabel,
    iosBetaUrl: MICRODRAMA_DEMO.iosBetaUrl,
    caseStudyUrl: "/case-studies/short-drama-platform",
    screenshotUrl: "/showcase/microdrama-web-player.webp",
    demoAccess: {
      googleLogin: MICRODRAMA_DEMO.googleLogin,
      phones: MICRODRAMA_DEMO.phones,
      otp: MICRODRAMA_DEMO.otp,
    },
  },
  {
    id: "cinematic-ott-portal",
    title: englishMessage("constants.16.9.cinematic.video.live.tv.portal.470c0e9"),
    industry: englishMessage("constants.adaptive.multi.bitrate.hls.video.cms.440f54a"),
    description:
      englishMessage("constants.widescreen.4k.hdr.playback.pipeline.with.ada.1d13bc5"),
    url: "/solutions/ott-streaming",
    caseStudyUrl: "/case-studies/ott-streaming-network",
    screenshotUrl: "/showcase/ott-cinematic-web.webp",
    productPreview: true,
  },
];

export const ALL_HOME_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  ...OTT_SHOWCASE_PROJECTS,
  ...SHOWCASE_PROJECTS.slice(0, 2),
];

export const SHORT_DRAMA_FAQS: Faq[] = [
  {
    q: englishMessage("constants.what.is.included.with.the.short.drama.platfo.4805589"),
    a: englishMessage("constants.you.receive.a.complete.9.16.vertical.short.d.245c00a"),
  },
  {
    q: englishMessage("constants.how.does.cloudflare.stream.video.pricing.wor.e869cc5"),
    a: englishMessage("constants.cloudflare.stream.charges.raw.wholesale.usag.ad350b2"),
  },
  {
    q: englishMessage("constants.what.ongoing.server.and.infrastructure.costs.16d124d"),
    a: englishMessage("constants.because.the.platform.is.deployed.in.your.pri.678042f"),
  },
  {
    q: englishMessage("constants.how.does.monetization.work.in.the.short.dram.994166b"),
    a: englishMessage("constants.you.can.offer.weekly.monthly.and.annual.vip.5dc7368"),
  },
  {
    q: englishMessage("constants.do.you.take.any.percentage.cut.of.our.subscr.0704aee"),
    a: englishMessage("constants.zero.we.take.0.commission.payment.processors.e83473d"),
  },
  {
    q: englishMessage("home.do.i.own.the.source.code.ef7e953"),
    a: englishMessage("constants.full.git.repository.access.and.commercial.so.a017655"),
  },
];

export const CINEMATIC_OTT_FAQS: Faq[] = [
  {
    q: englishMessage("constants.what.is.included.with.the.cinematic.ott.plat.923e4f5"),
    a: englishMessage("constants.you.receive.a.complete.16.9.widescreen.strea.8f83196"),
  },
  {
    q: englishMessage("constants.how.does.cloudflare.stream.video.pricing.wor.e869cc5"),
    a: englishMessage("constants.cloudflare.stream.charges.raw.wholesale.usag.ad350b2"),
  },
  {
    q: englishMessage("constants.what.ongoing.server.and.infrastructure.costs.16d124d"),
    a: englishMessage("constants.because.the.platform.is.deployed.in.your.pri.678042f"),
  },
  {
    q: englishMessage("constants.can.viewers.cast.16.9.videos.to.smart.tvs.a030ebc"),
    a: englishMessage("constants.yes.the.flutter.mobile.applications.include.658fe29"),
  },
  {
    q: englishMessage("constants.how.does.subscription.and.video.ad.monetizat.a25868a"),
    a: englishMessage("constants.you.can.offer.monthly.or.annual.vip.streamin.272cc1e"),
  },
  {
    q: englishMessage("constants.do.you.take.any.percentage.cut.of.our.subscr.0704aee"),
    a: englishMessage("constants.zero.we.take.0.commission.payment.processors.e83473d"),
  },
  {
    q: englishMessage("home.do.i.own.the.source.code.ef7e953"),
    a: englishMessage("constants.full.git.repository.access.and.commercial.so.a017655"),
  },
];

export const OTT_FAQS: Faq[] = CINEMATIC_OTT_FAQS;

