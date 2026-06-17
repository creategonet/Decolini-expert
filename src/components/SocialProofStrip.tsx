import {
  Star,
  ThumbsUp,
  Users,
  CheckCircle,
  Clock,
  ShieldCheck,
  MapPin,
  Layers,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

type Item = { icon: ReactNode; text: string };

// NOTE: cifrele marcate (*) sunt placeholder inventat — de corectat ulterior.
const ITEMS: Item[] = [
  { icon: <Star size={18} fill="currentColor" />, text: "100% dintre clienți ne recomandă" },
  { icon: <CheckCircle size={18} />, text: "500+ căzi recondiționate" },
  { icon: <Clock size={18} />, text: "Gata într-o singură zi" },
  { icon: <ShieldCheck size={18} />, text: "10+ ani de experiență" },
  { icon: <Sparkles size={18} />, text: "Finisaj alb, lucios, ca nou" },
  { icon: <Layers size={18} />, text: "Fontă · Acril · Fibră de sticlă" },
  { icon: <MapPin size={18} />, text: "Deplasare în Suceava și împrejurimi" },
];

function Track() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center gap-8 px-8">
          <span className="flex items-center gap-3">
            <span className="text-yellow">{item.icon}</span>
            <span className="whitespace-nowrap text-[0.98rem] font-semibold text-white">
              {item.text}
            </span>
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-yellow/60" />
        </div>
      ))}
    </>
  );
}

export function SocialProofStrip() {
  return (
    <div
      className="group relative overflow-hidden bg-blue py-5"
      aria-label="Dovezi de încredere"
    >
      <div className="animate-marquee flex w-max [animation:marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
        {/* duplicated for a seamless loop */}
        <Track />
        <Track />
      </div>

      {/* Dark fade at both ends */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-40"
      />
    </div>
  );
}
