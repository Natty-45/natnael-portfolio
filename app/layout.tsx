import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/nav";
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
    "Portfolio of Natnael Ayalew, a full-stack web developer building scalable web applications with React, Node.js and databases.",
  openGraph: {
    title: "Natnael Ayalew — Full-Stack Developer",
    description:
      "Full-stack web developer building scalable web applications with React, Node.js and databases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${plexMono.variable}`}>
      <body>
        <div className="layout">
          <Nav />
          <div className="column">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}