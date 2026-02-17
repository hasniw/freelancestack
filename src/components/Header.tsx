import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          🛠 FreelanceStack
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/outils" className="hover:text-indigo-600">Outils</Link>
          <Link href="/comparateur" className="hover:text-indigo-600">Comparateur</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
