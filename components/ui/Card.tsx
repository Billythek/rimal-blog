"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   CARD COMPONENT - Blog cards with images
   ═══════════════════════════════════════════════════════════════ */

type CardVariant = "default" | "featured" | "compact" | "hero";
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
  image?: string;
}

/* ─────────────────────────────────────────────────────────────────
   TYPE BADGE STYLES
   ───────────────────────────────────────────────────────────────── */
const typeBadgeStyles: Record<CardType, string> = {
  Pensée: "bg-primary/90 text-white backdrop-blur-sm",
  Oasis: "bg-secondary/90 text-white backdrop-blur-sm",
  Trace: "bg-spice/90 text-white backdrop-blur-sm",
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
  image,
}: CardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";
  const isHero = variant === "hero";

  // Compact variant (no image)
  if (isCompact) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href={href}
          className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md transition-all group"
        >
          {/* Left accent bar */}
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-accent" />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${typeBadgeStyles[type]}`}>
                {type}
              </span>
              <time className="text-xs text-foreground-subtle">{formatDate(date)}</time>
            </div>
            <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors truncate">
              {title}
            </h3>
          </div>

          <svg className="w-5 h-5 text-foreground-subtle group-hover:text-primary transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    );
  }

  // Hero variant (large featured with full-width image)
  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <Link href={href} className="block group">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className={`inline-block text-sm px-3 py-1 rounded-full mb-4 ${typeBadgeStyles[type]}`}>
                {type}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-4xl">
                {title}
              </h2>
              <p className="text-white/80 font-serif text-lg md:text-xl max-w-2xl mb-4 line-clamp-2">
                {excerpt}
              </p>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <time>{formatDate(date)}</time>
                {readTime && (
                  <>
                    <span>•</span>
                    <span>{readTime} de lecture</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Featured variant (large card with image)
  if (isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <Link
          href={href}
          className="flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all group"
        >
          {/* Image */}
          {image && (
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full ${typeBadgeStyles[type]}`}>
                {type}
              </span>
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            <div className="flex items-center gap-3 mb-3 text-sm text-foreground-subtle">
              <time>{formatDate(date)}</time>
              {readTime && (
                <>
                  <span>•</span>
                  <span>{readTime}</span>
                </>
              )}
            </div>

            <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-3">
              {title}
            </h3>

            <p className="text-foreground-muted font-serif leading-relaxed mb-4 line-clamp-3 flex-1">
              {excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-foreground-subtle bg-background-muted px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Default variant (standard blog card)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link
        href={href}
        className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-md transition-all group"
      >
        {/* Image */}
        {image && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full ${typeBadgeStyles[type]}`}>
              {type}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {!image && (
            <span className={`inline-block self-start text-xs px-2.5 py-1 rounded-full mb-3 ${typeBadgeStyles[type]}`}>
              {type}
            </span>
          )}
          
          <div className="flex items-center gap-2 mb-2 text-xs text-foreground-subtle">
            <time>{formatDate(date)}</time>
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>

          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors mb-2">
            {title}
          </h3>

          <p className="text-foreground-muted font-serif text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-foreground-subtle bg-background-muted px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CARD SKELETON
   ───────────────────────────────────────────────────────────────── */
export function CardSkeleton({ variant = "default" }: { variant?: CardVariant }) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
        <div className="w-1 h-12 rounded-full bg-background-muted animate-pulse" />
        <div className="flex-1">
          <div className="h-4 w-24 bg-background-muted rounded animate-pulse mb-2" />
          <div className="h-5 w-full bg-background-muted rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="aspect-[16/10] bg-background-muted animate-pulse" />
      <div className="p-5">
        <div className="h-3 w-20 bg-background-muted rounded animate-pulse mb-3" />
        <div className="h-6 w-full bg-background-muted rounded animate-pulse mb-2" />
        <div className="h-4 w-full bg-background-muted rounded animate-pulse mb-1" />
        <div className="h-4 w-2/3 bg-background-muted rounded animate-pulse mb-4" />
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-background-muted rounded animate-pulse" />
          <div className="h-5 w-16 bg-background-muted rounded animate-pulse" />
        </div>
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
