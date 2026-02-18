import Link from "next/link";
import dynamic from "next/dynamic";
import { tools, categories } from "@/data/tools";
import { blogPosts } from "@/data/blog";
import ToolCard from "@/components/ToolCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import NewsletterForm from "@/components/NewsletterForm";

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
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="glass rounded-3xl p-10 md:p-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-8 text-sm text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Pour les freelances français
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 font-display bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent leading-tight">
              Les meilleurs outils pour freelances
            </h1>
            <p className="text-lg md:text-xl text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Comparatifs, avis et guides pour choisir vos outils de comptabilité, banque, facturation, assurance et plus.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/outils"
                className="group btn-gradient text-white font-semibold px-8 py-4 rounded-2xl text-lg inline-flex items-center gap-2"
              >
                Voir les outils
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link
                href="/comparateur"
                className="border border-white/10 text-stone-300 font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-white/5 transition-all backdrop-blur"
              >
                Comparer
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <ScrollFadeIn>
          <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-2 text-center">Parcourir</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-stone-100 font-display">
            Catégories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="card-emerald glass-card rounded-2xl p-6 text-center group"
              >
                <div className="font-semibold text-stone-200 group-hover:text-emerald-400 transition-colors">
                  {c.name}
                </div>
                <div className="text-xs text-stone-600 mt-3">
                  {tools.filter((t) => t.categorySlug === c.slug).length} outils
                </div>
              </Link>
            ))}
          </div>
        </ScrollFadeIn>
      </section>

      {/* Top tools */}
      <section className="bg-[#0d1117]/50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeIn>
            <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-2 text-center">Sélection</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-stone-100 font-display">
              Outils populaires
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {tools.slice(0, 6).map((tool, i) => (
              <ScrollFadeIn key={tool.slug} delay={i * 80}>
                <ToolCard tool={tool} />
              </ScrollFadeIn>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/outils" className="group inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors text-lg">
              Voir tous les outils
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollFadeIn>
            <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-2 text-center">Ressources</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-stone-100 font-display">
              Derniers articles
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollFadeIn key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-emerald glass-card rounded-2xl p-7 block group"
                >
                  <div className="text-xs text-stone-600 mb-4">
                    {post.date} · {post.readTime}
                  </div>
                  <div className="font-bold text-lg text-stone-200 mb-3 group-hover:text-emerald-400 transition-colors font-display">
                    {post.title}
                  </div>
                  <div className="text-sm text-stone-500 leading-relaxed">
                    {post.excerpt}
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/blog" className="group inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors text-lg">
              Tous les articles
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#0d1117]/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollFadeIn>
            <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-2">Newsletter</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-stone-100 font-display">
              Restez informé
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Recevez les meilleurs outils et conseils pour freelances, directement dans votre boîte mail.
            </p>
            <NewsletterForm />
            <p className="text-xs text-stone-600 mt-4">Pas de spam. Désinscription en un clic.</p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
