"use client";

import { motion, useReducedMotion } from "framer-motion";

// Decorative pink shape composition used as the right-side visual anchor
// of the hero. Stand-in for the Growthway template's portrait illustrations
// (which we can't copy). Four overlapping pink blobs with gentle drift.
export function HeroShapes() {
  const reduce = useReducedMotion();

  const shapes = [
    { cx: 55, cy: 45, r: 40, color: "#ff66c4", delay: 0 },
    { cx: 75, cy: 70, r: 28, color: "#ffb3d9", delay: 0.4 },
    { cx: 35, cy: 75, r: 22, color: "#b8398a", delay: 0.8 },
    { cx: 70, cy: 25, r: 14, color: "#000000", delay: 1.2 },
  ];

  return (
    <div className="relative w-full aspect-square">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="soften" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>
        {shapes.map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill={s.color}
            filter="url(#soften)"
            initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            animate={reduce
              ? { scale: 1, opacity: 1 }
              : { scale: [1, 1.04, 1], opacity: 1 }}
            transition={reduce
              ? { duration: 0 }
              : {
                  scale: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1.2, delay: s.delay },
                }}
            style={{ transformOrigin: `${s.cx}% ${s.cy}%` }}
          />
        ))}
      </svg>

      {/* The signature parenthesis mark floating in the composition */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display text-[16vw] sm:text-[9rem] text-ink opacity-90 -translate-y-4">
          (ym)
        </span>
      </div>
    </div>
  );
}
