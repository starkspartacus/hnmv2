"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content:
      "Grâce à e-maquis, j'ai augmenté mes revenus de 30% en seulement trois mois. La gestion des stocks est devenue un jeu d'enfant et je perds beaucoup moins de produits.",
    author: "Konan Kouadio",
    role: "Propriétaire de maquis, Abidjan",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    content:
      "La solution e-commerce a transformé mon petit commerce en une véritable entreprise. Mes clients peuvent commander depuis leur téléphone et je gère tout depuis une seule application.",
    author: "Aminata Diallo",
    role: "Commerçante, Dakar",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    content:
      "En tant qu'agriculteur, l'application AgriTech m'a permis de mieux planifier mes cultures et de trouver des acheteurs plus facilement. Un vrai changement dans ma façon de travailler.",
    author: "Emmanuel Osei",
    role: "Agriculteur, Accra",
    image: "/images/testimonial-3.jpg",
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
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos solutions transforment le quotidien de nos
            utilisateurs à travers l&apos;Afrique.
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
                  <blockquote className="text-lg md:text-xl italic mb-6">
                    {`"${testimonials[currentIndex].content}"`}
                  </blockquote>

                  <div>
                    <p className="font-bold text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
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
