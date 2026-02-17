import Link from "next/link";
import { categories } from "@/data/tools";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-bold mb-3">FreelanceStack</h3>
          <p>Les meilleurs outils pour les freelances français. Comparatifs, avis et guides pour bien choisir.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Catégories</h3>
          <ul className="space-y-1">
            {categories.map((c) => (
              <li key={c.slug}><Link href={`/categories/${c.slug}`} className="hover:text-white">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Ressources</h3>
          <ul className="space-y-1">
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/comparateur" className="hover:text-white">Comparateur</Link></li>
            <li><Link href="/outils" className="hover:text-white">Tous les outils</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} FreelanceStack — Liens affiliés signalés
      </div>
    </footer>
  );
}
