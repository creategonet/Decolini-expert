import { MessageSquare, Phone, ChevronRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/constants";

export function FinalCTASection() {
  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <div className="cta-box__icon" aria-hidden="true">
            <MessageSquare size={28} />
          </div>

          <h2>Dă-i căzii tale o a doua viață</h2>
          <p>Trimite-ne o poză cu cada ta și primești o ofertă gratuită, fără obligații.</p>

          <div className="cta-box__actions">
            <a className="btn" href={PHONE_HREF}>
              Cere ofertă gratuită
              <ChevronRight size={18} />
            </a>
            <a className="cta-phone" href={PHONE_HREF} aria-label={`Sună la ${PHONE_DISPLAY}`}>
              <Phone size={16} />
              <span>sau sună: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
