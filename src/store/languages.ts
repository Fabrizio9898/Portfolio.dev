import { atom } from "nanostores";
import { LANGUAGE_CODES } from "../i18n";

export const currentLanguage = atom(LANGUAGE_CODES[0] || "es");
