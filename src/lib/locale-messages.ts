import es from "@/lib/messages/es.json";
import de from "@/lib/messages/de.json";
import fr from "@/lib/messages/fr.json";
import hi from "@/lib/messages/hi.json";
import type { Language } from "@/types";
import type { MessageTable } from "@/lib/messages";

// Imported only by Server Components. Only the requested locale is serialized to clients.
const dictionaries: Record<Language, MessageTable> = { en: {}, es, de, fr, hi };
export function getLocaleMessages(language: Language): MessageTable { return dictionaries[language]; }
