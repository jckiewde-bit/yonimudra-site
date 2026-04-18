import Link from "next/link";
import { WatercolorBloom } from "@/components/WatercolorBloom";

// Landing. Logo + motion only. Click anywhere to enter.
export default function Landing() {
  return (
    <Link
      href="/home"
      className="group fixed inset-0 flex items-center justify-center bg-cream cursor-pointer"
      aria-label="Enter the site"
    >
      <WatercolorBloom />
      <div className="relative flex flex-col items-center gap-6">
        <img
          src="/brand/logo.svg"
          alt="Yoni Mudra"
          className="h-40 w-40 sm:h-52 sm:w-52 transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <span className="absolute bottom-10 text-xs tracking-[0.3em] uppercase text-sage-ink/70 group-hover:text-sage-ink transition-colors">
        Enter
      </span>
    </Link>
  );
}
