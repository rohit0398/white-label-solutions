import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { MICRO_DRAMA_PUBLISHING_SLUG } from "@/lib/content/short-drama-articles";

export const metadata = articleMetadata(MICRO_DRAMA_PUBLISHING_SLUG);

export default function Page() {
  return <DramaArticlePage slug={MICRO_DRAMA_PUBLISHING_SLUG} />;
}
