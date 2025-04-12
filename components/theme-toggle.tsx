"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 relative overflow-hidden"
      aria-label="Changer de thème"
    >
      <span className="sr-only">Changer de thème</span>
      <Sun
        className={`h-4 w-4 transition-all ${
          theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
        } absolute`}
      />
      <Moon
        className={`h-4 w-4 transition-all ${
          theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } absolute`}
      />
    </Button>
  );
}
