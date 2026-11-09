import Image from "@/components/ui/LocalizedImage";
import { imageDimensions } from "@/lib/image-dimensions";
import { englishMessage } from "@/lib/messages";

const feed = "/showcase/microdrama-mobile-feed.webp";
const catalog = "/showcase/microdrama-mobile-catalog.webp";
const mobileSizes = "calc((100vw - 60px) / 2)";
const imageClass = "h-auto w-full max-w-[11.25rem] rounded-xl border border-line shadow-sm";

export function MicroDramaAppPreview({ pairOnDesktop = true, animated = true }: { pairOnDesktop?: boolean; animated?: boolean }) {
  return (
    <figure className={`mx-auto grid w-full min-w-0 max-w-[23.25rem] grid-cols-2 items-start justify-center gap-3 lg:flex lg:gap-4 ${pairOnDesktop ? "lg:max-w-none" : "lg:max-w-[11rem]"} ${animated ? "short-drama-hero-art" : ""}`}>
      <Image
        src={feed}
        alt={englishMessage("ShortDrama.top.app.feedImage")}
        {...imageDimensions(feed)}
        sizes={`(min-width: 420px) 180px, ${mobileSizes}`}
        className={`${imageClass} ${pairOnDesktop ? "lg:w-[44%]" : "lg:hidden"}`}
      />
      <Image
        src={catalog}
        alt={englishMessage("ShortDrama.top.app.catalogImage")}
        {...imageDimensions(catalog)}
        sizes={`(min-width: 1024px) ${pairOnDesktop ? 180 : 176}px, (min-width: 420px) 180px, ${mobileSizes}`}
        preload={!pairOnDesktop}
        className={`${imageClass} ${pairOnDesktop ? "lg:w-[44%]" : "lg:w-44"}`}
      />
    </figure>
  );
}
