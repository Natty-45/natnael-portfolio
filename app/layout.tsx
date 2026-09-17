import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Natnael Ayalew — Software Engineer | Full-Stack",
  description:
    "Portfolio of Natnael Ayalew, a software engineer specializing in full-stack development. Building web and mobile applications with React, React Native, Node.js, and databases.",
  openGraph: {
    title: "Natnael Ayalew — Software Engineer | Full-Stack",
    description:
      "Full-stack software engineer building modern web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="glow-blob glow-blob-1" />
        <div className="glow-blob glow-blob-2" />
        <div className="grid-pattern" />
        <div className="grain" />
        <Cursor />
        <div className="layout">
          <Nav />
          <div className="column">
            <Hero />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
