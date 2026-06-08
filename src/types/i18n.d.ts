declare module "i18n" {
  type StaticCatalog = Record<string, Record<string, string>>;

  const i18n: {
    configure(options: {
      defaultLocale?: string;
      staticCatalog?: StaticCatalog;
      objectNotation?: boolean;
    }): void;
    setLocale(locale: string): void;
    __(key: string): string;
  };

  export default i18n;
}
