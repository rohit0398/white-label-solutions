import Link from "next/link";
import { CaseStudyPage, caseStudyMetadata } from "../_components/CaseStudyPage";
import { buttonClass } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { OTT_PACKAGES } from "@/lib/ott-offers";

const study = CASE_STUDIES.ott;
export const metadata = caseStudyMetadata(study);

const features = [
  { title: "Video that adapts to connection speed", description: "The player could adjust video quality based on the viewer's connection and device." },
  { title: "Live channels and a program guide", description: "The platform brought in live feeds, displayed scheduled programs, and supported captions and audio tracks." },
  { title: "TV viewing", description: "The project included casting from mobile apps and work for dedicated TV platforms." },
  { title: "Playback access controls", description: "Signed links controlled stream access. DRM compatibility was scoped for this project." },
];

export default function OttStreamingCaseStudyPage() {
  return (
    <CaseStudyPage
      study={study}
      challenge="A broadcaster wanted viewers to find scheduled channels and on-demand titles in one place, while keeping subscriber data in its own cloud account."
      actions={<Link href="#what-we-built" className={buttonClass("secondary")}>See what we built</Link>}
      features={features}
      outcome="The broadcaster could manage live channels and on-demand titles within one service and give viewers a guide to scheduled programming."
      nextStep={{
        title: "Planning an OTT launch?",
        description: "The standard package covers on-demand streaming. Tell us which channels and devices you need so we can scope live feeds, TV apps, or advanced DRM.",
        packageId: OTT_PACKAGES.platform,
        solution: { href: "/solutions/ott-streaming", label: "Explore the OTT platform" },
        guide: { href: "/blog/ott-video-streaming-development", label: "Read the OTT streaming guide" },
      }}
    />
  );
}
