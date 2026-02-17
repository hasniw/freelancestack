import { tools, getToolBySlug } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — Avis et tarifs 2025 | FreelanceStack`,
    description: `Découvrez ${tool.name} : ${tool.description.slice(0, 150)}`,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "BusinessApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      reviewCount: tool.reviewCount,
      bestRating: 5,
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: tool.price },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ScrollFadeIn>
        <div className="mb-4 text-sm text-stone-600">
          <Link href="/outils" className="hover:text-emerald-400 transition-colors">Outils</Link>
          <span className="mx-2">→</span>
          <Link href={`/categories/${tool.categorySlug}`} className="hover:text-emerald-400 transition-colors">{tool.category}</Link>
          <span className="mx-2">→</span>
          <span className="text-stone-400">{tool.name}</span>
        </div>
      </ScrollFadeIn>

      {/* Header */}
      <ScrollFadeIn>
        <div className="glass rounded-2xl p-8 mb-10">
          <div className="flex items-center gap-6 mb-6">
            <span className="text-6xl">{tool.logo}</span>
            <div>
              <h1 className="text-4xl font-bold text-stone-100">{tool.name}</h1>
              <div className="text-stone-500 mt-1">{tool.category}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="font-bold text-stone-200">{tool.rating}/5</span>
                <span className="text-stone-600 text-sm">({tool.reviewCount} avis)</span>
              </div>
            </div>
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-4">{tool.price}</div>
          <p className="text-stone-400 text-lg leading-relaxed">{tool.description}</p>
        </div>
      </ScrollFadeIn>

      {/* CTA */}
      <ScrollFadeIn>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block btn-gradient text-white font-semibold px-8 py-4 rounded-xl text-lg mb-12 animate-pulse-glow"
        >
          Essayer {tool.name} →
        </a>
      </ScrollFadeIn>

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <ScrollFadeIn>
          <div className="glass-card rounded-xl p-6">
            <h2 className="font-bold text-lg mb-4 text-emerald-400">✅ Avantages</h2>
            <ul className="space-y-3">
              {tool.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-300">
                  <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>{p}
                </li>
              ))}
            </ul>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <div className="glass-card rounded-xl p-6">
            <h2 className="font-bold text-lg mb-4 text-red-400">❌ Inconvénients</h2>
            <ul className="space-y-3">
              {tool.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-300">
                  <span className="text-red-500 mt-0.5 shrink-0">✗</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </ScrollFadeIn>
      </div>

      {/* Features */}
      <ScrollFadeIn>
        <div className="mb-12">
          <h2 className="font-bold text-2xl mb-6 text-stone-200">Fonctionnalités</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {tool.features.map((f, i) => (
              <div key={i} className="glass-card rounded-lg px-4 py-3 text-sm text-stone-300 flex items-center gap-3">
                <span className="text-emerald-400">⚡</span> {f}
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeIn>

      {/* Bottom CTA */}
      <ScrollFadeIn>
        <div className="glass rounded-2xl p-8 text-center">
          <p className="font-semibold text-xl text-stone-200 mb-4">Prêt à essayer {tool.name} ?</p>
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block btn-gradient text-white font-semibold px-8 py-4 rounded-xl text-lg"
          >
            Découvrir {tool.name} →
          </a>
          <p className="text-xs text-stone-600 mt-4">Lien affilié — nous pouvons percevoir une commission</p>
        </div>
      </ScrollFadeIn>
    </div>
  );
}
