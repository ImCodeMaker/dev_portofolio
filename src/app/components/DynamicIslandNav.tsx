import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { localeLabels, localePaths, locales, type Locale } from "@app/i18n/locales";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  currentLocale: Locale;
  languageLabel: string;
  resumeLabel: string;
  inquiryLabel: string;
  linkedInUrl: string;
  resumeUrl: string;
  navItems: NavItem[];
};

export default function DynamicIslandNav({
  currentLocale,
  languageLabel,
  resumeLabel,
  inquiryLabel,
  linkedInUrl,
  resumeUrl,
  navItems,
}: Props) {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCompact(latest > 80);
  });

  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-50 flex justify-center px-3 sm:top-5"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
    >
      <motion.nav
        aria-label="Primary navigation"
        layout="position"
        animate={{ width: compact ? "min(94vw, 640px)" : "min(94vw, 1040px)" }}
        transition={{ type: "spring", stiffness: 150, damping: 26, mass: 0.9 }}
        className="max-w-[calc(100vw-1rem)] overflow-hidden rounded-full border border-snow/12 bg-onyx/90 text-snow shadow-[0_18px_60px_rgba(0,0,0,0.45)] shadow-inset-line backdrop-blur-xl"
      >
        <motion.div
          layout
          className="flex min-h-14 items-center gap-1.5 px-2.5 sm:gap-2 sm:px-3"
          transition={{ type: "spring", stiffness: 170, damping: 24 }}
        >
          <a className="grid shrink-0 place-items-center rounded-full p-1.5 no-underline sm:p-2" href={localePaths[currentLocale]} aria-label="Home">
            <span className="grid size-8 place-items-center rounded-full bg-snow text-xs font-[590] text-onyx">TE</span>
          </a>

          <AnimatePresence initial={false}>
            {!compact && (
              <motion.div
                className="hidden items-center gap-1 md:flex"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    className="rounded-full px-3 py-2 text-sm text-fog no-underline transition hover:bg-snow/5 hover:text-snow"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="ml-auto flex items-center gap-2">
            <label className="sr-only" htmlFor="language-switcher">
              {languageLabel}
            </label>
            <select
              id="language-switcher"
              className="max-w-[104px] rounded-full border border-graphite bg-charcoal px-3 py-2 text-sm text-snow outline-none transition focus:border-snow sm:max-w-[140px]"
              aria-label={languageLabel}
              value={localePaths[currentLocale]}
              onChange={(event) => {
                window.location.href = event.currentTarget.value;
              }}
            >
              {locales.map((locale) => (
                <option key={locale} value={localePaths[locale]}>
                  {compact ? locale.toUpperCase() : localeLabels[locale]}
                </option>
              ))}
            </select>

            <a
              className="hidden rounded-full border border-snow/70 px-3.5 py-2 text-sm text-snow no-underline transition hover:border-snow lg:inline-flex"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              {resumeLabel}
            </a>
            <a
              className="hidden rounded-full border border-snow/70 px-3.5 py-2 text-sm text-snow no-underline transition hover:border-snow lg:inline-flex"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full bg-accent px-3.5 py-2 text-sm font-[510] text-snow no-underline shadow-button-stack sm:px-4"
              href="#contact"
            >
              {inquiryLabel}
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}
