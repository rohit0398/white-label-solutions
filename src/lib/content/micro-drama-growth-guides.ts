import type { DramaArticle } from "@/lib/content/short-drama-articles";
import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";

export const MICRO_DRAMA_MARKETING_SLUG = "micro-drama-marketing-strategy";
export const MICRO_DRAMA_LOCALIZATION_SLUG = "localize-micro-drama-app";

export const MICRO_DRAMA_GROWTH_GUIDES: DramaArticle[] = [
  {
    slug: MICRO_DRAMA_MARKETING_SLUG,
    title: "Micro Drama Marketing: From Trailer Clicks to Paying Viewers",
    seoTitle: "Micro Drama Marketing Strategy: Trailers, Retention & VIP",
    description: "Plan a micro drama marketing funnel from trailer to episode playback and VIP access. Track conversion, repeat viewing, and the costs behind each campaign.",
    image: "/showcase/microdrama-web-discovery.webp",
    datePublished: "2026-11-22",
    launchHeadline: "Launch within 2–4 weeks",
    intro: "A trailer gets attention, but a streaming business needs people to keep watching. For a studio launching a micro drama app, the useful question is what happens after someone taps the link: do they reach the right series, play the next episode, and understand the paid offer? This guide turns that journey into a practical first campaign.",
    takeaway: "Start with one series, one audience, and one destination. Measure the path from a trailer to a confirmed purchase and repeat viewing before expanding the campaign. A large number of clicks can hide a broken viewing or payment flow.",
    nextStep: {
      title: "Bring one trailer and one series to a walkthrough",
      text: "Show us where viewers will discover the series and which episode should introduce VIP. We can walk through the browser player, mobile test builds, and the package that fits that journey.",
      links: [{ href: SHORT_DRAMA_PATHS.platform, label: "Explore the Micro Drama platform" }, { href: "/blog/launch-micro-drama-platform", label: "Compare a web-first and app-first launch" }],
      whatsappMessage: "Hi, I read the Micro Drama marketing guide and would like a walkthrough for our first series.",
    },
    sections: [
      {
        id: "one-series-one-promise", title: "Give the campaign one clear story",
        paragraphs: [
          "Choose a complete series that your team has permission to promote and distribute. Select a scene that introduces its conflict without promising a different story. Match the trailer, artwork, series title, and landing page so the viewer recognizes the same characters immediately. Make sure the first episode is available in the campaign's target market.",
          "Write a short campaign brief: who is the story for, what makes them want episode two, which language will they watch in, and where will the link open? A contemporary romance and a historical thriller may attract different audiences. Testing them together under one generic ad makes it harder to understand which story actually works.",
        ],
        checklist: [
          { title: "Choose the series", text: "Have the opening episodes, artwork, and release order ready before promoting them." },
          { title: "Choose the viewer", text: "Pick a market and language that the actual viewing and payment experience can support." },
          { title: "Choose the destination", text: "Send viewers to one series or episode, with a clear route to continue watching." },
        ],
      },
      {
        id: "trailer-to-episode", title: "Send the trailer to an episode people can watch",
        paragraphs: [
          "For a web-first test, link directly to a free episode rather than making visitors search a catalog. Keep the player and next-episode control easy to find on a phone. Test the exact link inside the social app's browser, with sound off and with a slow connection. A desktop demonstration does not show what happens when someone taps a trailer on their phone.",
          "An app-first campaign has another step: the store listing and installation. The artwork and description should explain the same viewing experience as the trailer. Ask the implementation team how a viewer will return to the intended series after installing. Deferred deep links and cross-device attribution are integrations to verify, not features to assume from the presence of an app.",
        ],
        image: { src: "/showcase/microdrama-web-player.webp", alt: "MicroDrama browser player with a vertical episode and the series episode list" },
        options: [{ title: "Test the browser route", text: "A website lets a viewer open an episode before choosing whether to install an app.", href: SHORT_DRAMA_PATHS.web, linkLabel: "See the Micro Drama website package" }],
      },
      {
        id: "measure-the-funnel", title: "Measure viewing, payment, and access separately",
        paragraphs: [
          "Google Analytics supports recommended and custom events, but the event names and triggers still need to match the business. Define a first play, an episode completion, a VIP offer view, a checkout start, and a verified purchase as distinct actions. Decide how retries and repeat viewing are counted before comparing two campaigns. Obtain the appropriate analytics consent and avoid sending phone numbers, emails, or payment details in event parameters.",
          "For example, suppose 1,000 campaign visitors produce 400 first plays, 120 second-episode starts, 40 VIP offer views, and eight verified purchases. First-play conversion is 40% of campaign visitors; paid conversion is 20% of offer viewers, but only 0.8% of campaign visitors. These are illustrative numbers, not industry benchmarks. Comparing the same denominator prevents an attractive percentage from hiding weak overall results.",
          "Add successful playback after purchase to the funnel. A payment confirmation without access to the locked episode is a support problem, not a finished conversion. Use provider-confirmed transactions for revenue reporting and deduplicate them. The demo illustrates the viewer journey; campaign attribution and dashboards should be agreed explicitly in the project scope.",
        ],
        bullets: ["Campaign destination and first episode start", "Next-episode start and return viewing", "VIP offer view and checkout start", "Confirmed purchase and playback after purchase", "Refunds, cancellations, and support requests"],
      },
      {
        id: "fix-the-largest-drop", title: "Fix the largest drop before buying more traffic",
        paragraphs: [
          "Many trailer clicks with few first plays point to a destination, browser, loading, or expectation problem. Strong first plays with weak continuation suggest a different investigation: the episode itself, next-episode navigation, sign-in friction, or the point at which payment is introduced. Watch the journey before changing the price.",
          "When people reach the offer but do not buy, check whether the price, billing period, and included access are understandable in that market. If buyers do not return, examine the next release, catalog depth, and whether the service delivers what the offer promised. Change one meaningful element at a time and compare viewers from similar sources and periods.",
        ],
        options: [{ title: "Review the paid-access decision", text: "A campaign needs an understandable offer, whether viewers use VIP passes or another agreed model.", href: "/blog/short-drama-monetization", linkLabel: "Read the Micro Drama monetization guide" }],
      },
      {
        id: "acquisition-and-repeat-viewing", title: "Compare acquisition costs with actual receipts",
        paragraphs: [
          "Calculate cost per confirmed buyer as campaign spend divided by unique confirmed buyers from that campaign. Then compare it with receipts after refunds and payment charges, plus the content, delivery, and support costs you incur. Downloads and gross subscription sales alone do not establish that a campaign is profitable.",
          "Follow the same group of new viewers over a defined period. A first purchase, a renewal, and a return to watch the next series are different signals. Do not project long-term customer value from one strong launch day. Organic discovery can also bring viewers through useful series pages, previews, newsletters, and audience communities; it still requires attribution and relevant content.",
          "Google's video guidance distinguishes dedicated watch pages from pages where a video is only supporting material. Publishing a trailer inside a blog does not automatically make it eligible for video search results. Use an appropriate series or watch-page strategy for the entertainment site and check indexing separately from this software marketing website.",
        ],
      },
      {
        id: "first-campaign-checklist", title: "What to check before the first campaign",
        paragraphs: ["Use a real phone to follow the entire path with someone who has not seen the product. Give them the trailer link and let them explain the story, start watching, find the next episode, and describe the paid offer. Ask the supplier to demonstrate any missing step before committing a larger advertising budget."],
        bullets: ["The promised episode is available and the campaign link reaches it.", "Playback and sign-in work in the browsers the campaign sends visitors to.", "The VIP terms, local price, and access after purchase are clear.", "Analytics distinguish playback errors, abandoned checkout, and verified purchases.", "A named team member can investigate payment and access complaints."],
        options: [{ title: "Prepare for another language", text: "Localize the first campaign, series, and paid offer as one experience.", href: `/blog/${MICRO_DRAMA_LOCALIZATION_SLUG}`, linkLabel: "Read the Micro Drama localization guide" }],
      },
    ],
    sources: [
      { title: "Google Analytics: recommended and custom events", url: "https://developers.google.com/analytics/devguides/collection/ga4/events" },
      { title: "Apple: discovery on the App Store", url: "https://developer.apple.com/app-store/discoverability/" },
      { title: "Google Search Central: video SEO best practices", url: "https://developers.google.com/search/docs/appearance/video" },
    ],
  },
  {
    slug: MICRO_DRAMA_LOCALIZATION_SLUG,
    title: "How to Localize a Micro Drama App and Its First Series",
    seoTitle: "Micro Drama App Localization: Subtitles, Catalog & Checkout",
    description: "Prepare a micro drama app for a second language. Plan subtitles, translated series pages, app store listings, local prices, and a complete viewer test.",
    image: "/showcase/microdrama-web-genres.webp",
    datePublished: "2026-11-22",
    launchHeadline: "Launch within 2–4 weeks",
    intro: "A translated menu is only one part of a multilingual micro drama service. A viewer also needs to understand the story, read the episode information, and know what a payment unlocks. Start with one series and one additional language so your team can check the complete experience before expanding the catalog.",
    takeaway: "Treat the store listing, catalog, video, subscription offer, and support messages as one release. Confirm which subtitle and audio features the selected players actually support; a language selector does not prove every episode is translated.",
    nextStep: {
      title: "Plan a first market with one complete series",
      text: "Tell us the viewing language, target devices, and payment options you need. We can demonstrate the reference player and separate the standard package from language or media integrations that need additional work.",
      links: [{ href: SHORT_DRAMA_PATHS.platform, label: "Explore the Micro Drama platform" }, { href: "/blog/publish-micro-drama-series", label: "Prepare a series for publishing" }],
      whatsappMessage: "Hi, I read the Micro Drama localization guide and would like to discuss our target language and first series.",
    },
    sections: [
      {
        id: "pick-a-market", title: "Start with a language and a viewing market",
        paragraphs: [
          "Choose a market where you can distribute the selected series and support paying viewers. A language and a country are not interchangeable: viewers who read the same language can use different currencies, payment methods, or catalog availability. Record language, region, and account choices separately in the launch brief.",
          "Make a simple release sheet for each series: original title, local title, episode order, poster, trailer, available audio, subtitle files, and the markets in which it can appear. Confirm distribution and promotional permissions with the people responsible for the content. This guide is an operational checklist, not a substitute for reviewing the agreements behind a catalog.",
        ],
      },
      {
        id: "translate-the-viewer-journey", title: "Translate what the viewer needs to do next",
        paragraphs: [
          "List the screens a new viewer actually sees: discovery, series details, episode player, sign-in, VIP offer, checkout result, and account settings. Translate complete messages rather than fragments assembled around English grammar. A subscription sentence should still make sense when the currency, duration, or series name changes.",
          "Keep titles, tags, descriptions, and support messages in the same review. Give a native speaker enough story context to choose natural language rather than merely replace words. Test long titles and small screens; a phrase that fits a desktop card can hide the next button on a phone. Apple recommends testing localized layouts for clipping and right-to-left behavior where relevant.",
        ],
        image: { src: "/showcase/microdrama-web-genres.webp", alt: "MicroDrama reference catalog with genre navigation and series artwork" },
        bullets: ["Series title, synopsis, genre, and episode names", "Play, next episode, sign-in, and error messages", "What VIP includes, billing period, and purchase status", "Restore access, account help, and cancellation guidance"],
      },
      {
        id: "subtitles-and-dubbing", title: "Check subtitles and audio on the actual player",
        paragraphs: [
          "Decide whether the first release uses subtitles, burned-in captions, dubbed audio, or a separate video version. These options have different production and delivery implications. A translated website interface does not add caption selection or multiple audio tracks to a player automatically. Ask for a demonstration on each device included in the launch.",
          "For selectable subtitles, confirm the supported format, language labels, default selection, and behavior when a track is missing. Check the first and last captions, scene changes, music, and text near the bottom of a portrait frame. Keep captions clear of playback controls and avoid covering information the story needs viewers to see.",
          "A dubbed version needs a human review for timing, pronunciation, character names, and emotional meaning. Keep its asset name and catalog record connected to the correct episode. Do not overwrite the only original master when replacing an audio or subtitle version. Track what was approved and which version was actually published.",
        ],
        options: [{ title: "Prepare the publishing workflow", text: "Organize the episode files, artwork, and access rules before importing a localized series.", href: "/blog/publish-micro-drama-series", linkLabel: "See the series publishing checklist" }],
      },
      {
        id: "local-prices-and-access", title: "Review local prices and paid access together",
        paragraphs: [
          "Show the price and billing period that the viewer will actually pay. Choosing a language should not silently mean choosing an arbitrary currency. On mobile, review the localized product information returned by the store; on the web, confirm the supported checkout currency and payment method for the target market.",
          "Ask a reviewer to explain the offer before purchasing. Do they understand whether VIP covers one series or a catalog, when it renews, and where to get help? Test a successful transaction, a declined payment, and returning on another device. Payment-provider and store rules depend on the implementation and market, so agree the required flows during scoping.",
        ],
      },
      {
        id: "store-and-search", title: "Localize discovery as well as the app",
        paragraphs: [
          "Apple and Google provide ways to localize app-store information and graphic assets. Update screenshots, descriptions, and previews to match the version someone can install. Store listing localization and in-app localization are separate tasks; neither proves the drama catalog has the same language coverage.",
          "For a website, give translated series pages useful titles and descriptions rather than indexing identical pages with only the menu changed. Choose stable language URLs and connect equivalent pages appropriately. Keep unavailable episodes and missing translations out of promises in campaign copy. Decide what should happen when a shared link points to a language version the viewer cannot use.",
          "Use the marketing funnel to compare actual first plays and paid viewing by language, rather than treating every translated page as successful expansion. If a translated series page gets visitors but almost no episode starts, check the language match, media availability, and loading path before translating more titles.",
        ],
        options: [{ title: "Measure the first localized campaign", text: "Follow a trailer click through playback, VIP, and repeat viewing.", href: `/blog/${MICRO_DRAMA_MARKETING_SLUG}`, linkLabel: "Read the Micro Drama marketing strategy" }],
      },
      {
        id: "release-checklist", title: "Run a complete local-language viewing test",
        paragraphs: ["Give a native speaker a fresh account and a campaign link. Ask them to find the series, play the opening episodes, understand VIP, and contact support. Record the actual device, language, and media version tested. Agree who corrects the catalog, subtitle, interface, and payment problems before expanding to another market."],
        checklist: [
          { title: "Approve the story assets", text: "Check the translated title, artwork, video version, and episode order together." },
          { title: "Watch on a phone", text: "Review subtitle timing, control overlap, errors, and the next-episode transition." },
          { title: "Complete the purchase path", text: "Verify the local offer, confirmed payment, and access to the intended episode." },
          { title: "Review the listing", text: "Make sure the app store and campaign show what the installed product delivers." },
        ],
      },
    ],
    sources: [
      { title: "Apple Developer: localizing apps, testing, and product pages", url: "https://developer.apple.com/localization/" },
      { title: "Google Play: translate and localize an app", url: "https://support.google.com/googleplay/android-developer/answer/9844778" },
      { title: "Apple: localize app information in App Store Connect", url: "https://developer.apple.com/help/app-store-connect/manage-app-information/localize-app-information/" },
    ],
  },
];
