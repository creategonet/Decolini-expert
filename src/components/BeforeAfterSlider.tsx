import { useState, useCallback, type PointerEvent } from "react";
import { ArrowLeftRight } from "lucide-react";
import type { BeforeAfterPair } from "../data/siteContent";

type Props = { pair: BeforeAfterPair };

export function BeforeAfterSlider({ pair }: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const calcPos = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    return Math.round((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setPos(calcPos(e));
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setPos(calcPos(e));
  };

  const onPointerUp = () => setDragging(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[var(--shadow-soft)]">
      <div
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="img"
        aria-label={pair.ariaLabel}
      >
        {/* After (bottom layer) */}
        <img
          src={pair.after}
          alt={pair.afterAlt}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Before (clipped top layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={pair.before}
            alt={pair.beforeAlt}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
          Înainte
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue">
          După
        </span>

        {/* Divider line */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
          style={{ left: `${pos}%` }}
        />

        {/* Handle */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-blue shadow-lg transition-transform ${
            dragging ? "scale-110" : ""
          }`}
          style={{ left: `${pos}%` }}
        >
          <ArrowLeftRight size={20} strokeWidth={2.5} />
        </span>

        {/* Accessible range fallback */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          aria-label={pair.ariaLabel}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-3 mx-auto w-[85%] cursor-pointer opacity-0 focus-visible:opacity-100"
        />
      </div>
    </article>
  );
}
