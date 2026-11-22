import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { OTT_COST_SLUG } from "@/lib/content/ott-articles";

export const metadata = articleMetadata(OTT_COST_SLUG, "ott");

export default function Page() {
  return <DramaArticlePage slug={OTT_COST_SLUG} family="ott" />;
}
