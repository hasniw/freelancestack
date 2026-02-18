import Link from "next/link";
import { categories } from "@/data/tools";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.04]">
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-12 text-sm">
        <div>
          <h3 className="text-emerald-400 font-bold text-lg mb-5 font-display flex items-center gap-2">
            <span className="text-xl">⚡</span> FreelanceStack
          </h3>
          <p className="text-stone-500 leading-relaxed mb-6">
            Les meilleurs outils pour les freelances français. Comparatifs, avis et guides pour bien choisir.
          </p>
          <div className="flex gap-2">
            {['Twitter', 'LinkedIn'].map(s => (
              <span key={s} className="text-xs text-stone-500 bg-white/[0.04] border border-white/[0.06] px-3.5 py-1.5 rounded-lg hover:text-white hover:border-white/10 cursor-pointer transition-all">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-5">Catégories</h3>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="text-stone-500 hover:text-emerald-400 transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-5">Ressources</h3>
          <ul className="space-y-3">
            <li><Link href="/blog" className="text-stone-500 hover:text-emerald-400 transition-colors">Blog</Link></li>
            <li><Link href="/comparateur" className="text-stone-500 hover:text-emerald-400 transition-colors">Comparateur</Link></li>
            <li><Link href="/outils" className="text-stone-500 hover:text-emerald-400 transition-colors">Tous les outils</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.04] text-center py-8 text-xs text-stone-600">
        © {new Date().getFullYear()} FreelanceStack. Liens affiliés signalés.
      </div>
    </footer>
  );
}
