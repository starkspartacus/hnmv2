"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smartphone,
  BarChart3,
  ShieldCheck,
  Globe,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Expérience mobile optimisée",
    description:
      "Toutes nos solutions sont conçues d'abord pour mobile, avec des interfaces adaptées aux smartphones les plus courants en Afrique.",
    color:
      "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400",
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Analyses et rapports détaillés",
    description:
      "Obtenez des insights précieux sur votre activité grâce à nos tableaux de bord et rapports personnalisables.",
    color:
      "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20 dark:text-purple-400",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Sécurité et confidentialité",
    description:
      "Protection des données de vos clients et de votre entreprise avec des standards de sécurité élevés.",
    color:
      "bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Mode hors ligne",
    description:
      "Continuez à travailler même sans connexion internet stable, avec synchronisation automatique dès que possible.",
    color:
      "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
    note: "En cours de développement",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Performance optimisée",
    description:
      "Applications légères et rapides, conçues pour fonctionner sur des réseaux à faible bande passante.",
    color: "bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Support local",
    description:
      "Une équipe de support basée en Afrique, qui comprend vos défis et parle votre langue.",
    color:
      "bg-teal-500/10 text-teal-500 dark:bg-teal-500/20 dark:text-teal-400",
  },
];

export default function FeaturesSection() {
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
    <section
      ref={ref}
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fonctionnalités Communes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Toutes nos solutions partagent ces caractéristiques essentielles,
            conçues pour répondre aux défis spécifiques du marché africain.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border shadow-sm"
            >
              <div
                className={`flex items-center gap-2 p-3 rounded-full w-fit mb-4 ${feature.color}`}
              >
                {feature.icon}
                {feature.note && (
                  <span className="text-xs text-muted-foreground">
                    {feature.note}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
