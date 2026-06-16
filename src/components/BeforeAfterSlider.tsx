import { useState, useCallback, type CSSProperties, type PointerEvent } from "react";
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

  const cssVars = { "--pos": `${pos}%` } as CSSProperties;

  return (
    <article className="compare-card">
      <div
        className={`compare${dragging ? " dragging" : ""}`}
        style={cssVars}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="img"
        aria-label={pair.ariaLabel}
      >
        {/* After (bottom layer) */}
        <img className="compare__img" src={pair.after} alt={pair.afterAlt} loading="lazy" draggable={false} />

        {/* Before (clipped top layer) */}
        <div className="compare__before-wrap">
          <img className="compare__img" src={pair.before} alt={pair.beforeAlt} loading="lazy" draggable={false} />
        </div>

        {/* Labels */}
        <span className="compare__label compare__label--before" aria-hidden="true">Înainte</span>
        <span className="compare__label compare__label--after" aria-hidden="true">După</span>

        {/* Drag line */}
        <span className="compare__line" aria-hidden="true" />

        {/* Handle */}
        <span className="compare__handle" aria-hidden="true">
          <ArrowLeftRight size={20} strokeWidth={2.5} />
        </span>

        {/* Accessible range fallback */}
        <input
          type="range"
          className="compare__input"
          min={0}
          max={100}
          value={pos}
          aria-label={pair.ariaLabel}
          onChange={(e) => setPos(Number(e.target.value))}
        />
      </div>
    </article>
  );
}
