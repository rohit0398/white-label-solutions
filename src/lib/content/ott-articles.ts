import type { DramaArticle } from "@/lib/content/short-drama-articles";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { OTT_PATHS } from "@/lib/solution-paths";

export const OTT_COST_SLUG = "white-label-ott-platform-cost";
export const OTT_MONETIZATION_SLUG = "ott-monetization-svod-avod-tvod";
export const LIVE_OTT_CHECKLIST_SLUG = "live-ott-streaming-checklist";

export const OTT_ARTICLES: DramaArticle[] = [
  {
    slug: LIVE_OTT_CHECKLIST_SLUG,
    title: "Live OTT Streaming Checklist for Broadcasters and Events",
    seoTitle: "Live OTT Streaming Checklist: Feeds, Playback & Backup",
    description: "Rehearse a live OTT channel or event. Check the feed, schedule, viewer access, sound, captions, backup feed, and replay before you go live.",
    tags: ["OTT Streaming", "Live broadcast", "Playback testing"],
    image: "/showcase/microdrama-catalog.webp",
    datePublished: "2026-11-25",
    intro: "A scheduled broadcast has a deadline. At start time the feed must arrive, the player must open on the devices viewers use, and the team must know what to do if the signal drops. Use this checklist to rehearse a live channel or event before you share the viewing link.",
    takeaway: "Rehearse the real feed on the same viewing devices and access rules you’ll use on launch day. During the rehearsal, interrupt the primary feed and watch what happens on the viewer’s screen.",
    launchHeadline: "Plan a walkthrough for your live stream",
    launchIntro: "Share your feed type, target devices, and schedule so we can scope live delivery. The MicroDrama test builds below show a reference catalog and player.",
    nextStep: {
      title: "Bring your feed and device list to a walkthrough",
      text: "Tell us whether you’ll run a scheduled event or continuous channels, who supplies the feed, and where people need to watch. We’ll review the standard on-demand package and scope the live requirements with you.",
      links: [
        { href: OTT_PATHS.platform, label: "Explore the OTT streaming platform" },
        { href: CASE_STUDIES.ott.path, label: "Read the live TV and on-demand case study" },
      ],
      whatsappMessage: "Hi, I’m planning a live OTT stream and would like to discuss my feed, viewing devices, and schedule.",
    },
    sections: [
      {
        id: "define-the-broadcast",
        title: "Decide what viewers are tuning in to",
        paragraphs: [
          "A single event needs an event page, a scheduled start, and a plan for the replay. A continuous channel also needs a program guide, schedule updates, and an operating plan outside event hours. Write down what viewers should see before, during, and after the broadcast.",
          "List who can watch, where they can watch, and how they gain access. Pick the launch devices upfront. The standard OTT package covers on-demand video on mobile and web. Live ingest, continuous channels, dedicated TV apps, and any broadcast-specific protections are scoped separately.",
        ],
        options: [{
          title: "See a broadcaster’s live and on-demand setup",
          text: "The broadcaster case study describes how scheduled channels, a program guide, and a video catalog came together in one service.",
          href: CASE_STUDIES.ott.path,
          linkLabel: "Read the broadcaster case study",
        }],
      },
      {
        id: "agree-the-feed-handoff",
        title: "Agree who supplies the feed and how it reaches the player",
        paragraphs: [
          "Ask the broadcast team for the feed protocol, resolution, frame rate, audio tracks, and captions. A production encoder might send SRT or RTMP to the streaming service, which then prepares an adaptive HLS stream for viewers. Some broadcasters already supply a playable feed, so agree what each team will operate.",
          "Name the team responsible for the encoder, stream delivery, player, and audience support. Agree when the source goes live for testing and how the production team will tell the app team about a late start, schedule change, or interrupted feed.",
        ],
      },
      {
        id: "practice-backup-switch",
        title: "Practice switching to a backup feed",
        paragraphs: [
          "Test a backup independent of the likely failure. Two encoders using the same upstream connection can both go down if that connection fails. Choose what should appear while the feed recovers, such as a holding slate with the program name and a short status message.",
          "AWS MediaLive documents different failover signals, including missing input, black video, and audio silence. Even if you use another provider, rehearse these cases on your own setup. Watch for a silent or frozen player, check whether it recovers on its own, and record how much time the handover takes.",
        ],
      },
      {
        id: "rehearse-as-a-viewer",
        title: "Test the event with real viewers’ conditions",
        paragraphs: [
          "Use the published viewing route on a browser, an iPhone, and an Android device if those are in scope. Start on Wi-Fi, repeat on mobile data, and interrupt the connection for a few seconds. Check time to first frame, buffering, audio sync, captions, and whether the viewer returns to the live position after reconnecting.",
          "On a private stream, try a signed-out browser and an account that has access. If the event uses a schedule, confirm the display in a second time zone and test a delayed start. During a rehearsal with multiple devices, compare video and application monitoring so the team can distinguish a feed outage from a sign-in or player problem.",
        ],
      },
      {
        id: "example-live-event",
        title: "Walk through one event from opening slate to replay",
        paragraphs: [
          "For example, suppose a broadcaster plans a 60-minute interview with captions and a replay the next day. Fifteen minutes before the start, an operator checks both sources and opens the event page in a private window. During rehearsal, the operator disconnects the primary source while another person watches on mobile data and notes what the viewer sees.",
          "After the show, end the live state, check that the page displays the planned replay message, and review the recording for missing audio, gaps, and caption alignment. Keep the recording private until the editor has approved it and confirmed the replay window.",
        ],
      },
      {
        id: "launch-day-checklist",
        title: "Use this checklist on launch day",
        paragraphs: [
          "Pick one person to make the go-live decision. Agree who can switch sources, who updates the event page, and who communicates with viewers if the schedule changes. Keep the checklist and contact details where those people can access them during the broadcast.",
        ],
        checklist: [
          { title: "Confirm both sources", text: "Check video, audio, captions, backup feed, and monitoring before viewers arrive." },
          { title: "Check the public viewing route", text: "Test the actual event link, time zone, access rules, and launch devices." },
          { title: "Rehearse a disruption", text: "Interrupt the primary input and confirm the backup or holding screen appears as expected." },
          { title: "Close out the event", text: "End the live state and review the recording, captions, and replay access." },
        ],
      },
    ],
    sources: [
      { title: "Apple on HTTP Live Streaming and stream validation", url: "https://developer.apple.com/documentation/http-live-streaming" },
      { title: "AWS MediaLive input types and protocols", url: "https://docs.aws.amazon.com/medialive/latest/ug/inputs-supported-formats.html" },
      { title: "AWS MediaLive automatic input failover", url: "https://docs.aws.amazon.com/medialive/latest/ug/automatic-input-failover.html" },
    ],
  },
  {
    slug: OTT_COST_SLUG,
    title: "White-Label OTT Platform Cost: Launch Fees and Monthly Costs",
    seoTitle: "White-Label OTT Platform Cost: Apps, Website & Streaming",
    description: "Compare white-label OTT launch packages and monthly costs for video delivery, hosting, payments, content, and support. Build a budget around real viewing usage.",
    image: "/showcase/microdrama-catalog.webp",
    datePublished: "2026-11-22",
    intro: "An OTT platform quote can cover the software without covering the cost of operating a streaming service. A useful budget separates the website and apps you launch from the videos, delivery, payment processing, and people needed each month. Here is how to compare a white-label package with the service you actually plan to run.",
    takeaway: "Compare the same device list and deliverables. Separate one-time software costs, optional source licensing, and monthly operating costs. Forecast watched minutes or delivered data, rather than treating registered users as your streaming bill.",
    nextStep: {
      title: "Get a quote around the devices and catalog you need",
      text: "Tell us whether you need a website, mobile apps, or both, and share the size of the catalog and expected viewing. We can explain the standard package, optional source license, and work that needs a separate quote.",
      links: [{ href: `${OTT_PATHS.platform}#pricing`, label: "See complete OTT package pricing" }, { href: "/blog/ott-video-streaming-development", label: "Read the OTT development guide" }],
      whatsappMessage: "Hi, I read the OTT platform cost guide and would like to compare launch packages and running costs.",
    },
    sections: [
      {
        id: "what-the-launch-fee-covers", title: "Start with what the launch fee includes",
        paragraphs: [
          "A website package, an iOS and Android app package, and a complete platform are different purchases. Write down the screens, publishing tools, payment flows, deployment work, and handover you expect. Then check the quote against that list. A lower starting price may describe a smaller product rather than better value for the same release.",
          "Our published launch prices are shown below from the same catalog used on the product pages. Source code is an optional license. Content acquisition, hosting, streaming usage, and custom work are separate budget lines. Ask which accounts your team must supply and who owns the domains, store listings, and infrastructure after handover.",
        ],
        options: [
          { title: "Website and admin", text: "Use the browser route when the first release needs a catalog, web playback, and subscription checkout.", href: OTT_PATHS.web, linkLabel: "See the OTT website package" },
          { title: "iOS and Android apps", text: "Choose the mobile package when app distribution and in-app subscriptions are central to the launch.", href: OTT_PATHS.app, linkLabel: "See the OTT app package" },
          { title: "Website and mobile apps", text: "Compare the full package if the first release needs both viewing routes and one publishing operation.", href: OTT_PATHS.platform, linkLabel: "See the complete OTT platform" },
        ],
      },
      {
        id: "monthly-budget", title: "Separate the monthly operating costs",
        paragraphs: [
          "AWS identifies storage, data transfer, encoding compute, and delivery as major cost centers for streaming workloads. The exact bill depends on the provider and design. Keep those media costs separate from the API, database, administration tools, backups, monitoring, and support behind the service.",
          "Include content licensing or production, subtitles and artwork, payment processing, marketing, and customer support in the business budget. These costs do not disappear when software has no platform revenue share. Forecast a quiet month, an expected month, and a campaign peak so the launch budget has room for changing demand.",
        ],
        checklist: [
          { title: "Software and hosting", text: "List deployment, any source license, API/database hosting, backups, and monitoring." },
          { title: "Media delivery", text: "List stored video, encoding where charged, watched minutes or bandwidth, and optional protection services." },
          { title: "Commercial operations", text: "List content, payment charges, store costs, support, and acquisition separately." },
        ],
      },
      {
        id: "viewing-cost-example", title: "Forecast delivery from viewing, not account count",
        paragraphs: [
          "Start with active viewers multiplied by average viewing time. For example, 2,000 viewers watching 90 minutes each in a month produce 180,000 viewer-minutes. A service with 20,000 registered accounts could deliver less if most accounts are inactive. These are planning examples, not measured usage for our customers.",
          "For a provider charging per delivered minute, multiply billable delivered minutes by its current rate. If a hypothetical rate were $1 per 1,000 minutes, that example would produce $180 of delivery charges before storage and other costs. This rate is an arithmetic assumption, not a supplier quote. Cloudflare Stream currently separates storage and delivery by minutes; use its live pricing and account terms for an actual forecast.",
          "For a data-based service, estimate delivery from average bitrate and viewing duration, then apply the relevant region and CDN rates. Playback retries, preloading, caching, and provider billing rules can affect the measured usage. Compare estimates against the provider's real usage dashboard after a small release.",
        ],
        bullets: ["Catalog storage: the total duration and versions kept online", "Viewer delivery: people watching multiplied by average watch time", "Peak demand: concurrent sessions and application traffic", "Other media costs: encoding, protection, and optional live services"],
      },
      {
        id: "scope-extras", title: "Keep TV apps, live channels, and DRM explicit",
        paragraphs: [
          "The standard OTT offer focuses on widescreen video on demand for the web and mobile. Live feeds and channels, dedicated TV apps, and Widevine or FairPlay DRM are separately scoped requirements. Phone-to-TV casting is not the same deliverable as an app installed on Roku, Apple TV, Samsung TV, or another television platform.",
          "Ask what each addition changes: player work, packaging, device testing, account setup, licensing, and ongoing operation. A signed playback URL can restrict access to a stream, but it is not the same system as commercial DRM. Get a demonstration and a written device list instead of assuming every feature mentioned in an industry guide is included in the base package.",
        ],
        image: { src: "/showcase/microdrama-admin-overview.webp", alt: "MicroDrama reference admin dashboard with catalog and viewer summary panels" },
      },
      {
        id: "compare-provider-quotes", title: "Compare ownership and operating responsibility",
        paragraphs: [
          "For a hosted subscription service, check the recurring software fee, usage allowances, overages, feature tiers, and what happens when you leave. For a deployment to your cloud, check who operates the accounts, applies updates, investigates incidents, and pays the infrastructure providers. These approaches assign responsibility differently; one headline price does not compare the complete service.",
          "If a source license matters, ask exactly which repositories and documentation are delivered and which external services they depend on. Source access does not automatically include indefinite support, provider accounts, content rights, or every third-party license. Agree a handover that the team maintaining the service can use.",
        ],
        options: [{ title: "Connect cost to the business model", text: "Subscriptions, ads, and rentals earn revenue differently and need different operating assumptions.", href: `/blog/${OTT_MONETIZATION_SLUG}`, linkLabel: "Compare OTT monetization models" }],
      },
      {
        id: "budget-brief", title: "Bring these details to the first quote",
        paragraphs: ["You do not need a precise traffic forecast to start a conversation. A small, explicit set of assumptions is more useful than asking for an unlimited platform. Use the first release to validate viewing, checkout, and the bill before increasing the catalog or campaign budget."],
        bullets: ["Launch devices: website, iOS, Android, and any separately scoped TV platforms", "Catalog duration, video quality, and expected monthly viewing", "Subscriptions or other access models and payment markets", "Source license, custom integrations, and post-launch support requirements", "Named owners for the cloud, video, store, and payment accounts"],
      },
    ],
    sources: [
      { title: "AWS Well-Architected: cost optimization for streaming media", url: "https://docs.aws.amazon.com/wellarchitected/latest/streaming-media-lens/cost-optimization.html" },
      { title: "Cloudflare Stream: current storage and delivery pricing", url: "https://developers.cloudflare.com/stream/pricing/" },
      { title: "Apple: subscriptions and ongoing value", url: "https://developer.apple.com/app-store/subscriptions/" },
    ],
  },
  {
    slug: OTT_MONETIZATION_SLUG,
    title: "OTT Monetization: SVOD, AVOD, TVOD, or a Hybrid?",
    seoTitle: "OTT Monetization Models: SVOD vs AVOD vs TVOD",
    description: "Compare subscriptions, advertising, rentals, and hybrid OTT monetization. Define viewer access, payment rules, costs, and the model to test at launch.",
    image: "/showcase/microdrama-web-vip-pass.webp",
    datePublished: "2026-11-22",
    intro: "A film library, a specialist series service, and a one-off premiere do not need the same paid offer. Before building payment screens, decide what viewers receive and why they will return. This guide compares the main OTT revenue models and the checks that make an offer understandable to viewers and manageable for the operator.",
    takeaway: "Choose one primary access model for the first release. Specify the catalog, price, access duration, and what happens after payment. Subscriptions and ads are part of our standard OTT offer; rentals, pay-per-view, and custom combinations need explicit scoping.",
    nextStep: {
      title: "Walk through the offer with one title in mind",
      text: "Tell us whether your first viewers should subscribe, watch ads, or pay for a specific release. We can demonstrate the standard viewing flows and identify any additional payment or access work.",
      links: [{ href: OTT_PATHS.platform, label: "Explore the OTT streaming platform" }, { href: `/blog/${OTT_COST_SLUG}`, label: "Plan launch and monthly costs" }],
      whatsappMessage: "Hi, I read the OTT monetization guide and would like to discuss subscriptions and access for our catalog.",
    },
    sections: [
      {
        id: "start-with-access", title: "Define what a viewer gets before choosing a model",
        paragraphs: [
          "Write a single sentence describing the offer: who can watch which videos, for how long, on which devices, and in which markets. This becomes the rule shared by the catalog, player, checkout, and support team. A film shown as included in the catalog should not unexpectedly require another purchase halfway through playback.",
          "Separate a business-model choice from a software capability. A platform can support subscriptions while a specific license or launch market requires a different arrangement. Use your content agreements and commercial plan to choose the offer, then ask the implementation team to prove that its access rules match.",
        ],
      },
      {
        id: "svod", title: "SVOD: charge a recurring subscription",
        paragraphs: [
          "Subscription video on demand gives a viewer continuing access to an agreed catalog during a paid period. It suits a service with a reason to return: new releases, a useful specialist library, or an ongoing programming schedule. A subscription is a promise of continuing value, not just a way to collect the first payment.",
          "Explain the billing period, renewal terms, catalog coverage, and cancellation path before checkout. Test sign-in on a second device, restore access where applicable, and decide what the player shows after expiry. Apple's subscription guidance is useful for reviewing mobile offers, but store eligibility and billing choices still need checking for the markets you serve.",
        ],
        image: { src: "/showcase/microdrama-web-vip-pass.webp", alt: "MicroDrama demo VIP pass showing subscription choices in the reference website" },
      },
      {
        id: "avod", title: "AVOD: fund viewing with advertising",
        paragraphs: [
          "Advertising-supported video on demand lets viewers watch an agreed catalog with advertisements. Its economics depend on actual ad delivery, audience markets, advertiser demand, and the viewing experience. A large catalog or a high number of sign-ups does not guarantee that every ad request will earn revenue.",
          "Plan the placement and frequency of ads, the behavior when an ad fails, and the reports used to reconcile revenue. VAST is an IAB Tech Lab standard for describing video ad responses and player behavior; it is not a source of advertisers or a guarantee of ad fill. Server-side ad insertion, dedicated TV advertising, and specialist ad integrations should be discussed separately.",
          "Keep the terms clear if there is also an ad-free plan. Define whether it removes all ads, only certain placements, or excludes sponsorship built into the video. Review consent and advertising setup for the target markets with the people responsible for those policies.",
        ],
        bullets: ["Ad opportunities and successfully delivered ads are different measures.", "No-fill and ad errors need an agreed fallback so viewers are not trapped.", "Measure completion and continued viewing alongside ad revenue.", "Separate standard ad support from optional ad-server and TV integrations."],
      },
      {
        id: "tvod", title: "TVOD: sell a rental or a specific release",
        paragraphs: [
          "Transactional video on demand charges for a particular title or viewing right. A rental might expire after a defined window, while another product grants a different duration of access. Pay-per-view can fit a particular event or premiere, but a live event also requires a separate live delivery and operational plan.",
          "Define when the window begins, whether a viewer may resume after it ends, how access works across devices, and what support does after a failed payment or refund. Do not call a rental permanent ownership. Our standard OTT package does not automatically include a custom rental or pay-per-view system; quote and test that workflow explicitly.",
        ],
      },
      {
        id: "hybrid", title: "Hybrid: combine models without confusing the viewer",
        paragraphs: [
          "A hybrid service might offer a free ad-supported catalog and a subscription tier, or a subscription library with separately purchased premieres. The benefit is commercial flexibility; the cost is more access rules, product information, and edge cases for customers and support.",
          "Mark the offer on title cards and explain it again before a purchase. A subscriber should know whether a premiere is included, discounted, or separate. Test the same account on web and mobile so an existing entitlement is recognized correctly. A successful login alone does not prove that all platforms apply the same purchase rules.",
        ],
        checklist: [
          { title: "Label the catalog", text: "Show which titles are free, included in the plan, or sold separately." },
          { title: "Explain the transaction", text: "Make price, billing period, and access duration visible before confirmation." },
          { title: "Test the exception", text: "Check expiry, failed renewals, restoration, and a viewer returning on another device." },
        ],
      },
      {
        id: "payment-and-revenue", title: "Count confirmed revenue and the cost of serving it",
        paragraphs: [
          "Keep checkout starts, successful provider payments, and granted viewing access separate. Stripe documents subscription events and status changes that an integration can use to manage access. The application must also handle duplicate or delayed notifications and its own entitlement rules; showing a checkout success screen is not enough.",
          "For SVOD, review paid subscribers, refunds, renewals, and actual receipts. For AVOD, review filled impressions, advertising receipts, and viewing lost around ad breaks. For TVOD, review completed purchases per title and the costs associated with that release. These measurements answer different questions and should not be merged into an invented universal revenue-per-user figure.",
          "Compare receipts with content, video delivery, payment charges, support, and acquisition costs. Test one model against an explicit budget and catalog before adding a second. The question is whether viewers understand and use the offer at a sustainable cost, not whether the settings page has the most payment options.",
        ],
        options: [{ title: "Build the operating budget", text: "Separate the platform purchase from the monthly cost of serving viewers.", href: `/blog/${OTT_COST_SLUG}`, linkLabel: "Read the white-label OTT cost guide" }, { title: "Compare short-form paid episodes", text: "Micro Drama has a different viewing rhythm and episode-access decisions.", href: "/blog/short-drama-monetization", linkLabel: "Read the Micro Drama monetization guide" }],
      },
    ],
    sources: [
      { title: "Apple Developer: auto-renewable subscriptions", url: "https://developer.apple.com/app-store/subscriptions/" },
      { title: "IAB Tech Lab: Video Ad Serving Template (VAST)", url: "https://iabtechlab.com/standards/vast/" },
      { title: "Stripe: subscription webhooks and access changes", url: "https://docs.stripe.com/billing/subscriptions/webhooks" },
    ],
  },
];

export function ottArticle(slug: string): DramaArticle {
  const article = OTT_ARTICLES.find(item => item.slug === slug);
  if (!article) throw new Error(`Unknown OTT article: ${slug}`);
  return article;
}
