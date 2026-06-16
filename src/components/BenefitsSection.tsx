import { Sparkles, Clock, ShieldCheck, BadgePercent, Droplets } from "lucide-react";
import { benefits } from "../data/siteContent";

const ICONS = [
  <Sparkles size={22} key="sparkles" />,
  <Clock size={22} key="clock" />,
  <ShieldCheck size={22} key="shield" />,
  <BadgePercent size={22} key="badge" />,
  <Droplets size={22} key="droplets" />,
];

export function BenefitsSection() {
  return (
    <section className="section" id="beneficii">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">De ce să alegi recondiționarea</p>
          <h2>Beneficiile unei căzi recondiționate profesional</h2>
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit, i) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="benefit-card__icon" aria-hidden="true">
                {ICONS[i]}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
