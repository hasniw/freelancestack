import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FreelanceStack — Les meilleurs outils pour freelances",
  description: "Comparatif et avis sur les meilleurs outils pour freelances français : comptabilité, banque pro, facturation, assurance, portage salarial.",
  metadataBase: new URL("https://freelancestack.vercel.app"),
  openGraph: {
    title: "FreelanceStack — Les meilleurs outils pour freelances",
    description: "Comparatif et avis sur les meilleurs outils pour freelances français.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} font-[family-name:var(--font-geist-sans)] antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
