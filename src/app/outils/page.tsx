import Link from "next/link";
import { tools, categories } from "@/data/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tous les outils freelance — FreelanceStack",
  description: "Découvrez tous les outils indispensables pour les freelances : comptabilité, banque pro, facturation, assurance, portage.",
};

export default function OutilsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Tous les outils</h1>
      <p className="text-gray-600 mb-8">{tools.length} outils comparés pour les freelances français</p>

      {categories.map((cat) => {
        const catTools = tools.filter((t) => t.categorySlug === cat.slug);
        if (catTools.length === 0) return null;
        return (
          <section key={cat.slug} className="mb-12">
            <h2 className="text-xl font-bold mb-4">
              <Link href={`/categories/${cat.slug}`} className="hover:text-indigo-600">{cat.name}</Link>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {catTools.map((tool) => (
                <Link key={tool.slug} href={`/outils/${tool.slug}`} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{tool.logo}</span>
                    <span className="font-bold">{tool.name}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{tool.price}</div>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span> {tool.rating}/5
                    <span className="text-gray-400 text-xs">({tool.reviewCount})</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
