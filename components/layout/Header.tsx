"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion } from "framer-motion";
import { Search, Feather } from "lucide-react";

const navigation = [
  { name: "Pensées", href: "/pensees", arabic: "أفكار" },
  { name: "Oasis", href: "/oasis", arabic: "واحة" },
  { name: "Traces", href: "/traces", arabic: "آثار" },
  { name: "À Propos", href: "/a-propos", arabic: "عنّي" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Blur backdrop with warm tint */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
      
      {/* Moroccan border pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo - Moroccan inspired */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Moroccan arch shaped logo */}
              <div className="relative w-12 h-14 flex items-center justify-center">
                {/* Arch background */}
                <svg viewBox="0 0 48 56" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="50%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--spice)" />
                    </linearGradient>
                  </defs>
                  {/* Arch shape */}
                  <path
                    d="M4 56 L4 24 Q4 4 24 4 Q44 4 44 24 L44 56"
                    fill="url(#logoGrad)"
                    className="drop-shadow-lg"
                  />
                  {/* Inner arch line */}
                  <path
                    d="M10 56 L10 26 Q10 10 24 10 Q38 10 38 26 L38 56"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                  />
                  {/* Star decoration */}
                  <path
                    d="M24 20 L26 24 L30 24 L27 27 L28 31 L24 29 L20 31 L21 27 L18 24 L22 24 Z"
                    fill="rgba(255,255,255,0.6)"
                  />
                </svg>
                {/* Arabic letter */}
                <span className="relative z-10 text-white font-arabic text-2xl font-bold mt-1">
                  ر
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors tracking-wide">
                Rimal
              </span>
              <span className="text-xs text-foreground-subtle font-arabic">
                رمال • Les Sables
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2 group"
                >
                  <span
                    className={`text-base font-display font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Active indicator - golden line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, var(--primary), var(--accent), var(--primary))"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Hover background with arch hint */}
                  <motion.div
                    className="absolute inset-0 rounded-t-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    initial={false}
                  />
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-background-subtle hover:bg-background-muted border border-border-subtle transition-all flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-accent"
              aria-label="Rechercher"
            >
              <Search size={18} />
            </motion.button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Write button - Moroccan style */}
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 btn-moroccan rounded-lg"
            >
              <Feather size={16} />
              <span>Écrire</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Moroccan tiles style */}
      <div className="md:hidden border-t border-border-subtle bg-background/90 backdrop-blur-md">
        <div className="flex justify-around py-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center px-4 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? "text-primary bg-primary/5" 
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                <span className="text-sm font-display font-medium">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobileNav"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
