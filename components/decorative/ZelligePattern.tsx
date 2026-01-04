"use client";

import { motion } from "framer-motion";

interface ZelligePatternProps {
  className?: string;
  variant?: "stars" | "geometric" | "arabesque";
  animated?: boolean;
  opacity?: number;
}

export function ZelligePattern({
  className = "",
  variant = "stars",
  animated = true,
  opacity = 0.15,
}: ZelligePatternProps) {
  const patterns = {
    stars: (
      <pattern id="zellige-stars" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        {/* 8-pointed star */}
        <path
          d="M30 0L37.5 15L52.5 7.5L45 22.5L60 30L45 37.5L52.5 52.5L37.5 45L30 60L22.5 45L7.5 52.5L15 37.5L0 30L15 22.5L7.5 7.5L22.5 15Z"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.5"
        />
        {/* Center dot */}
        <circle cx="30" cy="30" r="2" fill="var(--accent)" opacity="0.5" />
      </pattern>
    ),
    geometric: (
      <pattern id="zellige-geo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        {/* Diamond grid */}
        <path
          d="M20 0L40 20L20 40L0 20Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.5"
        />
        <path
          d="M20 10L30 20L20 30L10 20Z"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.3"
        />
        <circle cx="20" cy="20" r="1.5" fill="var(--accent)" />
      </pattern>
    ),
    arabesque: (
      <pattern id="zellige-arab" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* Curved arabesque */}
        <path
          d="M0 40 Q20 20 40 40 Q60 60 80 40"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.5"
        />
        <path
          d="M0 40 Q20 60 40 40 Q60 20 80 40"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.5"
        />
        <path
          d="M40 0 Q20 20 40 40 Q60 60 40 80"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.5"
        />
        <path
          d="M40 0 Q60 20 40 40 Q20 60 40 80"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.5"
        />
        <circle cx="40" cy="40" r="3" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
      </pattern>
    ),
  };

  const patternId = variant === "stars" ? "zellige-stars" : variant === "geometric" ? "zellige-geo" : "zellige-arab";

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={animated ? { opacity: 0 } : undefined}
      animate={animated ? { opacity: 1 } : undefined}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <svg className="w-full h-full" style={{ opacity }}>
        <defs>{patterns[variant]}</defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </motion.div>
  );
}

export function ZelligeBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-8 overflow-hidden ${className}`}>
      <svg viewBox="0 0 400 30" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <pattern id="borderPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M15 0L22.5 7.5L15 15L7.5 7.5Z"
              fill="var(--accent)"
              opacity="0.3"
            />
            <path
              d="M0 15L7.5 7.5L15 15L7.5 22.5Z"
              fill="var(--primary)"
              opacity="0.2"
            />
            <path
              d="M15 15L22.5 22.5L15 30L7.5 22.5Z"
              fill="var(--accent)"
              opacity="0.3"
            />
            <path
              d="M15 15L22.5 7.5L30 15L22.5 22.5Z"
              fill="var(--primary)"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#borderPattern)" />
      </svg>
    </div>
  );
}

export function StarDecoration({
  className = "",
  size = 40,
  variant = "gold",
}: {
  className?: string;
  size?: number;
  variant?: "gold" | "terracotta" | "blue";
}) {
  const colors = {
    gold: "var(--accent)",
    terracotta: "var(--primary)",
    blue: "var(--secondary)",
  };

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <path
          d="M20 0L24.5 12L37.5 6L31.5 18.5L40 20L31.5 21.5L37.5 34L24.5 28L20 40L15.5 28L2.5 34L8.5 21.5L0 20L8.5 18.5L2.5 6L15.5 12Z"
          fill={colors[variant]}
          opacity="0.8"
        />
        <circle cx="20" cy="20" r="4" fill={colors[variant]} />
      </svg>
    </motion.div>
  );
}

export function DesertStars({ className = "" }: { className?: string }) {
  const stars = [
    { x: 10, y: 15, size: 2, delay: 0 },
    { x: 25, y: 8, size: 1.5, delay: 0.5 },
    { x: 40, y: 20, size: 2.5, delay: 1 },
    { x: 55, y: 5, size: 1, delay: 0.3 },
    { x: 70, y: 18, size: 2, delay: 0.7 },
    { x: 85, y: 10, size: 1.5, delay: 0.2 },
    { x: 15, y: 35, size: 1, delay: 0.9 },
    { x: 35, y: 40, size: 2, delay: 0.4 },
    { x: 60, y: 38, size: 1.5, delay: 0.6 },
    { x: 80, y: 32, size: 2, delay: 0.8 },
    { x: 92, y: 25, size: 1, delay: 0.1 },
    { x: 5, y: 45, size: 1.5, delay: 1.1 },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
        {stars.map((star, i) => (
          <motion.g key={i}>
            {/* Star glow */}
            <motion.circle
              cx={star.x}
              cy={star.y}
              r={star.size * 2}
              fill="var(--accent)"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 3,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Star core */}
            <motion.circle
              cx={star.x}
              cy={star.y}
              r={star.size}
              fill="var(--accent)"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}

        {/* Crescent moon */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <circle cx="90" cy="12" r="8" fill="var(--accent)" opacity="0.9" />
          <circle cx="93" cy="10" r="6" fill="var(--background)" />
        </motion.g>
      </svg>
    </div>
  );
}
