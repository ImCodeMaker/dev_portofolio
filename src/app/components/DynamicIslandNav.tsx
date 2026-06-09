import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCompact(latest > 80);
  });

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        animate={{ width: compact ? "min(94vw, 900px)" : "min(94vw, 1040px)" }}
        transition={{ type: "spring", stiffness: 150, damping: 26, mass: 0.9 }}
        className="max-w-[calc(100vw-1rem)] rounded-full border border-snow/12 bg-onyx/90 text-snow shadow-[0_18px_60px_rgba(0,0,0,0.45)] shadow-inset-line backdrop-blur-xl"
      >
        <motion.div
          layout
          className="flex min-h-14 items-center gap-1.5 px-2.5 sm:gap-2 sm:px-3"
          transition={{ type: "spring", stiffness: 170, damping: 24 }}
        >
          <a className="grid shrink-0 place-items-center rounded-full p-1.5 no-underline sm:p-2" href={localePaths[currentLocale]} aria-label="Home">
            <span className="grid size-8 place-items-center rounded-full bg-snow text-xs font-[590] text-onyx">TE</span>
          </a>

          <motion.div className="hidden items-center gap-1 md:flex" layout transition={{ type: "spring", stiffness: 170, damping: 24 }}>
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

          <motion.div className="flex items-center gap-1 md:hidden" layout>
            {navItems
              .filter((item) => item.href === "#about" || item.href === "#contact")
              .map((item) => (
                <a key={item.href} className="rounded-full px-2.5 py-2 text-xs font-[510] text-fog no-underline transition hover:bg-snow/5 hover:text-snow" href={item.href}>
                  {item.label}
                </a>
              ))}
          </motion.div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative" ref={languageMenuRef}>
              <button
                className="inline-flex min-w-[70px] items-center justify-center gap-2 rounded-full border border-graphite bg-charcoal px-3 py-2 text-sm text-snow outline-none transition hover:border-iron focus:border-snow sm:min-w-[118px]"
                type="button"
                aria-label={languageLabel}
                aria-expanded={languageOpen}
                aria-haspopup="listbox"
                onClick={() => setLanguageOpen((value) => !value)}
              >
                <span>{compact ? currentLocale.toUpperCase() : localeLabels[currentLocale]}</span>
                <span className={`text-xs text-fog transition ${languageOpen ? "rotate-180" : ""}`}>v</span>
              </button>

              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-44 overflow-hidden rounded-xl border border-graphite bg-onyx/96 p-1 text-snow shadow-[0_18px_60px_rgba(0,0,0,0.45)] shadow-inset-line backdrop-blur-xl"
                    role="listbox"
                    aria-label={languageLabel}
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                  >
                    {locales.map((locale) => (
                      <button
                        key={locale}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                          locale === currentLocale ? "bg-snow text-onyx" : "text-mist hover:bg-snow/8 hover:text-snow"
                        }`}
                        type="button"
                        role="option"
                        aria-selected={locale === currentLocale}
                        onClick={() => {
                          window.location.href = localePaths[locale];
                        }}
                      >
                        <span>{localeLabels[locale]}</span>
                        <span className="text-xs">{locale.toUpperCase()}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
