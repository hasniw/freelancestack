import Link from "next/link";
import { categories } from "@/data/tools";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5 mt-0">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <h3 className="text-emerald-400 font-bold text-lg mb-4">⚡ FreelanceStack</h3>
          <p className="text-stone-500 leading-relaxed">
            Les meilleurs outils pour les freelances français. Comparatifs, avis et guides pour bien choisir.
          </p>
        </div>
        <div>
          <h3 className="text-stone-200 font-bold mb-4">Catégories</h3>
          <ul className="space-y-2">
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
          <h3 className="text-stone-200 font-bold mb-4">Ressources</h3>
          <ul className="space-y-2">
            <li><Link href="/blog" className="text-stone-500 hover:text-emerald-400 transition-colors">Blog</Link></li>
            <li><Link href="/comparateur" className="text-stone-500 hover:text-emerald-400 transition-colors">Comparateur</Link></li>
            <li><Link href="/outils" className="text-stone-500 hover:text-emerald-400 transition-colors">Tous les outils</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 text-center py-6 text-xs text-stone-600">
        © {new Date().getFullYear()} FreelanceStack — Liens affiliés signalés
      </div>
    </footer>
  );
}
