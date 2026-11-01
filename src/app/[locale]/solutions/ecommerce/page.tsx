import { notFound } from "next/navigation";
import PageContent from "@/components/pages/ecommerce";
import { landingMetadata } from "@/lib/localized-metadata";
import { TRANSLATED_LANGUAGES, type LandingLocale } from "@/lib/site-config";

export function generateStaticParams() { return TRANSLATED_LANGUAGES.map(locale => ({ locale })); }
async function validatedLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  if (!TRANSLATED_LANGUAGES.includes(locale as LandingLocale)) notFound();
  return locale as LandingLocale;
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return landingMetadata(await validatedLocale(params), "ecommerce");
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <PageContent language={await validatedLocale(params)} />;
}
