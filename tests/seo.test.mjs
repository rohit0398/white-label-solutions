import test from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server.js";
import { loadTs } from "./helpers/load-ts.mjs";

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
  assert.equal(localizedPath("/hi/solutions/ecommerce", "en"), "/solutions/ecommerce");
  assert.equal(localizedPath("/blog/ecommerce-app-development", "de"), "/blog/ecommerce-app-development");
  assert.equal(localizedPath("/", "hi"), "/hi");
  assert.equal(languageAlternates("/solutions/ott-streaming")["x-default"], "/solutions/ott-streaming");
});

test("English aliases redirect permanently for people and bots, preserving query parameters", () => {
  const { proxy } = loadTs("src/proxy.ts");
  for (const agent of ["Mozilla/5.0", "Googlebot", "bingbot"]) {
    const result = proxy(new NextRequest("https://example.com/en/solutions/ecommerce?campaign=test", { headers: { "user-agent": agent } }));
    assert.equal(result.status, 308);
    assert.equal(result.headers.get("location"), "https://example.com/solutions/ecommerce?campaign=test");
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
  const { submitLead } = loadTs("src/lib/submit-lead.ts");
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
});

test("API never reports undelivered inquiries as accepted; notification requests are mocked", async () => {
  const keys = ["TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID", "LEAD_WEBHOOK_URL"];
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
    keys.forEach((key, index) => previous[index] === undefined ? delete process.env[key] : process.env[key] = previous[index]);
  }
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
    for (const [key, value] of Object.entries(previous)) value === undefined ? delete process.env[key] : process.env[key] = value;
  }
});
