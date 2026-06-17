import { BenefitsSection } from "./components/BenefitsSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { CtaBand } from "./components/CtaBand";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ProblemSection } from "./components/ProblemSection";
import { ServicesSection } from "./components/ServicesSection";
import { SocialProofStrip } from "./components/SocialProofStrip";
import { SolutionSection } from "./components/SolutionSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <SocialProofStrip />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ServicesSection />
        <CtaBand />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
