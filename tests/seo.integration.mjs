import assert from "node:assert/strict";
const origin = process.env.SEO_TEST_ORIGIN || "http://localhost:3100";
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 53);
assert.equal(sitemap.includes("<lastmod>"), false);
const dramaGuides = [
  "white-label-micro-drama-app-builders",
  "launch-micro-drama-platform",
  "micro-drama-app-source-code",
  "publish-micro-drama-series",
  "micro-drama-app-launch-checklist",
  "short-drama-app-development",
  "build-app-like-reelshort",
  "build-app-like-dramabox",
  "short-drama-app-development-cost",
  "short-drama-monetization",
];
for (const slug of dramaGuides) {
  assert.ok(urls.some(url => new URL(url).pathname === `/blog/${slug}`), `Missing guide in sitemap: ${slug}`);
}
const titles = new Set();
const descriptions = new Set();
const pages = [];
const movedRoutes = [
  ["short-drama", "launch-micro-drama-platform"],
  ["short-drama-app-development", "launch-micro-drama-app"],
  ["short-drama-website-development", "launch-micro-drama-website"],
  ["ott-streaming", "launch-ott-streaming-platform"],
  ["ott-app-development", "launch-ott-app"],
  ["ott-website-development", "launch-ott-website"],
  ["ott-video-streaming-development", "launch-ott-website"],
  ["ecommerce", "launch-ecommerce-platform"],
  ["ecommerce-app-development", "launch-ecommerce-app"],
  ["ecommerce-website-development", "launch-ecommerce-website"],
].map(([oldSlug, newSlug]) => [`/solutions/${oldSlug}`, `/solutions/${newSlug}`]);
const retiredPaths = new Set(movedRoutes.map(([oldPath]) => oldPath));
for (const url of urls) {
  const path = new URL(url).pathname;
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  for (const [, href] of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const target = new URL(href, url);
    if (target.origin === new URL(url).origin) {
      const targetPath = target.pathname.replace(/^\/en(?=\/)/, "").replace(/\/$/, "");
      assert.equal(retiredPaths.has(targetPath), false, `Retired link on ${path}: ${href}`);
    }
  }
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
  if (path === "/blog") {
    for (const slug of dramaGuides) assert.ok(html.includes(`href="/blog/${slug}"`), `Blog index link: ${slug}`);
  }
  if (dramaGuides.some(slug => path === `/blog/${slug}`)) {
    assert.equal(nodes.filter(node => node["@type"] === "Article").length, 1, `Article schema: ${path}`);
    const demoStart = html.indexOf('id="live-demo"');
    const contentsStart = html.indexOf('aria-label="Article contents"');
    assert.ok(demoStart >= 0 && demoStart < contentsStart, `Live demo before guide contents: ${path}`);
    assert.ok(html.includes('href="/solutions/launch-micro-drama-platform"'), `Commercial link: ${path}`);
    for (const slug of dramaGuides) {
      if (path !== `/blog/${slug}`) assert.ok(html.includes(`href="/blog/${slug}"`), `Related guide discovery: ${path}`);
    }
  }
  if (path === "/blog/short-drama-app-development-cost") {
    assert.ok(html.includes('id="packages"'), `Package comparison: ${path}`);
    assert.ok(html.includes("$6,998"), `Catalog-derived suite plus license total: ${path}`);
    assert.ok(html.includes('href="/solutions/launch-micro-drama-platform#pricing"'), "Complete platform pricing link");
  }
  if (path === "/blog/white-label-micro-drama-app-builders") {
    assert.ok(html.includes('id="compare-providers"'), "Provider comparison");
    assert.ok(html.includes('id="packages"'), "Published package pricing");
    assert.ok(html.includes('href="/blog/launch-micro-drama-platform"'), "Web-first vs. app-first guide");
  }
  if (path === "/blog/launch-micro-drama-platform") {
    assert.ok(html.includes('href="/solutions/launch-micro-drama-app"'), "App package link");
    assert.ok(html.includes('href="/solutions/launch-micro-drama-website"'), "Website package link");
    assert.ok(html.includes('href="/blog/short-drama-app-development-cost#packages"'), "Package price link");
    assert.ok(html.includes("I+read+your+micro+drama+launch+guide"), "Guide-specific WhatsApp link");
  }
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
  const response = await fetch(`${origin}/en/solutions/launch-ecommerce-platform?campaign=test`, { redirect: "manual", headers: { "user-agent": agent } });
  assert.equal(response.status, 308);
  assert.ok(response.headers.get("location").endsWith("/solutions/launch-ecommerce-platform?campaign=test"));
  for (const path of ["/does-not-exist-seo-test", "/es/unknown-page", "/unknown-locale/solutions/ecommerce"]) {
    const missing = await fetch(origin + path, { headers: { "user-agent": agent } });
    assert.equal(missing.status, 404, path);
    assert.match(await missing.text(), /noindex/);
  }
}
for (const [oldPath, newPath] of movedRoutes) {
  assert.ok(urls.some(url => new URL(url).pathname === newPath), `Missing from sitemap: ${newPath}`);
  assert.ok(urls.every(url => new URL(url).pathname !== oldPath), `Old URL in sitemap: ${oldPath}`);
  for (const prefix of ["", "/en"]) {
    const response = await fetch(`${origin}${prefix}${oldPath}?campaign=test`, { redirect: "manual" });
    assert.equal(response.status, 308, prefix + oldPath);
    const target = new URL(response.headers.get("location"), origin);
    assert.equal(target.pathname + target.search, `${newPath}?campaign=test`);
  }
}
console.log(`Verified ${pages.length} canonical pages, localized server HTML, unique metadata, schema scope, 404s, and redirects.`);
