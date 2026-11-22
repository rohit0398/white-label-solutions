import BusinessPlatformGuide, { businessPlatformGuideMetadata } from "@/components/blog/BusinessPlatformGuide";

export const metadata = businessPlatformGuideMetadata("appointment-booking");
export default function Page() { return <BusinessPlatformGuide platformId="appointment-booking" />; }
