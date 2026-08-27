import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faithpad.app"),
  title: "Faith Pad — Your Sacred Space for Sermons & Study",
  description:
    "A minimalist, Apple-inspired note-taking workspace crafted specifically for sermon tracking, theological research, live scripture integration, and collaborative Bible study.",
  keywords: [
    "Faith Pad",
    "Bible study app",
    "Sermon notes",
    "Pastor notes app",
    "YouVersion integration",
    "Scripture notes",
    "Theology notebook",
  ],
  authors: [{ name: "Faith Pad Team" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon.png",
  },
  openGraph: {
    title: "Faith Pad — Your Sacred Space for Sermons & Study",
    description:
      "Minimalist, fast, and engineered for spiritual depth. Seamless YouVersion Scripture integration and multi-translation comparison.",
    url: "https://faithpad.app",
    siteName: "Faith Pad",
    images: [
      {
        url: "/images/icon.png",
        width: 512,
        height: 512,
        alt: "Faith Pad Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f] selection:bg-[#1d1d1f] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
