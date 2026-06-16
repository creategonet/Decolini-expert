import { Star, ThumbsUp, Users } from "lucide-react";
import { socialProofItems } from "../data/siteContent";

const ICONS = [
  <Star size={18} fill="currentColor" key="star" />,
  <ThumbsUp size={18} key="thumb" />,
  <Users size={18} key="users" />,
];

export function SocialProofStrip() {
  return (
    <div className="trust-strip" aria-label="Dovezi de încredere">
      <div className="container trust-strip__grid">
        {socialProofItems.map((item, i) => (
          <div className="trust-item" key={i}>
            <span className="trust-item__icon" aria-hidden="true">
              {ICONS[i]}
            </span>
            <p className="trust-item__text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
