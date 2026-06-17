import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/siteContent";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";
import { Container, SectionHeading, Reveal } from "./ui";
import { Link001 } from "./ui/skiper-ui/skiper40";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 sm:py-28" id="intrebari">
      <Container>
        <SectionHeading
          eyebrow="Întrebări și răspunsuri"
          title="Întrebări frecvente despre recondiționarea căzilor"
        />

        <Reveal className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[var(--shadow-soft)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[1.05rem] font-bold text-blue">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-blue transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center gap-2 text-center">
          <p className="text-slate-600">Nu ți-am răspuns la întrebare?</p>
          <Link001
            href={PHONE_HREF}
            className="text-xl font-extrabold text-blue"
          >
            Sună-ne la {PHONE_DISPLAY}
          </Link001>
        </Reveal>
      </Container>
    </section>
  );
}
