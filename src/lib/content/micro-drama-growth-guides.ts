import type { DramaArticle } from "@/lib/content/short-drama-articles";
import { SHORT_DRAMA_PATHS } from "@/lib/short-drama-paths";

export const SHORT_DRAMA_OTT_INTEGRATION_SLUG = "add-short-drama-to-ott-app";
export const SHORT_DRAMA_LICENSING_SLUG = "short-drama-content-licensing";

export const MICRO_DRAMA_MARKETING_SLUG = "micro-drama-marketing-strategy";
export const MICRO_DRAMA_LOCALIZATION_SLUG = "localize-micro-drama-app";

export const MICRO_DRAMA_GROWTH_GUIDES: DramaArticle[] = [
  {
    slug: SHORT_DRAMA_OTT_INTEGRATION_SLUG,
    title: "How to Add Micro Drama to an Existing OTT App",
    description: "Compare a carousel, a vertical video tab, and a separate app. Plan the catalog, viewer accounts, paid access, and rollout for a Micro Drama pilot.",
    tags: ["Micro Drama", "OTT Integration", "Vertical Video"],
    image: "/showcase/microdrama-web-player.webp",
    datePublished: "2026-11-27",
    intro: "If you already run an OTT service, you can introduce short dramas through a row on the homepage, a dedicated vertical tab, or a separate app. Each choice changes what your team has to build and what viewers have to do before episode one. This guide helps broadcasters and streaming teams choose a first release and work out what it needs from their existing platform.",
    takeaway: "Start with two series and one viewing experience. Decide where viewers will find the series, whose account determines access, and how you’ll turn off the pilot if it disrupts the main service.",
    launchHeadline: "See the vertical viewing experience",
    launchIntro: "Try our web, iOS, and Android test builds to see how viewers find a series, go from one episode to the next, and reach VIP content. Bring your existing app and catalog to a walkthrough so we can scope the connections you need.",
    nextStep: {
      title: "Bring your current app to a Micro Drama walkthrough",
      text: "Share the devices you support, how you publish titles, and whether short dramas should use the same sign-in and subscription. We’ll walk through the standalone MicroDrama builds and identify the work involved in connecting them to your service.",
      links: [
        { href: SHORT_DRAMA_PATHS.platform, label: "Explore the Micro Drama platform" },
        { href: "/blog/launch-micro-drama-platform", label: "Compare web-first and app-first launches" },
      ],
      whatsappMessage: "Hi, we already run a streaming service and would like to discuss adding short drama to it.",
    },
    sections: [
      {
        id: "what-broadcasters-have-tried",
        title: "What ViX and Peacock put in front of viewers",
        paragraphs: [
          "TelevisaUnivision announced ViX MicrO in February 2026. Its release described a social-first approach where viewers see trailers and opening episodes on social channels and continue the story in the existing ViX app. The decision to work through the existing app gives viewers a familiar place to finish the series.",
          "NBCUniversal described a different entry point in its November 2026 preview of Peacock’s mobile updates. Its proposed franchise hubs put microdramas alongside related shows, clips, games, and live moments. If your viewers already follow a particular franchise, a short drama can have a clear place next to the content they came to watch.",
          "Use those announcements as examples of how viewers discover short drama. For your own release, define what happens when someone opens the app from a shared episode link or goes looking for a new short series from the homepage.",
        ],
      },
      {
        id: "choose-the-placement",
        title: "Choose a homepage row, a vertical tab, or a separate app",
        paragraphs: [
          "A homepage row is a practical pilot for a few series. It gives you a named place to compare how existing viewers respond to a short story. Decide whether each card opens an episode or a series page, then let viewers continue in order once they start.",
          "A dedicated tab makes sense when there is enough new material for viewers to come back regularly. It needs a clear way to browse by series as well as by video. A feed that jumps between unrelated episodes can work for discovery, while a viewer already following a story needs the next part in order and a way back to their last episode.",
          "A separate app gives a new brand, audience, or catalog its own home. Budget for its own store listings, releases, support, and audience acquisition. If viewers should bring an existing login or subscription with them, put that work in the proposal before choosing a standalone launch.",
        ],
      },
      {
        id: "map-the-catalog",
        title: "Decide where series and episodes are published",
        paragraphs: [
          "Give each series and episode a stable ID, even if a title is renamed or released in a second language. Agree which system owns episode order, posters, languages, captions, release dates, and territory restrictions. If both systems have an admin panel, decide where editors make changes and how the other system receives them.",
          "Test one correction and one withdrawal. Change the display title without breaking the shared URL, then withdraw a test episode and verify that it disappears from the homepage, vertical feed, and series page. Open its old URL as well. Have an editor run the test so the same process can be used after launch.",
        ],
        image: { src: "/showcase/microdrama-admin-series.webp", alt: "MicroDrama demo series admin showing artwork and publishing status" },
        options: [{
          title: "Prepare the catalog",
          text: "Use the publishing guide for episode order, artwork, free previews, and the viewer review.",
          href: "/blog/publish-micro-drama-series",
          linkLabel: "Read how to publish a Micro Drama series",
        }],
      },
      {
        id: "keep-access-consistent",
        title: "Work out who can watch past the free episodes",
        paragraphs: [
          "Write down the rule before reviewing designs. Existing OTT subscribers might get the full vertical catalog, only selected series, or the same free preview as everyone else. Decide what happens when a subscription has expired and which system makes the final access decision.",
          "An integration also needs to match the account the viewer signed in with to its subscription status and viewing progress. Ask the team to show how an expired or recently renewed subscription is handled on each surface. Include account switching and a return to the locked episode after sign-in so cached access or a stale screen cannot confuse the viewer.",
          "If you want a new paid tier, ask for the purchase, renewal, refund, and support flows to be scoped. Sharing an account across apps, carrying over a purchase, or connecting to an existing billing service are integration requirements to review with your team.",
        ],
      },
      {
        id: "test-player-and-links",
        title: "Test the portrait player and shared episode links",
        paragraphs: [
          "Choose what a shared link opens on a phone with the existing app installed and on one without it. Apple’s Universal Links and Android App Links can open a supported screen from a verified website link when configured for the app. Give browser visitors a useful series or episode page. If they need to sign in, check that they return to the intended episode afterward.",
          "Test the controls with captions turned on, switch to mobile data, and move quickly between episodes. Then return to the normal widescreen catalog and confirm the existing player still behaves as expected. If TV is part of your service, decide whether the pilot is visible there and test that decision on the supported devices.",
        ],
        image: { src: "/showcase/microdrama-web-player.webp", alt: "MicroDrama demo browser player showing a vertical episode beside the episode list" },
      },
      {
        id: "example-pilot",
        title: "Run a pilot with two series and one viewer group",
        paragraphs: [
          "Imagine a streamer with existing mobile viewers in one market. It puts two licensed vertical series on a homepage row, each with two free episodes. Existing active subscribers can watch the rest. The team gives its support staff the test links and starts with a limited audience.",
          "Compare how many people opened a series with how many started playback. Among viewers who started episode one, count how many began episode two. Record playback failures, access complaints, and time to first frame separately so the team knows which issue to investigate if people drop out. Keep the scope, audience, and measurement definitions consistent during the pilot.",
          "Write down when to pause expansion. For example, if subscribers cannot continue past the free episodes or the new navigation interrupts normal viewing, hide the pilot entry point while the team fixes the issue. Check that old links still land somewhere useful and that the existing catalog and subscriptions continue to work.",
        ],
        options: [{
          title: "Plan how viewers will discover the pilot",
          text: "Pick one trailer destination and define a few viewing and access events you can check.",
          href: `/blog/${MICRO_DRAMA_MARKETING_SLUG}`,
          linkLabel: "Read the Micro Drama marketing guide",
        }],
      },
      {
        id: "integration-checklist",
        title: "What to ask for in the integration quote",
        paragraphs: [
          "Bring your current app, the devices you support, a sample series, and the system names for catalog, login, billing, and video. Ask for a written breakdown of what can be reused, what needs changes in your existing app, and which work belongs to your current supplier. Use the pilot’s viewer steps as the acceptance criteria.",
        ],
        checklist: [
          { title: "Agree where viewers enter", text: "Show the homepage row, tab, or separate app and the route to episode one." },
          { title: "Test access and continuity", text: "Try a guest, a subscriber, and an expired account. Check the next episode, resume position, and return after sign-in." },
          { title: "Rehearse an editorial change", text: "Publish an episode, change its artwork, and then withdraw it. Verify the catalog and shared link outcomes." },
          { title: "Plan release and rollback", text: "List supported devices, pilot audience, release owners, and who can hide the pilot or restore the old navigation." },
        ],
      },
    ],
    sources: [
      { title: "TelevisaUnivision’s February 2026 ViX MicrO launch", url: "https://corporate.televisaunivision.com/articles/2026/02/26/vix-officially-launches-vix-micro-its-innovative-original-micro-content-platform/" },
      { title: "NBCUniversal’s November 2026 Peacock mobile preview", url: "https://www.nbcuniversal.com/article/peacock-extends-its-vertical-video-leadership-reimagined-mobile-experience" },
      { title: "Apple’s guide to associated domains and Universal Links", url: "https://developer.apple.com/documentation/xcode/supporting-associated-domains" },
      { title: "Android’s guide to deep links and App Links", url: "https://developer.android.com/training/app-links" },
    ],
  },
  {
    slug: SHORT_DRAMA_LICENSING_SLUG,
    title: "How to License Short Drama Content for a Micro Drama App",
    seoTitle: "Short Drama Content Licensing for Micro Drama Apps",
    description: "Find vertical dramas to license and check territories, languages, release windows, and episode files before publishing a series on your app or website.",
    tags: ["Short Drama", "Content Licensing", "Publishing"],
    image: "/showcase/microdrama-catalog.webp",
    datePublished: "2026-11-25",
    intro: "If you’re launching a Micro Drama app, start with one series you can actually put in front of viewers. Ask who can license it, where you can show it, and which files you’ll receive. Those answers tell your editorial team what it can publish and your developer what the app needs to enforce.",
    takeaway: "Get the rights and delivery details for one complete series in writing. Use that title to test the catalog, player, captions, and access rules before committing to a larger slate.",
    launchHeadline: "Launch within 2–4 weeks",
    launchIntro: "Try the web, iOS, and Android builds to see how a series appears to viewers.",
    nextStep: {
      title: "Bring a series to a publishing walkthrough",
      text: "Share the episode list, languages, release markets, and which episodes viewers can watch for free. We’ll show you the publishing flow and discuss any territory, scheduling, or access rules your launch needs.",
      links: [
        { href: SHORT_DRAMA_PATHS.platform, label: "Explore the Micro Drama platform" },
        { href: "/blog/publish-micro-drama-series", label: "Read the series publishing guide" },
      ],
      whatsappMessage: "Hi, I’m preparing a short drama catalog and would like to see how to publish a series on the platform.",
    },
    sections: [
      {
        id: "where-to-source-short-dramas",
        title: "Find a series and the team that can license it",
        paragraphs: [
          "Start with producers, production studios, sales agents, and distributors that list vertical dramas. For example, Unisun publishes a short drama licensing catalog. Ask for sample episodes, a current title list, available territories, and the contact authorized to negotiate your specific rights.",
          "Share your intended audience, first release languages, viewing surfaces, and access model. A catalog that broadly includes a country or language may still have different availability for each series. Request a title-level offer and ask your rights team to confirm that the seller can grant the uses you need.",
        ],
      },
      {
        id: "rights-to-check",
        title: "Write down where and how you can show it",
        paragraphs: [
          "WIPO describes film distribution agreements in terms of territory, language, and medium. Make each of those fields explicit. Ask whether the agreement covers an app, a browser player, or both, and whether it allows you to stream dubbed or subtitled versions. Record exclusivity and any existing release windows that affect yours.",
          "Describe the actual viewer offer in the contract discussion. A studio might want to show the opening episodes for free, fund the rest through ads, or reserve later episodes for subscribers. Ask about trailer excerpts and social promotion separately, especially when you plan to use the clips in paid campaigns.",
        ],
        bullets: [
          "Countries and languages, including subtitle and dubbing rights",
          "Permitted platforms, devices, and monetization models",
          "Start and end dates, exclusivity, and any blackout windows",
          "Trailers, social clips, artwork, and other promotional uses",
        ],
      },
      {
        id: "review-the-delivery-list",
        title: "Ask for the files your publishing team will need",
        paragraphs: [
          "Use one episode to verify the file format, vertical framing, picture and audio quality, subtitle timing, and episode numbering. Ask who will replace a corrupt master or missing caption file. Confirm whether captions arrive separately and which artwork works at phone size.",
          "Request a manifest for the whole series with the episode order, durations, filenames, audio tracks, posters, metadata, and approved promotional assets. Check the complete set before scheduling the release so a missing episode or language file can be resolved while there is still time.",
        ],
      },
      {
        id: "one-series-rights-sheet",
        title: "Make a rights sheet for one title",
        paragraphs: [
          "For an example pilot, imagine a 12-episode series available in India in Hindi for six months. Your intended release is web and mobile, with three free episodes and the remaining nine available to subscribers. Record whether the actual agreement permits that offer and whether the trailer can run in a paid campaign.",
          "Add a date and an owner for confirming the first publish, checking the release from allowed and restricted territories, and taking the series down when the window ends. Document each rule for the developer and editorial team. Ask about automated scheduling or geographic restrictions during scoping if those controls are required.",
        ],
        checklist: [
          { title: "Name the rights holder", text: "Record the agreement, approved uses, contacts, and person who confirmed the rights." },
          { title: "Record the publishing window", text: "List launch dates, expiry dates, territories, devices, and language versions." },
          { title: "Track what arrived", text: "Check each episode, subtitle file, poster, and trailer against the delivery list." },
          { title: "Assign the expiry check", text: "Give one person responsibility for renewal, withdrawal, and checking old links." },
        ],
      },
      {
        id: "test-the-pilot",
        title: "Test the series from upload to expiry",
        paragraphs: [
          "Publish a test copy with authorized assets. Check the poster and title in the catalog, play the first and last episode, and make sure captions match the chosen language. Open a shared link as a signed-out viewer. Then try the first paid episode with a standard test account and a subscriber test account.",
          "Test the restrictions you discussed before launch. Check what happens when an episode is withdrawn, when the release window expires, and when a previously shared link is opened. Record what the admin handles, which steps staff handle, and any rules that need to be included in the proposal.",
        ],
        image: { src: "/showcase/microdrama-admin-episodes.webp", alt: "MicroDrama admin panel showing episode order and publishing status" },
        options: [{
          title: "See the publishing steps",
          text: "Follow one series through catalog setup, episode ordering, and viewer checks.",
          href: "/blog/publish-micro-drama-series",
          linkLabel: "Read how to publish a Micro Drama series",
        }],
      },
      {
        id: "budget-for-content",
        title: "Keep the catalog budget up to date",
        paragraphs: [
          "Ask how the content deal works, whether it is a fixed fee, revenue share, or a combination. Discuss what counts toward revenue, how usage is reported, and when payment is due. Include subtitle, dubbing, and artwork costs where the distributor delivers only the masters.",
          "Budget separately for the software launch, hosting, video delivery, and the team that keeps the catalog current. Our offer covers the software deployment. Your team supplies the series and agreements that allow you to distribute them.",
        ],
        options: [{
          title: "Plan the software spend",
          text: "Compare launch packages and ongoing delivery costs once you know the size of the starting catalog.",
          href: "/blog/short-drama-app-development-cost",
          linkLabel: "See the Micro Drama app cost guide",
        }],
      },
    ],
    sources: [
      { title: "WIPO on film licensing and distribution", url: "https://www.wipo.int/en/web/copyright/creative-industries/how-to-make-a-living-from-movie-copyright" },
      { title: "WIPO on documenting rights in film production", url: "https://www.wipo.int/pressroom/en/stories/ip_and_film.html" },
      { title: "Unisun short drama licensing catalog", url: "https://unisunhk.com/" },
    ],
  },
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
