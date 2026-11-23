import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { NextRequest } from "next/server.js";
import { unstable_getResponseFromNextConfig } from "next/experimental/testing/server.js";
import { loadTs } from "./helpers/load-ts.mjs";

test("additional platforms have unique indexable pages, quote-based schema, real demos and compact local media", () => {
  const cache = new Map();
  const { ADDITIONAL_PLATFORMS, additionalPlatform } = loadTs("src/lib/content/additional-platforms.ts", cache);
  const { additionalPlatformMetadata, additionalPlatformSchema } = loadTs("src/lib/additional-platform-seo.ts", cache);
  const { default: sitemap } = loadTs("src/app/sitemap.ts", cache);
  const { SITE_URL } = loadTs("src/lib/site-config.ts", cache);
  const paths = new Set(sitemap().map(item => new URL(item.url).pathname));
  assert.equal(ADDITIONAL_PLATFORMS.length, 5);
  assert.equal(sitemap().length, 72);
  assert.ok(paths.has("/solutions"));
  assert.equal(paths.has("/solutions/more-platforms"), false);
  for (const field of ["id", "heading", "seoTitle", "description"]) {
    assert.equal(new Set(ADDITIONAL_PLATFORMS.map(platform => platform[field])).size, 5, field);
  }
  for (const record of ADDITIONAL_PLATFORMS) {
    const platform = additionalPlatform(record.id);
    const metadata = additionalPlatformMetadata(platform.id);
    const schema = additionalPlatformSchema(platform.id);
    assert.ok(paths.has(platform.path), platform.path);
    assert.ok(existsSync(`src/app/(english)${platform.path}/page.tsx`));
    assert.equal(metadata.alternates.canonical, platform.path);
    assert.deepEqual(metadata.alternates.languages, {}, "Do not claim unbuilt translations");
    assert.equal(metadata.openGraph.images[0].url, platform.image);
    assert.equal(schema.url, `${SITE_URL}${platform.path}`);
    assert.equal(schema.description, metadata.description);
    for (const field of ["offers", "aggregateRating", "review"]) assert.equal(field in schema, false, field);
    assert.equal(new Set(platform.modules.map(module => module.id)).size, platform.modules.length);
    for (const image of [platform.image, ...platform.modules.flatMap(module => module.images.map(image => image.src))]) {
      assert.ok(existsSync(`public${image}`), image);
      assert.ok(statSync(`public${image}`).size < 150_000, image);
      assert.match(image, /\.webp$/);
    }
    for (const demo of platform.demos) assert.equal(new URL(demo.href).protocol, "https:");
    assert.ok(platform.features.length >= 4 && platform.faqs.length >= 3);
  }
  assert.equal(additionalPlatform("real-estate").demos.length, 0, "No fabricated real estate demo");
});

test("retired platform catalog redirects permanently to solutions and preserves campaign queries", async () => {
  const { default: nextConfig } = loadTs("next.config.ts");
  for (const prefix of ["", "/en"]) {
    for (const suffix of ["", "?utm_source=campaign&product=solar"]) {
      const response = await unstable_getResponseFromNextConfig({
        url: `https://example.com${prefix}/solutions/more-platforms${suffix}`,
        nextConfig,
      });
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("location"), `https://example.com/solutions${suffix}`);
    }
  }
});

test("generic and explicit inquiry buttons resolve to the right additional platform without changing existing packages", () => {
  const cache = new Map();
  const { resolveInitialPackage } = loadTs("src/lib/lead-interest.ts", cache);
  const { ADDITIONAL_PLATFORM_PATHS, ADDITIONAL_PLATFORM_GUIDE_SLUGS, additionalInquiryForPath } = loadTs("src/lib/additional-platform-paths.ts", cache);
  for (const [id, path] of Object.entries(ADDITIONAL_PLATFORM_PATHS)) {
    for (const variation of [path, `${path}/`, `${path}?campaign=test`, `/en${path}`]) {
      assert.equal(additionalInquiryForPath(variation), id);
      assert.equal(resolveInitialPackage("launch", variation), id);
    }
    assert.equal(resolveInitialPackage(id, "/"), id);
    assert.equal(resolveInitialPackage("source-code-license", path), "source-code");
    const guidePath = `/blog/${ADDITIONAL_PLATFORM_GUIDE_SLUGS[id]}`;
    for (const variation of [guidePath, `${guidePath}?utm_source=search`, `/en${guidePath}`]) {
      assert.equal(additionalInquiryForPath(variation), id);
      assert.equal(resolveInitialPackage("launch", variation), id);
    }
  }
  assert.equal(resolveInitialPackage("launch", "/solutions/more-platforms"), "more-platforms");
  assert.equal(resolveInitialPackage("launch", "/solutions/launch-micro-drama-app"), "short-drama-app-launch");
  assert.equal(resolveInitialPackage("launch", "/solutions/launch-ecommerce-platform"), "ecommerce");
});

test("each business platform has a distinct guide, valid source links, section anchors and discoverable canonical route", () => {
  const cache = new Map();
  const { BUSINESS_PLATFORM_GUIDES } = loadTs("src/lib/content/business-platform-guides.ts", cache);
  const { ADDITIONAL_PLATFORM_PATHS, ADDITIONAL_PLATFORM_GUIDE_SLUGS } = loadTs("src/lib/additional-platform-paths.ts", cache);
  const { default: sitemap } = loadTs("src/app/sitemap.ts", cache);
  const paths = new Set(sitemap().map(item => new URL(item.url).pathname));
  assert.deepEqual(BUSINESS_PLATFORM_GUIDES.map(guide => guide.platformId).sort(), Object.keys(ADDITIONAL_PLATFORM_PATHS).sort());
  for (const key of ["slug", "title", "seoTitle", "description"]) assert.equal(new Set(BUSINESS_PLATFORM_GUIDES.map(guide => guide[key])).size, 5, key);
  for (const guide of BUSINESS_PLATFORM_GUIDES) {
    assert.equal(guide.slug, ADDITIONAL_PLATFORM_GUIDE_SLUGS[guide.platformId]);
    assert.ok(paths.has(`/blog/${guide.slug}`), guide.slug);
    assert.ok(existsSync(`src/app/(english)/blog/${guide.slug}/page.tsx`), guide.slug);
    assert.ok(paths.has(ADDITIONAL_PLATFORM_PATHS[guide.platformId]));
    assert.equal(guide.datePublished, "2026-11-23");
    const ids = guide.sections.map(section => section.id);
    assert.equal(new Set([...ids, "live-demo", "launch-checklist", "questions", "next-step"]).size, ids.length + 4);
    assert.ok(guide.sections.some(section => section.source));
    for (const section of guide.sections) {
      assert.ok(section.paragraphs.length >= 2);
      if (section.source) assert.equal(new URL(section.source.href).protocol, "https:");
    }
  }
});

test("additional-platform inquiries retain product labels in mocked notifications without a fixed package price", async () => {
  const keys = ["TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID", "TELEGRAM_ALERT_BOT_TOKEN", "TELEGRAM_ALERT_CHAT_ID", "LEAD_WEBHOOK_URL"];
  const previous = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  const originalFetch = globalThis.fetch;
  const { POST } = loadTs("src/app/api/lead/route.ts");
  const { ADDITIONAL_PLATFORM_SUMMARIES } = loadTs("src/lib/additional-platform-paths.ts");
  try {
    process.env.TELEGRAM_BOT_TOKEN = "fake-test-token";
    process.env.TELEGRAM_CHAT_ID = "fake-test-chat";
    delete process.env.LEAD_WEBHOOK_URL;
    for (const platform of ADDITIONAL_PLATFORM_SUMMARIES) {
      let notification = "";
      globalThis.fetch = async (_url, options) => {
        notification = JSON.parse(options.body).text;
        return Response.json({ ok: true });
      };
      const result = await POST(new Request("https://example.com/api/lead", { method: "POST", body: JSON.stringify({ name: "Test", email: "test@example.com", package: platform.id }) }));
      assert.equal((await result.json()).accepted, true);
      assert.ok(notification.includes(platform.title), platform.id);
      assert.ok(notification.includes("price on request"));
      assert.doesNotMatch(notification, /\$[0-9]/);
    }
  } finally {
    globalThis.fetch = originalFetch;
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

test("new streaming guides have discoverable routes, valid media, unique sections and working article links", () => {
  const cache = new Map();
  const { DRAMA_ARTICLES } = loadTs("src/lib/content/short-drama-articles.ts", cache);
  const { MICRO_DRAMA_GROWTH_GUIDES } = loadTs("src/lib/content/micro-drama-growth-guides.ts", cache);
  const { OTT_ARTICLES } = loadTs("src/lib/content/ott-articles.ts", cache);
  const { default: sitemap } = loadTs("src/app/sitemap.ts", cache);
  const allArticles = [...DRAMA_ARTICLES, ...OTT_ARTICLES];
  assert.equal(new Set(allArticles.map(article => article.slug)).size, allArticles.length);
  assert.equal(new Set(allArticles.map(article => article.seoTitle ?? article.title)).size, allArticles.length);
  const paths = new Set(sitemap().map(item => new URL(item.url).pathname));
  const index = readFileSync("src/app/(english)/blog/page.tsx", "utf8");
  assert.match(index, /DRAMA_ARTICLES\.map/);
  assert.match(index, /OTT_ARTICLES\.map/);
  for (const article of [...MICRO_DRAMA_GROWTH_GUIDES, ...OTT_ARTICLES]) {
    assert.ok(paths.has(`/blog/${article.slug}`), article.slug);
    assert.ok(existsSync(`src/app/(english)/blog/${article.slug}/page.tsx`), article.slug);
    assert.ok(article.datePublished && !Number.isNaN(Date.parse(article.datePublished)));
    const ids = article.sections.map(section => section.id);
    assert.equal(new Set(ids).size, ids.length, article.slug);
    for (const image of [article.image, ...article.sections.map(section => section.image?.src)].filter(Boolean)) {
      assert.ok(existsSync(`public${image}`), image);
    }
    for (const section of article.sections) {
      for (const option of section.options ?? []) {
        const [pathname, fragment] = option.href.split("#");
        assert.ok(paths.has(pathname), `Missing internal destination: ${option.href}`);
        const target = allArticles.find(item => `/blog/${item.slug}` === pathname);
        if (fragment && target) assert.ok(target.sections.some(item => item.id === fragment), option.href);
      }
    }
    assert.ok(article.nextStep?.links.some(link => link.href.startsWith("/solutions/")), article.slug);
    for (const source of article.sources) assert.equal(new URL(source.url).protocol, "https:");
  }
});

test("e-commerce operations guides have valid dates, routes, media, section anchors and related destinations", () => {
  const cache = new Map();
  const { ECOMMERCE_GUIDES } = loadTs("src/lib/content/ecommerce-guides.ts", cache);
  const { ECOMMERCE_OPERATIONS_GUIDES } = loadTs("src/lib/content/ecommerce-operations-guides.ts", cache);
  const { default: sitemap } = loadTs("src/app/sitemap.ts", cache);
  const paths = new Set(sitemap().map(item => new URL(item.url).pathname));
  const guides = Object.values(ECOMMERCE_GUIDES);
  assert.equal(new Set(guides.map(guide => guide.slug)).size, guides.length);
  for (const guide of Object.values(ECOMMERCE_OPERATIONS_GUIDES)) {
    assert.ok(paths.has(`/blog/${guide.slug}`), guide.slug);
    assert.ok(existsSync(`src/app/(english)/blog/${guide.slug}/page.tsx`), guide.slug);
    assert.ok(Date.parse(guide.dateModified) >= Date.parse(guide.datePublished), guide.slug);
    assert.ok(existsSync(`public${guide.image.src}`), guide.image.src);
    assert.ok(guide.sections.some(section => section.id === guide.image.section), guide.slug);
    assert.equal(new Set(guide.sections.map(section => section.id)).size, guide.sections.length);
    for (const { href } of [...guide.links, guide.offer, guide.image.example]) {
      if (href.startsWith("/")) assert.ok(paths.has(href.split("#")[0]), href);
    }
    for (const { href } of guide.sources) assert.equal(new URL(href).protocol, "https:");
  }
  assert.match(readFileSync("src/app/(english)/blog/page.tsx", "utf8"), /Object\.entries\(ECOMMERCE_GUIDES\)/);
});

test("currency defaults follow language and manual preferences are isolated by locale", () => {
  const { defaultCurrency, preferredCurrency, currencyPreferenceKey } = loadTs("src/lib/currency-preferences.ts");
  const expected = { en: "USD", es: "USD", de: "EUR", fr: "EUR", hi: "INR" };
  const preferences = new Map([["site_currency", "INR"]]);
  for (const [language, currency] of Object.entries(expected)) {
    assert.equal(defaultCurrency(language), currency);
    assert.equal(preferredCurrency(language, preferences.get(currencyPreferenceKey(language))), currency);
    assert.equal(preferredCurrency(language, "invalid"), currency);
  }
  preferences.set(currencyPreferenceKey("en"), "GBP");
  assert.equal(preferredCurrency("en", preferences.get(currencyPreferenceKey("en"))), "GBP");
  assert.equal(preferredCurrency("hi", preferences.get(currencyPreferenceKey("hi"))), "INR");
  assert.equal(preferredCurrency("fr", preferences.get(currencyPreferenceKey("fr"))), "EUR");
});

test("every locale has complete keyed messages and no missing-key English fallback", () => {
  const { createLocalizer, englishMessage } = loadTs("src/lib/messages.ts");
  const { getLocaleMessages } = loadTs("src/lib/locale-messages.ts");
  const id = "pricing.rate.comparison";
  for (const locale of ["es", "de", "fr", "hi"]) {
    const messages = getLocaleMessages(locale);
    assert.equal(typeof messages[id], "string");
    const l = createLocalizer(locale, messages);
    assert.ok(l.format(id, { value0: "€20", value1: "€100" }).includes("€20"));
    assert.throws(() => createLocalizer(locale, {}).format(id, { value0: 20, value1: 100 }), /Missing/);
  }
  assert.equal(englishMessage(id), "{value0}/hr vs {value1}/hr agency");
});

test("localized package copy preserves commercial amounts, IDs and the original data", () => {
  const cache = new Map();
  const { SHORT_DRAMA_BASE_PRICING_TIERS: tiers } = loadTs("src/lib/constants.ts", cache);
  const { createLocalizer } = loadTs("src/lib/messages.ts", cache);
  const { getLocaleMessages } = loadTs("src/lib/locale-messages.ts", cache);
  for (const locale of ["es", "de", "fr", "hi"]) {
    const translated = createLocalizer(locale, getLocaleMessages(locale))(tiers);
    assert.equal(translated.length, tiers.length);
    for (let index = 0; index < tiers.length; index++) {
      assert.equal(translated[index].id, tiers[index].id);
      assert.equal(translated[index].deliverables.length, tiers[index].deliverables.length);
      for (const currency of ["USD", "EUR", "GBP", "INR"]) assert.equal(translated[index].prices[currency].amount, tiers[index].prices[currency].amount);
    }
  }
  assert.equal(tiers[0].prices.USD.period, "one-time");
});

test("all package cards reference their own central commercial price", () => {
  const cache = new Map();
  const catalog = loadTs("src/lib/pricing-catalog.ts", cache);
  const constants = loadTs("src/lib/constants.ts", cache);
  const tiers = Object.values(constants).filter(Array.isArray).flat().filter(item => item?.prices);
  assert.equal(new Set(tiers.map(tier => tier.id)).size, 27);
  for (const tier of tiers) assert.equal(tier.prices, catalog.packagePrices(tier.id), tier.id);
  assert.equal(catalog.FAMILY_PACKAGE["short-drama"], "short-drama-base");
});

test("one price change updates cards, text and schema inputs together", () => {
  const cache = new Map();
  const catalog = loadTs("src/lib/pricing-catalog.ts", cache);
  const { PRICING_TIERS } = loadTs("src/lib/constants.ts", cache);
  const price = catalog.packagePrices("launch").USD;
  const original = price.amount;
  try {
    price.amount = 5399;
    assert.equal(PRICING_TIERS[0].prices.USD.amount, 5399);
    assert.equal(catalog.schemaPrice("launch"), "5399.00");
    assert.equal(catalog.priceText("From {price:launch}"), "From $5,399");
    assert.match(catalog.priceText("Desde {price:launch}", "es"), /5[.,]?399/);
    assert.throws(() => catalog.priceText("{price:unknown-package}"));
  } finally { price.amount = original; }
});

test("language switching preserves supported paths and uses explicit English fallbacks", () => {
  const { localizedPath, languageAlternates } = loadTs("src/lib/site-config.ts");
  assert.equal(localizedPath("/es/solutions/short-drama", "fr"), "/fr/solutions/short-drama");
  assert.equal(localizedPath("/es/solutions/short-drama", "en"), "/solutions/launch-micro-drama-platform");
  assert.equal(localizedPath("/solutions/launch-micro-drama-platform", "es"), "/es/solutions/short-drama");
  assert.equal(languageAlternates("/solutions/launch-micro-drama-platform")["x-default"], "/solutions/launch-micro-drama-platform");
  assert.equal(localizedPath("/hi/solutions/ecommerce", "en"), "/solutions/launch-ecommerce-platform");
  assert.equal(localizedPath("/solutions/launch-ecommerce-platform", "hi"), "/hi/solutions/ecommerce");
  assert.equal(localizedPath("/fr/solutions/ott-streaming", "en"), "/solutions/launch-ott-streaming-platform");
  assert.equal(localizedPath("/solutions/launch-ott-streaming-platform", "fr"), "/fr/solutions/ott-streaming");
  assert.equal(localizedPath("/blog/ecommerce-app-development", "de"), "/blog/ecommerce-app-development");
  assert.equal(localizedPath("/", "hi"), "/hi");
  assert.equal(languageAlternates("/solutions/ott-streaming")["x-default"], "/solutions/launch-ott-streaming-platform");
});

test("micro drama launch paths select their corresponding contact package", () => {
  const { shortDramaOfferForPath } = loadTs("src/lib/short-drama-offers.ts");
  assert.equal(shortDramaOfferForPath("/solutions/launch-micro-drama-platform"), "platform");
  assert.equal(shortDramaOfferForPath("/solutions/launch-micro-drama-app"), "app");
  assert.equal(shortDramaOfferForPath("/solutions/launch-micro-drama-website"), "web");
  assert.equal(shortDramaOfferForPath("/es/solutions/short-drama"), "platform");
});

test("OTT and e-commerce launch paths select the matching inquiry packages", () => {
  const { ottOfferForPath, OTT_PACKAGES } = loadTs("src/lib/ott-offers.ts");
  const { ecommerceOfferForPath, ECOMMERCE_PACKAGES } = loadTs("src/lib/ecommerce-offers.ts");
  assert.equal(OTT_PACKAGES[ottOfferForPath("/solutions/launch-ott-streaming-platform")], "cinematic-base");
  assert.equal(OTT_PACKAGES[ottOfferForPath("/solutions/launch-ott-app")], "cinematic-app-launch");
  assert.equal(OTT_PACKAGES[ottOfferForPath("/solutions/launch-ott-website")], "cinematic-web-launch");
  assert.equal(OTT_PACKAGES[ottOfferForPath("/fr/solutions/ott-streaming")], "cinematic-base");
  assert.equal(ECOMMERCE_PACKAGES[ecommerceOfferForPath("/solutions/launch-ecommerce-platform")], "ecommerce");
  assert.equal(ECOMMERCE_PACKAGES[ecommerceOfferForPath("/solutions/launch-ecommerce-app")], "app-launch");
  assert.equal(ECOMMERCE_PACKAGES[ecommerceOfferForPath("/solutions/launch-ecommerce-website")], "web-launch");
  assert.equal(ECOMMERCE_PACKAGES[ecommerceOfferForPath("/hi/solutions/ecommerce")], "ecommerce");
});

test("English aliases redirect permanently for people and bots, preserving query parameters", () => {
  const { proxy } = loadTs("src/proxy.ts");
  for (const agent of ["Mozilla/5.0", "Googlebot", "bingbot"]) {
    const result = proxy(new NextRequest("https://example.com/en/solutions/launch-ecommerce-platform?campaign=test", { headers: { "user-agent": agent } }));
    assert.equal(result.status, 308);
    assert.equal(result.headers.get("location"), "https://example.com/solutions/launch-ecommerce-platform?campaign=test");
  }
  const explicit = proxy(new NextRequest("https://example.com/es", { headers: { "accept-language": "de", cookie: "NEXT_LOCALE=fr" } }));
  assert.equal(explicit.headers.get("location"), null);
});

test("software schema does not manufacture ratings and offers match the selected package", () => {
  const { generateSoftwareSchema } = loadTs("src/lib/schema.ts");
  const schema = generateSoftwareSchema({ name: "Website", description: "Website package", price: "$2,999.00", url: "/solutions/ecommerce-website-development", siteUrl: "https://example.com" });
  assert.equal(schema.offers.price, "2999.00");
  assert.equal(schema.offers.url, "https://example.com/solutions/ecommerce-website-development");
  assert.equal("aggregateRating" in schema, false);
});

test("client accepts only explicitly confirmed leads", async () => {
  const { submitLead, LeadSubmissionError } = loadTs("src/lib/submit-lead.ts");
  for (const [status, body] of [[503, { success: true, accepted: true }], [200, { success: false }], [200, { success: true, accepted: false }]]) {
    await assert.rejects(submitLead({ name: "Test" }, async () => Response.json(body, { status })));
  }
  await assert.rejects(submitLead({}, async () => { throw new Error("offline"); }));
  await assert.rejects(submitLead({}, async () => new Response("not-json")));
  let calls = 0;
  await submitLead({ name: "Test" }, async (_url, options) => {
    calls++;
    assert.equal(options.method, "POST");
    return Response.json({ success: true, accepted: true });
  });
  assert.equal(calls, 1);
  await assert.rejects(submitLead({}, async () => Response.json({ fieldErrors: { email: "email_invalid", name: "Untrusted server text" } }, { status: 400 })), error => {
    assert.ok(error instanceof LeadSubmissionError);
    assert.equal(error.kind, "validation");
    assert.deepEqual(error.fields, { email: "email_invalid" });
    return true;
  });
  await assert.rejects(submitLead({}, async () => new Response("<html>", { status: 502 })), { kind: "unconfirmed" });
  await assert.rejects(submitLead({}, async () => { throw new DOMException("Timed out", "TimeoutError"); }), { kind: "unconfirmed" });
  await assert.rejects(submitLead({}, async () => Response.json({ accepted: false }, { status: 503 })), { kind: "delivery" });
});

test("lead field rules accept common addresses and give specific correction codes at boundaries", () => {
  const { validateLeadFields, LEAD_LIMITS } = loadTs("src/lib/lead-validation.ts");
  assert.deepEqual(validateLeadFields({ name: "   ", email: " " }), { name: "name_required", email: "email_required" });
  for (const email of ["person@internal", "name@company..com", "name@-company.com", "a..b@example.com", "test@example.com,other@example.com"]) {
    assert.equal(validateLeadFields({ name: "Test", email }).email, "email_invalid");
  }
  assert.deepEqual(validateLeadFields({ name: " आलोक ", email: " Lead+Tag@Sub.Example.com ", message: "n".repeat(LEAD_LIMITS.message) }), {});
  assert.deepEqual(validateLeadFields({ name: "आलोक", email: "आलोक@उदाहरण.भारत" }), {});
  assert.equal(validateLeadFields({ name: "Test", email: "a".repeat(247) + "@example.com" }).email, "email_too_long");
  assert.equal(validateLeadFields({ name: "n".repeat(201), email: "test@example.com" }).name, "name_too_long");
  assert.equal(validateLeadFields({ name: "Test", email: "test@example.com", message: "n".repeat(LEAD_LIMITS.message + 1) }).message, "notes_too_long");
});

test("API never reports undelivered inquiries as accepted; notification requests are mocked", async t => {
  t.mock.method(console, "warn", () => {});
  const keys = ["TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID", "TELEGRAM_ALERT_BOT_TOKEN", "TELEGRAM_ALERT_CHAT_ID", "LEAD_WEBHOOK_URL"];
  const previous = keys.map(key => process.env[key]);
  const originalFetch = globalThis.fetch;
  const { POST } = loadTs("src/app/api/lead/route.ts");
  const request = extra => new Request("https://example.com/api/lead", { method: "POST", body: JSON.stringify({ name: "Test", email: "test@example.com", ...extra }) });
  let calls = 0;
  try {
    keys.forEach(key => delete process.env[key]);
    globalThis.fetch = async () => { calls++; throw new Error("No network is permitted in this test"); };
    assert.equal((await POST(request({}))).status, 503);
    assert.equal((await POST(request({ email: "invalid" }))).status, 400);
    assert.equal((await (await POST(request({ honeypot: "bot" }))).json()).accepted, false);
    assert.equal(calls, 0);
    process.env.LEAD_WEBHOOK_URL = "https://notifications.invalid/test";
    globalThis.fetch = async () => new Response("unavailable", { status: 503 });
    assert.equal((await POST(request({}))).status, 503);
    globalThis.fetch = async () => new Response("accepted", { status: 200 });
    assert.deepEqual(await (await POST(request({}))).json(), { success: true, accepted: true });
    process.env.TELEGRAM_BOT_TOKEN = "fake-test-token";
    process.env.TELEGRAM_CHAT_ID = "fake-test-chat";
    globalThis.fetch = async url => String(url).includes("api.telegram.org") ? Response.json({ ok: true }) : new Response("failed", { status: 500 });
    assert.equal((await (await POST(request({}))).json()).accepted, true);
  } finally {
    globalThis.fetch = originalFetch;
    for (const [index, key] of keys.entries()) {
      if (previous[index] === undefined) delete process.env[key];
      else process.env[key] = previous[index];
    }
  }
});

test("lead alerts capture recoverable rejected submissions and separate their details from diagnostics", async t => {
  const settings = {
    TELEGRAM_BOT_TOKEN: "mock-lead-bot",
    TELEGRAM_CHAT_ID: "mock-lead-chat",
    TELEGRAM_ALERT_BOT_TOKEN: "mock-alert-bot",
    TELEGRAM_ALERT_CHAT_ID: "mock-alert-chat",
    LEAD_WEBHOOK_URL: "https://notifications.invalid/test",
  };
  const previous = Object.fromEntries(Object.keys(settings).map(key => [key, process.env[key]]));
  Object.assign(process.env, settings);
  t.after(() => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  });
  const { POST } = loadTs("src/app/api/lead/route.ts");
  const privateDetails = {
    name: "Private Lead Name",
    email: "private-lead@example.com",
    phone: "+1 202 555 0148",
    company: "Private Lead Company",
    message: "Private project notes",
  };
  const request = fields => new Request("https://example.com/api/lead", {
    method: "POST",
    body: JSON.stringify({ ...privateDetails, package: "short-drama", ...fields }),
  });
  const alerts = [];
  const logs = t.mock.method(console, "warn", () => {});
  let telegramStatus = 200;
  let webhookStatus = 200;
  let temporaryAlertFailures = 0;
  let temporaryLeadFailures = 0;
  let retryAfterSeconds = 1;
  const leadSends = [];
  const documents = [];
  const webhookNotes = [];
  t.mock.method(globalThis, "fetch", async (url, options) => {
    const { chat_id, text } = options.body instanceof FormData
      ? { chat_id: options.body.get("chat_id"), text: options.body.get("caption") }
      : JSON.parse(options.body);
    if (options.body instanceof FormData) documents.push({ url, text, contents: await options.body.get("document").text() });
    if (text.includes("Endpoint: POST /api/lead")) {
      alerts.push({ url, chat_id, text });
      if (temporaryAlertFailures > 0) {
        temporaryAlertFailures--;
        throw new DOMException("Mocked timeout", "TimeoutError");
      }
      return Response.json({ ok: true });
    }
    if (String(url).includes("api.telegram.org")) {
      leadSends.push(text);
      if (temporaryLeadFailures > 0) {
        temporaryLeadFailures--;
        return Response.json({ ok: false, parameters: { retry_after: retryAfterSeconds } }, { status: 429 });
      }
      return Response.json({ ok: telegramStatus === 200 }, { status: telegramStatus });
    }
    webhookNotes.push(text);
    return new Response(null, { status: webhookStatus });
  });

  const invalid = await POST(request({ email: "Typed@Example", website: "Ignored field" }));
  assert.equal(invalid.status, 400);
  assert.equal(leadSends.length, 0);
  assert.match(alerts[0].text, /validation rejected/);
  assert.match(alerts[0].text, /Email format is invalid/);
  assert.match(alerts[0].text, /Email: Typed@Example/);
  assert.deepEqual((await invalid.json()).fieldErrors, { email: "email_invalid" });
  assert.ok(alerts[0].text.includes(invalid.headers.get("x-lead-request-id")));
  assert.equal(alerts[0].text.includes("Ignored field"), false);
  assert.equal(logs.mock.calls[0].arguments[1].includes("Typed@Example"), false);
  assert.equal((await POST(new Request("https://example.com/api/lead", { method: "POST", body: "{" }))).status, 400);
  assert.match(alerts[1].text, /Malformed or empty JSON body/);
  assert.equal((await POST(request({ package: 123 }))).status, 400);
  assert.match(alerts[2].text, /package must be text/);
  assert.equal((await (await POST(request({ honeypot: "filled" }))).json()).accepted, false);
  assert.match(alerts[3].text, /spam check/);
  assert.equal(alerts[3].text.includes(privateDetails.email), false);
  assert.equal((await POST(request({}))).status, 200);
  delete process.env.LEAD_WEBHOOK_URL;
  assert.equal((await POST(request({}))).status, 200);
  assert.equal(alerts.length, 4);
  assert.equal(logs.mock.callCount(), 4);
  process.env.LEAD_WEBHOOK_URL = settings.LEAD_WEBHOOK_URL;

  telegramStatus = 400;
  webhookStatus = 503;
  const leadsBeforeFailure = leadSends.length;
  const failed = await POST(request({}));
  assert.equal(failed.status, 503);
  assert.equal((await failed.json()).accepted, false);
  const requestId = failed.headers.get("x-lead-request-id");
  assert.ok(requestId);
  assert.equal(leadSends.length - leadsBeforeFailure, 1, "Telegram does not retry a permanent HTTP 400");
  assert.equal(alerts.length, 5);
  const failureAlert = alerts.at(-1);
  assert.equal(failureAlert.url, "https://api.telegram.org/botmock-alert-bot/sendMessage");
  assert.equal(failureAlert.chat_id, "mock-alert-chat");
  assert.ok(failureAlert.text.includes(requestId));
  assert.match(failureAlert.text, /Lead notification failed/);
  assert.match(failureAlert.text, /Telegram: HTTP 400\nWebhook: HTTP 503/);
  assert.match(failureAlert.text, /Platform: short-drama/);
  const diagnostic = logs.mock.calls.at(-1).arguments[1];
  assert.ok(diagnostic.includes(requestId));
  for (const value of Object.values(privateDetails)) {
    assert.ok(failureAlert.text.includes(value));
    assert.equal(diagnostic.includes(value), false);
  }

  await Promise.all([POST(request({})), POST(request({}))]);
  assert.equal(alerts.length, 7, "Each failed submission is reported separately");
  assert.equal(logs.mock.callCount(), 7);

  delete process.env.TELEGRAM_ALERT_BOT_TOKEN;
  delete process.env.TELEGRAM_ALERT_CHAT_ID;
  telegramStatus = 200;
  temporaryAlertFailures = 1;
  const untrustedPackage = "Private unrecognized package text";
  const partial = await POST(request({ package: untrustedPackage }));
  assert.deepEqual(await partial.json(), { success: true, accepted: true });
  assert.ok(partial.headers.get("x-lead-request-id"));
  assert.equal(alerts.length, 9);
  assert.equal(alerts[7].text, alerts[8].text, "Retry retains the same request ID and alert");
  assert.equal(alerts[8].url, "https://api.telegram.org/botmock-lead-bot/sendMessage");
  assert.equal(alerts[8].chat_id, "mock-lead-chat");
  assert.match(alerts[8].text, /Lead delivered to one channel/);
  assert.match(alerts[8].text, /Platform: unrecognized/);
  assert.equal(alerts[8].text.includes(untrustedPackage), false);

  webhookStatus = 200;
  temporaryLeadFailures = 1;
  const beforeRetry = Date.now();
  const longNotes = "First line\n" + "👋".repeat(3900) + "\nLast line & <example>";
  const recovered = await POST(request({ message: longNotes }));
  assert.equal(recovered.status, 200);
  assert.ok(Date.now() - beforeRetry >= 950, "Telegram rate-limit hint is respected");
  assert.equal(leadSends.at(-1), leadSends.at(-2));
  assert.equal(documents.length, 2);
  assert.ok(documents.at(-1).url.endsWith("/sendDocument"));
  assert.ok(documents.at(-1).contents.includes(longNotes));
  assert.ok(webhookNotes.at(-1).includes(longNotes));
  assert.ok(leadSends.at(-1).includes(recovered.headers.get("x-lead-request-id")));
  assert.equal(alerts.length, 9, "Recovered delivery needs no failure alert");

  delete process.env.LEAD_WEBHOOK_URL;
  retryAfterSeconds = 60;
  temporaryLeadFailures = 1;
  const callsBeforeRateLimit = leadSends.length;
  const rateLimited = await POST(request({}));
  assert.equal(rateLimited.status, 503);
  assert.equal(leadSends.length, callsBeforeRateLimit + 1);
  assert.equal(alerts.length, 9, "The same bot must not bypass a rate-limit wait that exceeds the request budget");
  assert.match(logs.mock.calls.at(-1).arguments[0], /Telegram alert failed/);
  assert.equal(logs.mock.calls.at(-1).arguments[1].requestId, rateLimited.headers.get("x-lead-request-id"));

  const oversized = await POST(request({ message: "n".repeat(8001) }));
  assert.equal(oversized.status, 400);
  assert.deepEqual((await oversized.json()).fieldErrors, { message: "notes_too_long" });
  assert.match(documents.at(-1).text, /validation rejected/);
  assert.match(documents.at(-1).contents, /\[truncated\]/);
});

test("lead analytics has distinct GA4 and Ads destinations and no invented sale value", () => {
  const env = { NEXT_PUBLIC_GA_MEASUREMENT_ID: "G-TEST", NEXT_PUBLIC_GOOGLE_ADS_ID: "AW-TEST", NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL: "label" };
  const previous = Object.fromEntries(Object.keys(env).map(key => [key, process.env[key]]));
  const oldWindow = globalThis.window;
  const events = [];
  try {
    Object.assign(process.env, env);
    globalThis.window = { gtag: (...args) => events.push(args) };
    loadTs("src/lib/analytics.ts").trackLeadSubmission("ecommerce");
    assert.equal(events.length, 2);
    assert.equal(events[0][1], "generate_lead");
    assert.equal(events[0][2].send_to, "G-TEST");
    assert.equal(events[1][2].send_to, "AW-TEST/label");
    assert.equal(events[0][2].value, undefined);
  } finally {
    globalThis.window = oldWindow;
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});
