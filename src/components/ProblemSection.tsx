import { motion } from "motion/react";
import { DollarSign, Hammer, Wind, AlertTriangle } from "lucide-react";
import { problemCards } from "../data/siteContent";
import { Container, Reveal, Eyebrow, staggerContainer, staggerItem } from "./ui";

const ICONS = [
  <DollarSign size={18} key="dollar" />,
  <Hammer size={18} key="hammer" />,
  <Wind size={18} key="wind" />,
  <AlertTriangle size={18} key="alert" />,
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28" id="problema">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
            <img
              src="/cada-before-1.jpg"
              alt="Cadă veche îngălbenită și deteriorată înainte de recondiționare"
              width={900}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            />
            <span className="absolute left-5 top-5 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
              Înainte
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="flex flex-col gap-5">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>Problema</Eyebrow>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-blue">
              Cada veche îți strică aspectul băii?
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-[1.05rem] leading-relaxed text-slate-600">
              O cadă îngălbenită, ciobită sau pătată de rugină poate face toată
              baia să pară veche și neîngrijită. Dar schimbarea completă înseamnă,
              de obicei, costuri mari, demolări, mizerie și risc să se strice
              gresia sau faianța din jur.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="rounded-2xl border-l-4 border-yellow bg-blue-soft px-5 py-4 text-[1.1rem] font-semibold text-blue">
              „Nu trebuie mereu să cumperi o cadă nouă."
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-slate-600">
              Dacă cada este încă solidă, o putem recondiționa direct în baie.
            </p>
          </Reveal>

          <motion.ul
            className="mt-2 grid grid-cols-2 gap-3"
            aria-label="Probleme ale înlocuirii complete"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {problemCards.map((card, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-soft text-blue">
                  {ICONS[i]}
                </span>
                <strong className="text-[0.95rem] font-bold text-blue">
                  {card.text}
                </strong>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
