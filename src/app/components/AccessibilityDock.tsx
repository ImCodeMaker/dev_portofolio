import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  openLabel: string;
  closeLabel: string;
  largeTextLabel: string;
  highContrastLabel: string;
  reduceMotionLabel: string;
};

export default function AccessibilityDock({
  title,
  openLabel,
  closeLabel,
  largeTextLabel,
  highContrastLabel,
  reduceMotionLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("a11y-large-text", largeText);
    document.documentElement.classList.toggle("a11y-high-contrast", highContrast);
    document.documentElement.classList.toggle("a11y-reduce-motion", reduceMotion);
  }, [largeText, highContrast, reduceMotion]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {open && (
          <motion.div
            id="accessibility-dock-panel"
            className="w-[min(92vw,340px)] rounded-xl border border-snow/12 bg-onyx/94 p-3 text-snow shadow-[0_18px_60px_rgba(0,0,0,0.45)] shadow-inset-line backdrop-blur-xl"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="flex items-center justify-between gap-4 px-1 pb-2">
              <p className="text-sm font-[510] text-snow">{title}</p>
              <button
                className="rounded-full border border-graphite px-2.5 py-1 text-xs text-fog transition hover:border-snow hover:text-snow"
                type="button"
                onClick={() => setOpen(false)}
              >
                {closeLabel}
              </button>
            </div>
            <div className="grid gap-2">
              <Toggle label={largeTextLabel} checked={largeText} onChange={setLargeText} />
              <Toggle label={highContrastLabel} checked={highContrast} onChange={setHighContrast} />
              <Toggle label={reduceMotionLabel} checked={reduceMotion} onChange={setReduceMotion} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="grid size-12 place-items-center rounded-full border border-snow/12 bg-snow text-sm font-[590] text-onyx shadow-[0_14px_40px_rgba(0,0,0,0.38)] transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-onyx"
        type="button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls="accessibility-dock-panel"
        onClick={() => setOpen((value) => !value)}
        whileTap={{ scale: 0.95 }}
      >
        Aa
      </motion.button>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex min-h-11 items-center justify-between gap-3 rounded-lg border border-graphite bg-charcoal px-3 py-2 text-sm text-mist">
      <span>{label}</span>
      <input
        className="size-4 shrink-0 accent-accent"
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
    </label>
  );
}
