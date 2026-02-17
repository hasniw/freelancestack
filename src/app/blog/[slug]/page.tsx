import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | FreelanceStack`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    description: post.excerpt,
  };

  // Simple markdown-ish rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold mt-6 mb-2">{line.slice(4)}</h3>;
      if (line.startsWith("- **")) return <li key={i} className="ml-4 mb-1" dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
      if (line.startsWith("- ")) return <li key={i} className="ml-4 mb-1">{line.slice(2)}</li>;
      if (line.startsWith("| ")) return null; // skip tables for simplicity
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="mb-4 text-sm text-gray-500">
        <Link href="/blog" className="hover:text-indigo-600">Blog</Link> → {post.title}
      </div>

      <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
      <div className="text-sm text-gray-400 mb-8">{post.date} · {post.readTime} · {post.author}</div>

      <article className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
        {renderContent(post.content)}
      </article>

      <div className="mt-12 border-t pt-8">
        <Link href="/blog" className="text-indigo-600 font-semibold hover:underline">← Retour au blog</Link>
      </div>
    </div>
  );
}
