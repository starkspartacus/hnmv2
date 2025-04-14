import SolutionsHero from "@/components/solutions/solutions-hero";
import SolutionTabs from "@/components/solutions/solution-tabs";
import FeaturesSection from "@/components/solutions/features-section";
import TestimonialsSection from "@/components/solutions/testimonials-section";
import CtaSection from "@/components/solutions/cta-section";

export const metadata = {
  title: "Nos Solutions | Hauts Numériques et Médias",
  description:
    "Découvrez nos solutions SaaS innovantes pour transformer le secteur informel africain et connecter les communautés.",
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <SolutionsHero />
      <SolutionTabs />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
