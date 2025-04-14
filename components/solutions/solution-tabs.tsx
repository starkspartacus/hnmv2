"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

// Données des solutions
const solutions = [
  {
    id: "e-maquis",
    name: "e-maquis",
    title: "Gestion digitale pour restaurants et bars",
    description:
      "Transformez la gestion de votre maquis avec notre solution complète de gestion des stocks, commandes et finances.",
    image: "/medias/bg-connexion.jpg",
    color: "from-orange-500 to-red-600",
    features: [
      "Gestion des stocks en temps réel",
      "Suivi des commandes et des tables",
      "Rapports financiers détaillés",
      "Fidélisation des clients",
      "Compatible mobile et tablette",
    ],
    cta: "Découvrir e-maquis",
    link: "https://e-maquis.com/",
  },
  /* {
    id: "e-commerce",
    name: "e-commerce",
    title: "Plateforme e-commerce adaptée à l'Afrique",
    description:
      "Vendez en ligne avec une solution adaptée aux réalités africaines : paiements mobiles, livraison flexible et interface intuitive.",
    image: "/images/e-commerce-showcase.png",
    color: "from-blue-500 to-indigo-600",
    features: [
      "Intégration des paiements mobiles",
      "Gestion des livraisons locales",
      "Catalogue produits personnalisable",
      "Tableau de bord vendeur intuitif",
      "Marketing et promotions intégrés",
    ],
    cta: "Explorer notre solution e-commerce",
    link: "/solutions/e-commerce",
  },
  {
    id: "agri-tech",
    name: "agri-tech",
    title: "Solutions digitales pour l'agriculture",
    description:
      "Optimisez votre production agricole avec des outils de suivi, de prévision et de gestion adaptés aux agriculteurs africains.",
    image: "/images/agri-tech-showcase.png",
    color: "from-green-500 to-emerald-600",
    features: [
      "Suivi des cultures et du bétail",
      "Prévisions météorologiques localisées",
      "Conseils agricoles personnalisés",
      "Connexion avec les acheteurs",
      "Fonctionne hors ligne",
    ],
    cta: "Découvrir nos solutions AgriTech",
    link: "/solutions/agri-tech",
  }, */
];

export default function SolutionTabs() {
  const [activeTab, setActiveTab] = useState("e-maquis");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Solutions Innovantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions SaaS adaptées aux besoins spécifiques du marché
            africain, conçues pour transformer et digitaliser divers secteurs.
          </p>
        </motion.div>

        <Tabs
          defaultValue="e-maquis"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-3 md:w-auto w-full">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="relative px-8 py-3 data-[state=active]:text-black"
                >
                  {solution.name}
                  {activeTab === solution.id && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className={`absolute inset-0 rounded-md bg-gradient-to-r ${solution.color} -z-10`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                      }}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {solutions.map(
                (solution) =>
                  activeTab === solution.id && (
                    <TabsContent
                      key={solution.id}
                      value={solution.id}
                      className="mt-0 absolute w-full"
                      forceMount
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                      >
                        <div className="order-2 md:order-1">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`inline-flex items-center gap-2 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent px-4 py-1 rounded-full text-sm font-medium mb-4 border border-current`}
                          >
                            {solution.name}
                          </motion.div>

                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-bold mb-4"
                          >
                            {solution.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-muted-foreground mb-6"
                          >
                            {solution.description}
                          </motion.p>

                          <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-3 mb-8"
                          >
                            {solution.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle
                                  className={`h-5 w-5 text-${
                                    solution.color.split("-")[1]
                                  }-500 mt-0.5 shrink-0`}
                                />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <Button
                              asChild
                              className={`bg-gradient-to-r ${solution.color} hover:brightness-110 text-white gap-2`}
                            >
                              <Link href={solution.link}>
                                {solution.cta}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </motion.div>
                        </div>

                        <motion.div
                          className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2,
                          }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-20 z-10`}
                          />
                          <Image
                            src={solution.image || "/placeholder.svg"}
                            alt={solution.title}
                            fill
                            className="object-cover object-center"
                          />
                        </motion.div>
                      </motion.div>
                    </TabsContent>
                  )
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
