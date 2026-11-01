import { notFound } from "next/navigation";
import SiteDocument from "@/components/site/SiteDocument";
import { isLanguage } from "@/lib/site-config";
export { metadata, viewport } from "@/components/site/SiteDocument";

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLanguage(locale) || locale === "en") notFound();
  return <SiteDocument language={locale}>{children}</SiteDocument>;
}
