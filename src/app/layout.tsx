import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import ScrollIndicator from "@/components/layout/scroll-indicator";
import SmoothScroll from "@/components/layout/smooth-scroll";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nelson González - Full Stack Developer",
  description:
    "Desarrollador Full Stack especializado en React y Next.js. Construyo aplicaciones web rápidas, accesibles y mantenibles. Disponible para trabajo remoto y proyectos freelance.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Málaga",
    "Portfolio",
  ],
  authors: [{ name: "Nelson González" }],
  openGraph: {
    title: "Nelson González - Full Stack Developer",
    description:
      "Portfolio de desarrollador Full Stack especializado en React y Next.js",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="light" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <SmoothScroll />
        <Navigation />
        <ScrollIndicator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
