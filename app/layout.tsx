import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import PageLoader from "@/components/ui/PageLoader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumio Software Solutions — Digital Architect & Visionary",
  description:
    "Engineering high-performance digital ecosystems that don't just exist—they breathe, convert, and dominate.",
  keywords: [
    "web development",
    "UI/UX design",
    "full-stack",
    "Next.js",
    "digital strategy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${inter.variable}`}
    >
      <body>
        <PageLoader />
        <SmoothScroll />
        <NoiseOverlay />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
