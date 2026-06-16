import { DollarSign, Hammer, Wind, AlertTriangle } from "lucide-react";
import { problemCards } from "../data/siteContent";

const ICONS = [
  <DollarSign size={18} key="dollar" />,
  <Hammer size={18} key="hammer" />,
  <Wind size={18} key="wind" />,
  <AlertTriangle size={18} key="alert" />,
];

export function ProblemSection() {
  return (
    <section className="section problem-section" id="problema">
      <div className="container problem__grid">
        <figure className="problem__image" aria-label="Cadă deteriorată înainte de recondiționare">
          <img
            src="/cada-before-1.jpg"
            alt="Cadă veche îngălbenită și deteriorată înainte de recondiționare"
            width="900"
            height="1200"
            loading="lazy"
          />
          <span className="problem__image-label" aria-hidden="true">Înainte</span>
        </figure>

        <div className="problem__copy">
          <div className="section__header section__header--left">
            <h2>Cada veche îți strică aspectul băii?</h2>
          </div>

          <p className="lead">
            O cadă îngălbenită, ciobită sau pătată de rugină poate face toată baia să pară veche și neîngrijită.
          </p>

          <p>
            Dar schimbarea completă a căzii înseamnă, de obicei, costuri mari, demolări, mizerie și risc să se strice
            gresia sau faianța din jur.
          </p>

          <blockquote className="highlight-callout" aria-label="Mesaj cheie">
            „Nu trebuie mereu să cumperi o cadă nouă."
          </blockquote>

          <p>
            De multe ori, nu trebuie să cumperi o cadă nouă. Dacă cada este încă solidă, o putem recondiționa direct
            în baie.
          </p>

          <ul className="problem__cards" aria-label="Probleme ale înlocuirii complete">
            {problemCards.map((card, i) => (
              <li className="problem__card" key={i}>
                <span className="problem__card-icon" aria-hidden="true">
                  {ICONS[i]}
                </span>
                <strong>{card.text}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
