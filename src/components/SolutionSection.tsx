import { motion } from "motion/react";
import { Wrench, Layers, PaintBucket, Sparkles, ChevronRight } from "lucide-react";
import { solutionSteps } from "../data/siteContent";
import { Container, Reveal, Eyebrow, PrimaryButton, staggerContainer, staggerItem } from "./ui";

const STEP_ICONS = [
  <Wrench size={18} key="wrench" />,
  <Layers size={18} key="layers" />,
  <PaintBucket size={18} key="paint" />,
  <Sparkles size={18} key="sparkles" />,
];

export function SolutionSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28" id="solutia">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col gap-5">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>Soluția noastră</Eyebrow>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-blue">
              Îți facem cada să arate din nou curată și lucioasă
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-[1.05rem] leading-relaxed text-slate-600">
              DECOLINI EXPERT recondiționează căzi de baie în Suceava, fără să fie
              nevoie să le scoți sau să spargi în baie. Reparăm ciobiturile,
              acoperim petele de rugină și aplicăm un strat nou, alb și lucios.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-slate-600">
              Rezultatul: cada arată mult mai bine, se curăță mai ușor și costă
              mult mai puțin decât înlocuirea completă.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-2">
            <PrimaryButton href="#contact">
              Cere o ofertă gratuită
              <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </PrimaryButton>
          </Reveal>
        </div>

        {/* Flow steps */}
        <motion.ol
          className="flex flex-col gap-3"
          aria-label="Pașii recondiționării"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {solutionSteps.map((step, i) => (
            <motion.li
              key={step.number}
              variants={staggerItem}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue text-[0.95rem] font-extrabold text-white">
                {step.number}
              </span>
              <span className="flex-1 font-semibold text-blue">{step.text}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-yellow/15 text-yellow-dark">
                {STEP_ICONS[i]}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
