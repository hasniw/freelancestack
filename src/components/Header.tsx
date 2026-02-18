"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-display text-emerald-400 tracking-tight flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          FreelanceStack
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "/outils", label: "Outils" },
            { href: "/comparateur", label: "Comparateur" },
            { href: "/blog", label: "Blog" },
          ].map(link => (
            <Link key={link.href} href={link.href} className="text-stone-400 hover:text-white transition px-4 py-2 rounded-lg hover:bg-white/[0.05] text-sm font-medium">
              {link.label}
            </Link>
          ))}
          <Link
            href="/outils"
            className="ml-3 btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Explorer →
          </Link>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-white" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden mx-4 mb-4 glass rounded-2xl p-4 space-y-1">
          <Link href="/outils" className="block px-4 py-3 text-stone-300 hover:text-white hover:bg-white/5 rounded-xl transition" onClick={() => setMobileOpen(false)}>Outils</Link>
          <Link href="/comparateur" className="block px-4 py-3 text-stone-300 hover:text-white hover:bg-white/5 rounded-xl transition" onClick={() => setMobileOpen(false)}>Comparateur</Link>
          <Link href="/blog" className="block px-4 py-3 text-stone-300 hover:text-white hover:bg-white/5 rounded-xl transition" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/outils" className="block px-4 py-3 mt-2 text-center btn-gradient text-white rounded-xl font-semibold" onClick={() => setMobileOpen(false)}>Explorer →</Link>
        </div>
      )}
    </header>
  );
}
