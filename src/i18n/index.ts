import english from "./en.json";
import spanish from "./es.json";

const LANGUAGES = {
  ESPAÑOL: "es",
  ENGLISH: "en",
};
export const getI18 = ({
  currentLocale = "es",
}: {
  currentLocale: string|undefined;
}) => {
  if (currentLocale === LANGUAGES.ESPAÑOL) return spanish;
  if (currentLocale === LANGUAGES.ENGLISH) return english;
};
