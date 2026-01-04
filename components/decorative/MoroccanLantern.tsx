"use client";

import { motion } from "framer-motion";

interface MoroccanLanternProps {
  className?: string;
  size?: number;
  delay?: number;
  variant?: "gold" | "terracotta" | "blue";
}

export function MoroccanLantern({
  className = "",
  size = 80,
  delay = 0,
  variant = "gold",
}: MoroccanLanternProps) {
  const colors = {
    gold: {
      body: "#C9A227",
      glow: "rgba(255, 200, 100, 0.6)",
      inner: "#DFC75A",
    },
    terracotta: {
      body: "#C45A3B",
      glow: "rgba(224, 122, 95, 0.5)",
      inner: "#E07A5F",
    },
    blue: {
      body: "#2E4A8E",
      glow: "rgba(90, 122, 184, 0.5)",
      inner: "#5A7AB8",
    },
  };

  const color = colors[variant];

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size * 1.5 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      <motion.svg
        viewBox="0 0 60 90"
        className="w-full h-full"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          {/* Lantern glow */}
          <radialGradient id={`lanternGlow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color.glow} />
            <stop offset="70%" stopColor={color.glow} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color.glow} stopOpacity="0" />
          </radialGradient>

          {/* Metallic gradient */}
          <linearGradient id={`metalGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color.inner} />
            <stop offset="50%" stopColor={color.body} />
            <stop offset="100%" stopColor={color.inner} />
          </linearGradient>

          {/* Glass effect */}
          <linearGradient id={`glassGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color.glow} stopOpacity="0.8" />
            <stop offset="50%" stopColor={color.glow} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color.glow} stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Glow effect */}
        <motion.ellipse
          cx="30"
          cy="45"
          rx="28"
          ry="35"
          fill={`url(#lanternGlow-${variant})`}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top hook */}
        <path
          d="M28 5 Q30 0 32 5"
          fill="none"
          stroke={color.body}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Top cap */}
        <path
          d="M22 10 L30 5 L38 10 L35 15 L25 15 Z"
          fill={`url(#metalGrad-${variant})`}
        />

        {/* Decorative top ring */}
        <ellipse cx="30" cy="15" rx="10" ry="2" fill={color.body} />

        {/* Main lantern body - Moroccan arch shape */}
        <path
          d="M20 18
             L20 55
             Q20 70 30 75
             Q40 70 40 55
             L40 18
             Q35 12 30 12
             Q25 12 20 18 Z"
          fill={`url(#glassGrad-${variant})`}
          stroke={color.body}
          strokeWidth="1.5"
        />

        {/* Decorative patterns - Moroccan geometric */}
        <g stroke={color.body} strokeWidth="0.5" fill="none" opacity="0.6">
          {/* Vertical bars */}
          <line x1="25" y1="20" x2="25" y2="60" />
          <line x1="30" y1="18" x2="30" y2="65" />
          <line x1="35" y1="20" x2="35" y2="60" />

          {/* Horizontal rings */}
          <path d="M22 30 Q30 28 38 30" />
          <path d="M21 45 Q30 43 39 45" />

          {/* Star pattern in center */}
          <path d="M30 35 L32 40 L37 40 L33 44 L35 49 L30 46 L25 49 L27 44 L23 40 L28 40 Z" />
        </g>

        {/* Bottom cap */}
        <path
          d="M25 70 Q30 78 35 70"
          fill={color.body}
        />

        {/* Bottom finial */}
        <circle cx="30" cy="82" r="3" fill={color.body} />
        <path
          d="M30 85 L30 88"
          stroke={color.body}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export function LanternRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center items-start gap-8 ${className}`}>
      <MoroccanLantern size={50} delay={0} variant="gold" className="opacity-60" />
      <MoroccanLantern size={70} delay={0.2} variant="terracotta" />
      <MoroccanLantern size={60} delay={0.4} variant="gold" />
      <MoroccanLantern size={70} delay={0.6} variant="blue" />
      <MoroccanLantern size={50} delay={0.8} variant="gold" className="opacity-60" />
    </div>
  );
}
