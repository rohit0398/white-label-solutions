import { ArchitectureModule, type ArchitectureModuleContent } from "@/components/sections/ArchitectureModule";
import { Section } from "@/components/ui/Section";
import { ADMIN_FEATURES } from "@/lib/constants";
import { englishMessage } from "@/lib/messages";

const modules: (ArchitectureModuleContent & { id: string })[] = [
  {
    id: "storefront",
    title: englishMessage("EcommerceArchitecture.storeTitle"),
    intro: englishMessage("EcommerceCallout.storefront"),
    points: [
      englishMessage("EcommerceArchitecture.catalog"),
      englishMessage("EcommerceArchitecture.checkout"),
      englishMessage("constants.automatic.gst.vat.or.us.sales.tax.invoices.25db8fc"),
    ],
    images: [
      { src: "/showcase/commerce-storefront.webp", alt: englishMessage("Hero.mechatron.lab.online.store.built.on.the.plat.0e5abc6") },
      { src: "/showcase/commerce-marketplace.webp", alt: englishMessage("EcommerceArchitecture.marketplaceImage") },
    ],
    link: { href: "/solutions/ecommerce-website-development", label: englishMessage("Footer.e.commerce.website.e37a1d0") },
  },
  {
    id: "mobile-apps",
    title: englishMessage("AppShowcase.native.ios.android.shopping.apps.e2cd3e2"),
    intro: englishMessage("EcommerceArchitecture.apps"),
    imageNote: englishMessage("MobileAppScreenshots.actual.application.screens.from.mechatron.la.daf92ea"),
    points: [
      englishMessage("EcommerceArchitecture.sync"),
      englishMessage("MobileAppScreenshots.order.tracking.alerts.ce718e0"),
      englishMessage("EcommerceCallout.apps"),
    ],
    portrait: true,
    images: [
      { src: "/showcase/commerce-app-catalog.webp", alt: englishMessage("MobileAppScreenshots.storefront.catalog.79138b3") },
      { src: "/showcase/commerce-app-product.webp", alt: englishMessage("MobileAppScreenshots.product.specifications.afb326c") },
      { src: "/showcase/commerce-app-checkout.webp", alt: englishMessage("EcommerceArchitecture.checkoutImage") },
      { src: "/showcase/commerce-app-orders.webp", alt: englishMessage("MobileAppScreenshots.order.tracking.alerts.ce718e0") },
    ],
    link: { href: "/solutions/ecommerce-app-development", label: englishMessage("Footer.e.commerce.mobile.app.e48da2f") },
  },
  {
    id: "admin-crm",
    title: englishMessage("EcommerceArchitecture.adminTitle"),
    intro: englishMessage("EcommerceArchitecture.admin"),
    points: ADMIN_FEATURES.slice(0, 4).map(feature => feature.title),
    images: [
      { src: "/showcase/commerce-admin.webp", alt: englishMessage("AdminCrmShowcase.central.operations.crm.and.admin.panel.a9b129e") },
    ],
  },
];

export function EcommerceArchitecture({ offer = "all" }: { offer?: "all" | "app" | "web" }) {
  const activeModules = modules.filter(({ id }) => {
    if (offer === "app") return id === "mobile-apps";
    if (offer === "web") return id !== "mobile-apps";
    return true;
  });

  return (
    <Section id="architecture" title={englishMessage("ShortDrama.top.included")} wide>
      <div className="space-y-20 sm:space-y-24">
        {activeModules.map(module => (
          <ArchitectureModule key={module.id} {...module} link={offer === "all" ? module.link : undefined} />
        ))}
      </div>
    </Section>
  );
}
