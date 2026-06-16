import { motion } from "motion/react";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  BadgePercent,
  Droplets,
  Star,
  ArrowUpRight,
  ThumbsUp,
  Layers,
} from "lucide-react";
import type { ReactNode } from "react";
import { benefits } from "../data/siteContent";
import { Container, SectionHeading, staggerContainer, staggerItem } from "./ui";

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const tileBase =
  "relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]";

function Avatars() {
  const people = [
    { initials: "M", bg: "bg-blue text-white" },
    { initials: "V", bg: "bg-yellow text-blue" },
    { initials: "M", bg: "bg-blue-dark text-white" },
  ];
  return (
    <div className="flex -space-x-2.5">
      {people.map((p, i) => (
        <span
          key={i}
          className={`grid h-8 w-8 place-items-center rounded-full ring-2 ring-white text-xs font-bold ${p.bg}`}
        >
          {p.initials}
        </span>
      ))}
    </div>
  );
}

/* A compact benefit tile (1x1) */
function MiniBenefit({
  icon,
  title,
  text,
  theme,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  theme: "white" | "soft" | "blue";
}) {
  const styles = {
    white: { card: "bg-white border border-slate-200/80", icon: "bg-blue-soft text-blue", title: "text-blue", body: "text-slate-600" },
    soft: { card: "bg-blue-soft", icon: "bg-white text-blue", title: "text-blue", body: "text-slate-600" },
    blue: { card: "bg-gradient-to-br from-blue to-blue-dark", icon: "bg-white/15 text-yellow", title: "text-white", body: "text-white/70" },
  }[theme];

  return (
    <motion.article variants={staggerItem} className={`${tileBase} flex flex-col gap-2.5 p-6 ${styles.card}`}>
      <span className={`grid h-11 w-11 place-items-center rounded-xl ${styles.icon}`}>{icon}</span>
      <h3 className={`text-[1.05rem] font-bold leading-snug ${styles.title}`}>{title}</h3>
      <p className={`text-[0.92rem] leading-relaxed ${styles.body}`}>{text}</p>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function BenefitsSection() {
  return (
    <section className="py-20 sm:py-28" id="beneficii">
      <Container>
        <SectionHeading
          eyebrow="De ce să alegi recondiționarea"
          title="Beneficiile unei căzi recondiționate profesional"
        />

        <motion.div
          className="mt-12 grid auto-rows-[minmax(150px,auto)] grid-flow-dense grid-cols-2 gap-4 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Featured — big square (2x2) */}
          <motion.article
            variants={staggerItem}
            className={`${tileBase} col-span-2 row-span-2 flex flex-col justify-between bg-gradient-to-br from-blue to-blue-dark p-8`}
          >
            <Sparkles
              size={180}
              className="pointer-events-none absolute -right-8 -top-8 text-white/5"
              strokeWidth={1}
            />
            <div className="relative flex items-center gap-2">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-yellow">
                <Sparkles size={24} />
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/80">
                Beneficiul nr. 1
              </span>
            </div>
            <div className="relative">
              <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-tight text-white">
                {benefits[0].title}
              </h3>
              <p className="mt-2 max-w-sm text-[1.02rem] leading-relaxed text-white/75">
                {benefits[0].text}
              </p>
            </div>
          </motion.article>

          {/* Image tile — wide lifestyle photo */}
          <motion.figure
            variants={staggerItem}
            className={`${tileBase} col-span-2 row-span-2 min-h-[300px]`}
          >
            <img
              src="/bath-lifestyle.png"
              alt="Cadă albă lucioasă recondiționată, amplasată elegant"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
            <figcaption className="absolute inset-x-6 bottom-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue">
                <Sparkles size={12} />
                Rezultat real
              </span>
              <p className="mt-3 text-xl font-extrabold leading-tight text-white">
                Finisaj alb, lucios, ca la o cadă nouă
              </p>
            </figcaption>
          </motion.figure>

          {/* Rating tile */}
          <motion.article
            variants={staggerItem}
            className={`${tileBase} flex flex-col justify-between bg-white p-6`}
          >
            <div className="flex items-start justify-between">
              <span className="text-[2.6rem] font-extrabold leading-none text-blue">5.0</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-soft text-blue">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1 text-yellow">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <Avatars />
              <span className="text-xs font-semibold text-slate-500">7 recenzii</span>
            </div>
          </motion.article>

          {/* 100% stat tile (yellow) */}
          <motion.article
            variants={staggerItem}
            className={`${tileBase} flex flex-col justify-between bg-yellow p-6`}
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue/10 text-blue">
              <ThumbsUp size={20} />
            </span>
            <div>
              <span className="text-[2.6rem] font-extrabold leading-none text-blue">100%</span>
              <p className="mt-1 text-sm font-semibold leading-snug text-blue/80">
                dintre clienți ne recomandă
              </p>
            </div>
          </motion.article>

          {/* Remaining benefits — varied colours */}
          <MiniBenefit icon={<Clock size={22} />} title={benefits[1].title} text={benefits[1].text} theme="white" />
          <MiniBenefit icon={<ShieldCheck size={22} />} title={benefits[2].title} text={benefits[2].text} theme="soft" />
          <MiniBenefit icon={<BadgePercent size={22} />} title={benefits[3].title} text={benefits[3].text} theme="blue" />
          <MiniBenefit icon={<Droplets size={22} />} title={benefits[4].title} text={benefits[4].text} theme="white" />

          {/* Materials tile */}
          <motion.article
            variants={staggerItem}
            className={`${tileBase} flex flex-col justify-between bg-blue-soft p-6`}
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-blue">
              <Layers size={20} />
            </span>
            <div>
              <p className="text-[1.05rem] font-bold leading-snug text-blue">
                Fontă · Acril · Fibră
              </p>
              <p className="mt-1 text-[0.92rem] text-slate-600">
                Lucrăm orice tip de cadă.
              </p>
            </div>
          </motion.article>

          {/* CTA tile */}
          <motion.a
            href="#contact"
            variants={staggerItem}
            className={`${tileBase} group flex flex-col justify-between bg-gradient-to-br from-blue to-blue-dark p-6`}
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-yellow text-blue">
              <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div>
              <p className="text-[1.05rem] font-bold leading-snug text-white">
                Cere o ofertă gratuită
              </p>
              <p className="mt-1 text-[0.92rem] text-white/70">
                Trimite o poză cu cada ta.
              </p>
            </div>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
