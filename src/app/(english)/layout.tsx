import SiteDocument from "@/components/site/SiteDocument";
export { metadata, viewport } from "@/components/site/SiteDocument";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument language="en">{children}</SiteDocument>;
}
