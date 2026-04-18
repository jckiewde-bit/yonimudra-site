"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { WatercolorBloom } from "./WatercolorBloom";

// The front-door splash. Fills the screen, shows the logo + watercolor motion,
// and on click animates away to reveal the main page beneath.
//
// Shown once per session (sessionStorage). Returning navigators who came back
// to "/" within the same tab don't get gated again.
export function SplashOverlay() {
  const [open, setOpen] = useState(true);
  const reduce = useReducedMotion();

  // Hide if already dismissed in this session.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("yonimudra-splash-dismissed") === "1") {
      setOpen(false);
    }
  }, []);

  function dismiss() {
    setOpen(false);
    try { sessionStorage.setItem("yonimudra-splash-dismissed", "1"); } catch {}
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.button
          type="button"
          onClick={dismiss}
          aria-label="Enter the site"
          className="fixed inset-0 z-50 flex items-center justify-center bg-cream overflow-hidden cursor-pointer focus:outline-none"
          initial={false}
          exit={reduce
            ? { opacity: 0 }
            : { opacity: 0, scale: 1.08, filter: "blur(6px)" }}
          transition={{ duration: reduce ? 0.15 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <WatercolorBloom />

          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.img
              src="/brand/logo.svg"
              alt="Yoni Mudra"
              className="h-40 w-40 sm:h-56 sm:w-56"
              initial={reduce ? { scale: 1 } : { scale: 0.92 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduce ? 0 : 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="text-[10px] tracking-[0.4em] uppercase text-sage-ink/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Tap to enter
            </motion.span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
