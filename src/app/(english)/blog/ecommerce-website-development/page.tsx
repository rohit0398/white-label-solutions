import { EcommerceGuide, ecommerceGuideMetadata } from "@/components/blog/EcommerceGuide";

export const metadata = ecommerceGuideMetadata("website");

export default function Page() {
  return <EcommerceGuide guideKey="website" />;
}
