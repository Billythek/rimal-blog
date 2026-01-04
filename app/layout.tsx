import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/* ═══════════════════════════════════════════════════════════════
   FONTS - Google Fonts Configuration
   ═══════════════════════════════════════════════════════════════ */

// Playfair Display - For elegant display titles (Arabic calligraphy feel)
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Source Serif 4 - For warm, readable body text
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Inter - For clean UI elements
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* ═══════════════════════════════════════════════════════════════
   METADATA - SEO Configuration
   ═══════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {
  title: {
    default: "Rimal - رمال - Les Sables de l'Esprit",
    template: "%s | Rimal",
  },
  description:
    "Un espace de réflexion et de partage, où les pensées se déposent comme des grains de sable dans le désert oriental.",
  keywords: [
    "blog",
    "réflexion",
    "pensées",
    "désert",
    "oriental",
    "philosophie",
    "oasis",
  ],
  authors: [{ name: "Rimal" }],
  creator: "Rimal",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rimal.blog",
    title: "Rimal - رمال - Les Sables de l'Esprit",
    description:
      "Un espace de réflexion où les pensées se déposent comme des grains de sable.",
    siteName: "Rimal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rimal - رمال",
    description: "Les Sables de l'Esprit - Blog de réflexion",
    creator: "@rimal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════
   ROOT LAYOUT
   ═══════════════════════════════════════════════════════════════ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${sourceSerif.variable} ${inter.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        {/* Theme Provider for dark mode support */}
        <Providers>
          {/* Subtle sand texture overlay - decorative only */}
          <div className="fixed inset-0 sand-texture pointer-events-none z-0" />

          {/* Main layout structure */}
          <div className="relative z-10 flex flex-col min-h-screen">
            {/* Header - Sticky navigation */}
            <Header />

            {/* Main content area */}
            <main className="flex-1">{children}</main>

            {/* Footer with dune divider */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
