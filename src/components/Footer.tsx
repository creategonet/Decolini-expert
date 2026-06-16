import { Phone, MapPin, Mail, Share2, Map } from "lucide-react";
import { footerServices } from "../data/siteContent";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  MAPS_URL,
} from "../lib/constants";
import { Container } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#top"
              aria-label="DECOLINI EXPERT - înapoi sus"
              className="flex items-center gap-3"
            >
              <img
                src="/decolini logo.png"
                alt="Logo DECOLINI EXPERT"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-lg object-contain"
              />
              <span className="flex flex-col leading-tight">
                <strong className="text-[0.95rem] font-extrabold text-white">
                  DECOLINI EXPERT
                </strong>
                <span className="text-[0.72rem] text-white/55">
                  Amenajări Suceava
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Reparații și recondiționare căzi de baie în Suceava.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={FACEBOOK_URL}
                aria-label="Facebook DECOLINI EXPERT"
                rel="noopener noreferrer"
                target="_blank"
                className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-yellow hover:text-blue"
              >
                <Share2 size={16} />
              </a>
              <a
                href={MAPS_URL}
                aria-label="Localizare pe Google Maps"
                rel="noopener noreferrer"
                target="_blank"
                className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-yellow hover:text-blue"
              >
                <Map size={16} />
              </a>
            </div>
          </div>

          {/* Contact rapid */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact rapid
            </h4>
            <a
              href={PHONE_HREF}
              aria-label={`Sună la ${PHONE_DISPLAY}`}
              className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-yellow"
            >
              <Phone size={18} />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-xl bg-yellow px-4 py-2.5 text-sm font-bold text-blue transition-colors hover:bg-yellow-dark"
            >
              Cere ofertă gratuită
            </a>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Servicii
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {footerServices}
            </p>
            <p className="mt-3 text-sm text-white/60">
              <strong className="text-white/85">Zonă de lucru:</strong> Suceava și
              împrejurimi
            </p>
          </div>

          {/* Informații */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Informații
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-yellow" />
                <a href={PHONE_HREF} className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-yellow" />
                <a href={EMAIL_HREF} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-yellow" />
                <span>Ipotești, str. Răgoaza 82, Suceava, 727327</span>
              </li>
              <li className="text-xs text-white/45">
                Administrator: Octavian Condratiuc
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            © {year} DECOLINI EXPERT. Toate drepturile rezervate.
          </p>
          <nav
            className="flex gap-6 text-sm"
            aria-label="Linkuri utile footer"
          >
            <a
              href={FACEBOOK_URL}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-white"
            >
              Facebook
            </a>
            <a
              href={MAPS_URL}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-white"
            >
              Hartă Google
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
