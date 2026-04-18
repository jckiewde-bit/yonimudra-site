"use client";

import { motion, useReducedMotion } from "framer-motion";

// A slow ink / watercolor bloom that lives behind the hero headline.
// Renders immediately; animates in over ~1.6s. Respects prefers-reduced-motion.
// The CTA is *never* blocked by this — pointer-events: none, aria-hidden, behind.
export function WatercolorBloom({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="bloom-sage" cx="30%" cy="40%" r="45%">
            <stop offset="0%" stopColor="var(--brand-sage)" stopOpacity="0.55" />
            <stop offset="60%" stopColor="var(--brand-sage)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--brand-sage)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloom-ochre" cx="75%" cy="30%" r="35%">
            <stop offset="0%" stopColor="var(--brand-ochre)" stopOpacity="0.40" />
            <stop offset="70%" stopColor="var(--brand-ochre)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--brand-ochre)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloom-rose" cx="60%" cy="80%" r="40%">
            <stop offset="0%" stopColor="var(--brand-rose)" stopOpacity="0.45" />
            <stop offset="70%" stopColor="var(--brand-rose)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="var(--brand-rose)" stopOpacity="0" />
          </radialGradient>
          <filter id="paper" x="0" y="0">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" />
            <feColorMatrix
              values="0 0 0 0 0.12
                      0 0 0 0 0.11
                      0 0 0 0 0.10
                      0 0 0 0.05 0"
            />
          </filter>
        </defs>

        <motion.ellipse
          cx="240" cy="240" rx="260" ry="180"
          fill="url(#bloom-sage)"
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.ellipse
          cx="600" cy="180" rx="200" ry="150"
          fill="url(#bloom-ochre)"
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.ellipse
          cx="480" cy="460" rx="220" ry="160"
          fill="url(#bloom-rose)"
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <rect width="100%" height="100%" filter="url(#paper)" opacity="0.8" />
      </svg>
    </div>
  );
}
