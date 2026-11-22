import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { MICRO_DRAMA_LOCALIZATION_SLUG } from "@/lib/content/micro-drama-growth-guides";

export const metadata = articleMetadata(MICRO_DRAMA_LOCALIZATION_SLUG);

export default function Page() {
  return <DramaArticlePage slug={MICRO_DRAMA_LOCALIZATION_SLUG} />;
}
