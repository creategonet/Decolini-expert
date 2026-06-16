import { Wrench, Layers, PaintBucket, Sparkles, ChevronRight } from "lucide-react";
import { solutionSteps } from "../data/siteContent";

const STEP_ICONS = [
  <Wrench size={16} key="wrench" />,
  <Layers size={16} key="layers" />,
  <PaintBucket size={16} key="paint" />,
  <Sparkles size={16} key="sparkles" />,
];

export function SolutionSection() {
  return (
    <section className="section section--soft" id="solutia">
      <div className="container solution__grid">
        <div className="solution__copy">
          <div className="section__header section__header--left">
            <p className="eyebrow">Soluția noastră</p>
            <h2>Îți facem cada să arate din nou curată și lucioasă</h2>
          </div>

          <p className="lead">
            DECOLINI EXPERT recondiționează căzi de baie în Suceava, fără să fie nevoie să le scoți sau să spargi în
            baie.
          </p>
          <p>
            Reparăm ciobiturile, acoperim petele de rugină și aplicăm un strat nou, alb și lucios.
          </p>
          <p>
            Rezultatul: cada arată mult mai bine, se curăță mai ușor și costă mult mai puțin decât înlocuirea
            completă.
          </p>

          <a className="btn" href="#contact" style={{ marginTop: "8px", alignSelf: "flex-start" }}>
            Cere o ofertă gratuită
            <ChevronRight size={18} />
          </a>
        </div>

        <aside className="solution__flow" aria-label="Pașii recondiționării">
          {solutionSteps.map((step, i) => (
            <div className="flow-step" key={step.number}>
              <span className="flow-step__num" aria-hidden="true">{step.number}</span>
              <span>{step.text}</span>
              <span className="flow-step__icon" aria-hidden="true">{STEP_ICONS[i]}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
