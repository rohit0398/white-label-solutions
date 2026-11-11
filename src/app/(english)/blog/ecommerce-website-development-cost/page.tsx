import { EcommerceGuide, ecommerceGuideMetadata } from "@/components/blog/EcommerceGuide";

export const metadata = ecommerceGuideMetadata("cost");

export default function Page() {
  return <EcommerceGuide guideKey="cost" />;
}
