// Horizontal scrolling text ticker. The Growthway template's distinctive
// "walking-block" pattern adapted as pure CSS.
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]; // duplicate for seamless loop

  return (
    <section aria-hidden className="overflow-hidden bg-ink text-cream border-y border-ink py-8">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="font-display text-4xl sm:text-6xl tracking-tight flex items-center gap-12">
            {item}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="6" fill="#ff66c4" />
            </svg>
          </span>
        ))}
      </div>
      <style>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
