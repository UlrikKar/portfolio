import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EntranceFX from "@/components/EntranceFX";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ulrik Karlstrøm",
  description: "Hello, I'm Ulrik. I design and build interfaces with intention.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const hLine: React.CSSProperties = { position: "absolute", left: 0, right: 0, height: 1, background: "#333333" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} dark`}>
      <body className="antialiased select-none font-sans text-[17px] leading-[1.5] overflow-auto">
        <div id="page-root" className="min-h-screen flex flex-col" style={{ position: "relative" }}>
          {/* Static layout grid — horizontal lines only; vertical lines are column borders */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 40, pointerEvents: "none" }}>
            <div style={{ ...hLine, top: 56 }} />
            <div className="hidden md:block" style={{ ...hLine, bottom: 56 }} />
          </div>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <EntranceFX />
        </div>
      </body>
    </html>
  );
}
