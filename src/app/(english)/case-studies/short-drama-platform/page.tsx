import Link from "next/link";
import { CaseStudyPage, caseStudyMetadata } from "../_components/CaseStudyPage";
import { ShortDramaLiveAccess } from "@/components/sections/ShortDramaLiveAccess";
import { buttonClass } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { SHORT_DRAMA_PACKAGES } from "@/lib/short-drama-offers";

const study = CASE_STUDIES.shortDrama;
export const metadata = caseStudyMetadata(study);

const features = [
  { title: "Swipeable episode player", description: "The mobile player prepares the next vertical episode while viewers watch the current one." },
  { title: "Episode unlocks", description: "The studio could make early episodes free and use coins or rewarded ads to unlock selected later episodes." },
  { title: "Adaptive video streaming", description: "Cloudflare Stream encoded the video at different quality levels and billed usage to the studio's account." },
  { title: "Publishing dashboard", description: "The studio could upload episodes, schedule releases, and change access rules from the dashboard." },
];

export default function ShortDramaCaseStudyPage() {
  return (
    <CaseStudyPage
      study={study}
      challenge="An entertainment studio needed a player for short vertical episodes and a way to publish shows and change unlock rules between app releases."
      actions={<Link href="#live-demo" className={buttonClass()}>Try the MicroDrama demo</Link>}
      features={features}
      outcome="The studio could publish new series, offer free previews, and choose which episodes to charge for. The MicroDrama test build below lets you try the viewing experience independently."
      nextStep={{
        title: "Planning a short drama launch?",
        description: "Tell us how viewers should watch and unlock episodes. The platform includes apps, a website, and an admin panel. We scope coin wallets separately.",
        packageId: SHORT_DRAMA_PACKAGES.platform,
        solution: { href: "/solutions/short-drama", label: "Explore the short drama platform" },
        guide: { href: "/blog/short-drama-app-development", label: "Read the short drama launch guide" },
      }}
    >
      <ShortDramaLiveAccess emphasis="both" landing />
    </CaseStudyPage>
  );
}
