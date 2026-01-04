"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MoroccanArchProps {
  children?: ReactNode;
  className?: string;
  variant?: "simple" | "ornate" | "doorway";
  showPattern?: boolean;
}

export function MoroccanArch({
  children,
  className = "",
  variant = "simple",
  showPattern = true,
}: MoroccanArchProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main arch container */}
      <div className="relative">
        {/* Arch frame SVG */}
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gold gradient for the frame */}
            <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="50%" stopColor="var(--accent-muted)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>

            {/* Shadow gradient */}
            <linearGradient id="archShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
            </linearGradient>

            {/* Zellige pattern */}
            <pattern id="zelligePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M10 0L12.5 5L17.5 2.5L15 7.5L20 10L15 12.5L17.5 17.5L12.5 15L10 20L7.5 15L2.5 17.5L5 12.5L0 10L5 7.5L2.5 2.5L7.5 5Z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="0.3"
                opacity="0.4"
              />
            </pattern>

            {/* Clip path for arch shape */}
            <clipPath id="archClip">
              <path d="M40 500 L40 180 Q40 40 200 40 Q360 40 360 180 L360 500 Z" />
            </clipPath>
          </defs>

          {/* Outer decorative border */}
          {variant === "ornate" && (
            <g>
              {/* Corner decorations */}
              <path
                d="M20 480 L20 200 Q20 30 200 30 Q380 30 380 200 L380 480"
                fill="none"
                stroke="url(#archGold)"
                strokeWidth="3"
                opacity="0.5"
              />
              {/* Zellige border */}
              <rect
                x="15"
                y="25"
                width="370"
                height="460"
                fill="url(#zelligePattern)"
                clipPath="url(#archClip)"
                opacity="0.3"
              />
            </g>
          )}

          {/* Main arch frame */}
          <path
            d="M40 500 L40 180 Q40 40 200 40 Q360 40 360 180 L360 500"
            fill="none"
            stroke="url(#archGold)"
            strokeWidth="4"
          />

          {/* Inner arch line */}
          <path
            d="M55 500 L55 185 Q55 60 200 60 Q345 60 345 185 L345 500"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Keystone decoration */}
          <g transform="translate(200, 45)">
            <path
              d="M0 -15 L10 0 L5 15 L-5 15 L-10 0 Z"
              fill="var(--accent)"
              opacity="0.8"
            />
            <circle cx="0" cy="0" r="4" fill="var(--primary)" />
          </g>

          {/* Side column decorations */}
          {variant !== "simple" && (
            <>
              {/* Left column pattern */}
              <g opacity="0.4">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <rect
                    key={`left-${i}`}
                    x="42"
                    y={200 + i * 50}
                    width="12"
                    height="40"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="0.5"
                  />
                ))}
              </g>
              {/* Right column pattern */}
              <g opacity="0.4">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <rect
                    key={`right-${i}`}
                    x="346"
                    y={200 + i * 50}
                    width="12"
                    height="40"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="0.5"
                  />
                ))}
              </g>
            </>
          )}

          {/* Doorway threshold */}
          {variant === "doorway" && (
            <rect
              x="40"
              y="490"
              width="320"
              height="10"
              fill="var(--accent)"
              opacity="0.3"
            />
          )}
        </svg>

        {/* Content inside arch */}
        <div
          className="relative z-10"
          style={{
            clipPath:
              "polygon(10% 100%, 10% 36%, 12% 22%, 18% 11%, 28% 4%, 50% 0%, 72% 4%, 82% 11%, 88% 22%, 90% 36%, 90% 100%)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function MoroccanDoorway({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg viewBox="0 0 200 300" className="w-full h-full">
        <defs>
          <linearGradient id="doorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary-hover)" />
          </linearGradient>
          <linearGradient id="doorMetal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="50%" stopColor="var(--accent-muted)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>

        {/* Door frame */}
        <path
          d="M20 300 L20 100 Q20 20 100 20 Q180 20 180 100 L180 300"
          fill="none"
          stroke="url(#doorMetal)"
          strokeWidth="6"
        />

        {/* Door panels */}
        <path
          d="M30 290 L30 105 Q30 35 100 35 Q170 35 170 105 L170 290 Z"
          fill="url(#doorGrad)"
        />

        {/* Door studs */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2].map((col) => (
            <circle
              key={`stud-${row}-${col}`}
              cx={55 + col * 45}
              cy={120 + row * 45}
              r="4"
              fill="var(--accent)"
            />
          ))
        )}

        {/* Central ornament */}
        <g transform="translate(100, 180)">
          <circle r="15" fill="none" stroke="var(--accent)" strokeWidth="2" />
          <path
            d="M0 -10 L3 -3 L10 -3 L5 2 L7 10 L0 6 L-7 10 L-5 2 L-10 -3 L-3 -3 Z"
            fill="var(--accent)"
          />
        </g>

        {/* Door knocker */}
        <g transform="translate(100, 230)">
          <circle r="8" fill="var(--accent)" />
          <ellipse rx="12" ry="6" cy="12" fill="none" stroke="var(--accent)" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

export function ArchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-32 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="archDividerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--background-subtle)" />
            <stop offset="100%" stopColor="var(--background)" />
          </linearGradient>
        </defs>

        {/* Repeating arch pattern */}
        <path
          d="M0 120
             L0 60 Q100 0 200 60 L200 60 Q300 0 400 60 L400 60 Q500 0 600 60
             L600 60 Q700 0 800 60 L800 60 Q900 0 1000 60 L1000 60 Q1100 0 1200 60
             L1200 120 Z"
          fill="url(#archDividerGrad)"
        />

        {/* Decorative line */}
        <path
          d="M0 65 Q100 5 200 65 Q300 5 400 65 Q500 5 600 65 Q700 5 800 65 Q900 5 1000 65 Q1100 5 1200 65"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
