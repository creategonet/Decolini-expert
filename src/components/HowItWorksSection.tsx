import { Camera, FileText, Hammer } from "lucide-react";
import { howItWorksSteps } from "../data/siteContent";

const ICONS = [
  <Camera size={18} key="camera" />,
  <FileText size={18} key="file" />,
  <Hammer size={18} key="hammer" />,
];

export function HowItWorksSection() {
  return (
    <section className="section section--soft" id="cum-lucram">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Procesul nostru</p>
          <h2>Cum decurge recondiționarea căzii</h2>
        </div>

        <div className="hiw__grid">
          {howItWorksSteps.map((step, i) => (
            <article className="step-card" key={step.number}>
              <div className="step-card__header">
                <span className="step-num" aria-label={`Pasul ${step.number}`}>{step.number}</span>
                <span className="step-card__icon" aria-hidden="true">{ICONS[i]}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
