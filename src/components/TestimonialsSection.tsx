import { motion } from "motion/react";
import { CheckCircle, Star, Quote } from "lucide-react";
import { testimonials } from "../data/siteContent";
import { Container, SectionHeading, staggerContainer, staggerItem } from "./ui";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28" id="recenzii">
      <Container>
        <SectionHeading
          eyebrow="Clienți mulțumiți"
          title="Ce spun clienții care au lucrat cu noi"
        />

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.title}
              variants={staggerItem}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <Quote size={28} className="text-yellow" fill="currentColor" />

              <div className="flex items-center gap-1 text-yellow" aria-label="5 din 5 stele">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="flex-1 leading-relaxed text-slate-700">{t.text}</p>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-sm font-bold text-blue">
                  {t.title.replace(" recomandă DECOLINI EXPERT - Amenajări Suceava.", "")}
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
                  <CheckCircle size={12} />
                  Recomandă
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
