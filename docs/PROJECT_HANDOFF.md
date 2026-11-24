# Project handoff: Mechatron Lab Solutions

Last updated: **24 November 2026** (Asia/Calcutta).

This document records the recent decisions and verified implementation so another AI agent or IDE can continue without reconstructing the conversation. Paths below are relative to the repository root. Current source and the user's latest instructions take precedence over this dated snapshot.

## Read this first

- This is a marketing and lead-generation website for **white-label software that already exists**, rather than primarily a custom-development agency website.
- The three primary product families are **Micro Drama**, **E-commerce**, and **OTT streaming**, with platform, app-only, and website-only packages. Five additional platforms were added on 22 November; see the dedicated section below.
- The homepage prioritizes those families in that order.
- Main production origin: `https://solutions.mechatronlab.com`. Origin selection is centralized in `src/lib/site-config.ts`; do not hardcode a preview hostname into SEO output.
- Framework versions at this handoff: Next.js **16.3.8**, React **19.2.8**, Tailwind CSS **4**, TypeScript **5**.
- Read relevant documentation in `node_modules/next/dist/docs/` before changing Next.js code. The generated instructions in root `AGENTS.md` must remain intact.
- Recent standing user preference: **do not run a full build or start a new server** unless the user changes that instruction. Focused checks are fine. Do not start a server just to finish a small edit.
- Preserve user changes. Check `git status` before editing; the user has been committing changes between messages.

## Latest approved wording: launch timeline

The exact English line is:

> Launch within 2–4 weeks

The user explicitly rejected **"Estimated setup"** and rejected adding smaller supporting text about content readiness, branding, accounts, or app-store review next to this new line.

- Location: **below the main description and above the primary buttons**.
- Presentation: one compact accent-colored line with a small clock icon.
- Shared implementation: `src/components/ui/LaunchTimeline.tsx`.
- Translation key: `LaunchTimeline.label` in `src/lib/messages/{en,es,de,fr,hi}.json`.
- Used by:
  - `src/components/sections/HomeHero.tsx`: homepage.
  - `src/components/sections/StreamingHero.tsx`: all six Micro Drama and OTT product pages.
  - `src/components/sections/Hero.tsx`: all three e-commerce product pages.
  - `src/app/(english)/solutions/page.tsx`: primary-platform section of the solutions catalog (moved out of the global introduction on 23 November).
- This totals **11 English pages**, with localized rendering on the supported translated routes.
- Existing rollout descriptions farther down the pages were retained. The recent change did not globally remove every occurrence of "estimated" or app-store review information.
- No title, URL, canonical, or metadata rewrite was part of this launch-line change.
- Do not extend this fixed launch timeline to the five additional platforms. Their scope, delivery plan, and **price on request** are discussed separately.

## Recent homepage changes

### Product order and naming

- **Micro Drama → E-commerce → OTT** in the hero product cards, platform-preview buttons, and pricing cards.
- Shared data: `src/components/sections/home-platforms.ts`.
- English homepage labels use **Micro Drama** rather than Short Drama. Home-specific message keys avoid unintentionally renaming other pages.
- Homepage introduction and English SEO description were adjusted to match the product order and Micro Drama wording.
- Project examples are ordered: Micro Drama, Mechatron Lab store, eStoreAlley, OTT.
- Homepage project data: `ALL_HOME_SHOWCASE_PROJECTS` in `src/lib/constants.ts`.
- Do not rename internal family identifiers such as `short-drama` just to change visible text. They also select pricing, links, and analytics destinations.

### Approved hero background

Runtime asset: **`public/showcase/home-hero-devices-v2.webp`**.

- AI-generated decorative artwork, not a screenshot or proof of a deployed customer product.
- Dimensions: **1774 × 887**; file size at handoff: **50,654 bytes**, about **49.5 KiB**.
- The user selected image concept **1** and requested this arrangement:
  - E-commerce panel at the **top right**.
  - Phone **below it on the right**.
  - Laptop **to the left of those two**.
  - Quiet dark space on the left for actual page text.
- The generated result was compressed to WebP before use. The app references only the repository asset, not an agent-specific generated-image directory.
- The older concept-1 and concept-3 comparison assets and preview-switching code were removed. Do not restore `heroPreview` URL handling or comparison buttons.
- The original `home-hero-platforms.webp` is not the active homepage background.

Implementation: `src/components/sections/HomeHero.tsx`.

- Text aligns to the left edge of the wide content container and product cards.
- Text column is capped at `34rem` on large screens.
- Desktop artwork is shifted slightly right (`3%`) and up (`1.5rem`).
- Desktop background layer has a `40rem` height cap; bottom gradient blends into the page.
- Desktop uses the stronger dark overlay the user approved.
- Mobile overlay was subsequently **lightened at the user's request**, with brighter description text for readability. Do not reapply desktop darkness to mobile.
- Decorative Next.js Image uses empty alt text, `fill`, `sizes="100vw"`, eager loading, and low fetch priority.

### Motion and the platform-preview section

Implementation: `src/components/sections/HomePlatformsDeck.tsx`; animation styles: `src/app/globals.css`.

- Section title: **"See the platforms in action"**.
- Starts with Micro Drama, then E-commerce, then OTT, looping in that order.
- Automatically advances after **60 seconds** of eligible viewing time.
- Small pause/resume control; manual product selection remains available.
- Automatic switching pauses while the section is hovered or contains keyboard focus, while the browser tab is hidden, and while less than 25% of the section's observed content is visible.
- Resuming starts a fresh interval. This is not a global clock that keeps advancing unseen.
- Reduced-motion preference disables automatic switching by default; the visitor can explicitly enable it with the control.
- Automatic changes do not fire the manual `select_platform` click event.
- Timer, observer, and event listeners are cleaned up on effect teardown.
- Demo screenshots use a stable 16:9 frame with contain sizing, preserving the whole image.
- Motion is deliberately restrained:
  - `home-hero-drift`: 16-second subtle background drift.
  - `home-platform-float`: 12-second subtle screenshot float.
  - `home-platform-in`: 450 ms transition when the selected platform changes.
- New motion is enabled only for users without reduced-motion preferences and outside forced-colors mode. Keep text and primary controls stable.

### OTT image correction

- The OTT preview in "See the platforms in action" previously referenced an older illustrative case-study image.
- It now uses **`/showcase/microdrama-catalog.webp`**, the compressed real demo screenshot already used on the OTT platform page.
- The surrounding copy and alt text identify it as the **MicroDrama demo**, avoiding a false claim that it is a screenshot of the broadcaster case study.
- The OTT case-study link remains relevant and available.

### Projects and case studies: larger images

- Shared component: `src/components/sections/Work.tsx`.
- Added optional `imageLayout="wide"`; only the homepage opts into it in `src/components/pages/home.tsx`.
- Homepage desktop rows use **40% text / 60% image**, accounting for the column gap.
- Images remain full-width beneath the copy on smaller screens.
- Updated responsive image `sizes`; lazy loading and contain sizing remain.
- Default compact layout stays available for other consumers. Do not change all project sections globally when adjusting the homepage.

## Privacy and cookie consent

Implementation: `src/components/site/CookieConsent.tsx`.

- Popup delay changed from **800 ms to 60,000 ms** after the component mounts.
- Only appears if there is no saved `cookie_consent` choice.
- Existing accept/decline behavior and Google consent updates were preserved.
- Timeout is cleared on unmount.
- Do not revert the delay to an immediate or sub-second popup.

## Current public product URLs

Use route constants rather than scattering URL literals through components.

| Product | Platform | Apps | Website |
| --- | --- | --- | --- |
| Micro Drama | `/solutions/launch-micro-drama-platform` | `/solutions/launch-micro-drama-app` | `/solutions/launch-micro-drama-website` |
| E-commerce | `/solutions/launch-ecommerce-platform` | `/solutions/launch-ecommerce-app` | `/solutions/launch-ecommerce-website` |
| OTT | `/solutions/launch-ott-streaming-platform` | `/solutions/launch-ott-app` | `/solutions/launch-ott-website` |

- Micro Drama constants and aliases: `src/lib/short-drama-paths.ts`.
- E-commerce and OTT constants and aliases: `src/lib/solution-paths.ts`.
- Permanent redirects from old English solution URLs, including `/en` aliases: `next.config.ts`; also inspect `src/proxy.ts` before routing changes.
- `/solutions/ott-video-streaming-development` redirects to the current OTT website page.
- Do not reintroduce old URLs into English navigation, canonical URLs, sitemaps, or marketing links.
- Do not remove legacy redirects simply because the new routes work.
- Other main routes: `/`, `/solutions`, `/blog`, `/case-studies`, `/about`, `/contact`.

## Localization and commercial data

- English routes live under `src/app/(english)/`; the route-group name is not part of the URL.
- Localized routes live under `src/app/[locale]/`.
- Languages: English, Spanish, German, French, Hindi (`en`, `es`, `de`, `fr`, `hi`).
- Fully routed localized landing families currently cover **home and the three complete platforms**, not every app-only, website-only, or blog page.
- Localized platform paths retain their existing path names, for example `/es/solutions/short-drama`. This is intentional; English launch URLs map through `src/lib/site-config.ts`.
- Unsupported localized content uses the existing English fallback behavior. Do not manufacture new translated routes without content and metadata.
- Reuse shared page sections; do not create a simplified second experience per language.
- Visible strings use `englishMessage(...)` and `useMessages()`/`createLocalizer(...)`. Add new keys to all four non-English dictionaries as well as English.
- Use natural terminology in each language rather than mechanically replacing every instance with the English phrase "Micro Drama".
- Shared document shell, website identity, and base metadata: `src/components/site/SiteDocument.tsx`.
- Central pricing source: `src/lib/pricing-catalog.ts`; related mappings: `short-drama-offers.ts`, `ott-offers.ts`.
- Do not hardcode prices in new marketing copy or schema; use the catalog helpers.
- Currency defaults: English and Spanish USD; German and French EUR; Hindi INR. Manual choices are stored per language. See `src/lib/currency-preferences.ts`.
- Source code is an **optional commercial license**, not automatically included in every launch package. Preserve accurate pricing and ownership wording.

## Marketing and design decisions to preserve

- Keep headings simple and readable; the user dislikes "suite" and unnecessary jargon.
- Prefer **white-label** over **ready-made** where it makes sense.
- Do not append brand keywords to every SEO title or rewrite the agreed titles without a specific reason and user direction.
- Use real application screenshots for product proof. Approved decorative hero art is a separate use case.
- Focus demo sections on live, independent web/iOS/Android test builds. The user rejected the illustrative interactive player/payment mock-preview.
- Avoid visible screenshot captions such as "MicroDrama streaming example" beneath hero images. Appropriate image alt text should still remain.
- Preserve a clean interface: subtle carousel controls, no visible carousel scrollbars, responsive widths, and generous section spacing.
- Do not make another broad homepage redesign without direction. A previous redesign was explicitly rejected and reverted.
- Prefer shared components and product data; avoid cloning English and localized implementations.

## SEO analysis that was discussed but not implemented

The user supplied Google screenshots comparing the parent store's grouped sitelinks against separate Solutions results.

- Grouped sitelinks are Google's automatic presentation; there is no missing "enable sitelinks" switch.
- Prior inspection found a working homepage, self-canonical, indexable directives, sitemap, and existing `WebSite`/`Organization` data.
- Possible clarity improvements were discussed: distinct homepage/catalog roles, a clear parent-site link, and simpler navigation labels.
- The user said to **ignore that work for now**. Do not implement it as an outstanding approved task.
- No ranking increase or lead-recovery result was measured or established by the recent UI changes. Do not claim causation from screenshots or commits alone.
- Search Console inspection and traffic/conversion comparisons are needed for future ranking/lead investigations.

## Existing content work: useful entry points

The site has supporting Micro Drama guides and competitor-app articles; do not create a near-duplicate blog without checking the content registry and existing route first.

- Registry: `src/lib/content/short-drama-articles.ts`.
- Existing guide topics include platform launch, white-label builders, source code, publishing, launch checklist, backend architecture, and website architecture.
- Existing English blog routes include `/blog/build-app-like-reelshort`, `/blog/build-app-like-dramabox`, and `/blog/launch-app-like-netshort`.
- Related guides place live demo access near the top, as previously requested.
- Do not copy competitors' wording, invent revenue/user figures, or promise DRM/security capabilities based only on marketing terms. Research claims need sources and implementation claims need code evidence.

### Added on 22 November: four streaming guides

The user requested additional Micro Drama and OTT blogs. Four English guides were added after reviewing existing topics and researching primary sources. Product landing pages and homepage layouts were not changed as part of this task.

| New route | Intent |
| --- | --- |
| `/blog/micro-drama-marketing-strategy` | Trailer-to-episode journeys, viewing and payment measurement, repeat viewing, campaign economics |
| `/blog/localize-micro-drama-app` | First additional market/language, catalog translation, subtitle/audio checks, store listings, localized paid-access tests |
| `/blog/white-label-ott-platform-cost` | Published launch packages versus ongoing hosting, media delivery, content, payments, and support costs |
| `/blog/ott-monetization-svod-avod-tvod` | Subscriptions, advertising, rentals, hybrids, entitlement rules, and revenue measurement |

- Micro Drama content: `src/lib/content/micro-drama-growth-guides.ts`, included in `DRAMA_ARTICLES` via `src/lib/content/short-drama-articles.ts`.
- OTT content: `src/lib/content/ott-articles.ts`, exporting `OTT_ARTICLES`, slug constants, and `ottArticle()`.
- All four reuse `src/components/blog/DramaArticlePage.tsx`. It now accepts optional `family="ott"`; existing Micro Drama routes retain the default. `articleMetadata(slug, "ott")` selects the matching OTT metadata.
- The article model supports an optional article-specific next step, launch headline, and section screenshot. These let the new guides use relevant calls to action and existing compressed demo images without cloning layouts.
- For OTT articles, the shared template uses **OTT package IDs and links**, and clearly identifies the early test builds as MicroDrama references. Do not claim they prove all widescreen, live, TV, or DRM features.
- The OTT cost page includes a USD package table powered by the central pricing catalog, including the correct complete-platform source-license ID `cinematic-base-source-code`.
- New Micro Drama guides use the approved **"Launch within 2–4 weeks"** line without adding readiness conditions beside it. Older blog launch-box wording was preserved.
- Each new guide has six substantive sections, its own title/description/canonical/share metadata, Article and breadcrumb schema, real publication date `2026-11-22`, source links, and internal commercial/guide links. The main text is approximately 830–950 words per guide before shared demo, pricing, and related material.
- Primary references include Google Analytics and Search Central, Apple localization/subscriptions, Google Play localization, AWS streaming cost guidance, Cloudflare pricing, Stripe subscription events, and IAB VAST. Source links are included on the articles; no search-volume figures or ranking improvements were measured.
- Hypothetical campaign and delivery-cost calculations are explicitly examples, not customer results, market benchmarks, or a supplier quote. Do not turn the illustrative `$1 per 1,000 minutes` assumption into the site's asserted provider pricing.
- Live channels, dedicated TV apps, commercial DRM, TVOD rentals, pay-per-view, and custom hybrid workflows remain separately scoped where indicated. A signed playback URL is not commercial DRM.
- The blog index includes both article registries. Related Micro Drama lists pick up the new guides automatically; the existing OTT development guide now links to the new OTT articles and has a truthful modified date of `2026-11-22`.
- `src/app/sitemap.ts` includes all new routes; the sitemap now has **60 URLs**. The integration script expectations were updated, but the server-dependent integration run was not performed.
- Verification: **14 unit tests passed**, including new content integrity checks; TypeScript and translation checks passed. Offline React rendering also checked metadata, Article schema, demo placement, package rendering, and two existing-guide regressions. Targeted ESLint had no errors; it reported an existing cleanup-expression warning in `tests/seo.test.mjs`.
- No application server, full Next.js build, push, or deployment was performed for this content task. Temporary offline rendering files stay in ignored `scratch/`.

## Additional software platforms — added 22 November, consolidated 23 November 2026

The user approved adding five projects from their other public catalog, `https://project-catalog-web.web.app/`, while preserving the site's three primary product families and major homepage/header/footer design. URLs follow the existing `launch-` convention. Pricing is **Price on request**, with no invented amounts or fixed launch deadlines.

### Routes and discovery

- Combined catalog: `/solutions`, with the five additional products at `/solutions#other-platforms`.
- Retired `/solutions/more-platforms` and `/en/solutions/more-platforms` permanently redirect to `/solutions` through `next.config.ts`, preserving query parameters. The separate overview route and `MorePlatformsPage.tsx` template have been removed.
- Taxi: `/solutions/launch-taxi-booking-platform`.
- Food delivery: `/solutions/launch-food-delivery-platform`.
- Appointments: `/solutions/launch-appointment-booking-platform`.
- Real estate: `/solutions/launch-real-estate-platform`.
- Solar CRM: `/solutions/launch-solar-crm`.
- Homepage adds one compact **More software platforms** section after **Projects and case studies**. Main product order stays Micro Drama → E-commerce → OTT. No new screenshots are downloaded by this homepage section.
- The existing **All architectures & catalogs** navigation link and footer catalog link lead to the combined catalog; the extra **More platforms** navigation/footer entries were removed. The mobile catalog label now reads **All platforms**, with translations, instead of **All (9)**.
- The homepage overview link now targets `/solutions#other-platforms`. Product breadcrumbs lead to `/solutions`; their related-platform links target the additional-products section directly.
- Primary catalog cards are ordered **Micro Drama → E-commerce → OTT**, followed by the five additional products. The previous delivery/logistics roadmap teaser was removed because delivery products are now listed as available.
- Navigation and homepage card copy are translated in all five message dictionaries. The combined catalog and detail pages are **English only**; `LocalizedLink` marks English resources for localized visitors. Do not invent localized routes or hreflang equivalents.

### Verified catalog scope

- **SPLITT E:** taxi, bike taxi, and parcels; customer and driver Android listings. No iOS, web booking, or operator-admin deliverables were established by the catalog.
- **Foodie:** public customer ordering website, restaurant panel, and admin demo. Mobile/delivery builds must be confirmed in the quote.
- **Appointment Booking & Business Desk:** customer and business web demos, services, staff calendars, appointments, payments, and reports. Do not imply native mobile builds, clinical records, or hospital management.
- **Aurum Estates:** property/land discovery and inquiry workflows; screenshots, **no public demo link**. Do not promise investment processing or official property verification.
- **Solar System CRM:** lead pipeline, surveys, quotes, installation milestones, subsidy/net-meter status records, and operations/reporting. Status tracking does not establish government portal integration.
- Demo destinations came from visible catalog links. They were not authenticated or tested through real bookings, payments, or installations.

### Shared implementation and SEO

- Small paths/card registry: `src/lib/additional-platform-paths.ts`. Detailed content and public demo URLs: `src/lib/content/additional-platforms.ts`.
- Shared detail template: `src/components/platforms/AdditionalPlatformPage.tsx`. Catalog: `src/app/(english)/solutions/page.tsx`. Compact homepage/cards: `src/components/sections/MorePlatforms.tsx`; the catalog reuses `PlatformCards` with screenshots.
- Detail pages include a hero, early available demos or walkthrough request, features, two screenshot/workflow modules, operating steps, scope/handover information, visible FAQs, and quote/WhatsApp CTAs.
- Mobile homepage/feature cards reuse `ShortDramaCardRail`. Screenshot modules reuse `ScreenshotGallery` with swipe, autoplay, reduced-motion handling, and viewport-triggered lazy image loading. Hero images reserve space and use Next Image preload; other screenshots are deferred.
- Each page has its own title, description, canonical, Open Graph/Twitter image, and breadcrumb schema. Detail pages emit semantic `SoftwareApplication` and matching FAQ schema; `/solutions` emits `CollectionPage`/`ItemList` for all **14 package/product destinations**. Catalog description and sharing descriptions now cover the expanded range.
- Quote-based software schema deliberately has **no Offer, zero price, reviews, or ratings**. This is not a promise of eligibility for Google's software rich results.
- After the catalog consolidation the sitemap had **67 URLs**; the five guides added later on 23 November bring the current total to **72 URLs**. This supersedes the original 68-URL addition and the older 62-URL snapshot below. The retired overview is excluded. No fabricated last-modified dates were added.

### Images and inquiries

- Imported **22 real catalog screenshots** into `public/showcase/platforms/`. WebP at quality 80, landscape widths up to 1280px and portrait widths up to 640px. Combined size **987,520 bytes**, down from **3,405,859 bytes**; largest file **88,106 bytes**.
- Source JPEGs, download manifest, offline previews, and scripts stay in ignored `scratch/additional-platforms/`. No external image hotlinks are used at runtime. Image dimension registry was regenerated.
- New CTA IDs: `taxi-booking`, `food-delivery`, `appointment-booking`, `real-estate`, `solar-crm`, and general additional-platform inquiry `more-platforms`. The last remains an internal inquiry/analytics ID, not a public page; the catalog section's inquiry button uses it.
- `src/lib/lead-interest.ts` centralizes the existing modal selection logic and new pathname inference. Explicit product choices and generic navbar CTAs retain the correct platform.
- Lead modal and contact-page options, API notification labels, and contextual WhatsApp text now support the new products. Existing main-family packages and prices are preserved. Contacts use this site's existing contact details, not a different phone number from the catalog.
- A narrow-screen header overflow found in offline review was corrected with reduced padding **below 360px only**.

### Validation limits

- **23 November consolidation:** 19 unit tests passed, including Next's config-routing utility checking both old URL variants with and without campaign parameters. TypeScript, translation checks, targeted ESLint, and whitespace checks passed. Offline rendering checked the 14-item collection, category order, updated links, and launch-line scope; the combined catalog, five detail pages, and five localized homepage sections passed 44 saved-preview overflow checks. This did not run an application server, production build, or deployed HTTP integration checks. Git staging was left to the user; preserve their existing staged work.

- 18 unit tests passed, including media/SEO registry integrity, new and existing lead selections, and mocked notification labels. No real lead was sent.
- TypeScript, translation validation (1,178 English messages and four translated dictionaries), targeted ESLint, and whitespace checks passed for this addition.
- Offline React rendering checked all five detail pages, overview, and homepage cards in five languages. Hidden-browser review of saved HTML passed 44 overflow checks at **320, 390, 1440, and 1920px**; representative dark/light and mobile screenshots were reviewed.
- These previews stub Next's image/link routing and the site context. They do not establish hydrated browser behavior or a deployed site's accessibility, Core Web Vitals, rankings, or completed demo workflows.
- No application server, full Next.js build, push, or deployment was performed. Run production smoke checks after deployment and confirm scoped commercial terms before promising new-platform deliverables.

## Business-platform blogs — 23 November 2026

The user requested related blogs for the additional products, at least one. One English guide was added for **each of the five**:

- `/blog/launch-white-label-taxi-booking-app`: customer/driver workflows, service areas, mapping versus dispatch, fares, and trip acceptance tests.
- `/blog/white-label-food-delivery-platform-guide`: restaurant acceptance, customer ordering, payment recovery, delivery handoffs, and release checks.
- `/blog/appointment-booking-software-staff-calendar`: service duration, staff calendars, availability, time zones, booking changes, and access.
- `/blog/real-estate-listing-website-lead-generation`: property information, image discovery, contextual inquiries, follow-up, and lead-quality measurement.
- `/blog/solar-crm-lead-to-installation-workflow`: pipeline ownership, surveys, quotations, installation milestones, status records, and after-sales.

Implementation:

- Content registry: `src/lib/content/business-platform-guides.ts`. Each guide has distinct sections, a four-step checklist, three visible FAQs, a published date of **2026-11-23**, and a primary reference linked beside the relevant discussion.
- Shared template: `src/components/blog/BusinessPlatformGuide.tsx`, with thin English route wrappers. Metadata includes unique titles/descriptions, canonical URLs, article sharing metadata/images, Article schema, matching FAQ schema, and breadcrumbs. No unbuilt language alternates or fabricated modification dates.
- Product examples appear **immediately after the article header**, before contents. They reuse the existing compressed WebP covers with lazy loading and known dimensions. No new image downloads were needed.
- Real estate shows product screens and a walkthrough request; it has no invented public demo. The other guides reuse confirmed public demo links from the product data.
- Guides keep **Price on request**, with no numeric product price, fixed two-week promise, or invented app/dispatch/payment/calendar/government integration claims. Operational checks describe requirements to discuss and demonstrate.
- Source references reviewed: Google Maps route matrices (`developers.google.com/maps/documentation/routes/compute_route_matrix`), Stripe fulfillment (`docs.stripe.com/checkout/fulfillment?ui=full-page`), Google Calendar Freebusy (`developers.google.com/workspace/calendar/api/v3/reference/freebusy/query`), Google image SEO (`developers.google.com/search/docs/appearance/google-images`), and PVWatts (`pvwatts.nlr.gov/docs/help_about.php`). Sources inform practical guidance; their tools are not claimed as included integrations. No keyword-volume or ranking uplift claim was made.
- The blog index includes all five entries and a **Business Platforms** filter. Its introduction and sharing descriptions now reflect the broader catalog; its fixed 2–4 week cross-sell heading explicitly names only Micro Drama, E-commerce, and OTT.
- All five product pages link back to their relevant guide. Small guide slug mappings live in `additional-platform-paths.ts`; navbar inquiry selection and contextual WhatsApp recognize the new article paths without bundling full article text into shared client components.
- Sitemap now has **72 canonical URLs**. Integration coverage was updated but not run against a server.

Verification:

- **20 unit tests passed**, including guide coverage/routes/anchors/sources and inquiry selection from article URLs. TypeScript, translation validation, targeted ESLint, and whitespace checks passed.
- Offline rendering checked all five route exports and metadata, Article/FAQ schema, early demos, internal product links, quote wording, and the blog listing. Saved previews passed **18 responsive checks** at 320, 390, and 1440px; representative article and listing screenshots were reviewed.
- Existing limitations remain: previews stub Next routing/images/context and do not prove hydrated interactions, deployed image delivery, real notification delivery, search indexing, or rankings. No full build, application server, push, or deployment was performed. Temporary review scripts/screens stay in ignored `scratch/business-guides/`.

## Lead delivery alerts — 23 November 2026

- `/api/lead` attempts a flagged Telegram alert for each server-side validation rejection, spam rejection, unexpected processing error, or notification issue. An unconfigured optional channel alongside a successful one is normal. The old five-minute alert cooldown was removed at the user's request so rejected inquiries are handled individually.
- Validation and total delivery failures include bounded extracts of submitted name, email as typed, phone, company, and project notes when available. Telegram marks these fields unverified. Spam, unreadable JSON, and partial delivery alerts contain diagnostic context. Raw bodies, IPs, unrelated fields, and headers are excluded. Server logs contain diagnostics only. The generated request ID matches the `X-Lead-Request-Id` response header and is included in normal notifications and issue alerts.
- Malformed JSON, non-object bodies, and invalid field types return `400`. The API returns known field error codes for names, email addresses, and project notes. The contact form and booking modal now use the shared checks before sending and map the same server codes to localized amber warnings beside the fields. The first affected field receives focus. Connection, delivery, and unconfirmed outcomes have separate messages and preserve entered values.
- `TELEGRAM_ALERT_BOT_TOKEN` and `TELEGRAM_ALERT_CHAT_ID` optionally override the lead bot and chat for alerts. Telegram delivery gets up to two attempts. Alerts get up to three, with one- and two-second backoff and Telegram's rate-limit wait respected within the applicable budget. Telegram and the lead webhook are attempted in parallel. The forms and API accept up to 8,000 characters of notes. If a Telegram message would approach the text limit, send one UTF-8 text attachment with a summary to keep the notes and inquiry together across retries. The webhook payload includes the full accepted notes.
- Retries run within the handler and no durable lead storage or job queue is configured. If all channels and retries fail, logs support diagnosis but cannot reconstruct the contact fields. An ambiguous provider timeout can result in duplicate messages sharing the same request ID.
- Verification for the form follow-up used mocked notification calls and browser interception on the running local site. Tested client and API validation, inline warnings in light and dark themes, focus, input retention, connection and delivery failures, duplicate clicks, retry, and a long multiline Unicode note in both the Telegram attachment and webhook payload. No real test lead or message was sent.

## Missing pages — 24 November 2026

- `src/app/global-not-found.tsx` gives visitors Home, Solutions, and Blog links on unmatched routes. The app uses Next.js's global 404 convention because the English and localized routes have separate root layouts. Invalid paths such as `/blog/null` and `/solutions/null` keep their 404 status and `noindex` metadata.
- The prior log audit found no `/null` link on the affected production pages. There is no redirect, crawler rule, or special route for those paths. The integration check covers their 404 status, noindex metadata, and navigation links.

## Verification and release status

### E-commerce follow-up on 22 November

The user's follow-up extended the blog work to e-commerce. Two English guides were added alongside the existing website, app, and cost guides:

- `/blog/move-to-white-label-ecommerce-platform`: moving catalog/variants, customer access, open orders, URLs, checkout, final sync, and recovery.
- `/blog/multi-warehouse-ecommerce-inventory`: per-location stock, reservations, allocation, transfers, returns, shared website/app orders, and supplier acceptance tests.

Implementation and scope:

- New content lives in `src/lib/content/ecommerce-operations-guides.ts` and is included in `ECOMMERCE_GUIDES` in `src/lib/content/ecommerce-guides.ts`.
- Both use the existing `src/components/blog/EcommerceGuide.tsx` template. It now supports a separate SEO title, per-guide modified date, and optional early live examples.
- The new guides use **"Launch within 2–4 weeks"**, a package-specific inquiry button, and real Mechatron Lab/eStoreAlley website and Android listing links before the article contents.
- Images reuse compressed `commerce-storefront.webp` and `commerce-admin.webp`; no generated product screenshots or additional heavy media were introduced.
- Operational recommendations are acceptance criteria, not claims that every migration/import/ERP/warehouse workflow ships in the base package. Custom connectors, stock reservation details, and data portability must be demonstrated and scoped.
- Sources include Google's migration/navigation documentation, Shopify's location and routing documentation as industry references, and Stripe's payment/fulfillment documentation. Competitor features are not attributed to our platform.
- Blog listing and sitemap now derive e-commerce entries from the shared registry, so all five e-commerce guides are included. Related links on existing e-commerce articles also expose the new guides.
- The sitemap now has **62 URLs**, superseding the 60-URL snapshot above. Integration expectations were updated, without starting a server or running integration requests.
- Verification: **15 unit tests passed**, including e-commerce route/media/date/anchor/link integrity; TypeScript and translation checks passed. Offline rendering checked both new articles, all three old e-commerce articles, the four new streaming articles, metadata/schema, demo order, and pricing regressions. Targeted lint had no errors and the same pre-existing test cleanup warning.
- No homepage/product-page redesign, full build, new application server, push, or deployment was part of this follow-up.

These are records of checks during the recent work, not promises that future edits are already validated:

- Existing `npm test` suite: **13 tests passed** during the homepage/rotation work.
- Additional temporary fake-clock checks exercised the 60-second cycle, three-product loop, pause/resume, hover/focus, visibility, off-screen pause, reduced-motion default, and timer cleanup.
- Latest launch-line change passed translation validation, `npx tsc --noEmit`, targeted ESLint, and `git diff --check`.
- Translation validation at that point covered **1160 English keys and four non-English dictionaries**. The count will change as strings are added.
- Offline snapshots of the actual hero components and compiled styles were inspected for desktop dark/light and narrow mobile content. These were not end-to-end tests of a running production deployment.
- Temporary render helpers and snapshots live under ignored `scratch/hero-review/` in this workspace; they are not needed to run the application and are not guaranteed to exist in another checkout.
- No full Next.js build, new application server, push, or deployment was performed by the assistant during these recent changes. The user may commit or deploy independently; check current Git/Vercel state rather than inferring it.
- Do not claim fresh Lighthouse scores, Search Console results, Google rankings, or production sign-off from these checks.

Focused commands, when relevant to an actual change:

```powershell
npm run i18n:check
npx tsc --noEmit
npx eslint <changed-source-files>
npm test
git diff --check
```

`npm run test:seo` is a separate integration script; inspect its requirements before running. `npm run images:dimensions` regenerates the image-dimension registry when appropriate. Do not run unrelated broad checks for a documentation-only edit.

## Git and document continuity

- Original code snapshot when this handoff was first written: commit **`08aba30`** (19 November 2026). Working tree was clean before that original handoff task; subsequent content work is summarized above. Always inspect the current status.
- Related recent commits: `e30851c` (homepage order, imagery and project proportions), `a541ec4` (hero artwork/layout, motion, auto-switching and consent delay), `08aba30` (shared launch line).
- `.gitignore` keeps scratch files and older docs ignored. **This handoff is the one exception**, so it can travel with the repo.
- Root `AGENTS.md` points here. `CLAUDE.md` already imports `AGENTS.md`.
- Some older README wording, directory examples, and research docs predate the current URLs and commercial terms. Prefer current source and this dated handoff for recent decisions; investigate discrepancies rather than blindly copying old claims.
- Keep credentials, customer leads, account exports, and private environment values out of this document and Git.

## How to resume in another IDE or agent

Ask the new agent:

> Read AGENTS.md and docs/PROJECT_HANDOFF.md, inspect the current Git status, and continue from the existing implementation. Preserve the approved copy and layouts. Do not start a server or run a full build; use focused checks when needed. Follow my next request rather than automatically implementing previously discussed SEO ideas.

There is **no outstanding implementation task** from the recent requests at the time this handoff was written. Continue with the user's next feedback.
