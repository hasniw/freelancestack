"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, categories } from "@/data/tools";

export default function ComparateurPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = selectedCategory === "all" ? tools : tools.filter((t) => t.categorySlug === selectedCategory);
  const selectedTools = tools.filter((t) => selected.includes(t.slug));

  const toggle = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 4 ? [...prev, slug] : prev
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Comparateur d&apos;outils</h1>
      <p className="text-gray-600 mb-6">Sélectionnez jusqu&apos;à 4 outils à comparer</p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${selectedCategory === "all" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Tous
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setSelectedCategory(c.slug)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${selectedCategory === c.slug ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Tool selection */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
        {filtered.map((tool) => (
          <button
            key={tool.slug}
            onClick={() => toggle(tool.slug)}
            className={`border rounded-lg p-3 text-left text-sm transition ${selected.includes(tool.slug) ? "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-300" : "hover:border-gray-300"}`}
          >
            <span className="text-lg">{tool.logo}</span>
            <div className="font-semibold mt-1">{tool.name}</div>
            <div className="text-xs text-gray-400">{tool.category}</div>
          </button>
        ))}
      </div>

      {/* Comparison table */}
      {selectedTools.length >= 2 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2 font-medium text-gray-500 w-40">Critère</th>
                {selectedTools.map((t) => (
                  <th key={t.slug} className="text-left py-3 px-2 font-bold">
                    <span className="text-xl mr-1">{t.logo}</span>
                    <Link href={`/outils/${t.slug}`} className="hover:text-indigo-600">{t.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-2 font-medium text-gray-500">Catégorie</td>
                {selectedTools.map((t) => <td key={t.slug} className="py-3 px-2">{t.category}</td>)}
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-2 font-medium text-gray-500">Prix</td>
                {selectedTools.map((t) => <td key={t.slug} className="py-3 px-2 font-semibold">{t.price}</td>)}
              </tr>
              <tr className="border-b">
                <td className="py-3 px-2 font-medium text-gray-500">Note</td>
                {selectedTools.map((t) => (
                  <td key={t.slug} className="py-3 px-2">
                    <span className="text-yellow-500">★</span> {t.rating}/5 ({t.reviewCount})
                  </td>
                ))}
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-2 font-medium text-gray-500">Avantages</td>
                {selectedTools.map((t) => (
                  <td key={t.slug} className="py-3 px-2">
                    <ul className="space-y-1">{t.pros.map((p, i) => <li key={i} className="text-green-700">✓ {p}</li>)}</ul>
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-3 px-2 font-medium text-gray-500">Inconvénients</td>
                {selectedTools.map((t) => (
                  <td key={t.slug} className="py-3 px-2">
                    <ul className="space-y-1">{t.cons.map((c, i) => <li key={i} className="text-red-600">✗ {c}</li>)}</ul>
                  </td>
                ))}
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-2 font-medium text-gray-500">Fonctionnalités</td>
                {selectedTools.map((t) => (
                  <td key={t.slug} className="py-3 px-2">
                    <ul className="space-y-1">{t.features.map((f, i) => <li key={i}>⚡ {f}</li>)}</ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-2"></td>
                {selectedTools.map((t) => (
                  <td key={t.slug} className="py-3 px-2">
                    <a href={t.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-indigo-700 transition">
                      Essayer {t.name} →
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedTools.length < 2 && selected.length > 0 && (
        <p className="text-gray-500 text-center py-8">Sélectionnez au moins 2 outils pour comparer</p>
      )}
      {selected.length === 0 && (
        <p className="text-gray-500 text-center py-8">Cliquez sur les outils ci-dessus pour les comparer</p>
      )}
    </div>
  );
}
