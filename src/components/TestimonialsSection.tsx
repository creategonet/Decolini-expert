import { CheckCircle } from "lucide-react";
import { testimonials } from "../data/siteContent";

export function TestimonialsSection() {
  return (
    <section className="section" id="recenzii">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Clienți mulțumiți</p>
          <h2>Ce spun clienții care au lucrat cu noi</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article className="testimonial" key={t.title}>
              <div className="testimonial__stars" aria-label="5 din 5 stele">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>

              <p className="testimonial__name">{t.title}</p>

              <span className="testimonial__badge">
                <CheckCircle size={12} />
                Recomandă
              </span>

              <p className="testimonial__text">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
