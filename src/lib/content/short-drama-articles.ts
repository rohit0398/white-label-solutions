import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import type { LaunchStep } from "@/components/ui/LaunchSteps";
import { MICRO_DRAMA_GROWTH_GUIDES } from "@/lib/content/micro-drama-growth-guides";

export interface DramaArticle {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  image?: string;
  tags?: string[];
  intro: string;
  takeaway: string;
  datePublished?: string;
  dateModified?: string;
  launchHeadline?: string;
  launchIntro?: string;
  nextStep?: {
    title: string;
    text: string;
    links: { href: string; label: string }[];
    offer?: "platform" | "app" | "web";
    whatsappMessage?: string;
  };
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    image?: { src: string; alt: string };
    bullets?: string[];
    checklist?: readonly LaunchStep[];
    options?: { title: string; text: string; href: string; linkLabel: string }[];
    builderComparison?: { name: string; href: string; offering: string; verify: string }[];
  }[];
  sources: { title: string; url: string }[];
}

export const MICRO_DRAMA_LAUNCH_SLUG = "launch-micro-drama-platform";
export const MICRO_DRAMA_BUILDERS_SLUG = "white-label-micro-drama-app-builders";
export const MICRO_DRAMA_SOURCE_CODE_SLUG = "micro-drama-app-source-code";
export const MICRO_DRAMA_PUBLISHING_SLUG = "publish-micro-drama-series";
export const MICRO_DRAMA_APP_CHECKLIST_SLUG = "micro-drama-app-launch-checklist";
export const MICRO_DRAMA_BACKEND_SLUG = "micro-drama-backend-architecture";
export const MICRO_DRAMA_WEBSITE_ARCHITECTURE_SLUG = "micro-drama-website-architecture";
export const NETSHORT_LAUNCH_SLUG = "launch-app-like-netshort";

const shortDramaMarketReport = {
  title: "Sensor Tower: State of Short Drama Apps 2026",
  url: "https://sensortower.com/blog/state-of-short-drama-apps-2026-report",
};

const platformSources = [
  { title: "Cloudflare Stream: storage and delivery pricing", url: "https://developers.cloudflare.com/stream/pricing/" },
  { title: "Apple Developer: program and fee information", url: "https://developer.apple.com/programs/whats-included/" },
  { title: "Google Play: service fees", url: "https://support.google.com/googleplay/android-developer/answer/112622?hl=en" },
];

export const DRAMA_ARTICLES: DramaArticle[] = [
  ...MICRO_DRAMA_GROWTH_GUIDES,
  {
    slug: NETSHORT_LAUNCH_SLUG,
    title: "How to Launch a White-Label Short Drama App Like NetShort",
    seoTitle: "Launch an App Like NetShort | White-Label Short Drama",
    description: "Plan a NetShort-style launch with a white-label short drama platform. Compare web, iOS and Android, localize one series, and test the first VIP episode.",
    image: "/showcase/microdrama-web-genres.webp",
    intro: "NetShort gives viewers several ways to start the same kind of story: open an episode in a browser or install the app. If you’re planning a short drama service, start with one series, decide how people will find it, and test how they move from a free episode to VIP access.",
    takeaway: "Pick one market and one complete series. Choose where viewers should start watching, then test the opening episodes and the first VIP episode on every platform in that release.",
    datePublished: "2026-11-17",
    sections: [
      {
        id: "what-netshort-shows",
        title: "What studios can learn from NetShort",
        paragraphs: [
          "Insightrackr ranked NetShort fourth by estimated downloads and third by estimated revenue among short drama apps in October 2026. NetShort’s own FAQ describes a catalog of original and licensed series, with browser viewing alongside iOS and Android. It says early episodes are often free and that access to later episodes can vary by series.",
          "The launch question for a studio is where a new viewer should start. If most people discover a series through a trailer or a shared link, send them to the matching episode and see how many start it. If your campaign is built around installs, test how quickly a new app user can find that same series and play it. The MicroDrama demos above show our independent platform and give you both viewing paths to try.",
        ],
      },
      {
        id: "choose-your-launch-surfaces",
        title: "Choose what goes live first",
        paragraphs: [
          "A white-label launch starts with prebuilt player and publishing software that we configure for your brand and catalog. Choose a starting package around the screens you need for the first campaign. If you launch web and mobile together, agree how sign-in, viewing progress, and VIP access should behave when someone changes devices, then test that behavior before promotion.",
        ],
        options: [
          { title: "Start with shareable episode links", text: "Give viewers a browser route from a trailer or partner link directly to the series or episode.", href: SHORT_DRAMA_PATHS.web, linkLabel: "Explore the website package" },
          { title: "Start with iOS and Android", text: "Use the app package if your campaign already sends viewers to the stores and you plan to publish under your own developer accounts.", href: SHORT_DRAMA_PATHS.app, linkLabel: "Explore the mobile app package" },
          { title: "Launch web and apps together", text: "Use one publishing panel to manage the catalog across your browser player and apps.", href: SHORT_DRAMA_PATHS.platform, linkLabel: "Explore the complete platform" },
        ],
      },
      {
        id: "localize-the-first-series",
        title: "Prepare one series for a second market",
        paragraphs: [
          "NetShort says its localized catalog varies by title and region, including audio and subtitle availability. For your first expansion, choose a series you have permission to distribute in a second market. Give it a title, description, trailer, and artwork that make sense to that audience. Confirm which caption tracks or dubbed versions the launch players will actually support.",
          "Have someone who speaks the language follow the real viewing path. Send them the trailer link and ask them to start episode one, read the captions on a small screen, and find the next episode. Then have them explain what the VIP offer includes in their own words. This exposes gaps that can be easy to miss when the team reviews each screen on its own.",
        ],
        options: [
          { title: "Prepare the episode files and catalog", text: "Use the publishing guide to organize the first series and check it from the viewer’s side.", href: `/blog/${MICRO_DRAMA_PUBLISHING_SLUG}`, linkLabel: "Read the series publishing guide" },
        ],
      },
      {
        id: "test-the-first-vip-episode",
        title: "Test how viewers move from free to VIP",
        paragraphs: [
          "For a sample launch, make episodes one and two free and set episode three to VIP. Test what happens when someone reaches episode three by watching in order and when they open its link directly. Show the price, renewal period, and what the subscription unlocks before asking for payment.",
          "Count first episode starts, episode two completions, VIP offer views, and confirmed subscriptions separately. If viewers drop before they reach the offer, review discovery and playback first. If a confirmed buyer still can’t play episode three, investigate payment verification and access. If your plan calls for a coin wallet or a custom episode purchase, scope that workflow during the walkthrough.",
        ],
      },
      {
        id: "prepare-for-the-launch",
        title: "What to have ready before kickoff",
        paragraphs: [
          "For the agreed prebuilt scope, setup is estimated at 2–4 weeks once the videos, branding, and account access are ready. The public release also depends on the payment setup and, for mobile apps, Apple and Google review. Bring the first series to kickoff so the studio can try the proposed viewing and VIP flow during setup.",
        ],
        checklist: [
          { title: "Bring one complete series", text: "Prepare the episode files, artwork, captions if needed, and the order in which viewers should watch." },
          { title: "Define the first launch", text: "Choose the market, viewing platform, and free-to-VIP transition. List the accounts your team can provide." },
          { title: "Test the campaign path", text: "Use a phone to follow the trailer link, start the first episode, and verify access after a test purchase." },
        ],
      },
    ],
    sources: [
      { title: "NetShort: official FAQ on languages, playback, and episode access", url: "https://netshort.com/faq" },
      { title: "Insightrackr: October 2026 short drama app downloads and revenue estimates", url: "https://blog.insightrackr.com/en/docs/blog_Oct-2026-Top-Short-Drama" },
    ],
  },
  {
    slug: MICRO_DRAMA_WEBSITE_ARCHITECTURE_SLUG,
    title: "Micro Drama Website Architecture",
    seoTitle: "Micro Drama Website Architecture | Web Playback & VIP Checkout",
    description: "See how a Next.js micro drama website opens shared episode links, plays vertical HLS video, and takes viewers from a free preview to VIP checkout.",
    image: "/showcase/microdrama-web-genres.webp",
    intro: "Someone sees a scene from your series on Instagram and taps the link. The website needs to open the right episode, play it on their phone, and give them a clear way to continue when they reach VIP. This guide follows that journey through our Next.js web player and explains what to test before sending traffic to it.",
    takeaway: "Send one trailer to one free episode. Test the link in real phone browsers, follow the transition to VIP, and verify that a confirmed subscription lets the viewer return to the episode they wanted to watch.",
    datePublished: "2026-11-17",
    sections: [
      {
        id: "shared-episode-links",
        title: "Open the episode viewers came to watch",
        paragraphs: [
          "Our Next.js reference website has separate pages for a series and for individual episodes. A series page helps viewers explore the story and browse the episode list. A shared episode link can go directly to the chapter used in a trailer or campaign. The same link can open on a phone or desktop browser without an app install.",
          "For example, send a trailer to episode one of a free preview series. When someone opens the link, show the series title, episode number, and play control so they know they landed in the right place. Offer a route back to the series if they want context or open a later episode first. Keep campaign parameters for measurement and use the clean episode URL as the canonical address.",
          "NetShort publicly offers browser viewing alongside apps and says early episodes are often free to start. For a web-first launch, use that pattern to test how many people go from a trailer to a first play, then decide where to send the next campaign.",
        ],
        options: [
          { title: "Decide where viewers should start", text: "Compare the web-first and app-first paths using the same series and audience.", href: `/blog/${MICRO_DRAMA_LAUNCH_SLUG}`, linkLabel: "Compare launching on web or apps" },
        ],
      },
      {
        id: "vertical-hls-in-the-browser",
        title: "Play vertical HLS video across browsers",
        paragraphs: [
          "The web player uses hls.js where supported and falls back to native HLS when the browser can play it. An HLS stream can offer several video qualities, allowing the player to adapt to changes in network speed. The backend can issue playback access for protected episodes, and the player fetches the media from the video provider.",
          "Reserve space for the portrait video and present a clear play button. Browsers and in-app browsers can apply different autoplay rules, especially when audio is enabled. Check that a viewer who needs to tap can start the episode immediately and can still reach mute, captions where available, and the episode picker. Test the next-episode transition and an interrupted connection as well as the first play.",
          "Keep the first watch screen light. Request the current episode before preparing the next one, limit preloading on slow connections, and avoid requesting protected video until the backend confirms access. Measure time to first frame, playback errors, and how many viewers make it to the next episode.",
        ],
        options: [
          { title: "See where playback access comes from", text: "Follow the API, video provider, and payment system behind the player.", href: `/blog/${MICRO_DRAMA_BACKEND_SLUG}#vip-playback-access`, linkLabel: "Read the backend architecture guide" },
        ],
      },
      {
        id: "catalog-and-watch-page-seo",
        title: "Make series pages and free previews easy to find",
        paragraphs: [
          "Our reference website has catalog, genre, series, and episode views. For a public launch, give each series a short synopsis, poster, and crawlable links to the episodes you intend to promote. Serve the title, description, thumbnail, and canonical URL in the initial HTML so search engines and messaging previews can see the right story when they open a link. Check what the server actually returns for a real title.",
          "If a free preview is a candidate for Google video results, give it a dedicated watch page where the video is the main content. Use a stable, crawlable thumbnail and check Google’s video indexing requirements on the published URL. Treat catalog discovery, video indexing, and access to the video files as separate settings. Keep signed media URLs out of sitemaps and sharing links.",
        ],
      },
      {
        id: "vip-checkout-and-return",
        title: "Take viewers from a free episode to VIP checkout",
        paragraphs: [
          "Use the same example as the backend guide: episodes one and two are free, and episode three requires VIP. When a viewer reaches episode three, show what the plan unlocks, what it costs, and how often it renews. Keep the selected series and episode as context if they need to sign in before continuing.",
          "The web reference includes a Stripe Payment Element for card checkout. The website package uses Stripe for web VIP subscriptions, with payment options confirmed for the target market. The UI can show payment progress, while the backend verifies the payment and records the viewer’s access. After confirmation, refresh the access state and let the viewer continue the episode. Show a pending or retry state if the payment is still processing or was interrupted.",
          "Check the complete return path when a payment opens a new window or requires an extra confirmation step. In a test environment, try a successful purchase, a cancelled purchase, and a viewer reopening the same locked episode link after subscribing.",
        ],
      },
      {
        id: "test-the-web-release",
        title: "Test the journey from a real campaign link",
        paragraphs: [
          "Try the same link from a social app, a chat app, and a normal mobile browser. Run through the first two episodes as a new viewer, then repeat as an active VIP subscriber and as someone whose access has expired. Use one series and a consistent set of accounts so playback and billing results are easy to compare.",
        ],
        checklist: [
          { title: "Check the shared link and preview", text: "Send it in a chat. Verify that the preview names the correct series and the link opens the intended episode." },
          { title: "Test first play and the next episode", text: "Try iPhone Safari, Android Chrome, and a browser inside the social app you use for your campaign. Test playback over mobile data and after a network interruption." },
          { title: "Retest the VIP return path", text: "After the backend confirms a test purchase, return to the episode. Repeat with a cancelled payment and expired access and check that each state is clear." },
          { title: "Measure where people leave", text: "Count episode starts, completions, paywall views, and confirmed purchases separately. Compare them by campaign so you can see whether to improve the trailer, player, or offer." },
        ],
      },
    ],
    sources: [
      { title: "Apple Developer: HTTP Live Streaming", url: "https://developer.apple.com/streaming/" },
      { title: "hls.js: browser support and native HLS fallback", url: "https://github.com/video-dev/hls.js#compatibility" },
      { title: "WebKit: inline playback and autoplay policies on iOS", url: "https://webkit.org/blog/6784/new-video-policies-for-ios/" },
      { title: "Stripe: Payment Element", url: "https://docs.stripe.com/payments/payment-element" },
      { title: "Stripe: subscription events and webhooks", url: "https://docs.stripe.com/billing/subscriptions/webhooks" },
      { title: "Google Search Central: video watch pages and indexing", url: "https://developers.google.com/search/docs/appearance/video" },
      { title: "Google Search Central: canonical URLs", url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" },
      { title: "NetShort: official browser and app viewing options", url: "https://netshort.com/faq" },
    ],
  },
  {
    slug: MICRO_DRAMA_BACKEND_SLUG,
    title: "Micro Drama Backend Architecture",
    seoTitle: "Micro Drama Backend Architecture | Streaming, Payments & DRM",
    description: "See how a micro drama backend publishes episodes, verifies VIP subscriptions, issues signed playback links, and scales for traffic spikes.",
    intro: "A viewer finishes two free episodes and taps episode three. The backend has to check their VIP access, give the player a valid stream, and handle the next request just as reliably when a new series brings in more viewers. This guide follows that episode through our OTT backend and explains the decisions a studio should test before launch.",
    takeaway: "Use one series to test the whole system. Publish it, watch a free episode, unlock a VIP episode with a test purchase, then repeat with expired access. Check the behavior on every device you plan to launch.",
    datePublished: "2026-11-15",
    sections: [
      {
        id: "backend-stack",
        title: "What the micro drama backend handles",
        paragraphs: [
          "Our Node.js and Express API handles the catalog, accounts, subscriptions, and requests for playback. MongoDB, accessed through Mongoose, stores records such as series, seasons, episodes, and subscription history. The video provider handles encoding and delivers the video to the player, so a viewer’s stream does not need to pass through Express.",
          "Redis caches frequently requested data. Redis also backs BullMQ, which runs background work such as analytics events and like processing. The scheduled publishing flow uses Azure Service Bus to send a worker a message when a release is due. This lets a studio prepare tomorrow’s episode without leaving the admin panel open until release time.",
        ],
      },
      {
        id: "publish-one-series",
        title: "From admin upload to a published episode",
        paragraphs: [
          "In the admin panel, create a series, set the episode order, and associate each episode with its video. The video provider prepares playback at several quality levels. With adaptive HLS, the player can switch quality as a viewer moves between Wi-Fi and mobile data. Check that the video is ready and that sound and captions work before releasing it.",
          "For this example, make episodes one and two free and set episode three to VIP. In a scheduled release, the worker reads the publishing message and applies the release in the catalog. Test that a draft stays hidden until release time and that the new episode appears in the right order when it goes live.",
        ],
        options: [
          { title: "See the publishing workflow", text: "Follow the admin steps for preparing artwork, uploading episodes, and reviewing the published series.", href: `/blog/${MICRO_DRAMA_PUBLISHING_SLUG}`, linkLabel: "Read the series publishing guide" },
        ],
      },
      {
        id: "vip-playback-access",
        title: "What happens when a viewer taps a VIP episode?",
        paragraphs: [
          "In this example, the player requests episode three. The API checks the account and applies the episode’s access rule. If the viewer is allowed to watch, the API can issue a signed playback link. The video provider checks that signature and expiration before serving the protected stream.",
        ],
        checklist: [
          { title: "Identify the viewer", text: "For signed-in requests, authentication establishes which account is asking. The OTT API uses Firebase authentication for viewers and JWT-based admin authentication." },
          { title: "Check permission for the episode", text: "The backend uses the catalog and the viewer’s access record to decide whether this episode is free, available with active VIP, or locked." },
          { title: "Issue playback access", text: "A signed link gives the player time-limited access to a protected asset. A Mux DRM asset also needs a separate license token so a compatible player can request a license to decrypt it." },
        ],
      },
      {
        id: "signed-playback-and-drm",
        title: "How signed playback links and DRM protect video",
        paragraphs: [
          "On Cloudflare Stream, requiring signed URLs on a video makes playback require a valid token. In the Mux DRM path, the video is encrypted and a compatible player uses a DRM license to play it. FairPlay is common on Apple platforms and Widevine on Android and supported browsers. Confirm the video provider, asset policy, and device support for the deployment you choose.",
          "Review access at the point the API issues the link. Resolve the episode and its provider asset from the catalog on the server. Apply the same rule to direct links and requests for several episodes at once. Keep signed links and signing secrets out of logs, and make sure cached links expire before they can be handed back after their validity ends.",
          "The API also uses Helmet security headers, a browser origin allowlist, and rate limits on selected routes such as login. Keep admin publishing actions behind role checks. Transport security, API permissions, and video protection each cover a different part of the request.",
        ],
        bullets: [
          "Open the free and VIP episodes as a guest, an active subscriber, and a viewer whose access has expired.",
          "Repeat the test using a shared link and while advancing from episode two to episode three.",
          "For DRM-enabled releases, test the license request and playback on each supported browser and phone.",
        ],
      },
      {
        id: "subscriptions-and-payments",
        title: "How a confirmed payment gives the viewer VIP access",
        paragraphs: [
          "The OTT backend has Stripe and Razorpay integrations and handles Apple and Google Play subscriptions. Choose the payment path for each client and market. A payment provider’s signed notification or a store-verified purchase lets the backend update access before the player retries the VIP episode.",
          "A successful checkout screen gives viewers feedback while the backend confirms the purchase. Keep pending purchases pending until verified. If a viewer cancels renewal, use the plan’s paid-through date and provider rules to decide when access ends. Give support enough information to investigate a confirmed payment that didn’t unlock an episode.",
          "For the launch, verify webhook signatures against the original request body when the provider requires it. Test that a repeated notification can be processed without granting access twice and that a late event leaves the account in the correct state. Reconcile with the provider if the order or state is unclear.",
        ],
        options: [
          { title: "Choose which episodes viewers can unlock", text: "Compare subscription access, episode purchases, and rewarded ads before choosing a payment model.", href: "/blog/short-drama-monetization", linkLabel: "Read the monetization guide" },
        ],
      },
      {
        id: "scale-on-release-day",
        title: "What to test before a release-day traffic spike",
        paragraphs: [
          "Azure App Service can add API instances when scale-out is configured on an eligible plan. The video provider continues to serve video as API traffic grows. A useful load test follows a real viewing session: opening the catalog, playing the free preview, and requesting access to the VIP episode. Measure those steps separately so you can tell whether the bottleneck is in the API, database, payment flow, or player.",
          "The API starts background workers alongside the web process in this setup. Adding API instances can therefore add worker processes too. Set concurrency and connection limits with MongoDB, Redis, and downstream services in mind. Review retries so a repeated job leaves publishing or analytics in the expected state.",
        ],
        bullets: [
          "Watch slow requests, errors, and MongoDB connections while traffic rises.",
          "Track how long jobs wait, which jobs fail, and whether retry volume grows after a provider outage.",
          "Check first-play failures and billing verification errors separately so the team knows where to look.",
        ],
        options: [
          { title: "Plan who runs the service after launch", text: "Review cloud accounts, operating costs, and what to ask for at handover.", href: `/blog/${MICRO_DRAMA_SOURCE_CODE_SLUG}`, linkLabel: "Read the source code and hosting guide" },
        ],
      },
    ],
    sources: [
      { title: "Azure App Service automatic scaling", url: "https://learn.microsoft.com/en-us/azure/app-service/manage-automatic-scaling" },
      { title: "Azure Service Bus scheduled messages", url: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sequencing" },
      { title: "BullMQ: designing jobs for retries", url: "https://docs.bullmq.io/patterns/idempotent-jobs" },
      { title: "Mux: signed playback and DRM license tokens", url: "https://www.mux.com/docs/guides/protect-videos-with-drm" },
      { title: "Cloudflare Stream: protect videos with signed URLs", url: "https://developers.cloudflare.com/stream/viewing-videos/securing-your-stream/" },
      { title: "Stripe: webhook verification, duplicates, and event ordering", url: "https://docs.stripe.com/webhooks" },
      { title: "Razorpay: validate and test webhooks", url: "https://razorpay.com/docs/webhooks/validate-test" },
      { title: "Google Play Billing: server-side purchase verification", url: "https://developer.android.com/google/play/billing/security" },
      { title: "OWASP: API authentication and authorization risks", url: "https://api-security.owasp.org/editions/2023/en/0x11-t10/" },
      { title: "AWS: the Dramaze short drama streaming architecture", url: "https://aws.amazon.com/blogs/media/how-aws-powers-dramaze-ai-enhanced-streaming-platform/" },
    ],
  },
  {
    slug: MICRO_DRAMA_BUILDERS_SLUG,
    title: "How to Compare White-Label Micro Drama App Builders",
    seoTitle: "White-Label Micro Drama App Builders Compared",
    description: "Compare white-label micro drama app builders by demo access, deployment, source code, and episode monetization. See what to test and budget for.",
    intro: "When comparing software for a short drama app, ask each provider to show the same workflow. Bring one series, publish its first episodes, and watch what happens when a viewer reaches the first episode that requires payment.",
    takeaway: "Get a quote that lists the website and apps, the admin panel, payment features, hosting, and source code terms. Use the same checklist for every provider so you can compare what each package actually covers.",
    datePublished: "2026-11-12",
    sections: [
      {
        id: "white-label-or-custom",
        title: "White-label micro drama software or custom development?",
        paragraphs: [
          "A white-label platform starts with an existing viewer app and publishing workflow that can be configured for your brand. Bring a sample series, brand assets, and a draft of your free and paid access rules. Ask the provider to mark what is already available, what they configure during deployment, and what needs engineering work.",
          "A custom build can make sense when a requirement shapes the whole product, such as a proprietary wallet, a studio approval workflow, or a payment system you must integrate from day one. Ask who will maintain those features after launch and how changes are priced.",
        ],
        options: [
          { title: "Choose where viewers will watch first", text: "A web launch can start with shared episode links. A mobile launch needs a plan for installs and store review. Check both paths if you expect to launch them together.", href: `/blog/${MICRO_DRAMA_LAUNCH_SLUG}`, linkLabel: "Compare web-first and app-first launches" },
        ],
      },
      {
        id: "live-demo-checklist",
        title: "Test one series before choosing a provider",
        paragraphs: [
          "Open the live demo at the top of this guide to see how viewers browse and play episodes. Try the web player or an iOS or Android test build. For an operator walkthrough, ask to see the same series in the admin panel and how changing an episode’s access affects the viewer.",
        ],
        checklist: [
          { title: "Publish a sample series", text: "Ask the provider to add artwork, order the episodes, and set one episode to free and another to VIP or paid access." },
          { title: "Follow the viewer journey", text: "Open a shared episode link or install the app. Play the free episode, continue to the next one, and check how the access prompt explains what the viewer gets." },
          { title: "Check a purchase and a failure", text: "In a test environment, ask the provider to show a successful purchase and an interrupted one. Check what the viewer and the support team can see in each case." },
        ],
      },
      {
        id: "compare-providers",
        title: "What to check on each micro drama platform",
        paragraphs: [
          "The table uses each provider’s published product page. Mechatron Lab is our own offer. Confirm the listed capabilities for the package you’re quoted and use the same sample series to evaluate each option.",
        ],
        builderComparison: [
          { name: "Prebuilt Apps", href: "https://prebuildapps.com/white-label-micro-drama-app-development/", offering: "Markets a DramaBox-style package and links to the Reelxia web app and Google Play listing.", verify: "Ask which parts of the demo, source code, and app submission are covered by the quote." },
          { name: "Flicknexs", href: "https://flicknexs.com/micro-drama-app-development", offering: "Describes white-label apps, a vertical web player, and different tiers for payments and protection.", verify: "Confirm the tier that covers your devices, in-app purchases, and the access rules you need." },
          { name: "VPlayed", href: "https://www.vplayed.com/micro-drama-ott-app.php", offering: "Advertises source code ownership, cloud or on-premises deployment, and coin-based episode access.", verify: "Confirm the repository handoff, who runs the deployment, and how coin purchases are tested." },
          { name: "MultiTV", href: "https://multitvsolution.com/micro-drama-platform.php", offering: "Markets vertical series playback, coin or episode payments, and tools for turning a video catalog into vertical episodes.", verify: "Ask which editing, captioning, and monetization tools are included in the proposed package." },
          { name: "Mechatron Lab", href: SHORT_DRAMA_PATHS.platform, offering: "Offers web, iOS and Android packages with a publishing panel, plus an optional source code license.", verify: "Try the viewer builds and ask which VIP flows, payment integrations, and custom work apply to your release." },
        ],
      },
      {
        id: "budget-and-handover",
        title: "Compare launch cost, ongoing bills, and ownership",
        paragraphs: [
          "Put setup, custom work, optional source code, and ongoing costs on separate lines. Estimate video storage and delivery for your own catalog and expected viewing. Include any app-store or payment processing costs that apply to your sales model.",
          "Ask whose accounts will hold the domain, cloud resources, store listings, and payment credentials. The white-label brand, source code license, and ongoing maintenance are separate terms to confirm in the proposal.",
        ],
        options: [
          { title: "Price web, apps, or the complete platform", text: "Use our package comparison below for published deployment and source license prices. The cost guide covers hosting, video delivery, and expenses to include in your operating budget.", href: "/blog/short-drama-app-development-cost", linkLabel: "Read the micro drama app cost guide" },
        ],
      },
    ],
    sources: [
      { title: "Prebuilt Apps micro-drama product page", url: "https://prebuildapps.com/white-label-micro-drama-app-development/" },
      { title: "Flicknexs micro drama app development", url: "https://flicknexs.com/micro-drama-app-development" },
      { title: "VPlayed micro drama OTT platform", url: "https://www.vplayed.com/micro-drama-ott-app.php" },
      { title: "MultiTV micro drama platform", url: "https://multitvsolution.com/micro-drama-platform.php" },
      { title: "Vodlix vendor comparison and evaluation checklist", url: "https://vodlix.com/blog/best-short-drama-app-builders" },
      ...platformSources,
    ],
  },
  {
    slug: MICRO_DRAMA_LAUNCH_SLUG,
    title: "How to Launch a Micro Drama Platform: Web First or App First?",
    seoTitle: "How to Launch a Micro Drama Platform | Web vs. Apps",
    description: "Choose a web-first, app-first, or combined launch for your micro drama platform. Compare viewer journeys, try the live demo, and explore launch packages.",
    intro: "If a viewer discovers your micro drama in a social clip, do you want them to open an episode in their browser or install an app first? That decision changes what your studio needs to test and support on launch day.",
    takeaway: "Start on the web if shared episode links drive discovery. Start with apps if you have a plan to drive installs and bring viewers back. Launch both together if you already need both routes and can test them end to end.",
    datePublished: "2026-11-11",
    dateModified: "2026-11-12",
    sections: [
      {
        id: "netshort-web-and-apps",
        title: "NetShort gives viewers two ways to start watching",
        paragraphs: [
          "NetShort offers its catalog in browsers as well as on iOS and Android. Its FAQ says that early episodes are often free to start, and that audio and subtitle options vary by title and region. It gives viewers a way to try a story from a link and an app option for people who prefer to watch there.",
          "For your first campaign, pick a series you have permission to distribute in one market. Run the same trailer against two destinations: the opening episode on the web and the relevant store listing. Give both groups a similar audience and budget. Compare spend per first episode start and how many of those viewers finish the episode. For the app group, count how many installs turn into a play to see where the extra step costs you viewers.",
        ],
      },
      {
        id: "choose-your-launch",
        title: "Choose how viewers will start watching",
        paragraphs: ["Pick the option that fits the audience and distribution channels you have lined up for your first release."],
        options: [
          {
            title: "Web first for link-driven discovery",
            text: "Use a mobile-friendly website if you’re promoting episodes through social clips, newsletters, or partner links. A viewer can go from the promotion to a specific episode without installing an app. Test the journey in the browsers your audience actually uses.",
            href: SHORT_DRAMA_PATHS.web,
            linkLabel: "Explore the website package",
          },
          {
            title: "App first for an install campaign",
            text: "Start with iOS and Android if your launch plan already sends people to the stores and you’ll release episodes regularly. Test the journey from install to first play and from a new episode alert back to the series. Leave time for store submission and review.",
            href: SHORT_DRAMA_PATHS.app,
            linkLabel: "Explore the app package",
          },
          {
            title: "Web and apps for two established channels",
            text: "Launch both if partners need a browser link and you also have an audience ready to install. Decide which path each campaign uses, then confirm how sign-in, viewing progress, and paid access behave when someone switches devices.",
            href: SHORT_DRAMA_PATHS.platform,
            linkLabel: "Explore the complete platform",
          },
        ],
      },
      {
        id: "try-a-viewing-session",
        title: "Try the same series on web and mobile",
        paragraphs: [
          "Use the live demo at the top of this guide to compare the browser player with the mobile test builds. Pick a series you haven’t watched before, open its first episode, and see how easy it is to find the next one. Try it on a phone over mobile data as well as Wi-Fi.",
          "For your own release, also test the first paid-access decision and what happens when a purchase fails. Ask which steps you can try in the demo and which depend on the package or payment setup you choose.",
        ],
      },
      {
        id: "measure-the-first-release",
        title: "Measure where people stop watching",
        paragraphs: [
          "For a web launch, follow visits from a specific campaign through first episode starts, completions, and a return visit. If people arrive but rarely play, review the link destination and player before spending more on promotion.",
          "For an app launch, follow store visits, installs, first episode starts, and return viewing. A drop between installs and plays points to a different problem from a drop at the store listing. Compare both channels using the same series and similar audiences when you can.",
        ],
      },
      {
        id: "prepare-for-the-next-channel",
        title: "Plan the handoff before adding a second channel",
        paragraphs: [
          "Decide how viewers will sign in, which purchases should carry across devices, and whether existing episode links will still work. Ask your provider what can be shared across clients and what needs separate setup. Test the switch with one account, one series, and one purchase before you expand.",
        ],
        bullets: [
          "Bring one complete series with artwork, captions, and episode order.",
          "List your first promotion channels and which device or store each one points to.",
          "Choose which episodes are free and describe what a paid viewer should get.",
        ],
      },
    ],
    sources: [
      { title: "NetShort: official viewing, language, and episode access FAQ", url: "https://netshort.com/api/faq" },
      { title: "Apple Developer: submit an app for review", url: "https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-app/" },
      { title: "Google Play Console: prepare and roll out a release", url: "https://support.google.com/googleplay/android-developer/answer/9859348?hl=en" },
    ],
  },
  {
    slug: MICRO_DRAMA_SOURCE_CODE_SLUG,
    title: "Micro Drama App Source Code and Hosting",
    seoTitle: "Micro Drama App Source Code | Licensing & Hosting",
    description: "See what a white-label micro drama deployment includes, what the optional source code license adds, and which accounts to control at handover.",
    intro: "You can launch a branded micro drama app or website on your own accounts without building the platform from scratch. Before you choose a package, decide who will run it after launch and whether that team needs the source code.",
    takeaway: "Ask for three things in writing before you sign: the package scope, the accounts you’ll control, and the repositories and rights covered by the source code license.",
    datePublished: "2026-11-12",
    sections: [
      {
        id: "deployment-and-source-code",
        title: "What do deployment and the source code license include?",
        paragraphs: [
          "Our white-label launch fee covers branding, setup, and deployment for the package you choose. The mobile package includes iOS and Android apps, the web package includes the browser player, and the complete platform includes both. Each includes an admin panel for publishing series and episodes. Confirm any extra integrations or feature changes in the proposal.",
          "The optional commercial source code license adds Git repository access for the agreed scope. Ask which repositories you receive, which components use third-party services, and whether your own developers can make changes and ship updates under the license. Confirm any rights you need to run multiple brands or distribute the code separately.",
        ],
      },
      {
        id: "do-you-need-the-source-code",
        title: "When is the source code license worth adding?",
        paragraphs: [
          "Start with the first change you expect after launch. If your studio mainly needs to add shows, change artwork, and set episode access, those are admin tasks. If you expect your developers to redesign the player or build a new payment integration, ask which repositories and services they would need to change before deciding on the license.",
          "A studio launching on the web first can ask for the repository list for that package and the separate scope for adding apps later. A studio launching on all three platforms should ask for the build and release instructions for each client, the admin panel, and any backend services included in the agreement.",
        ],
        bullets: [
          "Ask for a named list of repositories, the version delivered at handover, and instructions to build it.",
          "Ask which services still need accounts or credentials, such as video delivery, authentication, and payments.",
          "Confirm what support covers, who can ship changes, and how future updates are quoted.",
        ],
      },
      {
        id: "accounts-and-operating-costs",
        title: "Which accounts should the studio control?",
        paragraphs: [
          "List the accounts that keep the product running and name the person responsible for each. Give the implementation team the access it needs for setup, and review those permissions at handover. A repository alone is only one part of taking over a live service.",
          "Hosting and video delivery are running costs. For example, Cloudflare Stream bills for stored video and delivered viewing minutes. Estimate those separately from the launch fee and source code license, along with payment fees and maintenance.",
        ],
        bullets: [
          "Domain and DNS, cloud and database, and video storage and delivery accounts.",
          "Apple and Google developer accounts and app signing arrangements for a mobile launch.",
          "Payment provider accounts, billing contacts, monitoring access, and backups.",
        ],
      },
      {
        id: "estimate-the-first-month",
        title: "Estimate the first month of streaming",
        paragraphs: [
          "Suppose you launch with 10 series of 50 episodes at 90 seconds each. That is 750 minutes of video before trailers or alternate cuts. If the launch delivers 120,000 minutes to viewers, Cloudflare Stream’s published rates put that example at $5 for the first 1,000 minutes of storage capacity and $120 for delivery. Add hosting, your database, monitoring, payment fees, and support as separate lines.",
          "Use delivered minutes when you compare the estimate with your bill. The video player may buffer or preload part of the next episode, and Cloudflare counts those requests as delivery. After a small launch, compare video delivery with episode starts and completions before you budget for a bigger campaign.",
        ],
        options: [
          { title: "Separate the one-time launch costs", text: "Compare the published deployment and optional source code fees for web, apps, and the complete platform.", href: "/blog/short-drama-app-development-cost#packages", linkLabel: "See deployment and source code prices" },
          { title: "See how a studio set up video delivery", text: "The Short Drama case study shows how one studio combined the vertical player, publishing dashboard, and Cloudflare Stream.", href: "/case-studies/short-drama-platform", linkLabel: "Read the Short Drama case study" },
        ],
      },
      {
        id: "handover-checklist",
        title: "What should another developer be able to do?",
        paragraphs: [
          "Have the person who will maintain the platform join the handover. If you buy the license, ask them to follow the setup instructions on a clean machine and build one of the clients included in your package. Record any service credentials or configuration they need and share those through your team’s secure process.",
        ],
        checklist: [
          { title: "Check the code against the quote", text: "Match the delivered repositories and build instructions to the mobile apps, website, and services listed in the agreement." },
          { title: "Rehearse a small update", text: "Build and deploy a change to a test environment. Check one episode playback and one paid-access flow after the update." },
          { title: "Ask for an export and restore rehearsal", text: "Agree which catalog, user, and access records can be exported. Ask your team to recover a test copy and check that the episodes still point to playable videos." },
          { title: "Assign responsibility after launch", text: "Agree who takes backups, responds to incidents, handles store updates, and answers questions once the included support period ends." },
        ],
      },
    ],
    sources: [
      platformSources[0],
      { title: "Prebuilt Apps: white-label micro drama app and source code offer", url: "https://prebuildapps.com/white-label-micro-drama-app-development/" },
      { title: "VPlayed: micro drama deployment and ownership options", url: "https://www.vplayed.com/micro-drama-ott-app.php" },
    ],
  },
  {
    slug: MICRO_DRAMA_PUBLISHING_SLUG,
    title: "How to Publish a Micro Drama Series",
    seoTitle: "How to Publish a Micro Drama Series | Admin Panel Guide",
    description: "See how to publish a micro drama series using our admin panel, from setting up the catalog and ordering episodes to checking free and VIP access.",
    intro: "Follow one series from the MicroDrama admin panel to the screen a viewer sees. Bring a few episodes and your artwork to a walkthrough if you want to see how your own series would look on web or mobile.",
    takeaway: "Prepare one complete series and test it from the viewer’s side before uploading the rest of your catalog. Check the episode order and the first point where a viewer needs VIP access.",
    datePublished: "2026-11-12",
    sections: [
      {
        id: "dramawave-publishing-for-more-languages",
        title: "DramaWave’s multilingual catalog gives studios a publishing lesson",
        paragraphs: [
          "DramaWave’s App Store listing highlights new originals and subtitle options in languages including Spanish, Japanese, and Korean. For a studio preparing a second market, that means checking the series and its promotion together. The poster and trailer should set the same expectation as the episode a viewer opens.",
          "Try this with the eight-episode pilot below. Pick one additional language, confirm distribution rights for that market, and prepare its series title, poster text, trailer, and subtitles. Have a native speaker watch episodes two and three on a phone. Ask them to check subtitle timing and readability, then follow the shared link and confirm the first VIP episode behaves as expected.",
        ],
      },
      {
        id: "prepare-the-episode-files",
        title: "Prepare a release sheet for the series",
        paragraphs: [
          "Start with one row per episode. Record the season and episode number, the approved video filename, the language, the caption file if you have one, and the planned access level. For an eight-episode pilot, your sheet could list episodes 1 and 2 as free and episodes 3 through 8 as VIP. The publishing and QA teams can then check the same list.",
          "Check that the vertical video reads well on a phone. Leave room for subtitles and player controls so they don’t cover faces or important text. If your deployment uses Cloudflare Stream caption tracks, its documented upload format is WebVTT. Confirm that your target player exposes the tracks, then check language labels and timing on the actual web and app builds.",
        ],
      },
      {
        id: "create-a-series",
        title: "Add the series to the catalog",
        paragraphs: [
          "Start in Series and use Add to create the catalog entry. Have the title, short description, artwork, and episode list ready. Check how the artwork reads as a small thumbnail and on the series page. If you have a trailer, decide where it belongs in the first viewing session.",
          "Give the team publishing the series a folder with the approved files and episode order. A name like SeriesName-S01-E03 makes it easier to match the right file to the right entry. Keep the master videos and artwork somewhere your studio can access later.",
        ],
      },
      {
        id: "add-and-order-episodes",
        title: "Add episodes in viewing order",
        paragraphs: [
          "Open the series, select the season, and go to Episodes. Add individual episodes or use the bulk upload option shown in the admin panel. Check each episode number and status before publishing. Play the first, last, and a few middle episodes to catch a misnumbered file or the wrong video before viewers do.",
          "Start with a small batch and let the video provider process the files. Open the actual player and verify the video, audio, and caption tracks before uploading the rest. If an episode fails to play, compare the file and processing status with your release sheet before deciding whether to retry the upload or replace the source file.",
        ],
      },
      {
        id: "configure-free-and-vip-access",
        title: "Choose which episodes are free and which require VIP",
        paragraphs: [
          "For a sample release, make the first two episodes free and set the third to VIP. Open episode two as a viewer and continue to episode three. Check that the VIP message explains what the viewer gets and that an eligible account can play the locked episode.",
          "Repeat the check with a fresh account on each launch platform. If you want coins, rewarded unlocks, or a different access model, bring the exact viewing flow to the walkthrough so we can confirm the scope.",
        ],
        bullets: [
          "Open the shared link to the VIP episode directly and check that the access rule still applies.",
          "Try the transition with a viewer who has active VIP, and again with one whose access has ended.",
          "For a combined release, check web and app checkout separately. Confirm what should happen when a subscriber switches devices.",
        ],
      },
      {
        id: "feature-the-series",
        title: "Help viewers find the new series",
        paragraphs: [
          "In the demo admin panel, Home Sections shows which catalog widgets are active and how they’re ordered. If your launch uses a spotlight or a new releases section, check which series it shows and where it appears on the viewer’s home screen. A series can be playable from a direct link and still be hard to find in the catalog.",
          "Before sending traffic, open the destination from a fresh phone session. Check that tapping the poster or the campaign link takes viewers to the intended series or opening episode. Check web and mobile separately if you plan to send traffic to both.",
        ],
      },
      {
        id: "check-the-viewer-experience",
        title: "Review the series as a viewer",
        paragraphs: [
          "Open the published series from the catalog on a phone. Start episode one, continue to the next episode, and try a shared web link if the website is part of your release. Ask someone outside the publishing team to follow the same steps so you can catch anything the admin view made easy to miss.",
        ],
        bullets: [
          "The title and poster are legible on a small screen.",
          "The series opens at the intended episode and the next episode plays in order.",
          "The free and VIP episodes behave as configured for the viewer’s account.",
        ],
      },
      {
        id: "check-and-correct-after-release",
        title: "Review the release and correct mistakes",
        paragraphs: [
          "Give one person the job of checking the live series and responding to issues. If viewers report the wrong cut or a broken episode, record the series, season, episode number, and where the report came from. After correcting it, retest the same link and the next-episode transition so you can confirm the fix from the viewer’s side.",
          "If you have episode-level reporting, start with three numbers: episode one starts, episode two completions, and visits to the first VIP episode. A drop before viewers see the VIP offer is a reason to review discovery, playback, and episode order before changing the offer.",
        ],
        options: [
          { title: "Plan how viewers unlock episodes", text: "Use the monetization guide to compare VIP passes, episode purchases, and rewarded ads.", href: "/blog/short-drama-monetization", linkLabel: "Compare episode access models" },
        ],
      },
    ],
    sources: [
      { title: "DramaWave: original series and subtitle options on the App Store", url: "https://apps.apple.com/us/app/dramawave-dramas-reels/id6670430706" },
      { title: "Cloudflare Stream: uploading video", url: "https://developers.cloudflare.com/stream/uploading-videos/" },
      { title: "Cloudflare Stream: adding caption tracks", url: "https://developers.cloudflare.com/stream/edit-videos/adding-captions/" },
      { title: "MultiTV: catalog tools for micro drama platforms", url: "https://multitvsolution.com/micro-drama-platform.php" },
      { title: "Vodlix: content management and release scheduling checklist", url: "https://vodlix.com/blog/best-short-drama-app-builders" },
    ],
  },
  {
    slug: MICRO_DRAMA_APP_CHECKLIST_SLUG,
    title: "Micro Drama App Launch Checklist for iOS and Android",
    seoTitle: "Micro Drama App Launch Checklist | App Store & Google Play",
    description: "Prepare a white-label micro drama app for iOS and Android with a checklist for developer accounts, store listings, VIP testing, and app review.",
    intro: "A white-label app gives you a working product to configure and test. You still need a launch catalog, developer accounts, working payments, and a build Apple and Google can review. Use this checklist to get those pieces ready together.",
    takeaway: "Set up the developer accounts and prepare one complete series early. Then test the viewer and payment flows on both phones before submitting the apps.",
    datePublished: "2026-11-12",
    sections: [
      {
        id: "before-kickoff",
        title: "Prepare accounts, branding, and a launch series",
        paragraphs: [
          "Set up Apple Developer and Google Play Console accounts for the business publishing the apps. Decide who will manage each account and give your implementation team the access it needs for setup and submission. Confirm which countries you plan to launch in and that you can distribute your series there.",
          "Gather your app name, icon, artwork, support contact, and policy links. Prepare one complete series with the correct episode order, plus any captions or artwork it needs. Choose which episodes are free and describe what a VIP viewer can watch.",
        ],
        bullets: [
          "Studio: confirm the app name, launch markets, approved series and artwork, and the person who owns each developer account.",
          "Implementation team: confirm the iOS bundle ID, Android package name, app signing, and the test builds tied to your store accounts.",
          "Together: agree the subscription price and renewal period, the launch date, and who can respond to a review request or viewer issue.",
        ],
      },
      {
        id: "plan-the-release-timeline",
        title: "Build store testing into the schedule",
        paragraphs: [
          "Our setup estimate is 2–4 weeks once the agreed scope, branding, videos, and account access are ready. Plan the store release around separate milestones: test builds available, store submission complete, and the public listings live. The last milestone depends on the store accounts, testing and review.",
          "Google says personal Play developer accounts created after November 13, 2023 must run a closed test with at least 12 testers continuously opted in for at least 14 days before applying for production access. Check the requirement in the account you’ll use and recruit testers early if it applies. Use TestFlight to distribute the iOS test build and collect feedback before App Store submission.",
        ],
        options: [
          { title: "Get the first series ready for testing", text: "Prepare the episode order, artwork, and free-to-VIP transition before giving testers the build.", href: `/blog/${MICRO_DRAMA_PUBLISHING_SLUG}`, linkLabel: "Follow the series publishing guide" },
        ],
      },
      {
        id: "test-ios-and-android",
        title: "Test a free episode and a VIP purchase on both platforms",
        paragraphs: [
          "Use test builds and test billing accounts on real iOS and Android devices. Walk through the same sequence on both: sign in if required, watch a free episode, reach a VIP episode, and make a test purchase. Confirm that access updates after the purchase and works when the viewer closes and reopens the app.",
          "The Micro Drama app package uses Apple and Google Play billing for VIP subscriptions. Use Apple’s sandbox and a Google Play license tester account to exercise the purchase flows. If the website is also launching, give its checkout a separate test pass and confirm which purchases should carry across platforms.",
        ],
        checklist: [
          { title: "Watch on Wi-Fi and mobile data", text: "Start a free episode, swipe to the next, then leave and reopen the app. Check that video, sound, captions, and viewing progress behave as expected." },
          { title: "Complete and cancel a test payment", text: "Verify that a confirmed purchase opens the VIP episode. Cancel or decline a purchase and check that the episode stays locked and the viewer can retry." },
          { title: "Test renewal and restoration", text: "Use a test subscription to check expiry and renewal. Reinstall the app or use another supported device and verify the expected purchase restoration flow." },
          { title: "Record a reproducible issue", text: "Capture the build number, device, network, episode, and account state so the team can repeat the problem." },
        ],
      },
      {
        id: "submit-for-review",
        title: "Submit the builds with clear reviewer instructions",
        paragraphs: [
          "Use screenshots that match the submitted build. Complete the store listing, content rating, privacy disclosures, and any billing information required for your release. In the review notes, name a sample series and the episode that triggers VIP access. If sign-in is required, provide review access and keep the backend available for the review.",
          "Try the review instructions on a clean install. An example route is: sign in with the review account, open the named series, play episode one, then open the VIP episode. Verify that an account-based release has the deletion flow and links required by the stores. Apple requires in-app account deletion for apps that support account creation. Google Play requires a way to request deletion in the app and an external web link when its account deletion policy applies.",
        ],
      },
      {
        id: "release-day-checklist",
        title: "Check the public release before sending viewers to it",
        paragraphs: [
          "The app package includes help preparing and submitting the builds through your developer accounts. Apple and Google handle their own review. Once the listings are live, install from each public store page and test the same series a viewer will see from your first campaign.",
          "In the first few days, check for problems at three points: after install, at first playback, and when a viewer tries to get VIP access. If installs are coming in but first episodes rarely start, verify the campaign destination and opening catalog before increasing spend. If viewers reach the paywall but report that their purchases don’t unlock episodes, check the billing and access flow before adjusting prices.",
        ],
        checklist: [
          { title: "Check the store links", text: "Open the public listings from a phone and confirm they’re available in the intended launch markets." },
          { title: "Check the first viewing session", text: "Install the public build, open a series, and make sure free playback and the VIP prompt behave as expected." },
          { title: "Assign release support", text: "Give one person responsibility for monitoring playback or billing issues and responding to early viewer feedback." },
        ],
      },
    ],
    sources: [
      { title: "Apple Developer: App Review Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/" },
      { title: "Apple Developer: TestFlight beta testing", url: "https://developer.apple.com/testflight/" },
      { title: "Apple Developer: testing purchases in sandbox", url: "https://developer.apple.com/help/app-store-connect/test-in-app-purchases/overview-of-testing-in-sandbox/" },
      { title: "Google Play Console: prepare and roll out a release", url: "https://support.google.com/googleplay/android-developer/answer/9859348?hl=en" },
      { title: "Google Play Console: testing requirements for new personal accounts", url: "https://support.google.com/googleplay/android-developer/answer/14151465?hl=en" },
      { title: "Android Developers: test Google Play Billing", url: "https://developer.android.com/google/play/billing/test" },
      { title: "Google Play Console: app account deletion requirements", url: "https://support.google.com/googleplay/android-developer/answer/13327111?hl=en" },
      { title: "Flicknexs: micro drama build and launch considerations", url: "https://flicknexs.com/micro-drama-app-development" },
    ],
  },
  {
    slug: "short-drama-app-development",
    title: "How to Build a Micro Drama App",
    seoTitle: "How to Build a Micro Drama App | Development Guide",
    description: "Plan a micro drama app from catalog to launch. Learn what to build for vertical playback, publishing, episode access, and web, iOS, and Android testing.",
    intro: "Start a micro drama app with one complete series and a clear viewing path. Decide how viewers will discover an episode, what they can watch for free, and how your team will publish and manage the catalog. Use these steps to plan the first version of a short drama app for web, iOS, or Android.",
    dateModified: "2026-11-12",
    takeaway: "Define your content rights, audience and first monetization model before writing a feature list. Then evaluate the viewer experience and operator workflow together.",
    sections: [
      { id: "audience", title: "1. Start with the audience and the catalog", paragraphs: ["Choose a specific launch audience: its language, preferred genres, viewing devices and payment options. A catalog designed for one market may need different subtitles, artwork, episode descriptions and prices in another. App translation alone does not localize the entertainment experience.", "Create an inventory of the series you can distribute. Record territory and language rights, permitted devices, availability windows, master files, captions and promotional assets. Producing or licensing dramas is a separate activity from buying a software platform; a deployment does not supply rights to another publisher’s shows."], bullets: ["Prepare at least one complete series for end-to-end acceptance testing.", "Name the person who approves artwork, uploads episodes and handles viewer support.", "Decide whether the first release is web-first, native apps, or the complete suite."] },
      { id: "viewer", title: "2. Design the first viewing session", paragraphs: ["Map a visitor’s path from a shared episode link to the player, the next episode and the first access decision. Show titles, captions and an obvious way to resume. Decide when authentication is necessary rather than putting every visitor behind a login before they understand the product.", "Separate initial video start time from transitions to a prefetched episode. Measure both on representative phones and mobile networks. A fast demonstration on office Wi-Fi does not establish a universal playback benchmark. Test interrupted connections, rotated screens, backgrounding and returning to the app."], bullets: ["Discover a series, start an episode and navigate its episode list.", "Leave and resume without losing progress.", "Understand a paywall before entering a payment flow.", "Recover from a network or payment failure without paying twice."] },
      { id: "operations", title: "3. Build the CMS workflow alongside the player", paragraphs: ["An operator needs more than an upload button. Agree how series, seasons, episode order, captions, artwork and publication status are managed. A useful review demonstrates a draft becoming a published series and an incorrect episode being withdrawn safely.", "Access rules must match the catalog: which episodes are free, which need a pass, and what happens when availability expires. Ask who can change prices and publication settings. For a larger team, assess roles, audit history and approval workflows as explicit scope rather than assuming they are present."], bullets: ["Request a demonstration with a sample series, not only dashboard screenshots.", "Check how failed uploads and encodes are reported.", "Define content backup, export and account handover responsibilities."] },
      { id: "monetization", title: "4. Pick one clear monetization model first", paragraphs: ["VIP subscriptions, individual episode unlocks and rewarded ads create different entitlement rules. Combining every model immediately increases payment, support and reporting cases. Start with the access model that fits the catalog and expand after you can observe real viewing and payment behavior.", "The platform’s own commission is only one expense. App-store commissions, payment processing, refunds, taxes and advertising terms can still affect net receipts. Model those separately from a vendor’s zero-revenue-share promise. The linked monetization guide covers access rules and failure cases in more detail."] },
      { id: "architecture", title: "5. Scope the software and the operating costs separately", paragraphs: ["The usual layers are viewer clients, account and entitlement services, a CMS, payment integrations, and a video processing/delivery provider. Cross-platform apps can share implementation, but each store still needs its own configuration and release checks. The web player also has browser-specific playback and purchase behavior to test.", "Managed video delivery charges grow with usage. Cloudflare Stream documents storage capacity and delivered viewing minutes as separate billing dimensions. A low server bill does not describe the total cost of an actively watched catalog. Estimate viewing demand, stored duration, hosting, monitoring and ongoing engineering independently."], bullets: ["Separate deployment, source licensing and recurring provider usage in the proposal.", "Check whether offline access, coin wallets, advanced analytics or DRM are included or custom.", "Distinguish signed playback tokens from a verified multi-DRM implementation."] },
      {
        id: "launch",
        title: "6. Agree on what must work before launch",
        paragraphs: [
          "For an agreed white-label package, we estimate 2–4 weeks for setup once we receive your videos, branding, and account access. Custom work can change the estimate. Allow separate time for store review if your launch includes mobile apps.",
        ],
        checklist: [
          { title: "Prepare one complete series", text: "Gather episodes, artwork, captions, and account access. Confirm where you can distribute the series." },
          { title: "Set the access rules", text: "Publish a sample series and check which episodes are free and which require a purchase or pass." },
          { title: "Test viewing and payments", text: "Use real devices to test playback, failed payments, purchase restoration, and cancellation on the platforms you’ll launch." },
          { title: "Agree who runs the release", text: "Confirm store ownership, support, source access, and running costs. Assign someone to handle alerts and restore backups." },
        ],
      },
      { id: "measurement", title: "7. Decide what you need to measure", paragraphs: ["Specify the decisions your reporting should support. Episode starts and completions help editorial teams understand viewing, while paywall exposure, checkout attempts and verified transactions describe the access journey. Those events are related but should not be treated as interchangeable. A play event alone does not prove a viewer watched the entire episode.", "Separate acquisition reporting by market, device and campaign. Compare repeat viewing and net receipts with content and delivery costs. A campaign generating many installs may still attract viewers who do not finish episodes or return. Use your own observations to decide whether to change the catalog, the access rule or the acquisition creative."], bullets: ["Document what counts as a start, completion, purchase and reward.", "Test events on a real session before relying on a dashboard.", "Keep viewer contact details out of general analytics events.", "Agree how to investigate a discrepancy between billing and access."] },
      { id: "handover", title: "8. Plan support and handover", paragraphs: ["A launch is the beginning of an operating relationship. Ask who updates mobile dependencies, responds to store requirements, monitors provider errors and handles backups. Thirty days of engineering support is not the same commitment as ongoing managed operations or a service-level agreement. Record the post-launch arrangement and escalation path.", "Restrict production administrative access to the people who need it. Keep demo credentials and test payment settings separate from live accounts. Review how account removal, content withdrawal and backup recovery work. Access protection, encryption and rights management should each have a concrete implementation and acceptance test rather than being grouped under an unexplained security badge."], bullets: ["Inventory client-owned cloud, store, domain and payment accounts.", "Confirm repository delivery only for the source license actually purchased.", "Document backup ownership, recovery steps and maintenance responsibilities.", "Agree how catalog and customer data can be exported."] },
      { id: "supplier-review", title: "9. Check the product before choosing a supplier", paragraphs: ["Use the same scenario with each supplier: publish a sample series, watch its free episodes, reach an access decision, verify the result and inspect the operator record. Include an interrupted connection and a return on another device. Request a written record of any step that is unavailable in the demonstrated build.", "Then compare proposals against that scenario. A standard deployment may be the right route when the workflow already fits. Additional custom work should have its own estimate, acceptance conditions and maintenance implications. This approach gives a studio a more useful basis for choosing a partner than comparing an advertised launch time or a long list of familiar app names."] },
    ],
    sources: platformSources,
  },
  {
    slug: "build-app-like-reelshort",
    title: "How to Build an App Like ReelShort: MVP, Costs and Launch Options",
    description: "A founder’s guide to a ReelShort-style platform: serialized video, catalog operations, MVP scope, white-label versus custom delivery, costs and live demos.",
    intro: "An app like ReelShort is a serialized entertainment business, not simply a vertical video feed. For a studio or founder, the useful question is which viewer journey, catalog workflow and commercial model to launch under an independent brand.",
    takeaway: "Start with a complete discovery-to-playback-to-access journey for your own licensed catalog. Add advanced engagement features only when their scope and operating costs are understood.",
    dateModified: "2026-11-12",
    sections: [
      {
        id: "reference",
        title: "1. How ReelShort turns a scene into a reason to install",
        paragraphs: [
          "In a 2024 TIME interview, Crazy Maple Studio CEO Joey Jia described how ReelShort used clips on Facebook to make viewers curious enough to download the app. He also described using viewing and payment data to see where viewers lost interest and which stories they paid to finish. Google Play displayed 100M+ downloads for ReelShort when checked in November 2026. That figure is a cumulative Android download milestone. Repeat viewing and paid conversion each need their own measure.",
          "A smaller studio can test the same idea with one series. Cut three clips from footage you have permission to promote. Try one that introduces the central conflict, one that reveals the stakes, and one that stops before a choice is resolved. Give all three a similar audience, budget, and destination so you can compare the opening scenes fairly.",
        ],
        bullets: [
          "Link each clip to the same opening episode and make sure the first screen shows the story viewers expect.",
          "Count clicks, first episode starts, and completions separately. A clip can win on clicks while sending fewer viewers who finish the episode.",
          "Before spending more, check whether viewers who finish episode one continue to episode two or return for the next release.",
        ],
      },
      { id: "mvp", title: "2. Define a focused first release", paragraphs: ["Write a release checklist around the first complete series. It should cover discovery, episode playback, authentication where necessary, watch progress, access rules and a support route. Choose one principal paid-access model before adding overlapping passes, wallets and promotions.", "The operator side needs equal attention: creating a series, placing episodes in order, uploading artwork and captions, setting access and publishing. A polished viewer screen without a workable catalog operation leaves the studio dependent on developers for routine releases."], bullets: ["Launch catalog and series/episode metadata.", "Vertical player, episode navigation and viewing continuity.", "Account access and one agreed monetization model.", "CMS publishing workflow and failed-upload visibility.", "Basic viewing and payment reporting, with definitions agreed in scope."] },
      { id: "delivery", title: "3. Choose a white-label platform or a custom build", paragraphs: ["A white-label deployment fits when an existing product’s workflows closely match your first release. Evaluate the actual build rather than a feature checklist: test the player, ask to see publishing, and identify configuration versus new development. Open the web, Android, or iOS demo at the top of the guide to start that evaluation.", "Custom delivery becomes relevant when the product depends on unusual editorial workflows, a new access model or integrations outside the existing foundation. A hybrid plan can launch an agreed base while separately scoping later work. Do not assume an AI recommendation system, offline downloads or licensed multi-DRM is included merely because a competitor offers a similar experience."] },
      { id: "cost", title: "4. Understand what the development price buys", paragraphs: ["Compare proposals on client platforms, CMS scope, integrations, deployment, testing and support. Separate the base deployment from source-code licensing. The linked cost guide compares our published packages and source code options.", "Your complete launch budget also includes content rights or production, video storage and delivery, payment/store fees and audience acquisition. Paid advertising is not a development feature. A working app does not by itself establish that a catalog can acquire and retain viewers profitably."], bullets: ["Request a list of included workflows and explicitly excluded features.", "Confirm source rights, cloud-account ownership and export options.", "Budget for ongoing support after the included support period.", "Model usage at several viewing levels rather than relying on one monthly hosting number."] },
      { id: "acceptance", title: "5. Validate the experience before launch", paragraphs: ["Test a viewer arriving from a shared episode link, opening the player, returning after interruption and reaching a paid-access decision. Repeat on slower mobile connections and a representative older phone. Record initial start time, playback interruptions and episode transitions as separate measures.", "Run a second acceptance session with the person who will operate the CMS. Publish a sample series, change its availability and correct an upload. Agree how billing issues are investigated and how access is restored. These practical tests are more useful than a promise of identical performance to an established entertainment network."] },
      { id: "readiness", title: "6. Prepare the studio’s side of the project", paragraphs: ["Have approved brand assets, a launch catalog, captions, territory rights and developer/payment accounts ready. Nominate one decision-maker for scope and one operator for catalog training. External account approval and app-store review sit outside a developer’s direct control.", "Bring a short list of must-have features to a walkthrough. Ask which can be demonstrated now, which are configuration and which require a separate quote. A scoped proposal should make that distinction visible before any delivery dates are agreed."] },
    ],
    sources: [
      { title: "TIME: interview with Crazy Maple Studio CEO Joey Jia", url: "https://time.com/7173765/reelshort-crazy-maple-studio-joey-jia-interview/" },
      { title: "ReelShort: official Google Play listing", url: "https://play.google.com/store/apps/details?id=com.newleaf.app.android.victor" },
      ...platformSources,
    ],
  },
  {
    slug: "build-app-like-dramabox",
    title: "How to Build an App Like DramaBox: Episode Access, VIP and Payments",
    description: "Plan a DramaBox-style short-drama product: free episodes, VIP access, optional coin unlocks, verified payments, CMS controls and realistic launch scope.",
    intro: "For founders studying DramaBox, access to episodes is a central product decision. This guide focuses on how to design that decision clearly for viewers and reliably for the team handling payments, catalog releases and support.",
    takeaway: "Define what a purchase grants before selecting payment screens. Episode ownership, time-limited VIP access and ad rewards need distinct rules and recoverable transaction records.",
    dateModified: "2026-11-12",
    sections: [
      {
        id: "reference",
        title: "1. What DramaBox’s revenue tells us about paid viewing",
        paragraphs: [
          "Sensor Tower estimated that DramaBox generated close to US$140 million in in-app revenue in Q1 2026. Google Play displayed 100M+ cumulative Android downloads when checked in November 2026 and lists both ads and in-app purchases. The quarterly estimate covers in-app revenue. Profit depends on costs such as content, marketing, streaming, and operations.",
          "For your first release, measure a series from its free opening through the first paid episode. For example, if 200 viewers see a VIP offer, 20 complete a verified purchase, and 15 then play the locked episode, the offer converted 10% of viewers who saw it and 75% of buyers started watching. These are example numbers for planning your own reports. That last step helps you spot access problems after a successful payment.",
          "Offers can vary by market and account. Test the terms and price your own viewer sees, then check the purchase, access, and support flows on each launch platform. If the plan calls for a coin wallet or a custom refund flow, include it explicitly in your walkthrough and quote.",
        ],
      },
      { id: "rules", title: "2. Write the episode-access rules in plain language", paragraphs: ["For each episode, decide whether access is free, purchased individually, included in a VIP period or awarded after an advertisement. Specify how long that access lasts and whether it works across devices. Avoid making a viewer guess whether a payment unlocks one chapter or a complete series.", "Build a small decision table before engineering the interface. Include a signed-out visitor, a subscribed viewer, someone whose subscription expired and someone returning after a refund. The CMS and backend should apply the same decisions as the player."], bullets: ["Free preview: which episodes are available without a purchase?", "VIP pass: what catalog and time period does it cover?", "Episode unlock: permanent, series-specific or time-limited?", "Rewarded access: what happens if the advertisement is interrupted?", "Availability expiry: what does a previously paying viewer see?"] },
      { id: "payments", title: "3. Verify payments before granting access", paragraphs: ["Treat a completed purchase as a server-side entitlement decision, not just a successful animation on a phone. Plan receipt verification, duplicate notification handling, purchase restoration and pending transactions. A viewer changing devices should not need to pay again solely because local app state was lost.", "Refunds, cancellation and renewal are different events. Cancellation may stop a future renewal while an existing paid period remains active; the product must follow its published terms and provider rules. Test these cases using the appropriate provider test environments before launch."] },
      { id: "coins", title: "4. Scope a coin wallet as a separate subsystem", paragraphs: ["If you choose coins, define the purchase, bonus, spend and reversal records. Distinguish promotional credits from paid credits where your rules require it. A balance alone cannot explain a dispute; the operator needs a transaction history and a link between a spend and the resulting access.", "Design duplicate handling around interrupted connections. Retrying an episode unlock should not spend twice, and retrying a reward should not grant it twice. A coin economy, ledger and its administrative tools should be priced and demonstrated explicitly rather than assumed from the words short-drama platform."], bullets: ["Record each change with a transaction identifier and reason.", "Define expiry, bonus usage and refund behavior before launch.", "Verify ad-reward callbacks rather than trusting a client-only counter.", "Agree what support staff may correct and how corrections are recorded."] },
      { id: "operations", title: "5. Give operators usable controls", paragraphs: ["The team publishing a drama needs to understand which episodes are previews, when the next episode becomes available and which plans cover the series. Review the screens used to change those rules and preview the result before publishing.", "Measure access decisions alongside viewing: paywall exposure, checkout starts, verified purchases and subsequent viewing are separate events. An apparent drop in conversion could be a failed payment callback or a poorly placed gate. Define the metrics before comparing series or changing prices."] },
      { id: "launch", title: "6. Evaluate the supplier with a scenario", paragraphs: ["Bring a sample series and ask for a walkthrough from upload to an episode access decision. Then ask what happens when payment is pending, a subscriber returns on another device and an operator needs to investigate a complaint. Use the live demo links to try the viewer experience and ask us about the features you need.", "Compare base deployment, optional source licensing, custom monetization work and recurring usage separately. We take no platform revenue share; that does not remove payment processing, app-store fees or other operating expenses. Confirm the access model and scope in writing before choosing the launch package."] },
    ],
    sources: [
      shortDramaMarketReport,
      { title: "DramaBox: official Google Play listing", url: "https://play.google.com/store/apps/details?id=com.storymatrix.drama" },
      ...platformSources,
    ],
  },
  {
    slug: "short-drama-app-development-cost",
    title: "How Much Does It Cost to Build a Micro Drama App?",
    seoTitle: "Micro Drama App Development Cost | Packages & Running Costs",
    description: "Compare micro drama app, website, and platform pricing. Budget for deployment, optional source code, video delivery, store fees, and ongoing support.",
    dateModified: "2026-11-12",
    intro: "A useful short-drama budget separates the software you launch from the entertainment business you operate. A one-time deployment price does not include an unlimited catalog, unlimited streaming or a guaranteed audience.",
    takeaway: "Compare equivalent deliverables. Add source rights, custom work and recurring operations to the base deployment rather than treating every quote as the same product.",
    sections: [
      { id: "scope", title: "1. Choose the launch surface before comparing quotes", paragraphs: ["An app-only launch, a mobile-web launch and a complete platform with apps and a website solve different distribution needs. The native route requires store preparation and device testing. Web-first distribution lets someone open an episode link without installing an app, but still needs its own browser and checkout testing.", "The package comparison below reads our current published catalog. App-only and web-only are separate offers, and the complete platform combines apps, a website, and the agreed admin tools. This is our offer, not a universal industry price or a competitor’s actual engineering budget."] },
      { id: "license", title: "2. Check whether source code is included", paragraphs: ["A deployed and branded platform is not automatically the same purchase as a source-code license. Identify which repositories, documentation and commercial rights the license covers, how the code is delivered, and what modification or redistribution rights apply.", "The source add-on and combined totals below come from the same price catalog as the product pages. Optional engineering is not included in those totals. Ask for a written breakdown when changing payment integrations, extending the CMS or adding a new viewer feature."] },
      { id: "usage", title: "3. Budget for video storage and delivered minutes", paragraphs: ["Cloudflare Stream documents charges for stored video capacity and delivered viewing minutes. Its published delivery price is $1 per 1,000 minutes, with storage capacity purchased at $5 per month per 1,000 stored minutes. Check the provider’s current terms before budgeting; no additional bandwidth charge does not mean delivery is free.", "For example, 1,000 viewers receiving 20 minutes each means 20,000 delivered minutes, or $20 at that delivery rate. Storage capacity, hosting, database services, monitoring, taxes and other costs are additional. Your bill will depend on actual usage."], bullets: ["Estimate delivered minutes across low, expected and high viewing scenarios.", "Count the duration of stored episodes and any provider capacity increments.", "Allow for previewing, preloading and viewing behavior when investigating real usage.", "Assign responsibility for provider accounts, billing alerts and cost review."] },
      { id: "other", title: "4. Include the business costs outside development", paragraphs: ["Content production and licensing are independent budget lines. So are artwork, captions, dubbing and the team publishing new episodes. A software vendor cannot supply another publisher’s dramas simply because the platform resembles its viewing format.", "Revenue also differs from net receipts. Apple, Google and payment providers have their own fees and program rules. Advertising revenue depends on market, inventory, fill and engagement; it should not be used to promise a fixed payback period. Customer acquisition requires its own experiments and budget."], bullets: ["Content production or distribution rights.", "Developer accounts, payment processing and store fees.", "Video usage, hosting and operational monitoring.", "Support, maintenance, security updates and requested changes.", "Audience acquisition and creative production."] },
      { id: "custom", title: "5. Understand why custom scopes differ", paragraphs: ["Offline access, a coin ledger, multi-DRM, recommendation experiments, creator payouts and complex rights rules each introduce specific engineering and acceptance work. A custom proposal may include product design, migration and integrations that a standard deployment does not.", "Rather than quoting a supposed average, request itemized deliverables and assumptions. Compare who operates the infrastructure, what support is included, which risks are shared and how new requirements are priced. A low headline quote with unclear exclusions is difficult to evaluate."] },
      { id: "proposal", title: "6. Tell your developer what you need", paragraphs: ["Specify your launch markets, viewer platforms, initial catalog duration and access model. List the features you consider essential and provide the accounts and assets already available. An estimate becomes more useful when both sides can point to the same release checklist.", "Our base implementation window is estimated at 2–4 weeks for agreed prebuilt scope. Custom requirements, asset delays and external review can change timing. The included support period is not an unlimited maintenance commitment; agree the post-launch operating arrangement before handover."] },
    ],
    sources: platformSources,
  },
  {
    slug: "short-drama-monetization",
    title: "Short-Drama Monetization: Coins, VIP Subscriptions and Rewarded Ads",
    description: "Compare short-drama monetization models, entitlement rules, rewarded-ad verification and costs. Includes examples from FreeReels and links to our live demos.",
    intro: "Monetization controls how a viewer continues a story and what your team must support. Choosing between subscriptions, episode purchases and advertising is a product decision as well as a revenue decision.",
    takeaway: "Start with a model your audience understands and your operations can support. Measure net receipts, repeat viewing and delivery costs before adding more ways to unlock an episode.",
    dateModified: "2026-11-12",
    sections: [
      {
        id: "freereels",
        title: "1. How FreeReels makes free viewing part of the offer",
        paragraphs: [
          "FreeReels promotes free access to short dramas. Its Google Play listing showed 100M+ cumulative Android downloads when checked in November 2026 and labels the app as containing ads and in-app purchases. Sensor Tower highlighted its download growth in India and Southeast Asia in its 2026 report. The listing and report give a picture of reach. You would need the app’s ad earnings and operating costs to judge how much that reach is worth.",
          "If you’re considering ads, start with one series and one market. For example, offer two groups the same first two episodes for free. Let one group watch episode three directly and offer the other a rewarded ad to unlock it. Compare how many viewers start and finish episode three, how many return, and what the ads earn per viewer who reached that choice.",
          "If ads bring in money but fewer viewers make it to the next episode, try a later placement or a different reward before adding more ad breaks. Keep the story, audience, and episode order consistent while you test the change.",
        ],
      },
      { id: "vip", title: "2. VIP subscriptions: access for a defined period", paragraphs: ["A VIP plan can make a continuing catalog easy to explain: an eligible viewer watches the included content during an active period. Define any exclusions, renewal behavior and what happens to access after cancellation or expiry. The viewer should know the period and price before confirming.", "Subscriptions require purchase verification, restoration and renewal-state handling. For the operator, a repeatable publishing schedule and a clear support route matter alongside the payment integration. Evaluate retention using your own catalog rather than borrowing another app’s reported performance."] },
      { id: "coins", title: "3. Coins and episode unlocks: make value understandable", paragraphs: ["Coins can connect small purchases with episode-level access, but they also introduce a balance, a ledger, bonus rules and refund questions. Explain the effective cost of access and how long an unlock lasts. Avoid hiding the distinction between a paid balance and a promotional reward.", "A wallet is a separately scoped capability. Demonstrate its payment, spend, reversal and duplicate-request behavior before promising it in a launch. Do not assume that every plan on a short-drama price card includes a complete coin economy and its administrative tooling."] },
      { id: "ads", title: "4. Rewarded ads: verify the reward and the interruption", paragraphs: ["In a rewarded flow, the viewer chooses an advertisement in return for an explicit benefit, such as access to an episode. State the benefit before playback. Decide what happens after an interrupted ad, a failed callback or a repeated request, and verify completion with the supported provider integration.", "An ad-heavy experience also has a viewer cost: time and interruption. Track whether people continue watching after receiving the reward, not just how many ads start. Availability, fill and proceeds vary by region and provider; an installed SDK is not a guarantee of profitable inventory."] },
      { id: "economics", title: "5. Work out what you keep after costs", paragraphs: ["To estimate what you keep, subtract streaming, content and other running costs from the money you receive. For subscriptions, account for relevant store/payment deductions and refunds. For ads, disclose assumed completed impressions, fill and net revenue per thousand impressions. Keep acquisition costs visible rather than assuming every install arrives free.", "For example, if a planning sheet assumes 10,000 completed impressions and $5 net per thousand impressions, the implied receipts are $50. The $5 rate is just an example; your actual ad revenue will vary. Compare it with the viewing minutes and costs required to deliver those sessions."] },
      { id: "experiment", title: "6. Choose a launch experiment you can measure", paragraphs: ["Test one clear access model with a defined catalog and audience. Measure episode starts, completion, access decisions, verified purchases or rewards, repeat viewing and support requests. Agree event definitions so that a failed purchase does not look like a completed transaction.", "Open the live demo or ask us to show you the admin panel. Ask which access rules are already supported, what is configurable and what needs custom work. Choose scope from evidence before mixing several revenue models in the first release."], bullets: ["Define the first free-to-paid or free-to-reward transition.", "Publish understandable prices, durations and access rules.", "Test interruption, restoration and duplicate notifications.", "Review net receipts and repeat viewing by market and channel.", "Add another monetization path only with a clear reason and acceptance plan."] },
    ],
    sources: [
      { title: "FreeReels: official Google Play listing", url: "https://play.google.com/store/apps/details?id=com.freereels.app" },
      shortDramaMarketReport,
      ...platformSources,
    ],
  },
];

export function dramaArticle(slug: string): DramaArticle {
  const article = DRAMA_ARTICLES.find(item => item.slug === slug);
  if (!article) throw new Error(`Unknown article: ${slug}`);
  return article;
}
