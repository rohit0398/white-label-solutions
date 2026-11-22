import BusinessPlatformGuide, { businessPlatformGuideMetadata } from "@/components/blog/BusinessPlatformGuide";

export const metadata = businessPlatformGuideMetadata("taxi-booking");
export default function Page() { return <BusinessPlatformGuide platformId="taxi-booking" />; }
