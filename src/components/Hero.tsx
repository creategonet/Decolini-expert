import { motion } from "motion/react";
import { Phone, ChevronRight, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";
import { Container, PrimaryButton } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[clamp(640px,94vh,920px)] items-center overflow-hidden bg-ink">
      {/* Full-bleed background image - fills the whole top, behind the nav */}
      <motion.img
        src="/hero.jpg"
        alt="Cadă de baie albă și lucioasă după recondiționare profesională"
        width={2400}
        height={1350}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_15%]"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease }}
      />
      {/* Dark veil: strong on the left (under the copy), fading toward the tub */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,16,30,0.94)_0%,rgba(8,16,30,0.78)_36%,rgba(8,16,30,0.32)_60%,rgba(8,16,30,0)_80%),linear-gradient(0deg,rgba(8,16,30,0.6)_0%,rgba(8,16,30,0)_45%)]"
      />

      <Container className="pt-20">
        <div className="flex max-w-[620px] flex-col gap-6">
          <motion.span
            className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/80"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            Renovare și recondiționare căzi de baie · Suceava
          </motion.span>

          <motion.h1
            className="text-[clamp(2.5rem,5.6vw,4.2rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Cada ta arată
            <br />
            ca nouă,
            <br />
            <span className="text-yellow">într-o singură zi</span>
          </motion.h1>

          <motion.p
            className="max-w-[520px] text-[clamp(1.02rem,1.8vw,1.2rem)] leading-[1.7] text-white/80"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            Renovăm și recondiționăm căzi de baie vechi și căzi de fontă, fără
            demolări și fără să-ți stricăm gresia și faianța. Costă mult mai
            puțin decât o cadă nouă.
          </motion.p>

          <motion.div
            className="mt-1 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <PrimaryButton href="#contact">
              Cere o ofertă gratuită
              <ChevronRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </PrimaryButton>
            <a
              href={PHONE_HREF}
              aria-label={`Sună acum la ${PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 text-[1.05rem] font-bold text-white transition-colors hover:text-yellow"
            >
              <Phone size={16} strokeWidth={2.5} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </motion.div>

          <motion.p
            className="mt-1 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
          >
            <MapPin size={15} strokeWidth={2.5} className="shrink-0 text-yellow" />
            Suceava și împrejurimi · Deplasare la tine acasă
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
