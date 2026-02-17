import { categories, getToolsByCategory, getCategoryBySlug } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Outils freelance | FreelanceStack`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();
  const catTools = getToolsByCategory(params.slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/outils" className="hover:text-indigo-600">Outils</Link> → {cat.name}
      </div>
      <h1 className="text-3xl font-bold mb-2">{cat.name}</h1>
      <p className="text-gray-600 mb-8">{cat.description}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {catTools.map((tool) => (
          <Link key={tool.slug} href={`/outils/${tool.slug}`} className="border rounded-lg p-5 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{tool.logo}</span>
              <div>
                <div className="font-bold text-lg">{tool.name}</div>
                <div className="text-sm text-gray-500">{tool.price}</div>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="font-bold">{tool.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
