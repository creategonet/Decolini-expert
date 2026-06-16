import { motion } from "motion/react";
import { beforeAfterPairs } from "../data/siteContent";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Container, SectionHeading, staggerContainer, staggerItem } from "./ui";

export function BeforeAfterSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28" id="inainte-dupa">
      <Container>
        <SectionHeading
          eyebrow="Rezultate reale"
          title="Diferența se vede imediat"
          subtitle="Trage cursorul pentru a compara starea căzii înainte și după recondiționare."
        />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {beforeAfterPairs.map((pair) => (
            <motion.div key={pair.ariaLabel} variants={staggerItem}>
              <BeforeAfterSlider pair={pair} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
