import type { Metadata } from "next";
import { Open_Sans, David_Libre } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-openSans",
});

const davidLibre = David_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-davidLibre",
});

export const metadata: Metadata = {
  title: "Heart Land",
  description: "Discover authentic Sri Lankan goods in the UAE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${davidLibre.variable}`}>
      <body>{children}</body>
    </html>
  );
}
