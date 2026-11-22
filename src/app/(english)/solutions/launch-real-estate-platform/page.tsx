import AdditionalPlatformPage from "@/components/platforms/AdditionalPlatformPage";
import { additionalPlatformMetadata } from "@/lib/additional-platform-seo";

export const metadata = additionalPlatformMetadata("real-estate");
export default function Page() { return <AdditionalPlatformPage id="real-estate" />; }
