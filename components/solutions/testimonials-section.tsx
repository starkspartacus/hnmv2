"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Témoignages spécifiques à e-maquis, adaptés pour la gestion des boissons uniquement
const testimonials = [
  {
    id: 1,
    content:
      "Depuis que j'utilise e-maquis, la gestion de mon stock de boissons est devenue un jeu d'enfant. Je sais exactement quand commander de nouvelles bières et spiritueux, et je ne perds plus d'argent avec des produits périmés ou des bouteilles cassées. Mes revenus ont augmenté de 30% en seulement trois mois!",
    author: "Konan Kouadio",
    role: "Propriétaire du Bar 'Chez Konan', Abidjan",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    using: "Utilise e-maquis depuis 8 mois",
  },
  {
    id: 2,
    content:
      "Le système de commande d'e-maquis a révolutionné mon service de bar. Mes serveurs prennent les commandes de boissons sur tablette, ce qui réduit les erreurs et accélère le service. Mes clients sont servis plus rapidement et consomment davantage. Le suivi des bouteilles entamées est particulièrement utile!",
    author: "Aminata Diallo",
    role: "Gérante du 'Maquis Ambiance', Dakar",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    using: "Utilise e-maquis depuis 1 an",
  },
  {
    id: 3,
    content:
      "Les rapports financiers d'e-maquis m'ont ouvert les yeux sur mon business. J'ai pu identifier mes boissons les plus rentables et celles qui me faisaient perdre de l'argent. J'ai ajusté ma carte des boissons et maintenant ma marge bénéficiaire a doublé. Je sais exactement ce que mes clients préfèrent boire!",
    author: "Emmanuel Osei",
    role: "Propriétaire du 'Bar Accra Star', Accra",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    using: "Utilise e-maquis depuis 6 mois",
  },
  {
    id: 4,
    content:
      "Le programme de fidélité intégré à e-maquis a transformé mon bar. Mes clients accumulent des points à chaque consommation et reviennent plus souvent. J'ai même créé des 'happy hours' spéciales pour les membres fidèles. J'ai vu une augmentation de 40% des clients réguliers depuis que j'ai commencé à l'utiliser.",
    author: "Fatou Ndiaye",
    role: "Propriétaire du 'Bar Teranga', Dakar",
    image: "/images/testimonial-4.jpg",
    rating: 4,
    using: "Utilise e-maquis depuis 10 mois",
  },
  {
    id: 5,
    content:
      "Ce qui me plaît avec e-maquis, c'est que je peux suivre ma consommation de bière pression au litre près. Avant, je perdais beaucoup d'argent sans savoir pourquoi. Maintenant, je détecte immédiatement les fuites ou les serveurs qui offrent des verres gratuits. Mon bénéfice sur les boissons a augmenté de 25%!",
    author: "Kodjo Agbeko",
    role: "Gérant du 'Bar Étoile', Lomé",
    image: "/images/testimonial-5.jpg",
    rating: 5,
    using: "Utilise e-maquis depuis 1 an et 2 mois",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 -z-10" />

      {/* Logo e-maquis en filigrane */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="text-9xl font-bold">e-maquis</div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 dark:text-red-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Témoignages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos clients d&apos;e-maquis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment e-maquis transforme la gestion des boissons dans
            les bars et maquis à travers l&apos;Afrique.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border shadow-md"
            >
              <div className="absolute top-8 left-8 text-red-500/20 dark:text-red-400/20">
                <Quote className="h-16 w-16" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-background">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl italic mb-6">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </blockquote>

                  <div>
                    <p className="font-bold text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-muted-foreground mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {testimonials[currentIndex].using}
                    </p>
                  </div>
                </div>
              </div>

              {/* Logo e-maquis avec icône de bouteille */}
              <div className="absolute bottom-6 right-8 opacity-30 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600 dark:text-red-400"
                >
                  <path d="M10 2L8 6H16L14 2Z" />
                  <path d="M17 6H7C7 8 6 10 6 12C6 15 9 18 12 18C15 18 18 15 18 12C18 10 17 8 17 6Z" />
                  <path d="M12 18V22" />
                  <path d="M8 22H16" />
                </svg>
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                  e-maquis
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-red-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
