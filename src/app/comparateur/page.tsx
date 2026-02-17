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

  const bestRating = selectedTools.length > 0 ? Math.max(...selectedTools.map((t) => t.rating)) : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
        Comparateur d&apos;outils
      </h1>
      <p className="text-stone-500 mb-8">Sélectionnez jusqu&apos;à 4 outils à comparer</p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedCategory === "all"
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "text-stone-500 border border-white/10 hover:border-white/20"
          }`}
        >
          Tous
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setSelectedCategory(c.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === c.slug
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "text-stone-500 border border-white/10 hover:border-white/20"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Tool selection grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
        {filtered.map((tool) => (
          <button
            key={tool.slug}
            onClick={() => toggle(tool.slug)}
            className={`glass-card rounded-xl p-4 text-left transition ${
              selected.includes(tool.slug)
                ? "!border-emerald-500/50 !bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                : ""
            }`}
          >
            <span className="text-2xl">{tool.logo}</span>
            <div className="font-semibold mt-2 text-stone-200 text-sm">{tool.name}</div>
            <div className="text-xs text-stone-600">{tool.category}</div>
          </button>
        ))}
      </div>

      {/* Comparison — Cards side by side */}
      {selectedTools.length >= 2 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {selectedTools.map((t) => (
            <div key={t.slug} className="glass-card rounded-2xl p-6 flex flex-col">
              {/* Header */}
              <div className="text-center mb-6">
                <span className="text-4xl block mb-3">{t.logo}</span>
                <Link href={`/outils/${t.slug}`} className="font-bold text-lg text-stone-100 hover:text-emerald-400 transition-colors">
                  {t.name}
                </Link>
                <div className="text-xs text-stone-600 mt-1">{t.category}</div>
              </div>

              {/* Price - highlighted */}
              <div className="text-center mb-6">
                <div className="text-xl font-bold text-emerald-400">{t.price}</div>
              </div>

              {/* Rating */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${
                  t.rating === bestRating
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-white/5 text-stone-400 border border-white/10"
                }`}>
                  <span className="text-yellow-400">★</span>
                  {t.rating}/5
                  {t.rating === bestRating && <span className="text-xs ml-1">🏆</span>}
                </div>
                <div className="text-xs text-stone-600 mt-1">{t.reviewCount} avis</div>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">Avantages</div>
                <ul className="space-y-1.5">
                  {t.pros.map((p, i) => (
                    <li key={i} className="text-xs text-stone-400 flex items-start gap-2">
                      <span className="text-emerald-500 shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-red-400 mb-2 uppercase tracking-wider">Inconvénients</div>
                <ul className="space-y-1.5">
                  {t.cons.map((c, i) => (
                    <li key={i} className="text-xs text-stone-400 flex items-start gap-2">
                      <span className="text-red-500 shrink-0">✗</span>{c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-6 flex-1">
                <div className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wider">Fonctionnalités</div>
                <ul className="space-y-1.5">
                  {t.features.map((f, i) => (
                    <li key={i} className="text-xs text-stone-500">⚡ {f}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={t.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-gradient text-white text-sm font-semibold px-4 py-3 rounded-xl text-center block"
              >
                Essayer {t.name} →
              </a>
            </div>
          ))}
        </div>
      )}

      {selectedTools.length < 2 && selected.length > 0 && (
        <p className="text-stone-500 text-center py-12">Sélectionnez au moins 2 outils pour comparer</p>
      )}
      {selected.length === 0 && (
        <p className="text-stone-500 text-center py-12">Cliquez sur les outils ci-dessus pour les comparer</p>
      )}
    </div>
  );
}
