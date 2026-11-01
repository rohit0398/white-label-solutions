import english from "@/lib/messages/en.json";
import type { Language } from "@/types";
import { priceText } from "@/lib/pricing-catalog";

export type MessageId = keyof typeof english;
export type MessageTable = Partial<Record<MessageId, string>>;
type Variables = Record<string, string | number>;
export interface Localizer {
  <T>(value: T): T;
  format(id: MessageId, values?: Variables): string;
}
const normalize = (text: string) => text.replace(/\s+/g, " ").trim();
const ids = new Map(Object.entries(english).map(([id, text]) => [normalize(text), id as MessageId]));
export function englishMessage(id: MessageId): string {
  const value = english[id];
  if (typeof value !== "string") throw new Error(`Unknown message: ${id}`);
  return value;
}
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const patterns = Object.entries(english).flatMap(([id, source]) => {
  const tokens = [...source.matchAll(/\{(value\d+|price:[^}]+)\}/g)];
  if (!tokens.length || source.replace(/\{[^}]+\}/g, "").trim().length < 3) return [];
  let last = 0, pattern = "";
  for (const token of tokens) { pattern += escape(source.slice(last, token.index)) + "(.+?)"; last = token.index! + token[0].length; }
  pattern += escape(source.slice(last));
  return [{ id: id as MessageId, tokens: tokens.map(token => token[1]), regex: new RegExp("^" + pattern + "$") }];
});

/** Render complete messages, with commercial prices supplied only by the price catalog. */
export function createLocalizer(language: Language, messages: MessageTable): Localizer {
  const read = (id: MessageId) => {
    const value = language === "en" ? englishMessage(id) : messages[id];
    if (typeof value !== "string" || !value.trim()) throw new Error(`Missing ${language} message: ${id}`);
    return value;
  };
  const format = (id: MessageId, values: Variables = {}): string => priceText(read(id), language)
    .replace(/\{(value\d+)\}/g, (_match, name: string) => {
      if (!(name in values)) throw new Error(`Missing variable ${name} for ${id}`);
      return translate(String(values[name]));
    });
  const translate = (text: string): string => {
    if (language === "en") return text;
    const source = normalize(text), id = ids.get(source);
    const prefix = text.match(/^\s*/)?.[0] || "", suffix = text.match(/\s*$/)?.[0] || "";
    if (id) return prefix + format(id) + suffix;
    for (const pattern of patterns) {
      const match = pattern.regex.exec(source);
      if (match) {
        const variables = Object.fromEntries(pattern.tokens.map((token, index) => [token, match[index + 1]]));
        return prefix + format(pattern.id, variables) + suffix;
      }
    }
    // Already translated text, identity names, URLs, and numeric output are unchanged.
    return text;
  };
  function localize<T>(value: T): T {
    if (typeof value === "string") return translate(value) as T;
    if (Array.isArray(value)) return value.map(localize) as T;
    if (value && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype && !("$$typeof" in value)) {
      return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, localize(child)])) as T;
    }
    return value;
  }
  return Object.assign(localize, { format });
}
