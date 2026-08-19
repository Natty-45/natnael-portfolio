import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
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
  title: "Natnael Ayalew — Full-Stack Developer",
  description:
    "Portfolio of Natnael Ayalew, a full-stack developer building web and mobile applications with React, React Native, Node.js and databases.",
  openGraph: {
    title: "Natnael Ayalew — Full-Stack Developer",
    description:
      "Full-stack developer building web and mobile applications with React, React Native, Node.js and databases.",
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
        <Cursor />
        <div className="layout">
          <Nav />
          <div className="column">
            <main id="main">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}