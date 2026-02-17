import { categories, getToolsByCategory, getCategoryBySlug } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ToolCard from "@/components/ToolCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";

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
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      <ScrollFadeIn>
        <div className="mb-4 text-sm text-stone-600">
          <Link href="/outils" className="hover:text-emerald-400 transition-colors">Outils</Link>
          <span className="mx-2">→</span>
          <span className="text-stone-400">{cat.name}</span>
        </div>
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          {cat.name}
        </h1>
        <p className="text-stone-500 mb-12">{cat.description}</p>
      </ScrollFadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {catTools.map((tool, i) => (
          <ScrollFadeIn key={tool.slug} delay={i * 100}>
            <ToolCard tool={tool} />
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
}
