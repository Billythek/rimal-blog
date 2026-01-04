"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full bg-background-subtle flex items-center justify-center">
        <span className="w-5 h-5 rounded-full bg-border animate-pulse" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full bg-background-subtle hover:bg-background-muted transition-colors flex items-center justify-center overflow-hidden group"
      aria-label={isDark ? "Activer le mode jour" : "Activer le mode nuit"}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute"
          >
            {/* Lune avec étoiles */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-secondary"
            >
              {/* Lune */}
              <motion.path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                fill="currentColor"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              />
              {/* Étoiles */}
              <motion.circle
                cx="19"
                cy="5"
                r="1"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.circle
                cx="22"
                cy="8"
                r="0.5"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute"
          >
            {/* Soleil du désert */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-secondary"
            >
              {/* Centre du soleil */}
              <motion.circle
                cx="12"
                cy="12"
                r="5"
                fill="currentColor"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              />
              {/* Rayons */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.line
                  key={angle}
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "12px 12px",
                    transform: `rotate(${angle}deg)`,
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.1 + i * 0.03 }}
                />
              ))}
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Effet de hover - halo */}
      <div className="absolute inset-0 rounded-full bg-secondary/0 group-hover:bg-secondary/10 transition-colors" />
    </button>
  );
}
