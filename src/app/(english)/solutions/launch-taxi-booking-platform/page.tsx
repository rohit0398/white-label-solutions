import AdditionalPlatformPage from "@/components/platforms/AdditionalPlatformPage";
import { additionalPlatformMetadata } from "@/lib/additional-platform-seo";

export const metadata = additionalPlatformMetadata("taxi-booking");
export default function Page() { return <AdditionalPlatformPage id="taxi-booking" />; }
