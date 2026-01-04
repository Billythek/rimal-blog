"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border bg-background-subtle">
      {/* Dune divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-full">
        <div className="dune-divider" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À Propos */}
          <div>
            <h3 className="text-2xl font-display text-primary mb-4">رمال</h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Un espace de réflexion et de partage, où les pensées se déposent
              comme des grains de sable dans le désert.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pensees"
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  Pensées
                </Link>
              </li>
              <li>
                <Link
                  href="/oasis"
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  Oasis
                </Link>
              </li>
              <li>
                <Link
                  href="/traces"
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  Traces
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@rimal.blog"
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/rimal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/rss"
                  className="text-foreground-muted hover:text-primary transition-colors text-sm"
                >
                  RSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-sm">
            © {currentYear} Rimal. Tous droits réservés.
          </p>
          <p className="text-foreground-subtle text-xs font-serif italic">
            « Dans le désert, chaque grain de sable raconte une histoire. »
          </p>
        </div>
      </div>
    </footer>
  );
}
