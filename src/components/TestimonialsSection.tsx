import { useRef } from "react";
import { motion } from "motion/react";
import { Star, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { testimonials } from "../data/siteContent";
import { Container, Eyebrow, Reveal } from "./ui";

const AVATAR_COLORS = [
  "bg-blue text-white",
  "bg-yellow text-blue",
  "bg-blue-dark text-white",
];

function cleanName(title: string) {
  return title.replace(" recomandă DECOLINI EXPERT - Amenajări Suceava.", "");
}

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28" id="recenzii">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-14">
          {/* Left — heading + rating + controls */}
          <Reveal className="flex flex-col">
            <Eyebrow>Clienți mulțumiți</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-blue">
              Nu ne crede pe cuvânt, vezi ce spun clienții
            </h2>
            <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-slate-600">
              Suntem mândri de fiecare lucrare și de oamenii care ne recomandă mai
              departe. Citește părerile lor, direct și nefiltrate.
            </p>

            {/* Rating row */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-4xl font-extrabold text-blue">5,0</span>
              <div>
                <div className="flex items-center gap-0.5 text-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  7 recenzii reale · 100% ne recomandă
                </p>
              </div>
            </div>

            {/* Arrows */}
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Recenzia anterioară"
                className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 text-blue transition-colors hover:border-blue hover:bg-blue hover:text-white"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Recenzia următoare"
                className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 text-blue transition-colors hover:border-blue hover:bg-blue hover:text-white"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </Reveal>

          {/* Right — horizontal carousel */}
          <div className="relative min-w-0 overflow-hidden -mr-4 lg:mr-0">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-[300px] shrink-0 snap-start flex-col gap-4 rounded-2xl bg-slate-50 p-7 sm:w-[360px]"
                >
                  <div className="flex items-center gap-0.5 text-yellow">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="flex-1 leading-relaxed text-slate-700">{t.text}</p>

                  <div className="flex items-center gap-3 border-t border-slate-200/80 pt-4">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                    >
                      {cleanName(t.title).charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-bold text-blue">{cleanName(t.title)}</p>
                      <p className="inline-flex items-center gap-1 text-xs font-semibold text-green-600">
                        <CheckCircle size={12} />
                        Recomandă
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
