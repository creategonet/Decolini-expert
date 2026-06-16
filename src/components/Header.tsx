import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { navigationItems } from "../data/siteContent";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="brand" href="#top" onClick={close} aria-label="DECOLINI EXPERT — pagina principală">
          <img className="brand__logo" src="/decolini logo.png" alt="Logo DECOLINI EXPERT" width="48" height="48" />
          <div className="brand__text">
            <strong>DECOLINI EXPERT</strong>
            <span>Amenajări Suceava</span>
          </div>
        </a>

        <nav className="main-nav" aria-label="Navigare principală">
          {navigationItems.map((item) => (
            <a key={item.href} className="main-nav__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={PHONE_HREF} aria-label={`Sună la ${PHONE_DISPLAY}`}>
            <span className="icon-wrap" aria-hidden="true">
              <Phone size={14} strokeWidth={2.5} />
            </span>
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a className="btn btn--sm" href="#contact">
            Cere o ofertă gratuită
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
        <nav className="mobile-nav__links" aria-label="Meniu mobil">
          {navigationItems.map((item) => (
            <a key={item.href} className="mobile-nav__link" href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav__actions">
          <a className="mobile-nav__phone" href={PHONE_HREF} onClick={close} aria-label={`Sună la ${PHONE_DISPLAY}`}>
            <Phone size={16} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a className="btn" href="#contact" onClick={close}>
            Cere o ofertă gratuită
          </a>
        </div>
      </div>
    </header>
  );
}
