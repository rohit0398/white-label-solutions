import assert from "node:assert/strict";
const origin = process.env.SEO_TEST_ORIGIN || "http://localhost:3100";
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 43);
assert.equal(sitemap.includes("<lastmod>"), false);
const titles = new Set();
const descriptions = new Set();
const pages = [];
for (const url of urls) {
  const path = new URL(url).pathname;
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const lang = path.match(/^\/(es|de|fr|hi)(\/|$)/)?.[1] || "en";
  assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`), path);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, path);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  assert.ok(title && description, path);
  assert.equal(titles.has(title), false, `Duplicate title: ${path}`);
  assert.equal(descriptions.has(description), false, `Duplicate description: ${path}`);
  titles.add(title); descriptions.add(description);
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  assert.equal(canonical?.replace(/\/$/, ""), url.replace(/\/$/, ""), path);
  const nodes = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => { const schema = JSON.parse(match[1]); return schema["@graph"] || schema; });
  assert.equal(nodes.some(node => node.aggregateRating), false, path);
  const products = nodes.filter(node => node["@type"] === "SoftwareApplication");
  assert.equal(products.length, path.includes("/solutions/") ? 1 : 0, path);
  if (lang !== "en") {
    assert.equal(html.includes("Production-Ready Platforms. Deployed Directly to Your Cloud."), false, path);
    assert.ok(html.includes(`href="/${lang}/solutions/short-drama"`), path);
  }
  assert.equal(html.includes("http://localhost:3000"), false, path);
  pages.push({ path, lang, title, canonical,
    family: html.match(/data-page-family="([^"]+)"/)?.[1],
    shared: html.includes('data-page-template="shared"'),
    imageCount: [...html.matchAll(/<img\b/g)].length,
    calculator: html.includes('type="range"'),
  });
}
for (const family of ["home", "ecommerce", "short-drama", "ott-streaming"]) {
  const equivalents = pages.filter(page => page.family === family);
  assert.equal(equivalents.length, 5, `Missing language version: ${family}`);
  const english = equivalents.find(page => page.lang === "en");
  for (const page of equivalents) {
    assert.ok(page.shared, page.path);
    assert.equal(page.imageCount, english.imageCount, `Screenshot parity: ${page.path}`);
    assert.equal(page.calculator, english.calculator, `Calculator parity: ${page.path}`);
  }
}
for (const agent of ["Mozilla/5.0", "Googlebot"]) {
  const response = await fetch(`${origin}/en/solutions/ecommerce?campaign=test`, { redirect: "manual", headers: { "user-agent": agent } });
  assert.equal(response.status, 308);
  assert.ok(response.headers.get("location").endsWith("/solutions/ecommerce?campaign=test"));
  for (const path of ["/does-not-exist-seo-test", "/es/unknown-page", "/unknown-locale/solutions/ecommerce"]) {
    const missing = await fetch(origin + path, { headers: { "user-agent": agent } });
    assert.equal(missing.status, 404, path);
    assert.match(await missing.text(), /noindex/);
  }
}
const oldOtt = await fetch(`${origin}/solutions/ott-video-streaming-development`, { redirect: "manual" });
assert.equal(oldOtt.status, 308);
console.log(`Verified ${pages.length} canonical pages, localized server HTML, unique metadata, schema scope, 404s, and redirects.`);
