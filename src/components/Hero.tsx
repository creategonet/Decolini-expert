import { Phone, ChevronRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Reparații și recondiționare căzi de baie · Suceava</p>
          <h1 className="hero__title">
            Recondiționăm căzi de baie în Suceava — într-o singură zi
          </h1>
          <p className="hero__subtitle">
            Lucrăm căzi de fontă, acril și fibră de sticlă, fără demolări și fără să-ți stricăm gresia și faianța.
            Costă mult mai puțin decât o cadă nouă.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#contact">
              Cere o ofertă gratuită
              <ChevronRight size={18} />
            </a>
            <a className="hero__phone" href={PHONE_HREF} aria-label={`Sună acum la ${PHONE_DISPLAY}`}>
              <Phone size={16} strokeWidth={2.5} />
              <span>Sună acum: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        <figure className="hero__media" aria-label="Cadă de baie recondiționată">
          <img
            src="/cada-after-front.jpg"
            alt="Cadă de baie albă și lucioasă după recondiționare profesională"
            width="1024"
            height="1280"
            fetchPriority="high"
          />
          <div className="hero__badge" aria-hidden="true">
            <span className="badge-dot"></span>
            Suceava și împrejurimi
          </div>
        </figure>
      </div>
    </section>
  );
}
