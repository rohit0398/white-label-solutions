import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";
import type { LaunchStep } from "@/components/ui/LaunchSteps";

export interface DramaArticle {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  intro: string;
  takeaway: string;
  datePublished?: string;
  dateModified?: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
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

const platformSources = [
  { title: "Cloudflare Stream: storage and delivery pricing", url: "https://developers.cloudflare.com/stream/pricing/" },
  { title: "Apple Developer: program and fee information", url: "https://developer.apple.com/programs/whats-included/" },
  { title: "Google Play: service fees", url: "https://support.google.com/googleplay/android-developer/answer/112622?hl=en" },
];

export const DRAMA_ARTICLES: DramaArticle[] = [
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
    sections: [
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
        id: "handover-checklist",
        title: "What should another developer be able to do?",
        paragraphs: [
          "Have the person who will maintain the platform join the handover. If you buy the license, ask them to follow the setup instructions on a clean machine and build one of the clients included in your package. Record any service credentials or configuration they need and share those through your team’s secure process.",
        ],
        checklist: [
          { title: "Check the code against the quote", text: "Match the delivered repositories and build instructions to the mobile apps, website, and services listed in the agreement." },
          { title: "Rehearse a small update", text: "Build and deploy a change to a test environment. Check one episode playback and one paid-access flow after the update." },
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
          "If your release uses captions or multiple language versions, verify the files and playback on the devices you’ll launch on. Confirm how your team will correct or replace a video if an episode goes out with the wrong edit.",
        ],
      },
      {
        id: "configure-free-and-vip-access",
        title: "Choose which episodes are free and which require VIP",
        paragraphs: [
          "For a sample release, make the first two episodes free and set the third to VIP. Open episode two as a viewer and continue to episode three. Check that the VIP message explains what the viewer gets and that an eligible account can play the locked episode.",
          "Repeat the check with a fresh account on each launch platform. If you want coins, rewarded unlocks, or a different access model, bring the exact viewing flow to the walkthrough so we can confirm the scope.",
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
    ],
    sources: [
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
      },
      {
        id: "test-ios-and-android",
        title: "Test a free episode and a VIP purchase on both platforms",
        paragraphs: [
          "Use test builds and test billing accounts on real iOS and Android devices. Walk through the same sequence on both: sign in if required, watch a free episode, reach a VIP episode, and make a test purchase. Confirm that access updates after the purchase and works when the viewer closes and reopens the app.",
          "Try cancelling the payment prompt and retrying after a network interruption. If your package uses recurring plans, test purchase restoration and check how access behaves after expiry. Write down the exact episode, device, and account state for any issue you find.",
        ],
      },
      {
        id: "submit-for-review",
        title: "Submit the builds with clear reviewer instructions",
        paragraphs: [
          "Use screenshots that match the submitted build. Complete the store listing, content rating, privacy disclosures, and any billing information required for your release. In the review notes, name a sample series and the episode that triggers VIP access. If sign-in is required, provide review access and keep the backend available for the review.",
          "Check the production access requirements in your Play Console. Google applies additional testing requirements to eligible new personal developer accounts. Plan testing and store review into the schedule, and confirm who will respond if a reviewer requests a change.",
        ],
      },
      {
        id: "release-day-checklist",
        title: "Check the public release before sending viewers to it",
        paragraphs: [
          "The app package includes help preparing and submitting the builds through your developer accounts. Apple and Google handle their own review. Once the listings are live, install from each public store page and test the same series a viewer will see from your first campaign.",
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
      { title: "Google Play Console: prepare and roll out a release", url: "https://support.google.com/googleplay/android-developer/answer/9859348?hl=en" },
      { title: "Google Play Console: testing requirements for new personal accounts", url: "https://support.google.com/googleplay/android-developer/answer/14151465?hl=en" },
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
    sections: [
      { id: "reference", title: "1. What to learn from ReelShort", paragraphs: ["ReelShort’s official listing describes short, vertically presented serialized entertainment. That is a reference for the viewer format, not public documentation of its backend, recommendation engine or development budget. Competitor screenshots cannot establish which infrastructure or programming language a service uses.", "Use the reference to discuss outcomes: a viewer can discover a story, understand its episode sequence, continue watching and make a clear access decision. Build original branding and use content you have permission to distribute. Try our short-drama app from the live demo at the top of this guide."] },
      { id: "mvp", title: "2. Define a focused first release", paragraphs: ["Write a release checklist around the first complete series. It should cover discovery, episode playback, authentication where necessary, watch progress, access rules and a support route. Choose one principal paid-access model before adding overlapping passes, wallets and promotions.", "The operator side needs equal attention: creating a series, placing episodes in order, uploading artwork and captions, setting access and publishing. A polished viewer screen without a workable catalog operation leaves the studio dependent on developers for routine releases."], bullets: ["Launch catalog and series/episode metadata.", "Vertical player, episode navigation and viewing continuity.", "Account access and one agreed monetization model.", "CMS publishing workflow and failed-upload visibility.", "Basic viewing and payment reporting, with definitions agreed in scope."] },
      { id: "delivery", title: "3. Choose a white-label platform or a custom build", paragraphs: ["A white-label deployment fits when an existing product’s workflows closely match your first release. Evaluate the actual build rather than a feature checklist: test the player, ask to see publishing, and identify configuration versus new development. Our web, Android and iOS test links are provided below for that evaluation.", "Custom delivery becomes relevant when the product depends on unusual editorial workflows, a new access model or integrations outside the existing foundation. A hybrid plan can launch an agreed base while separately scoping later work. Do not assume an AI recommendation system, offline downloads or licensed multi-DRM is included merely because a competitor offers a similar experience."] },
      { id: "cost", title: "4. Understand what the development price buys", paragraphs: ["Compare proposals on client platforms, CMS scope, integrations, deployment, testing and support. Separate the base deployment from source-code licensing. The linked cost guide compares our published packages and source code options.", "Your complete launch budget also includes content rights or production, video storage and delivery, payment/store fees and audience acquisition. Paid advertising is not a development feature. A working app does not by itself establish that a catalog can acquire and retain viewers profitably."], bullets: ["Request a list of included workflows and explicitly excluded features.", "Confirm source rights, cloud-account ownership and export options.", "Budget for ongoing support after the included support period.", "Model usage at several viewing levels rather than relying on one monthly hosting number."] },
      { id: "acceptance", title: "5. Validate the experience before launch", paragraphs: ["Test a viewer arriving from a shared episode link, opening the player, returning after interruption and reaching a paid-access decision. Repeat on slower mobile connections and a representative older phone. Record initial start time, playback interruptions and episode transitions as separate measures.", "Run a second acceptance session with the person who will operate the CMS. Publish a sample series, change its availability and correct an upload. Agree how billing issues are investigated and how access is restored. These practical tests are more useful than a promise of identical performance to an established entertainment network."] },
      { id: "readiness", title: "6. Prepare the studio’s side of the project", paragraphs: ["Have approved brand assets, a launch catalog, captions, territory rights and developer/payment accounts ready. Nominate one decision-maker for scope and one operator for catalog training. External account approval and app-store review sit outside a developer’s direct control.", "Bring a short list of must-have features to a walkthrough. Ask which can be demonstrated now, which are configuration and which require a separate quote. A scoped proposal should make that distinction visible before any delivery dates are agreed."] },
    ],
    sources: [{ title: "ReelShort: official Google Play listing", url: "https://play.google.com/store/apps/details?id=com.newleaf.app.android.victor" }, ...platformSources],
  },
  {
    slug: "build-app-like-dramabox",
    title: "How to Build an App Like DramaBox: Episode Access, VIP and Payments",
    description: "Plan a DramaBox-style short-drama product: free episodes, VIP access, optional coin unlocks, verified payments, CMS controls and realistic launch scope.",
    intro: "For founders studying DramaBox, access to episodes is a central product decision. This guide focuses on how to design that decision clearly for viewers and reliably for the team handling payments, catalog releases and support.",
    takeaway: "Define what a purchase grants before selecting payment screens. Episode ownership, time-limited VIP access and ad rewards need distinct rules and recoverable transaction records.",
    sections: [
      { id: "reference", title: "1. Separate observed features from your own design", paragraphs: ["DramaBox’s official store listing describes short-drama discovery, viewing and optional subscriptions. Exact offers and access behavior can change by market or account. An independent platform should define its own rules instead of assuming a competitor has one universal price or unlock mechanism.", "The flows below are implementation planning examples, not a description of DramaBox’s private systems. Our short-drama packages cover an agreed scope; optional wallet, refund automation or specialized access behavior must be verified in the proposal and demo."] },
      { id: "rules", title: "2. Write the episode-access rules in plain language", paragraphs: ["For each episode, decide whether access is free, purchased individually, included in a VIP period or awarded after an advertisement. Specify how long that access lasts and whether it works across devices. Avoid making a viewer guess whether a payment unlocks one chapter or a complete series.", "Build a small decision table before engineering the interface. Include a signed-out visitor, a subscribed viewer, someone whose subscription expired and someone returning after a refund. The CMS and backend should apply the same decisions as the player."], bullets: ["Free preview: which episodes are available without a purchase?", "VIP pass: what catalog and time period does it cover?", "Episode unlock: permanent, series-specific or time-limited?", "Rewarded access: what happens if the advertisement is interrupted?", "Availability expiry: what does a previously paying viewer see?"] },
      { id: "payments", title: "3. Verify payments before granting access", paragraphs: ["Treat a completed purchase as a server-side entitlement decision, not just a successful animation on a phone. Plan receipt verification, duplicate notification handling, purchase restoration and pending transactions. A viewer changing devices should not need to pay again solely because local app state was lost.", "Refunds, cancellation and renewal are different events. Cancellation may stop a future renewal while an existing paid period remains active; the product must follow its published terms and provider rules. Test these cases using the appropriate provider test environments before launch."] },
      { id: "coins", title: "4. Scope a coin wallet as a separate subsystem", paragraphs: ["If you choose coins, define the purchase, bonus, spend and reversal records. Distinguish promotional credits from paid credits where your rules require it. A balance alone cannot explain a dispute; the operator needs a transaction history and a link between a spend and the resulting access.", "Design duplicate handling around interrupted connections. Retrying an episode unlock should not spend twice, and retrying a reward should not grant it twice. A coin economy, ledger and its administrative tools should be priced and demonstrated explicitly rather than assumed from the words short-drama platform."], bullets: ["Record each change with a transaction identifier and reason.", "Define expiry, bonus usage and refund behavior before launch.", "Verify ad-reward callbacks rather than trusting a client-only counter.", "Agree what support staff may correct and how corrections are recorded."] },
      { id: "operations", title: "5. Give operators usable controls", paragraphs: ["The team publishing a drama needs to understand which episodes are previews, when the next episode becomes available and which plans cover the series. Review the screens used to change those rules and preview the result before publishing.", "Measure access decisions alongside viewing: paywall exposure, checkout starts, verified purchases and subsequent viewing are separate events. An apparent drop in conversion could be a failed payment callback or a poorly placed gate. Define the metrics before comparing series or changing prices."] },
      { id: "launch", title: "6. Evaluate the supplier with a scenario", paragraphs: ["Bring a sample series and ask for a walkthrough from upload to an episode access decision. Then ask what happens when payment is pending, a subscriber returns on another device and an operator needs to investigate a complaint. Use the live demo links to try the viewer experience and ask us about the features you need.", "Compare base deployment, optional source licensing, custom monetization work and recurring usage separately. We take no platform revenue share; that does not remove payment processing, app-store fees or other operating expenses. Confirm the access model and scope in writing before choosing the launch package."] },
    ],
    sources: [{ title: "DramaBox: official Google Play listing", url: "https://play.google.com/store/apps/details?id=com.storymatrix.drama" }, ...platformSources],
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
    sections: [
      { id: "vip", title: "1. VIP subscriptions: access for a defined period", paragraphs: ["A VIP plan can make a continuing catalog easy to explain: an eligible viewer watches the included content during an active period. Define any exclusions, renewal behavior and what happens to access after cancellation or expiry. The viewer should know the period and price before confirming.", "Subscriptions require purchase verification, restoration and renewal-state handling. For the operator, a repeatable publishing schedule and a clear support route matter alongside the payment integration. Evaluate retention using your own catalog rather than borrowing another app’s reported performance."] },
      { id: "coins", title: "2. Coins and episode unlocks: make value understandable", paragraphs: ["Coins can connect small purchases with episode-level access, but they also introduce a balance, a ledger, bonus rules and refund questions. Explain the effective cost of access and how long an unlock lasts. Avoid hiding the distinction between a paid balance and a promotional reward.", "A wallet is a separately scoped capability. Demonstrate its payment, spend, reversal and duplicate-request behavior before promising it in a launch. Do not assume that every plan on a short-drama price card includes a complete coin economy and its administrative tooling."] },
      { id: "ads", title: "3. Rewarded ads: verify the reward and the interruption", paragraphs: ["In a rewarded flow, the viewer chooses an advertisement in return for an explicit benefit, such as access to an episode. State the benefit before playback. Decide what happens after an interrupted ad, a failed callback or a repeated request, and verify completion with the supported provider integration.", "An ad-heavy experience also has a viewer cost: time and interruption. Track whether people continue watching after receiving the reward, not just how many ads start. Availability, fill and proceeds vary by region and provider; an installed SDK is not a guarantee of profitable inventory."] },
      { id: "freereels", title: "4. What to learn from FreeReels", paragraphs: ["The official FreeReels listing identifies both advertising and in-app purchases. Its name alone is not evidence of an exclusively ad-funded business. Use the listing as a reference for a viewing proposition, then verify current behavior in the specific market you are researching.", "For your own app, decide whether ads pay for all viewing, a free tier or just selected episode unlocks. Optional purchases and subscriptions can be evaluated as separate paths. These are product planning choices, not claims about FreeReels’ private economics, revenue or backend architecture."] },
      { id: "economics", title: "5. Work out what you keep after costs", paragraphs: ["To estimate what you keep, subtract streaming, content and other running costs from the money you receive. For subscriptions, account for relevant store/payment deductions and refunds. For ads, disclose assumed completed impressions, fill and net revenue per thousand impressions. Keep acquisition costs visible rather than assuming every install arrives free.", "For example, if a planning sheet assumes 10,000 completed impressions and $5 net per thousand impressions, the implied receipts are $50. The $5 rate is just an example; your actual ad revenue will vary. Compare it with the viewing minutes and costs required to deliver those sessions."] },
      { id: "experiment", title: "6. Choose a launch experiment you can measure", paragraphs: ["Test one clear access model with a defined catalog and audience. Measure episode starts, completion, access decisions, verified purchases or rewards, repeat viewing and support requests. Agree event definitions so that a failed purchase does not look like a completed transaction.", "Open the live demo or ask us to show you the admin panel. Ask which access rules are already supported, what is configurable and what needs custom work. Choose scope from evidence before mixing several revenue models in the first release."], bullets: ["Define the first free-to-paid or free-to-reward transition.", "Publish understandable prices, durations and access rules.", "Test interruption, restoration and duplicate notifications.", "Review net receipts and repeat viewing by market and channel.", "Add another monetization path only with a clear reason and acceptance plan."] },
    ],
    sources: [{ title: "FreeReels: official listing identifies ads and in-app purchases", url: "https://play.google.com/store/apps/details?id=com.freereels.app" }, ...platformSources],
  },
];

export function dramaArticle(slug: string): DramaArticle {
  const article = DRAMA_ARTICLES.find(item => item.slug === slug);
  if (!article) throw new Error(`Unknown article: ${slug}`);
  return article;
}
