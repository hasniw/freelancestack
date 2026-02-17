"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-emerald-400 tracking-tight">
          ⚡ FreelanceStack
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-400">
          <Link href="/outils" className="hover:text-emerald-400 transition-colors">
            Outils
          </Link>
          <Link href="/comparateur" className="hover:text-emerald-400 transition-colors">
            Comparateur
          </Link>
          <Link href="/blog" className="hover:text-emerald-400 transition-colors">
            Blog
          </Link>
        </nav>
        <Link
          href="/outils"
          className="hidden md:inline-block btn-gradient text-white text-sm font-semibold px-4 py-2 rounded-lg"
        >
          Explorer →
        </Link>
      </div>
    </header>
  );
}
