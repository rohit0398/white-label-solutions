import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { LIVE_OTT_CHECKLIST_SLUG } from "@/lib/content/ott-articles";

export const metadata = articleMetadata(LIVE_OTT_CHECKLIST_SLUG, "ott");

export default function Page() {
  return <DramaArticlePage slug={LIVE_OTT_CHECKLIST_SLUG} family="ott" />;
}
