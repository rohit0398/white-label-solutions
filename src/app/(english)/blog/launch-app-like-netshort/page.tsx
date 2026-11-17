import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";
import { NETSHORT_LAUNCH_SLUG } from "@/lib/content/short-drama-articles";

export const metadata = articleMetadata(NETSHORT_LAUNCH_SLUG);

export default function Page() {
  return <DramaArticlePage slug={NETSHORT_LAUNCH_SLUG} />;
}
