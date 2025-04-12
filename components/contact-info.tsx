"use client";

import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";
import { useTheme } from "next-themes";

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Notre équipe vous répondra sous 24h",
      value: "contact@hautsnumeriques.com",
      action: "Envoyer un email",
      href: "mailto:contact@hautsnumeriques.com",
      color: isDark
        ? "bg-blue-500/20 text-blue-400"
        : "bg-blue-500/10 text-blue-500",
      hoverColor: isDark
        ? "group-hover:bg-blue-500/30"
        : "group-hover:bg-blue-500/20",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Discutez directement avec notre équipe",
      value: "+33 07 60 48 49 11",
      action: "Démarrer une discussion",
      href: "https://wa.me/00330760484911",
      color: isDark
        ? "bg-green-500/20 text-green-400"
        : "bg-green-500/10 text-green-500",
      hoverColor: isDark
        ? "group-hover:bg-green-500/30"
        : "group-hover:bg-green-500/20",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      description: "Du lundi au vendredi, 8h-18h",
      value: "+225 07 07 07 07 07",
      action: "Appeler maintenant",
      href: "tel:+2250707070707",
      color: isDark
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-yellow-500/10 text-yellow-500",
      hoverColor: isDark
        ? "group-hover:bg-yellow-500/30"
        : "group-hover:bg-yellow-500/20",
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

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
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Contactez-nous
        </h2>
        <p className="text-muted-foreground">
          Plusieurs façons de nous joindre. Choisissez celle qui vous convient
          le mieux.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-opacity-50 hover:border-gray-300 dark:hover:border-gray-700"
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${method.color} ${method.hoverColor} transition-colors duration-300`}
              >
                {method.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {method.description}
                </p>
                <p className="font-medium mb-4">{method.value}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={`gap-2 relative overflow-hidden group-hover:text-white transition-colors duration-300`}
                >
                  <Link
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                  >
                    <span className="relative z-10">{method.action}</span>
                    <span
                      className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10 p-6 rounded-xl border bg-card/50 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 text-muted-foreground">
          <Clock className="h-5 w-5 text-red-500 dark:text-red-400" />
          <div>
            <h3 className="font-medium">Heures d&apos;ouverture</h3>
            <p className="text-sm">Lundi - Vendredi: 8h - 18h</p>
            <p className="text-sm">Samedi: 9h - 13h</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
