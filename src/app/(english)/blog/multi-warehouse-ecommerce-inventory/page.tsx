import { EcommerceGuide, ecommerceGuideMetadata } from "@/components/blog/EcommerceGuide";

export const metadata = ecommerceGuideMetadata("inventory");

export default function Page() {
  return <EcommerceGuide guideKey="inventory" />;
}
