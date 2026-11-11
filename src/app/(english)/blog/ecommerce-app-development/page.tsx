import { EcommerceGuide, ecommerceGuideMetadata } from "@/components/blog/EcommerceGuide";

export const metadata = ecommerceGuideMetadata("app");

export default function Page() {
  return <EcommerceGuide guideKey="app" />;
}
