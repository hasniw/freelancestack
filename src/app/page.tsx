import Link from "next/link";
import { tools, categories } from "@/data/tools";
import { blogPosts } from "@/data/blog";

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
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Les meilleurs outils pour freelances 🇫🇷</h1>
          <p className="text-lg text-indigo-100 mb-8">Comparatifs, avis et guides pour choisir vos outils de comptabilité, banque, facturation, assurance et plus.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/outils" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition">Voir les outils</Link>
            <Link href="/comparateur" className="border border-white/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">Comparer</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Catégories</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {categories.map((c) => (
            <Link key={c.slug} href={`/categories/${c.slug}`} className="bg-gray-50 hover:bg-indigo-50 border rounded-lg p-4 text-center transition">
              <div className="font-semibold">{c.name}</div>
              <div className="text-xs text-gray-500 mt-1">{tools.filter((t) => t.categorySlug === c.slug).length} outils</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top tools */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Outils populaires</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.slice(0, 6).map((tool) => (
            <Link key={tool.slug} href={`/outils/${tool.slug}`} className="border rounded-lg p-5 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.logo}</span>
                <div>
                  <div className="font-bold">{tool.name}</div>
                  <div className="text-xs text-gray-500">{tool.category}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">{tool.price}</div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span>{tool.rating}/5</span>
                <span className="text-gray-400">({tool.reviewCount} avis)</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/outils" className="text-indigo-600 font-semibold hover:underline">Voir tous les outils →</Link>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Derniers articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white border rounded-lg p-5 hover:shadow-md transition">
                <div className="text-xs text-gray-400 mb-2">{post.date} · {post.readTime}</div>
                <div className="font-bold mb-2">{post.title}</div>
                <div className="text-sm text-gray-600">{post.excerpt}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-indigo-600 font-semibold hover:underline">Tous les articles →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
