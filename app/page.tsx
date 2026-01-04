"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Dunes } from "@/components/decorative/Dunes";
import { SunMoon } from "@/components/decorative/SunMoon";

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE - LE CAMPEMENT
   Page d'accueil du blog Rimal avec sections Hero, Pensées, Oasis
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────────
   MOCK DATA - À remplacer par vos vraies données
   ───────────────────────────────────────────────────────────────── */
const mockPensees = [
  {
    id: 1,
    type: "Pensée" as const,
    title: "L'Art de la Patience dans un Monde Pressé",
    excerpt:
      "Dans le désert, le temps n'existe pas comme nous le connaissons. Les dunes se déplacent lentement, grain par grain, enseignant la patience à celui qui sait observer.",
    date: "2024-01-15",
    tags: ["philosophie", "temps", "patience"],
    readTime: "5 min",
  },
  {
    id: 2,
    type: "Pensée" as const,
    title: "Les Silences Qui Parlent",
    excerpt:
      "Entre deux mots, il y a un désert. Un espace où résonne ce qui n'a pas besoin d'être dit. Le silence n'est pas l'absence de parole, mais sa quintessence.",
    date: "2024-01-12",
    tags: ["communication", "silence", "introspection"],
    readTime: "4 min",
  },
  {
    id: 3,
    type: "Pensée" as const,
    title: "Marcher Sans Destination",
    excerpt:
      "Parfois, le chemin n'a pas de fin. On marche pour marcher, on réfléchit pour réfléchir. La destination n'est qu'une illusion que nous créons pour justifier le voyage.",
    date: "2024-01-08",
    tags: ["voyage", "sens", "liberté"],
    readTime: "6 min",
  },
];

const mockOasis = [
  {
    id: 1,
    type: "Oasis" as const,
    title: "La Métaphore du Sable: Une Réflexion sur l'Identité",
    excerpt:
      "Nous sommes comme des grains de sable. Individuellement insignifiants, mais ensemble nous formons des dunes qui changent le paysage. Cette réflexion explore comment notre identité se construit dans la relation avec les autres, comment nous sommes à la fois uniques et partie d'un tout.",
    date: "2024-01-10",
    tags: ["identité", "philosophie", "métaphore", "société"],
    readTime: "12 min",
  },
  {
    id: 2,
    type: "Oasis" as const,
    title: "Le Paradoxe de la Solitude Connectée",
    excerpt:
      "À l'ère du numérique, nous sommes plus connectés que jamais, et pourtant plus seuls. Cette oasis explore le paradoxe de notre époque: comment les technologies conçues pour nous rapprocher créent souvent plus de distance. Une méditation sur l'authenticité des connexions humaines.",
    date: "2024-01-05",
    tags: ["modernité", "connexion", "solitude", "technologie"],
    readTime: "15 min",
  },
];

const mockTraces = [
  {
    id: 1,
    type: "Trace" as const,
    title: "Note: Le café du matin comme rituel",
    excerpt: "",
    date: "2024-01-16",
    tags: ["rituel", "quotidien"],
  },
  {
    id: 2,
    type: "Trace" as const,
    title: "Observation: Les pigeons qui marchent en cercle",
    excerpt: "",
    date: "2024-01-15",
    tags: ["observation", "nature"],
  },
  {
    id: 3,
    type: "Trace" as const,
    title: "Citation: 'Le désert est un lieu de vérité' - Antoine de Saint-Exupéry",
    excerpt: "",
    date: "2024-01-14",
    tags: ["citation", "vérité"],
  },
  {
    id: 4,
    type: "Trace" as const,
    title: "Idée: Et si on mesurait le temps en couchers de soleil?",
    excerpt: "",
    date: "2024-01-13",
    tags: ["idée", "temps"],
  },
];

/* ─────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────────── */
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <div className="relative">
      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION - Le Campement
          ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Dunes className="absolute bottom-0 left-0 w-full" />
          <SunMoon className="absolute top-20 right-10 w-32 h-32 animate-float" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          {/* Main Title - Rimal in Arabic */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-8xl md:text-9xl mb-6 gradient-text"
          >
            رمال
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-foreground-muted font-serif mb-4"
          >
            Les Sables de l'Esprit
          </motion.p>

          {/* Poetic description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-foreground-subtle font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            « Ici, les pensées se déposent doucement, grain après grain,
            formant des dunes de réflexion sous le soleil de la conscience. »
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <a
              href="#pensees"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium shadow-lg"
            >
              Explorer les Pensées
            </a>
            <a
              href="#oasis"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium"
            >
              Découvrir les Oasis
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-foreground-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          DERNIÈRES PENSÉES
          ─────────────────────────────────────────────────────────── */}
      <section id="pensees" className="py-20 bg-background-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Dernières Pensées
            </h2>
            <p className="text-lg text-foreground-muted font-serif max-w-2xl mx-auto">
              Réflexions du moment, capturées au fil du temps comme des
              empreintes dans le sable.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPensees.map((pensee) => (
              <Card
                key={pensee.id}
                variant="default"
                type={pensee.type}
                title={pensee.title}
                excerpt={pensee.excerpt}
                date={pensee.date}
                tags={pensee.tags}
                href={`/pensees/${pensee.id}`}
                readTime={pensee.readTime}
              />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/pensees"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors link-trace"
            >
              Voir toutes les pensées
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OASIS - Réflexions Profondes
          ─────────────────────────────────────────────────────────── */}
      <section id="oasis" className="py-20 bg-background relative overflow-hidden">
        {/* Decorative dune in background */}
        <div className="absolute top-0 left-0 w-full opacity-30">
          <Dunes />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Oasis de Réflexion
            </h2>
            <p className="text-lg text-foreground-muted font-serif max-w-2xl mx-auto">
              Des espaces de méditation profonde, où l'on s'arrête pour boire à
              la source de la contemplation.
            </p>
          </motion.div>

          {/* Featured Oasis Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockOasis.map((oasis) => (
              <Card
                key={oasis.id}
                variant="featured"
                type={oasis.type}
                title={oasis.title}
                excerpt={oasis.excerpt}
                date={oasis.date}
                tags={oasis.tags}
                href={`/oasis/${oasis.id}`}
                readTime={oasis.readTime}
              />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/oasis"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors link-trace"
            >
              Explorer toutes les oasis
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TRACES RÉCENTES - Notes Rapides
          ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Traces Récentes
            </h2>
            <p className="text-lg text-foreground-muted font-serif max-w-2xl mx-auto">
              Notes rapides, observations fugaces, citations marquantes.
              <br />
              Les petits cailloux blancs de la pensée.
            </p>
          </motion.div>

          {/* Compact Cards List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {mockTraces.map((trace) => (
              <Card
                key={trace.id}
                variant="compact"
                type={trace.type}
                title={trace.title}
                excerpt={trace.excerpt}
                date={trace.date}
                tags={trace.tags}
                href={`/traces/${trace.id}`}
              />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/traces"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors link-trace"
            >
              Voir toutes les traces
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          NEWSLETTER / CTA SECTION
          ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
              Rejoindre le Campement
            </h2>
            <p className="text-lg text-foreground-muted font-serif mb-8 max-w-2xl mx-auto">
              Recevez les nouvelles pensées directement dans votre oasis
              personnelle. Pas de spam, juste des réflexions authentiques.
            </p>

            {/* Newsletter Form - À implémenter */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium shadow-lg"
              >
                S'abonner
              </button>
            </form>

            <p className="text-sm text-foreground-subtle mt-4">
              Ou suivez-moi sur{" "}
              <a href="#" className="text-primary hover:text-primary-hover link-trace">
                Twitter
              </a>{" "}
              et{" "}
              <a href="#" className="text-primary hover:text-primary-hover link-trace">
                RSS
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
