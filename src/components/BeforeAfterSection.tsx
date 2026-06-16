import { beforeAfterPairs } from "../data/siteContent";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <section className="section section--soft" id="inainte-dupa">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Rezultate reale</p>
          <h2>Diferența se vede imediat</h2>
          <p className="lead" style={{ marginTop: "12px" }}>
            Trage cursorul pentru a compara starea căzii înainte și după recondiționare.
          </p>
        </div>

        <div className="ba__grid">
          {beforeAfterPairs.map((pair) => (
            <BeforeAfterSlider pair={pair} key={pair.ariaLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
