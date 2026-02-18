import Link from "next/link";
import { Tool } from "@/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/outils/${tool.slug}`}
      className="card-emerald glass-card rounded-2xl p-7 group block"
    >
      <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">
        {tool.logo}
      </div>
      <div className="font-bold text-lg text-stone-100 mb-1 font-display">{tool.name}</div>
      <div className="text-xs text-stone-500 mb-4">{tool.category}</div>
      <div className="text-sm text-emerald-400 font-semibold mb-4">{tool.price}</div>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.floor(tool.rating) ? "text-amber-400" : "text-stone-700"}>★</span>
          ))}
        </div>
        <span className="text-stone-300 font-medium">{tool.rating}</span>
        <span className="text-stone-600">({tool.reviewCount})</span>
      </div>
    </Link>
  );
}
