import Link from "next/link";
import { Tool } from "@/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/outils/${tool.slug}`}
      className="glass-card rounded-xl p-6 group block"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {tool.logo}
      </div>
      <div className="font-bold text-lg text-stone-100 mb-1">{tool.name}</div>
      <div className="text-xs text-stone-500 mb-3">{tool.category}</div>
      <div className="text-sm text-emerald-400 font-semibold mb-3">{tool.price}</div>
      <div className="flex items-center gap-1.5 text-sm">
        <span className="text-yellow-400">★</span>
        <span className="text-stone-300">{tool.rating}/5</span>
        <span className="text-stone-600">({tool.reviewCount})</span>
      </div>
    </Link>
  );
}
