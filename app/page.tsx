"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

/* ═══════════════════════════════════════════════════════════════
   RIMAL BLOG - رمال
   A contemplative blog about desert wisdom
   ═══════════════════════════════════════════════════════════════ */

/* Mock data with images */
const featuredPost = {
  id: 1,
  type: "Oasis" as const,
  title: "La Métaphore du Sable: Une Réflexion sur l'Identité",
  excerpt:
    "Nous sommes comme des grains de sable. Individuellement insignifiants, mais ensemble nous formons des dunes qui changent le paysage. Cette réflexion explore comment notre identité se construit dans la relation avec les autres.",
  date: "2024-01-15",
  tags: ["philosophie", "identité", "métaphore"],
  readTime: "12 min",
  image: "/images/hero-desert.jpg",
};

const recentPosts = [
  {
    id: 2,
    type: "Pensée" as const,
    title: "L'Art de la Patience dans un Monde Pressé",
    excerpt:
      "Dans le désert, le temps n'existe pas comme nous le connaissons. Les dunes se déplacent lentement, grain par grain.",
    date: "2024-01-12",
    tags: ["patience", "temps"],
    readTime: "5 min",
    image: "/images/dunes-sunset.jpg",
  },
  {
    id: 3,
    type: "Pensée" as const,
    title: "Les Silences Qui Parlent",
    excerpt:
      "Entre deux mots, il y a un désert. Un espace où résonne ce qui n'a pas besoin d'être dit.",
    date: "2024-01-10",
    tags: ["silence", "introspection"],
    readTime: "4 min",
    image: "/images/sahara-night.jpg",
  },
  {
    id: 4,
    type: "Oasis" as const,
    title: "Le Paradoxe de la Solitude Connectée",
    excerpt:
      "À l'ère du numérique, nous sommes plus connectés que jamais, et pourtant plus seuls.",
    date: "2024-01-08",
    tags: ["modernité", "connexion"],
    readTime: "8 min",
    image: "/images/marrakech-riad.jpg",
  },
];

const morePosts = [
  {
    id: 5,
    type: "Pensée" as const,
    title: "Marcher Sans Destination",
    excerpt: "Parfois, le chemin n'a pas de fin. On marche pour marcher.",
    date: "2024-01-05",
    tags: ["voyage", "liberté"],
    readTime: "6 min",
    image: "/images/camel-caravan.jpg",
  },
  {
    id: 6,
    type: "Oasis" as const,
    title: "Les Étoiles du Désert",
    excerpt: "Quand la nuit tombe sur le Sahara, un autre monde s'éveille.",
    date: "2024-01-03",
    tags: ["nuit", "contemplation"],
    readTime: "10 min",
    image: "/images/oasis.jpg",
  },
];

const traces = [
  { id: 1, type: "Trace" as const, title: "Note: Le café du matin comme rituel", date: "2024-01-16", tags: ["rituel"], excerpt: "" },
  { id: 2, type: "Trace" as const, title: "Observation: Les pigeons qui marchent en cercle", date: "2024-01-15", tags: ["nature"], excerpt: "" },
  { id: 3, type: "Trace" as const, title: "'Le désert est un lieu de vérité' - Saint-Exupéry", date: "2024-01-14", tags: ["citation"], excerpt: "" },
  { id: 4, type: "Trace" as const, title: "Et si on mesurait le temps en couchers de soleil?", date: "2024-01-13", tags: ["idée"], excerpt: "" },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION - Full width desert image
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-desert.jpg"
            alt="Dunes du Sahara"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Arabic Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-arabic text-7xl md:text-8xl lg:text-9xl text-white mb-4"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            رمال
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6"
          >
            Les Sables de l'Esprit
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif text-lg md:text-xl text-white/70 max-w-2xl mx-auto italic"
          >
            Un espace de réflexion où les pensées se déposent comme des grains de sable dans le désert
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED POST - Large hero card
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            À la une
          </span>
        </motion.div>

        <Card
          variant="hero"
          type={featuredPost.type}
          title={featuredPost.title}
          excerpt={featuredPost.excerpt}
          date={featuredPost.date}
          tags={featuredPost.tags}
          href={`/oasis/${featuredPost.id}`}
          readTime={featuredPost.readTime}
          image={featuredPost.image}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RECENT POSTS - 3 column grid
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Dernières Pensées
            </h2>
            <p className="text-foreground-muted font-serif">
              Réflexions récentes sur la vie, le temps et l'existence
            </p>
          </div>
          <a
            href="/pensees"
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
          >
            Tout voir
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, i) => (
            <Card
              key={post.id}
              variant="default"
              type={post.type}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              tags={post.tags}
              href={`/pensees/${post.id}`}
              readTime={post.readTime}
              image={post.image}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TWO COLUMN SECTION - Featured + Traces
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-background-subtle">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Featured posts (3 cols) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  Oasis de Réflexion
                </h2>
                <p className="text-foreground-muted font-serif">
                  Des méditations plus profondes
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {morePosts.map((post) => (
                  <Card
                    key={post.id}
                    variant="featured"
                    type={post.type}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    tags={post.tags}
                    href={`/oasis/${post.id}`}
                    readTime={post.readTime}
                    image={post.image}
                  />
                ))}
              </div>
            </div>

            {/* Right: Traces (2 cols) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  Traces Récentes
                </h2>
                <p className="text-foreground-muted font-serif">
                  Notes et observations
                </p>
              </motion.div>

              <div className="space-y-3">
                {traces.map((trace) => (
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

              <a
                href="/traces"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium mt-6 transition-colors"
              >
                Toutes les traces
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEWSLETTER
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/desert-pattern.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Rejoignez la Caravane
            </h2>
            <p className="text-foreground-muted font-serif mb-8">
              Recevez les nouvelles réflexions directement dans votre boîte mail.
              Pas de spam, juste des pensées authentiques.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-serif"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
              >
                S'abonner
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
