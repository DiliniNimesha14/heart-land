import type { Metadata } from "next";
import { Open_Sans, David_Libre, Nunito, Inter, Roboto } from "next/font/google";
import "./globals.css";
import FadeTransition from "../components/FadeTransition";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import { NavigationProvider } from "@/contexts/NavigationContext";

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

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Heartland General Trading | Authentic Sri Lankan Products UAE",
    template: "%s | Heartland General Trading"
  },
  description: "Heartland General Trading provides reliable import & export solutions, industrial materials, and consumer goods sourcing with competitive pricing and timely delivery.",
  keywords: ["Sri Lankan products", "UAE import export", "food distribution", "Heartland Trading", "Dubai wholesale"],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Heartland General Trading",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${davidLibre.variable} ${nunito.variable} ${inter.variable} ${roboto.variable}`}>
      <body>
       
          <FadeTransition>
            {children}
          </FadeTransition>
         
       
      </body>
    </html>
  );
}
