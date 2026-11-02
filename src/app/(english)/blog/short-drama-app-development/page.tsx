import DramaArticlePage, { articleMetadata } from "@/components/blog/DramaArticlePage";

export const metadata = articleMetadata("short-drama-app-development");

export default function Page() {
  return <DramaArticlePage slug="short-drama-app-development" />;
}
