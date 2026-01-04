"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SunMoonProps {
  className?: string;
  size?: number;
}

export function SunMoon({ className = "", size = 120 }: SunMoonProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Lune */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="moonSurface" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F0E6D8" />
                  <stop offset="100%" stopColor="#C4B5A3" />
                </linearGradient>
              </defs>

              {/* Halo */}
              <circle cx="50" cy="50" r="48" fill="url(#moonGlow)" />

              {/* Lune */}
              <circle cx="50" cy="50" r="30" fill="url(#moonSurface)" />

              {/* Cratères */}
              <circle cx="40" cy="45" r="4" fill="#C4B5A3" opacity="0.5" />
              <circle cx="55" cy="55" r="3" fill="#C4B5A3" opacity="0.4" />
              <circle cx="60" cy="40" r="2" fill="#C4B5A3" opacity="0.3" />

              {/* Étoiles autour */}
              {[
                { cx: 15, cy: 20, r: 1.5 },
                { cx: 85, cy: 25, r: 1 },
                { cx: 10, cy: 70, r: 1 },
                { cx: 90, cy: 65, r: 1.5 },
                { cx: 25, cy: 85, r: 0.8 },
                { cx: 75, cy: 80, r: 1.2 },
              ].map((star, i) => (
                <motion.circle
                  key={i}
                  cx={star.cx}
                  cy={star.cy}
                  r={star.r}
                  fill="var(--secondary)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Soleil du désert */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="sunCore" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#F4D03F" />
                  <stop offset="100%" stopColor="#D4A853" />
                </radialGradient>
              </defs>

              {/* Grand halo */}
              <circle cx="50" cy="50" r="48" fill="url(#sunGlow)" />

              {/* Rayons */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.line
                  key={i}
                  x1="50"
                  y1="15"
                  x2="50"
                  y2="25"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "50px 50px",
                    transform: `rotate(${i * 30}deg)`,
                  }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Coeur du soleil */}
              <circle cx="50" cy="50" r="20" fill="url(#sunCore)" />

              {/* Reflet */}
              <ellipse
                cx="43"
                cy="43"
                rx="6"
                ry="4"
                fill="white"
                opacity="0.3"
                transform="rotate(-30 43 43)"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
