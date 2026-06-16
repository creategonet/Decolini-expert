import { MessageSquare, Phone, ChevronRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";
import { Container, Reveal, PrimaryButton } from "./ui";

export function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28" id="contact">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-blue px-6 py-16 text-center shadow-[var(--shadow-lift)] sm:px-12">
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,193,0,0.18)_0%,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]"
            />

            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-yellow text-blue">
              <MessageSquare size={28} />
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.02em] text-white">
              Dă-i căzii tale o a doua viață
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.08rem] leading-relaxed text-white/80">
              Trimite-ne o poză cu cada ta și primești o ofertă gratuită, fără
              obligații.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <PrimaryButton href={PHONE_HREF}>
                Cere ofertă gratuită
                <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </PrimaryButton>
              <a
                href={PHONE_HREF}
                aria-label={`Sună la ${PHONE_DISPLAY}`}
                className="inline-flex items-center gap-2 font-bold text-white transition-colors hover:text-yellow"
              >
                <Phone size={16} />
                <span>sau sună: {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
