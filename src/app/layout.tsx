import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0a0a0a] text-stone-100`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
