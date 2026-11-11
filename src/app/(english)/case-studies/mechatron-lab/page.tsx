import { CaseStudyPage, caseStudyMetadata } from "../_components/CaseStudyPage";
import { buttonClass } from "@/components/ui/Button";
import { Screenshot } from "@/components/ui/Screenshot";
import { CASE_STUDIES } from "@/lib/content/case-studies";

const study = CASE_STUDIES.electronics;
export const metadata = caseStudyMetadata(study);

const features = [
  { title: "Web store and Android app", description: "Shoppers can browse the same electronics and robotics catalog on the website and Android app." },
  { title: "Component search", description: "Shoppers can describe the part or kit they need and find relevant products in the catalog." },
  { title: "Multi-warehouse fulfillment", description: "The team can route orders between the Mohali and Shillong warehouses based on stock and delivery location." },
  { title: "Order and invoice management", description: "Staff can manage stock and orders in the admin panel and generate invoices with the configured GST breakdown." },
];

export default function MechatronLabCaseStudyPage() {
  return (
    <CaseStudyPage
      study={study}
      challenge="Mechatron Lab needed shoppers to find technical parts online and on Android, while staff managed inventory and orders across two warehouses."
      actions={
        <>
          <a href="https://mechatronlab.com" target="_blank" rel="noopener noreferrer" className={buttonClass()}>Visit the storefront <span aria-hidden="true">↗</span></a>
          <a href="https://play.google.com/store/apps/details?id=com.mechatronlab.mechatronlab&hl=en_IN" target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>View the Android app <span aria-hidden="true">↗</span></a>
        </>
      }
      features={features}
      outcome="The storefront and app share a catalog, and staff can manage orders and stock for both locations from one admin panel."
      nextStep={{
        title: "Planning a store with multiple warehouses?",
        description: "Tell us how you manage products, stock, and fulfillment today. We can walk through the admin panel and scope any integrations you need.",
        packageId: "ecommerce",
        solution: { href: "/solutions/ecommerce#admin-crm", label: "Explore the inventory and order tools" },
        guide: { href: "/blog/ecommerce-website-development", label: "Read the e-commerce website launch guide" },
      }}
    >
      <div className="wrap-wide">
        <Screenshot src="/showcase/commerce-admin.webp" alt="Mechatron Lab admin dashboard for inventory and orders" />
      </div>
    </CaseStudyPage>
  );
}
