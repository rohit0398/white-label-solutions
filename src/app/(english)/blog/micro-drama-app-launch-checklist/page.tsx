import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { MICRO_DRAMA_APP_CHECKLIST_SLUG } from "@/lib/content/short-drama-articles";

export const metadata = articleMetadata(MICRO_DRAMA_APP_CHECKLIST_SLUG);

export default function Page() {
  return <DramaArticlePage slug={MICRO_DRAMA_APP_CHECKLIST_SLUG} />;
}
