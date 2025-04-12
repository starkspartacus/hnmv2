"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function AnimatedBackground() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <motion.div
          className={`absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full ${
            isDark
              ? "bg-gradient-to-r from-purple-600/30 to-blue-600/30"
              : "bg-gradient-to-r from-purple-500/30 to-blue-500/30"
          } blur-[100px]`}
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className={`absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full ${
            isDark
              ? "bg-gradient-to-r from-red-600/20 to-orange-600/20"
              : "bg-gradient-to-r from-red-500/20 to-orange-500/20"
          } blur-[100px]`}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className={`absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] rounded-full ${
            isDark
              ? "bg-gradient-to-r from-green-600/20 to-teal-600/20"
              : "bg-gradient-to-r from-green-500/20 to-teal-500/20"
          } blur-[100px]`}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDark ? "bg-white/5" : "bg-black/5"
            }`}
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}
