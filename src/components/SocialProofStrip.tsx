import { motion } from "motion/react";
import { Star, ThumbsUp, Users } from "lucide-react";
import { socialProofItems } from "../data/siteContent";
import { Container, staggerContainer, staggerItem } from "./ui";

const ICONS = [
  <Star size={20} fill="currentColor" key="star" />,
  <ThumbsUp size={20} key="thumb" />,
  <Users size={20} key="users" />,
];

export function SocialProofStrip() {
  return (
    <div className="bg-blue" aria-label="Dovezi de încredere">
      <Container>
        <motion.div
          className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {socialProofItems.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-center justify-center gap-3 px-6 py-6 text-center sm:py-7"
            >
              <span className="text-yellow">{ICONS[i]}</span>
              <p className="text-[0.98rem] font-semibold text-white">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
