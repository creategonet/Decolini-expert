import { motion } from "motion/react";
import { Camera, FileText, Hammer } from "lucide-react";
import { howItWorksSteps } from "../data/siteContent";
import { Container, SectionHeading, staggerContainer, staggerItem } from "./ui";

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
        />

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {howItWorksSteps.map((step, i) => (
            <motion.article
              key={step.number}
              variants={staggerItem}
              className="relative flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[2.6rem] font-extrabold leading-none text-blue-soft">
                  {step.number}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue text-white">
                  {ICONS[i]}
                </span>
              </div>
              <h3 className="text-[1.15rem] font-bold text-blue">{step.title}</h3>
              <p className="leading-relaxed text-slate-600">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
