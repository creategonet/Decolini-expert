import { motion } from "motion/react";
import { Sparkles, Wrench, ShieldCheck, Layers, Palette, Check } from "lucide-react";
import { services } from "../data/siteContent";
import { Container, Reveal, Eyebrow, staggerContainer, staggerItem } from "./ui";

const ICONS = [
  <Sparkles size={20} key="sparkles" />,
  <Wrench size={20} key="wrench" />,
  <ShieldCheck size={20} key="shield" />,
  <Layers size={20} key="layers" />,
  <Palette size={20} key="palette" />,
];

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28" id="servicii">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>Ce facem</Eyebrow>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-blue">
              Serviciile care redau aspectul și confortul căzii tale
            </h2>
          </Reveal>

          <motion.ul
            className="mt-2 flex flex-col gap-3"
            aria-label="Lista serviciilor oferite"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((service, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-soft text-blue">
                  {ICONS[i]}
                </span>
                <p className="pt-1.5 font-medium text-slate-700">{service.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Reveal y={32}>
          <figure className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-soft to-white p-6 shadow-[var(--shadow-lift)]">
            <img
              src="/bathtub.png"
              alt="Cadă albă și lucioasă după reglazurare profesională DECOLINI EXPERT"
              width={900}
              height={1200}
              loading="lazy"
              className="mx-auto w-full max-w-md object-contain drop-shadow-2xl"
            />
            <figcaption className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-blue px-4 py-2 text-sm font-bold text-white shadow-lg">
              <Check size={15} className="text-yellow" />
              Rezultat finit DECOLINI EXPERT
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
