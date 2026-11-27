import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { SHORT_DRAMA_OTT_INTEGRATION_SLUG } from "@/lib/content/micro-drama-growth-guides";

export const metadata = articleMetadata(SHORT_DRAMA_OTT_INTEGRATION_SLUG);

export default function Page() {
  return <DramaArticlePage slug={SHORT_DRAMA_OTT_INTEGRATION_SLUG} />;
}
