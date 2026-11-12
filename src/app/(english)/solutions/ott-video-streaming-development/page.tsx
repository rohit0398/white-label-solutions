import { OTT_PATHS } from "@/lib/solution-paths";
import { redirect } from "next/navigation";

export default function OttVideoStreamingDevelopmentRedirect() {
  redirect(OTT_PATHS.web);
}
