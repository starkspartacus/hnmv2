import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import ContactHero from "@/components/contact-hero";
import AnimatedBackground from "@/components/animated-background";

export const metadata = {
  title: "Contact | Hauts Numériques et Médias",
  description:
    "Contactez notre équipe pour discuter de vos projets de digitalisation et découvrir nos solutions SaaS.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Arrière-plan animé */}
      <AnimatedBackground />

      {/* Hero section */}
      <ContactHero />

      {/* Section principale */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
