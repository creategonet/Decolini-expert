import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Wrench, ShieldCheck, Layers, Palette, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { services } from "../data/siteContent";
import { Container, SectionHeading } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

type Panel = {
  label: string;
  text: string;
  image: string;
  icon: ReactNode;
};

const PANELS: Panel[] = [
  { label: "Recondiționare", text: services[0].text, image: "/bath-lifestyle.png", icon: <Sparkles size={22} /> },
  { label: "Reparare defecte", text: services[1].text, image: "/cada-after-1.jpg", icon: <Wrench size={22} /> },
  { label: "Acoperire rugină", text: services[2].text, image: "/cada-after-3.jpg", icon: <ShieldCheck size={22} /> },
  { label: "Orice material", text: services[3].text, image: "/bathtub.png", icon: <Layers size={22} /> },
  { label: "Schimbare culoare", text: services[4].text, image: "/cada-after-front.jpg", icon: <Palette size={22} /> },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28" id="servicii">
      <Container>
        <SectionHeading
          eyebrow="Ce facem"
          title="Serviciile care redau aspectul și confortul căzii tale"
          subtitle="Treci cu mouse-ul peste fiecare panou pentru a-l deschide."
        />

        {/* Desktop: expanding accordion gallery */}
        <div className="mt-12 hidden h-[460px] gap-3 md:flex">
          {PANELS.map((panel, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={panel.label}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ flexBasis: 0 }}
                animate={{ flexGrow: isActive ? 6 : 1 }}
                transition={{ duration: 0.55, ease }}
                className="group relative h-full min-w-[68px] cursor-pointer overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]"
              >
                <img
                  src={panel.image}
                  alt={panel.text}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10"
                      : "bg-ink/55"
                  }`}
                />

                {/* Icon chip */}
                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-yellow backdrop-blur">
                  {panel.icon}
                </span>

                {/* Collapsed: vertical label */}
                {!isActive && (
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-sm font-bold uppercase tracking-wider text-white/90">
                    {panel.label}
                  </span>
                )}

                {/* Expanded: details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.4, delay: 0.12, ease }}
                      className="absolute inset-x-0 bottom-0 p-7"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue">
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white">
                        {panel.label}
                      </h3>
                      <p className="mt-2 max-w-md text-[1rem] leading-relaxed text-white/85">
                        {panel.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: stacked image cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:hidden">
          {PANELS.map((panel, i) => (
            <article
              key={panel.label}
              className="relative h-56 overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]"
            >
              <img
                src={panel.image}
                alt={panel.text}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-yellow backdrop-blur">
                {panel.icon}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow px-2.5 py-0.5 text-xs font-bold text-blue">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-white">{panel.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/85">{panel.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Hint */}
        <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
          <Plus size={15} />
          Lucrăm orice tip de cadă, indiferent de material
        </p>
      </Container>
    </section>
  );
}
