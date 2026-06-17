import { motion, useReducedMotion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";
import { Container } from "./ui";

export function CtaBand() {
  const reduce = useReducedMotion();
  const float = (x: number[], y: number[]) => (reduce ? undefined : { x, y });

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#ffd64a_0%,#ffc100_42%,#e0a800_100%)]">
      {/* Decorative floating circles — no images */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/25"
        animate={float([0, -28, 0], [0, 22, 0])}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-blue/10"
        animate={float([0, 36, 0], [0, -18, 0])}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-white/20"
        animate={float([0, 20, 0], [0, 14, 0])}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-1/3 bottom-2 h-16 w-16 rounded-full bg-blue/10"
        animate={float([0, -22, 0], [0, -12, 0])}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Solid blue accent ball, moving in the top-left corner (hidden on phones to keep text legible) */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-12 -top-14 hidden h-40 w-40 rounded-full bg-blue/90 blur-[1px] sm:block"
        animate={float([0, 34, 0], [0, 26, 0])}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Smaller blue ball, bottom-right corner */}
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-10 right-10 h-24 w-24 rounded-full bg-blue/80"
        animate={float([0, -18, 0], [0, -20, 0])}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Extra white bubbles for depth */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-4 h-20 w-20 rounded-full bg-white/15"
        animate={float([0, 26, 0], [0, 16, 0])}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-1/4 top-1/2 h-10 w-10 rounded-full bg-white/25"
        animate={float([0, -16, 0], [0, 18, 0])}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative flex flex-col items-center justify-between gap-7 py-16 text-center md:flex-row md:gap-10 md:py-24 md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[clamp(1.5rem,3.2vw,2.3rem)] font-extrabold leading-tight tracking-[-0.01em] text-blue">
            Nu arunca cada veche. O facem ca nouă.
          </h2>
          <p className="mt-2 font-medium text-blue/80">
            Ofertă gratuită, fără obligații - îți spunem direct dacă merită.
          </p>
        </motion.div>

        <motion.div
          className="flex shrink-0 flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-7 py-4 text-[1rem] font-bold text-white shadow-[0_10px_28px_rgba(0,42,94,0.35)] transition-all duration-200 hover:bg-blue-dark hover:shadow-[0_12px_32px_rgba(0,42,94,0.45)]"
          >
            Cere o ofertă gratuită
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href={PHONE_HREF}
            aria-label={`Sună la ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 text-[1.05rem] font-bold text-blue transition-opacity hover:opacity-70"
          >
            <Phone size={17} strokeWidth={2.5} />
            {PHONE_DISPLAY}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
