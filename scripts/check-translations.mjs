import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const sourceFile = file => path.join(root, file);
const english = JSON.parse(fs.readFileSync(sourceFile("src/lib/messages/en.json"), "utf8"));
const issues = [];
const tokens = text => [...text.matchAll(/\{(?:price:[^}]+|value\d+)\}/g)].map(match => match[0]).sort();
for (const locale of ["es", "de", "fr", "hi"]) {
  const messages = JSON.parse(fs.readFileSync(sourceFile(`src/lib/messages/${locale}.json`), "utf8"));
  for (const [id, text] of Object.entries(english)) {
    const value = messages[id];
    if (typeof value !== "string" || !value.trim()) { issues.push(`Missing ${locale}: ${id}`); continue; }
    if (JSON.stringify(tokens(text)) !== JSON.stringify(tokens(value))) issues.push(`Changed placeholders in ${locale}: ${id}`);
    for (const brand of ["Mechatron", "eStoreAlley", "Style Gear", "Next.js", "Flutter", "Cloudflare", "Stripe", "PayPal"]) {
      if (text.includes(brand) && !value.includes(brand)) issues.push(`Changed identity ${brand} in ${locale}: ${id}`);
    }
    if (/ZXQ\d+ZXQ/i.test(value)) issues.push(`Unrestored draft placeholder in ${locale}: ${id}`);
  }
}

const roots = ["src/components/pages", "src/components/sections", "src/components/layout", "src/components/ui"];
const files = roots.flatMap(folder => fs.readdirSync(sourceFile(folder), { recursive: true }).filter(file => file.endsWith(".tsx")).map(file => `${folder}/${file}`))
  .concat(["src/lib/constants.ts", "src/components/site/LeadModal.tsx", "src/components/site/CookieConsent.tsx", "src/components/site/DemoButton.tsx"]);
const fields = new Set("industry subheadline title intro subtitle headline badge index placeholder alt aria-label aria-description ariaLabel description footerNote ctaDemo ctaDemoText detail label text summary caption desc metric mechatron agency saas shopify tagline deliverables highlights points q a when value".split(" "));
const identity = /^(?:Mechatron Lab(?: Solutions)?|eStoreAlley|Style Gear|Google Play|App Store|Next\.js(?: 16)?|Flutter(?: 3\.x)?|Stripe|Cloudflare(?: Stream)?|PostgreSQL|AWS|GCP|Azure|iOS|Android|Web|VIP|SVOD|AVOD|CRM|Video CMS|HLS|DRM|USD|EUR|GBP|INR|PayPal|Razorpay|Cashfree|SMEPAY|UPI|COD|FCM|APNs|B2B|D2C|English|Español|Deutsch|Français|हिंदी)$/;
function human(text) {
  return /[A-Za-z]/.test(text) && !identity.test(text) && !/^(?:https?:|\/|#|mailto:|tel:|data:|G-|AW-)/.test(text)
    && !/^[\w.-]+@/.test(text) && !/^[a-z][\w-]*$/.test(text)
    && !/\b(?:flex|grid|rounded|text-|bg-|border-|hover:|className|w-full|h-full)\b/.test(text);
}
for (const file of files) {
  const content = fs.readFileSync(sourceFile(file), "utf8");
  const ast = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  function visit(node) {
    if (ts.isVariableDeclaration(node) && ["metadata", "viewport", "BRAND"].includes(node.name.getText(ast))) return;
    if (ts.isCallExpression(node) && ["englishMessage", "translateCopy.format"].includes(node.expression.getText(ast))) {
      const id = node.arguments[0];
      if (id && ts.isStringLiteral(id) && !Object.hasOwn(english, id.text)) issues.push(`Unknown message ${id.text} in ${file}`);
      // Still inspect interpolation values, not the identifier argument.
      node.arguments.slice(1).forEach(visit);
      return;
    }
    if (ts.isJsxAttribute(node) && !fields.has(node.name.getText(ast))) return;
    const value = ts.isJsxText(node) ? node.text.replace(/\s+/g, " ").trim() : ts.isStringLiteral(node) ? node.text : undefined;
    if (value && human(value)) {
      let relevant = ts.isJsxText(node);
      for (let parent = node.parent; parent && !ts.isStatement(parent); parent = parent.parent) {
        if (ts.isJsxAttribute(parent) || ts.isPropertyAssignment(parent) || ts.isBindingElement(parent)) {
          relevant ||= fields.has(parent.name.getText(ast).replace(/["']/g, "")); break;
        }
        if (ts.isJsxExpression(parent)) { relevant = true; break; }
      }
      if (relevant) issues.push(`Unkeyed UI copy in ${file}:${ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1}: ${value.slice(0, 90)}`);
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}
if (issues.length) {
  console.error(issues.join("\n"));
  process.exitCode = 1;
} else console.log(`Translation checks passed: ${Object.keys(english).length} messages × 4 locales, placeholders, identities, and keyed UI source.`);
