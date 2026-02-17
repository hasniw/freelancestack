import Link from "next/link";
import dynamic from "next/dynamic";
import { tools, categories } from "@/data/tools";
import { blogPosts } from "@/data/blog";
import ToolCard from "@/components/ToolCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FreelanceStack",
            url: "https://freelancestack.vercel.app",
            description: "Les meilleurs outils pour freelances français",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-10 md:p-14">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent leading-tight">
              Les meilleurs outils pour freelances 🇫🇷
            </h1>
            <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Comparatifs, avis et guides pour choisir vos outils de comptabilité, banque, facturation, assurance et plus.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/outils"
                className="btn-gradient text-white font-semibold px-8 py-3.5 rounded-xl text-lg animate-pulse-glow"
              >
                Voir les outils
              </Link>
              <Link
                href="/comparateur"
                className="border border-white/10 text-stone-300 font-semibold px-8 py-3.5 rounded-xl text-lg hover:bg-white/5 transition backdrop-blur"
              >
                Comparer
              </Link>
            </div>
          </div>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <ScrollFadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center text-stone-100">
            Catégories
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="glass-card rounded-xl p-5 text-center group"
              >
                <div className="font-semibold text-stone-200 group-hover:text-emerald-400 transition-colors">
                  {c.name}
                </div>
                <div className="text-xs text-stone-600 mt-2">
                  {tools.filter((t) => t.categorySlug === c.slug).length} outils
                </div>
              </Link>
            ))}
          </div>
        </ScrollFadeIn>
      </section>

      {/* Top tools */}
      <section className="bg-[#0d1117] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center text-stone-100">
              Outils populaires
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.slice(0, 6).map((tool, i) => (
              <ScrollFadeIn key={tool.slug} delay={i * 100}>
                <ToolCard tool={tool} />
              </ScrollFadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/outils" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors text-lg">
              Voir tous les outils →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center text-stone-100">
              Derniers articles
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollFadeIn key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-card rounded-xl p-6 block group"
                >
                  <div className="text-xs text-stone-600 mb-3">
                    {post.date} · {post.readTime}
                  </div>
                  <div className="font-bold text-stone-200 mb-3 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </div>
                  <div className="text-sm text-stone-500 leading-relaxed">
                    {post.excerpt}
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors text-lg">
              Tous les articles →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
