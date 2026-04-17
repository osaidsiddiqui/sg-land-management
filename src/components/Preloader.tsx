import { useEffect, useState } from "react";
import logo from "@/assets/sgland_logo.png";

export function Preloader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 3000);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center preloader-out">
      <img src={logo} alt="S.G. Land Management" className="w-40 h-40 object-contain fade-up" />
      <div className="relative w-32 h-20 mt-2">
        <svg viewBox="0 0 120 80" className="absolute inset-0 w-full h-full">
          <rect x="10" y="55" width="70" height="14" fill="var(--ink)" rx="2" />
          <circle cx="22" cy="72" r="6" fill="var(--ink)" />
          <circle cx="68" cy="72" r="6" fill="var(--ink)" />
          <g className="dig-arm">
            <line x1="40" y1="55" x2="90" y2="20" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" />
            <path d="M85 18 L105 25 L100 40 L82 32 Z" fill="var(--ink)" />
          </g>
        </svg>
        <span className="dirt absolute left-[70%] top-[40%] w-1.5 h-1.5 rounded-full bg-earth" style={{ ["--dx" as never]: "8px" }} />
        <span className="dirt absolute left-[75%] top-[45%] w-1 h-1 rounded-full bg-earth" style={{ ["--dx" as never]: "-6px", animationDelay: "0.3s" }} />
        <span className="dirt absolute left-[68%] top-[42%] w-1 h-1 rounded-full bg-earth" style={{ ["--dx" as never]: "14px", animationDelay: "0.6s" }} />
      </div>
      <p className="typewriter font-rye text-ink tracking-[0.15em] text-sm md:text-base mt-4">
        BREAKING GROUND IN EAST TENNESSEE...
      </p>
      <div className="rule-slide h-0.5 w-64 bg-ink mt-4" />
    </div>
  );
}
