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
  { name: "Le Voyageur", href: "/a-propos", arabic: "المسافر" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border-subtle" />

      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Icône stylisée - grain de sable / dune */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-display text-lg font-bold">ر</span>
              </div>
            </motion.div>

            <div className="flex flex-col">
              <span className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                Rimal
              </span>
              <span className="text-[10px] text-foreground-subtle font-arabic tracking-wider">
                رمال
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
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Indicateur actif - trace dans le sable */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              className="w-10 h-10 rounded-full bg-background-subtle hover:bg-background-muted transition-colors flex items-center justify-center text-foreground-muted hover:text-foreground"
              aria-label="Rechercher"
            >
              <Search size={18} />
            </button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Write button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-full font-medium text-sm transition-colors shadow-lg shadow-primary/20"
            >
              <Feather size={16} />
              <span>Écrire</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border-subtle bg-background/80 backdrop-blur-md">
        <div className="flex justify-around py-2">
          {navigation.slice(0, 4).map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center px-3 py-1 ${
                  isActive ? "text-primary" : "text-foreground-muted"
                }`}
              >
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
