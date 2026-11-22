import { EcommerceGuide, ecommerceGuideMetadata } from "@/components/blog/EcommerceGuide";

export const metadata = ecommerceGuideMetadata("migration");

export default function Page() {
  return <EcommerceGuide guideKey="migration" />;
}
