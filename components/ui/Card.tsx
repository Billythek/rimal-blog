"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════
   CARD COMPONENT - Composant carte pour les pensées du blog
   ═══════════════════════════════════════════════════════════════ */

type CardVariant = "default" | "featured" | "compact";
type CardType = "Pensée" | "Oasis" | "Trace";

interface CardProps {
  variant?: CardVariant;
  type: CardType;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  href: string;
  readTime?: string;
}

/* ─────────────────────────────────────────────────────────────────
   TYPE BADGE STYLES
   ───────────────────────────────────────────────────────────────── */
const typeBadgeStyles: Record<CardType, string> = {
  Pensée: "bg-primary text-white",
  Oasis: "badge-oasis",
  Trace: "bg-secondary text-background",
};

/* ─────────────────────────────────────────────────────────────────
   VARIANT STYLES
   ───────────────────────────────────────────────────────────────── */
const variantStyles: Record<CardVariant, string> = {
  default: "bg-card border border-border rounded-lg p-6",
  featured:
    "bg-gradient-to-br from-card to-background-subtle border-2 border-primary/20 rounded-xl p-8 shadow-lg",
  compact: "bg-card border-l-4 border-primary pl-4 py-3",
};

/* ─────────────────────────────────────────────────────────────────
   CARD COMPONENT
   ───────────────────────────────────────────────────────────────── */
export function Card({
  variant = "default",
  type,
  title,
  excerpt,
  date,
  tags,
  href,
  readTime,
}: CardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={isCompact ? "" : "h-full"}
    >
      <Link
        href={href}
        className={`
          block h-full
          ${variantStyles[variant]}
          ${isCompact ? "" : "card-hover"}
          transition-all duration-300
          group
        `}
      >
        {/* Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`
            inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
            ${typeBadgeStyles[type]}
          `}
          >
            {type}
          </span>

          {/* Date & Read Time */}
          <div className="flex items-center gap-2 text-xs text-foreground-muted">
            <time dateTime={date}>{formatDate(date)}</time>
            {readTime && !isCompact && (
              <>
                <span>•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`
          font-display text-foreground group-hover:text-primary transition-colors
          ${isFeatured ? "text-3xl mb-4" : isCompact ? "text-lg mb-2" : "text-2xl mb-3"}
        `}
        >
          {title}
        </h3>

        {/* Excerpt - Hidden in compact mode */}
        {!isCompact && (
          <p
            className={`
            text-foreground-muted font-serif leading-relaxed
            ${isFeatured ? "text-lg mb-6" : "text-base mb-4"}
          `}
          >
            {excerpt}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, isCompact ? 2 : 4).map((tag) => (
            <span
              key={tag}
              className="text-xs text-foreground-subtle bg-background-subtle px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
          {tags.length > (isCompact ? 2 : 4) && (
            <span className="text-xs text-foreground-subtle">
              +{tags.length - (isCompact ? 2 : 4)}
            </span>
          )}
        </div>

        {/* Read More Arrow - Featured only */}
        {isFeatured && (
          <div className="mt-6 flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
            <span className="font-medium">Lire la suite</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        )}
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CARD SKELETON - Loading State
   ───────────────────────────────────────────────────────────────── */
export function CardSkeleton({ variant = "default" }: { variant?: CardVariant }) {
  const isCompact = variant === "compact";

  return (
    <div className={variantStyles[variant]}>
      {/* Type Badge Skeleton */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 w-20 bg-background-muted rounded-full animate-shimmer" />
        <div className="h-4 w-24 bg-background-muted rounded animate-shimmer" />
      </div>

      {/* Title Skeleton */}
      <div
        className={`
        bg-background-muted rounded animate-shimmer
        ${isCompact ? "h-6 mb-2" : "h-8 mb-3"}
      `}
      />
      <div
        className={`
        bg-background-muted rounded animate-shimmer
        ${isCompact ? "h-6 w-2/3" : "h-8 w-3/4 mb-4"}
      `}
      />

      {/* Excerpt Skeleton - Hidden in compact mode */}
      {!isCompact && (
        <>
          <div className="h-4 bg-background-muted rounded animate-shimmer mb-2" />
          <div className="h-4 bg-background-muted rounded animate-shimmer w-5/6 mb-4" />
        </>
      )}

      {/* Tags Skeleton */}
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-background-muted rounded animate-shimmer" />
        <div className="h-6 w-20 bg-background-muted rounded animate-shimmer" />
        <div className="h-6 w-14 bg-background-muted rounded animate-shimmer" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   UTILITIES
   ───────────────────────────────────────────────────────────────── */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
