import { motion } from "motion/react";
import { Camera, FileText, Hammer, Check, ChevronRight } from "lucide-react";
import { howItWorksSteps } from "../data/siteContent";
import { Container, SectionHeading, PrimaryButton, staggerContainer, staggerItem } from "./ui";

const ICONS = [
  <Camera size={20} key="camera" />,
  <FileText size={20} key="file" />,
  <Hammer size={20} key="hammer" />,
];

export function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28" id="cum-lucram">
      <Container>
        <SectionHeading
          eyebrow="Procesul nostru"
          title="Cum decurge recondiționarea căzii"
          subtitle="De la prima poză până la cada lucioasă, în trei pași simpli."
        />

        <div className="relative mt-16">
          {/* Connecting progress line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-1 -translate-y-1/2 overflow-hidden rounded-full bg-slate-200 md:block"
          >
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-blue to-yellow"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>

          <motion.div
            className="relative grid gap-10 md:grid-cols-3 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {howItWorksSteps.map((step, i) => (
              <motion.article
                key={step.number}
                variants={staggerItem}
                className="flex flex-col items-center text-center"
              >
                {/* Number node */}
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue to-blue-dark text-xl font-extrabold text-white shadow-[0_10px_30px_rgba(0,58,128,0.3)] ring-8 ring-slate-50">
                  {step.number}
                </div>

                {/* Card */}
                <div className="mt-6 flex w-full flex-1 flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-soft text-blue">
                    {ICONS[i]}
                  </span>
                  <h3 className="text-[1.18rem] font-bold text-blue">{step.title}</h3>
                  <p className="leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Result endpoint */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-5 rounded-2xl bg-gradient-to-br from-blue to-blue-dark px-6 py-8 text-center sm:flex-row sm:gap-8 sm:text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-yellow text-blue">
              <Check size={28} strokeWidth={3} />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-extrabold text-white">
                Gata! Cada arată din nou curată și lucioasă
              </h3>
              <p className="mt-1 text-white/75">
                De obicei terminăm într-o singură zi de lucru.
              </p>
            </div>
            <PrimaryButton href="#contact" className="shrink-0">
              Începe acum
              <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </PrimaryButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
