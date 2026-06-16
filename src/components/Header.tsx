import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { navigationItems } from "../data/siteContent";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid bar once scrolled (or when the mobile menu is open); transparent over the hero otherwise.
  const solid = scrolled || isOpen;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-white/95 shadow-[0_4px_24px_rgba(0,58,128,0.1)] backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[72px] w-[min(100%-2rem,1180px)] items-center justify-between gap-6">
        {/* Brand */}
        <a
          href="#top"
          onClick={close}
          aria-label="DECOLINI EXPERT - pagina principală"
          className="flex items-center gap-3"
        >
          <img
            src="/decolini logo.png"
            alt="Logo DECOLINI EXPERT"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-contain"
          />
          <span className="flex flex-col leading-tight">
            <strong
              className={`text-[0.95rem] font-extrabold tracking-tight transition-colors ${
                solid ? "text-blue" : "text-white"
              }`}
            >
              DECOLINI EXPERT
            </strong>
            <span
              className={`text-[0.72rem] font-medium transition-colors ${
                solid ? "text-slate-500" : "text-white/65"
              }`}
            >
              Amenajări Suceava
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigare principală">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-[0.95rem] font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-yellow after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                solid ? "text-blue/80 hover:text-blue" : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            aria-label={`Sună la ${PHONE_DISPLAY}`}
            className={`hidden items-center gap-2 text-[0.95rem] font-bold transition-colors sm:inline-flex ${
              solid ? "text-blue hover:text-yellow-dark" : "text-white hover:text-yellow"
            }`}
          >
            <Phone size={15} strokeWidth={2.5} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href="#contact"
            className="hidden rounded-xl bg-yellow px-4 py-2.5 text-[0.9rem] font-bold text-blue shadow-[0_4px_14px_rgba(255,193,0,0.35)] transition-colors hover:bg-yellow-dark sm:inline-flex"
          >
            Cere o ofertă gratuită
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setIsOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-lg transition-colors lg:hidden ${
              solid ? "text-blue hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav
              className="mx-auto flex w-[min(100%-2rem,1180px)] flex-col py-3"
              aria-label="Meniu mobil"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-lg px-3 py-3 text-[1.05rem] font-semibold text-blue hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-slate-100 px-1 pt-4">
                <a
                  href={PHONE_HREF}
                  onClick={close}
                  aria-label={`Sună la ${PHONE_DISPLAY}`}
                  className="inline-flex items-center gap-2 px-2 font-bold text-blue"
                >
                  <Phone size={16} />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a
                  href="#contact"
                  onClick={close}
                  className="inline-flex justify-center rounded-xl bg-yellow px-4 py-3 font-bold text-blue shadow-[0_4px_14px_rgba(255,193,0,0.35)] hover:bg-yellow-dark"
                >
                  Cere o ofertă gratuită
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
