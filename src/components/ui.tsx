import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[min(100%-2rem,1180px)] ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll reveal (motion)                                              */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Staggered container + item for grids/lists */
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/* Typography helpers                                                  */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] ${
        light ? "text-white/80" : "text-blue"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-[clamp(1.7rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.02em] ${
          light ? "text-white" : "text-blue"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-[1.05rem] leading-relaxed ${
            light ? "text-white/75" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow px-6 py-3.5 text-[0.98rem] font-bold text-blue shadow-[0_8px_22px_rgba(255,193,0,0.4)] transition-all duration-200 hover:bg-yellow-dark hover:shadow-[0_10px_28px_rgba(255,193,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow ${className}`}
    >
      {children}
    </a>
  );
}
