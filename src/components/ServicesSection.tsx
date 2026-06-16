import { Sparkles, Wrench, ShieldCheck, Layers, Palette } from "lucide-react";
import { services } from "../data/siteContent";

const ICONS = [
  <Sparkles size={20} key="sparkles" />,
  <Wrench size={20} key="wrench" />,
  <ShieldCheck size={20} key="shield" />,
  <Layers size={20} key="layers" />,
  <Palette size={20} key="palette" />,
];

export function ServicesSection() {
  return (
    <section className="section" id="servicii">
      <div className="container services__grid">
        <div>
          <div className="section__header section__header--left">
            <p className="eyebrow">Ce facem</p>
            <h2>Serviciile care redau aspectul și confortul căzii tale</h2>
          </div>

          <ul className="services__list" aria-label="Lista serviciilor oferite">
            {services.map((service, i) => (
              <li className="service-item" key={i}>
                <span className="service-item__icon" aria-hidden="true">
                  {ICONS[i]}
                </span>
                <p>{service.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="services__media" aria-label="Cadă recondiționată profesional">
          <img
            src="/bathtub.png"
            alt="Cadă albă și lucioasă după reglazurare profesională DECOLINI EXPERT"
            width="900"
            height="1200"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
