import AdditionalPlatformPage from "@/components/platforms/AdditionalPlatformPage";
import { additionalPlatformMetadata } from "@/lib/additional-platform-seo";

export const metadata = additionalPlatformMetadata("solar-crm");
export default function Page() { return <AdditionalPlatformPage id="solar-crm" />; }
