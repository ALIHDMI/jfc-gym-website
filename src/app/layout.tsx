import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/content/site";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { AnchorHashScroll } from "@/components/ui/AnchorHashScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Премиальный спортивный комплекс`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: "ru_RU",
    siteName: SITE.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AnchorHashScroll />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
