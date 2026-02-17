import Link from "next/link";
import { tools, categories } from "@/data/tools";
import { Metadata } from "next";
import ToolCard from "@/components/ToolCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Tous les outils freelance — FreelanceStack",
  description: "Découvrez tous les outils indispensables pour les freelances : comptabilité, banque pro, facturation, assurance, portage.",
};

export default function OutilsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          Tous les outils
        </h1>
        <p className="text-stone-500 mb-12">{tools.length} outils comparés pour les freelances français</p>
      </ScrollFadeIn>

      {categories.map((cat) => {
        const catTools = tools.filter((t) => t.categorySlug === cat.slug);
        if (catTools.length === 0) return null;
        return (
          <section key={cat.slug} className="mb-16">
            <ScrollFadeIn>
              <h2 className="text-2xl font-bold mb-6 text-stone-200">
                <Link href={`/categories/${cat.slug}`} className="hover:text-emerald-400 transition-colors">
                  {cat.name}
                </Link>
              </h2>
            </ScrollFadeIn>
            <div className="grid md:grid-cols-3 gap-5">
              {catTools.map((tool, i) => (
                <ScrollFadeIn key={tool.slug} delay={i * 80}>
                  <ToolCard tool={tool} />
                </ScrollFadeIn>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
