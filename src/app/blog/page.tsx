import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Blog — Guides et conseils freelance | FreelanceStack",
  description: "Articles, guides et conseils pour réussir en freelance : outils, comptabilité, statuts, clients.",
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">
      <ScrollFadeIn>
        <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-2">Ressources</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent font-display">
          Blog
        </h1>
        <p className="text-stone-500 mb-14 text-lg">Guides, conseils et retours d&apos;expérience pour les freelances français.</p>
      </ScrollFadeIn>

      <div className="space-y-6">
        {blogPosts.map((post, i) => (
          <ScrollFadeIn key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="card-emerald glass-card rounded-2xl p-8 block group"
            >
              <div className="text-xs text-stone-600 mb-3">{post.date} · {post.readTime}</div>
              <h2 className="text-xl font-bold mb-3 text-stone-100 group-hover:text-emerald-400 transition-colors font-display">
                {post.title}
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-white/[0.05] border border-white/[0.08] text-stone-400 text-xs px-3 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
}
