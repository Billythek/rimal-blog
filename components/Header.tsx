"use client";

import Link from "next/link";
import { ThemeToggle } from "./ui/ThemeToggle";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Rimal en arabe */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all"
          >
            <div className="text-3xl font-display text-primary group-hover:text-primary-hover transition-colors">
              رمال
            </div>
            <div className="text-sm text-foreground-muted hidden sm:block">
              Les Sables de l'Esprit
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/pensees"
              className="text-foreground-muted hover:text-primary transition-colors text-sm font-medium"
            >
              Pensées
            </Link>
            <Link
              href="/oasis"
              className="text-foreground-muted hover:text-primary transition-colors text-sm font-medium"
            >
              Oasis
            </Link>
            <Link
              href="/traces"
              className="text-foreground-muted hover:text-primary transition-colors text-sm font-medium"
            >
              Traces
            </Link>
            <Link
              href="/a-propos"
              className="text-foreground-muted hover:text-primary transition-colors text-sm font-medium"
            >
              À Propos
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
