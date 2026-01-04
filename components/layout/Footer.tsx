import Link from "next/link";
import { Rss, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      {/* Dune divider */}
      <div className="dune-divider" />

      <div className="bg-background-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-display text-lg font-bold">ر</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold">Rimal</h3>
                  <p className="text-xs text-foreground-subtle">رمال - Les Sables de l&apos;Esprit</p>
                </div>
              </div>
              <p className="text-sm text-foreground-muted max-w-xs">
                Un espace où les pensées s&apos;accumulent comme les grains de sable,
                formant des dunes de réflexion dans le désert de l&apos;esprit.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Explorer</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/pensees" className="text-sm text-foreground-muted hover:text-primary transition-colors">
                  Pensées
                </Link>
                <Link href="/oasis" className="text-sm text-foreground-muted hover:text-primary transition-colors">
                  Oasis
                </Link>
                <Link href="/traces" className="text-sm text-foreground-muted hover:text-primary transition-colors">
                  Traces
                </Link>
                <Link href="/a-propos" className="text-sm text-foreground-muted hover:text-primary transition-colors">
                  Le Voyageur
                </Link>
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Connexion</h4>
              <div className="flex gap-3">
                <a
                  href="/feed.xml"
                  className="w-9 h-9 rounded-lg bg-background hover:bg-primary/10 flex items-center justify-center text-foreground-muted hover:text-primary transition-colors"
                  aria-label="Flux RSS"
                >
                  <Rss size={18} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background hover:bg-primary/10 flex items-center justify-center text-foreground-muted hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background hover:bg-primary/10 flex items-center justify-center text-foreground-muted hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>

              {/* Newsletter teaser */}
              <div className="p-4 rounded-xl bg-background border border-border">
                <p className="text-sm text-foreground-muted mb-3">
                  Recevoir les nouvelles pensées
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="flex-1 px-3 py-2 text-sm rounded-lg bg-background-subtle border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                  <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm rounded-lg transition-colors">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-foreground-subtle">
              © {currentYear} Rimal. Tous les grains de sable sont libres.
            </p>
            <p className="text-xs text-foreground-subtle flex items-center gap-1">
              Construit avec
              <span className="text-primary">♥</span>
              et Next.js 16
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
