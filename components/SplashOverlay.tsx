"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Front door. Solid pink field, logo centered, explicit Enter button.
// Shown once per session.
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
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#ff66c4" }}
          initial={false}
          exit={reduce
            ? { opacity: 0 }
            : { opacity: 0, scale: 1.08, filter: "blur(6px)" }}
          transition={{ duration: reduce ? 0.15 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-10"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <motion.img
              src="/brand/logo.png"
              alt="Yoni Mudra — Creative Art Therapy & Coaching"
              className="w-[min(85vw,560px)] h-auto"
              initial={reduce ? { scale: 1 } : { scale: 0.96 }}
              animate={reduce
                ? { scale: 1 }
                : { scale: [1, 1.02, 1] }}
              transition={reduce
                ? { duration: 0 }
                : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.button
              type="button"
              onClick={dismiss}
              className="rounded-full bg-black text-white px-10 py-3 text-sm tracking-[0.35em] uppercase font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black/40 transition-colors"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Enter
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
