import { tools, getToolBySlug } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="mb-2 text-sm text-gray-500">
        <Link href="/outils" className="hover:text-indigo-600">Outils</Link> → <Link href={`/categories/${tool.categorySlug}`} className="hover:text-indigo-600">{tool.category}</Link> → {tool.name}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl">{tool.logo}</span>
        <div>
          <h1 className="text-3xl font-bold">{tool.name}</h1>
          <div className="text-gray-500">{tool.category} · {tool.price}</div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-bold">{tool.rating}/5</span>
            <span className="text-gray-400 text-sm">({tool.reviewCount} avis)</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-8 text-lg leading-relaxed">{tool.description}</p>

      <a
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition mb-10"
      >
        Essayer {tool.name} →
      </a>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="font-bold text-lg mb-3 text-green-700">✅ Avantages</h2>
          <ul className="space-y-2">
            {tool.pros.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm"><span className="text-green-500 mt-0.5">✓</span>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-3 text-red-700">❌ Inconvénients</h2>
          <ul className="space-y-2">
            {tool.cons.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm"><span className="text-red-500 mt-0.5">✗</span>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="font-bold text-lg mb-3">Fonctionnalités</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {tool.features.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded px-3 py-2 text-sm">⚡ {f}</div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 text-center">
        <p className="font-semibold mb-2">Prêt à essayer {tool.name} ?</p>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Découvrir {tool.name} →
        </a>
        <p className="text-xs text-gray-500 mt-2">Lien affilié — nous pouvons percevoir une commission</p>
      </div>
    </div>
  );
}
