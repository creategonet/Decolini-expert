import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/siteContent";

export function FAQSection() {
  return (
    <section className="section section--soft" id="intrebari">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Întrebări și răspunsuri</p>
          <h2>Întrebări frecvente despre recondiționarea căzilor</h2>
        </div>

        <div className="faq__wrap">
          <div className="faq__list" role="list">
            {faqItems.map((item) => (
              <details className="faq__item" key={item.question}>
                <summary>
                  {item.question}
                  <ChevronDown className="faq__chevron" size={22} aria-hidden="true" />
                </summary>
                <div className="faq__body">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
