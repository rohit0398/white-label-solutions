import { ArchitectureModule } from "@/components/sections/ArchitectureModule";
import { ottAdminModule, shortDramaAdminModule } from "@/components/sections/streaming-architecture";
import { Section } from "@/components/ui/Section";

export function OttCmsShowcase({ ott = false }: { ott?: boolean }) {
  return (
    <Section id="video-cms" wide>
      <ArchitectureModule heading="h2" {...(ott ? ottAdminModule : shortDramaAdminModule)} />
    </Section>
  );
}
