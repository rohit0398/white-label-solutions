import { CaseStudyPage, caseStudyMetadata } from "../_components/CaseStudyPage";
import { buttonClass } from "@/components/ui/Button";
import { ESTORE_ALLEY_URL } from "@/lib/constants";
import { CASE_STUDIES } from "@/lib/content/case-studies";

const study = CASE_STUDIES.directory;
export const metadata = caseStudyMetadata(study);

const features = [
  { title: "Store directory", description: "Independent online stores and brands can list their businesses in a shared directory." },
  { title: "Retail and wholesale discovery", description: "Shoppers can find retail stores, and stockists can find brands that sell wholesale." },
  { title: "Links to each seller's store", description: "Visitors can continue to the seller's website and shop at that store's own checkout." },
  { title: "Android app", description: "The eStoreAlley app provides another way to access the directory." },
];

export default function EStoreAlleyCaseStudyPage() {
  return (
    <CaseStudyPage
      study={study}
      challenge="eStoreAlley wanted to help shoppers and stockists discover independent brands that already had their own online stores."
      actions={
        <>
          <a href={ESTORE_ALLEY_URL} target="_blank" rel="noopener noreferrer" className={buttonClass()}>Visit the directory <span aria-hidden="true">↗</span></a>
          <a href="https://play.google.com/store/apps/details?id=com.estorealley.app&hl=en_IN" target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>View the Android app <span aria-hidden="true">↗</span></a>
        </>
      }
      features={features}
      outcome="Brands gained a place to be discovered on web and Android. Shoppers and stockists can follow the listings to buy directly from each brand."
      nextStep={{
        title: "Planning a directory or a marketplace?",
        description: "Tell us how buyers should find sellers and where checkout should happen. We can scope the right listing, payment, and seller workflows for your project.",
        packageId: "ecommerce",
        solution: { href: "/solutions/ecommerce-website-development", label: "Explore e-commerce website development" },
        guide: { href: "/blog/ecommerce-website-development", label: "Read the e-commerce website launch guide" },
      }}
    />
  );
}
