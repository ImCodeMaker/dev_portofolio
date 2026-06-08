export const locales = ["en", "de", "it", "pt", "es", "no", "da", "sv", "is"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  es: "Español",
  no: "Norsk",
  da: "Dansk",
  sv: "Svenska",
  is: "Íslenska",
};

export const localePaths: Record<Locale, string> = {
  en: "/",
  de: "/de/",
  it: "/it/",
  pt: "/pt/",
  es: "/es/",
  no: "/no/",
  da: "/da/",
  sv: "/sv/",
  is: "/is/",
};
