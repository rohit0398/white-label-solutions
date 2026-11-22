import AdditionalPlatformPage from "@/components/platforms/AdditionalPlatformPage";
import { additionalPlatformMetadata } from "@/lib/additional-platform-seo";

export const metadata = additionalPlatformMetadata("food-delivery");
export default function Page() { return <AdditionalPlatformPage id="food-delivery" />; }
