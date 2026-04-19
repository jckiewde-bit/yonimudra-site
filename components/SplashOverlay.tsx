"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Front door. Solid pink field, black writing, logo centered with a gentle
// breathing motion. Tap anywhere to exit — fades and scales away to reveal
// the main page underneath.
//
// Shown once per session (sessionStorage).
export function SplashOverlay() {
  const [open, setOpen] = useState(true);
  const reduce = useReducedMotion();

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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer focus:outline-none"
          style={{ backgroundColor: "#ff66c4" }}
          initial={false}
          exit={reduce
            ? { opacity: 0 }
            : { opacity: 0, scale: 1.08, filter: "blur(6px)" }}
          transition={{ duration: reduce ? 0.15 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <motion.img
              src="/brand/logo.svg"
              alt="Yoni Mudra"
              className="h-40 w-40 sm:h-56 sm:w-56"
              initial={reduce ? { scale: 1 } : { scale: 0.94 }}
              animate={reduce
                ? { scale: 1 }
                : { scale: [1, 1.03, 1] }}
              transition={reduce
                ? { duration: 0 }
                : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="text-[11px] tracking-[0.4em] uppercase text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Tap to enter
            </motion.span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
