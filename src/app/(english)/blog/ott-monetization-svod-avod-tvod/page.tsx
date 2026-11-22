import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { OTT_MONETIZATION_SLUG } from "@/lib/content/ott-articles";

export const metadata = articleMetadata(OTT_MONETIZATION_SLUG, "ott");

export default function Page() {
  return <DramaArticlePage slug={OTT_MONETIZATION_SLUG} family="ott" />;
}
