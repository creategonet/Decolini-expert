import { Phone, MapPin, Mail, Share2, Map } from "lucide-react";
import { footerServices } from "../data/siteContent";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF, FACEBOOK_URL, MAPS_URL } from "../lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">

          {/* Coloana 1: Brand */}
          <div>
            <a className="footer__logo" href="#top" aria-label="DECOLINI EXPERT — înapoi sus">
              <img src="/decolini logo.png" alt="Logo DECOLINI EXPERT" width="52" height="52" loading="lazy" />
              <div>
                <strong>DECOLINI EXPERT</strong>
                <span>Amenajări Suceava</span>
              </div>
            </a>
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: "0.9rem", lineHeight: "1.7" }}>
              Reparații și recondiționare căzi de baie în Suceava
            </p>
            <div className="footer__socials">
              <a
                className="footer__social-btn"
                href={FACEBOOK_URL}
                aria-label="Facebook DECOLINI EXPERT"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Share2 size={16} />
              </a>
              <a
                className="footer__social-btn"
                href={MAPS_URL}
                aria-label="Localizare pe Google Maps"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Map size={16} />
              </a>
            </div>
          </div>

          {/* Coloana 2: Telefon + CTA */}
          <div className="footer__col">
            <h4>Contact rapid</h4>
            <a className="footer__phone" href={PHONE_HREF} aria-label={`Sună la ${PHONE_DISPLAY}`}>
              <Phone size={18} />
              {PHONE_DISPLAY}
            </a>
            <a className="btn btn--sm" href="#contact">Cere ofertă gratuită</a>
          </div>

          {/* Coloana 3: Servicii */}
          <div className="footer__col">
            <h4>Servicii</h4>
            <p>{footerServices}</p>
            <p style={{ marginTop: "12px" }}>
              <strong style={{ color: "rgba(255,255,255,.85)" }}>Zonă de lucru:</strong> Suceava și împrejurimi
            </p>
          </div>

          {/* Coloana 4: Contact detaliat */}
          <div className="footer__col">
            <h4>Informații</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <Phone size={14} />
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </div>
              <div className="footer__contact-item">
                <Mail size={14} />
                <a href={EMAIL_HREF}>{EMAIL}</a>
              </div>
              <div className="footer__contact-item">
                <MapPin size={14} />
                <span>Ipotești, str. Răgoaza 82, Suceava, 727327</span>
              </div>
              <div className="footer__contact-item">
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.55)" }}>
                  Administrator: Octavian Condratiuc
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} DECOLINI EXPERT. Toate drepturile rezervate.
          </p>
          <nav className="footer__links" aria-label="Linkuri utile footer">
            <a href={FACEBOOK_URL} rel="noopener noreferrer" target="_blank">Facebook</a>
            <a href={MAPS_URL} rel="noopener noreferrer" target="_blank">Hartă Google</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
