"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { TeamMemberCard } from "@/components/team-member-card";

// Utilisation des données fournies
const teamMembers = [
  {
    name: "Hermann Litie",
    role: "Fondateur-PDG",
    image: "/images/hermann2.jpg",
  },
  {
    name: "Aquilas Boua",
    role: "Co-Fondateur Backend Développeur",
    image: "/images/akim2.jpg",
  },
  {
    name: "Marion Roulle",
    role: "Co-Fondatrice UX/UI Designer",
    image: "/images/marion1.jpeg",
  },
  {
    name: "Mory Ouattara",
    role: "Co-Fondateur Full Stack Developer ",
    image: "/images/mory.jpg",
  },
  {
    name: "Moussa Coulibaly",
    role: "Co-Fondateur Commercial/Communication",
    image: "/images/moussa.jpg",
  },
  {
    name: "N'Dri Octave",
    role: "Co-Fondateur Développeur Mobile",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&q=80",
  },
];

export default function TeamSection() {
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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Notre Équipe</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une équipe passionnée et expérimentée, dédiée à transformer vos
            idées en solutions numériques innovantes
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TeamMemberCard
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
