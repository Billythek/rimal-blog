"use client";

import { motion } from "framer-motion";

interface DunesProps {
  className?: string;
  variant?: "subtle" | "prominent";
}

export function Dunes({ className = "", variant = "subtle" }: DunesProps) {
  const opacity = variant === "subtle" ? "opacity-30" : "opacity-60";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Dune arrière-plan - la plus lointaine */}
      <motion.svg
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className={`absolute bottom-0 w-[200%] h-48 ${opacity}`}
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="duneGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--border)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--border)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,100
             C200,50 400,150 600,80
             C800,10 1000,120 1200,70
             C1400,20 1600,140 1800,60
             C2000,0 2200,100 2400,50
             L2400,200 L0,200 Z"
          fill="url(#duneGradient1)"
        />
      </motion.svg>

      {/* Dune milieu */}
      <motion.svg
        initial={{ x: 10 }}
        animate={{ x: -10 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className={`absolute bottom-0 w-[180%] h-32 ${opacity}`}
        viewBox="0 0 2160 150"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="duneGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M0,80
             C180,120 360,40 540,90
             C720,140 900,30 1080,70
             C1260,110 1440,50 1620,100
             C1800,140 1980,60 2160,80
             L2160,150 L0,150 Z"
          fill="url(#duneGradient2)"
        />
      </motion.svg>

      {/* Dune avant-plan - la plus proche */}
      <motion.svg
        initial={{ x: -5 }}
        animate={{ x: 5 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className={`absolute bottom-0 w-[150%] h-20 ${opacity}`}
        viewBox="0 0 1800 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="duneGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M0,60
             C150,30 300,80 450,50
             C600,20 750,70 900,40
             C1050,10 1200,60 1350,35
             C1500,10 1650,55 1800,30
             L1800,100 L0,100 Z"
          fill="url(#duneGradient3)"
        />
      </motion.svg>
    </div>
  );
}

export function DuneDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-16 ${className}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30
             C200,60 400,0 600,30
             C800,60 1000,0 1200,30
             L1200,60 L0,60 Z"
          fill="var(--background-subtle)"
        />
      </svg>
    </div>
  );
}
