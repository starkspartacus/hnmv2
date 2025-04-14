"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon as LinkedIn, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  email?: string;
}

// Bios génériques pour chaque membre (puisqu'elles ne sont pas fournies)
const defaultBios: Record<string, string> = {
  "Hermann Litie":
    "En tant que Fondateur et PDG, Hermann dirige la vision stratégique de l'entreprise. Avec une solide expérience dans le secteur numérique, il guide l'équipe vers l'innovation et l'excellence.",
  "Aquilas Boua":
    "Aquilas est un développeur backend talentueux qui conçoit des architectures robustes et évolutives. Sa maîtrise des technologies serveur garantit la performance et la sécurité de nos applications.",
  "Marion Roulle":
    "Marion apporte son expertise en UX/UI design pour créer des interfaces intuitives et esthétiques. Son approche centrée sur l'utilisateur transforme des concepts complexes en expériences utilisateur fluides.",
  "Mory Ouattara":
    "En tant que développeur Full Stack, Mory maîtrise l'ensemble de la pile technologique. Sa polyvalence lui permet de développer des solutions complètes et cohérentes de bout en bout.",
  "Moussa Coulibaly":
    "Moussa dirige les efforts commerciaux et de communication de l'entreprise. Son expertise en développement commercial et en stratégie marketing contribue significativement à notre croissance.",
  "N'Dri Octave":
    "Spécialiste du développement mobile, N'Dri crée des applications performantes et intuitives pour iOS et Android. Sa passion pour les technologies mobiles nous permet d'offrir des expériences utilisateur exceptionnelles.",
};

export function TeamMemberCard({
  name,
  role,
  image,
  bio,
  linkedin,
  email,
}: TeamMemberProps) {
  const [showBio, setShowBio] = useState(false);

  // Utiliser la bio fournie ou la bio par défaut basée sur le nom
  const memberBio =
    bio ||
    defaultBios[name] ||
    "Un membre passionné de notre équipe, contribuant à notre succès collectif avec son expertise et son dévouement.";

  return (
    <div className="relative h-[400px] w-full">
      {/* Carte principale avec photo */}
      <Card className="h-full w-full overflow-hidden group">
        <div className="relative h-full">
          <div className="relative h-[70%] overflow-hidden gap-3">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              style={{
                objectPosition:
                  name === "Moussa Coulibaly" || name === "Mory Ouattara"
                    ? "top"
                    : "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardContent className="absolute bottom-0 left-0 right-0 p-5 text-center">
            <h3 className="font-bold text-xl mb-1">{name}</h3>
            <p className="text-muted-foreground mb-3">{role}</p>

            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={() => setShowBio(true)}
            >
              En savoir +
            </Button>
          </CardContent>
        </div>
      </Card>

      {/* Modal de bio qui apparaît au clic */}
      <AnimatePresence>
        {showBio && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBio(false)}
          >
            <motion.div
              className="relative max-w-md w-full bg-card rounded-lg shadow-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10"
                onClick={() => setShowBio(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-6 md:w-2/3">
                  <h3 className="font-bold text-xl mb-1">{name}</h3>
                  <p className="text-primary font-medium mb-4">{role}</p>
                  <div className="h-[1px] w-16 bg-primary/30 mb-4"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {memberBio}
                  </p>

                  <div className="flex gap-3">
                    {linkedin && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-9 w-9"
                        asChild
                      >
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedIn className="h-4 w-4" />
                          <span className="sr-only">LinkedIn de {name}</span>
                        </a>
                      </Button>
                    )}
                    {email && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-9 w-9"
                        asChild
                      >
                        <a href={`mailto:${email}`}>
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Email de {name}</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
