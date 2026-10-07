import { Language } from "@/types";
import { TranslationDictionary, LANGUAGES } from "./translations/types";
import { en } from "./translations/en";
import { es } from "./translations/es";
import { de } from "./translations/de";
import { fr } from "./translations/fr";
import { hi } from "./translations/hi";

export type { TranslationDictionary };
export { LANGUAGES };

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en,
  es,
  de,
  fr,
  hi,
};

export function getTranslation(lang: Language): TranslationDictionary {
  return TRANSLATIONS[lang] ?? TRANSLATIONS.en;
}
