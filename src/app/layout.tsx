import type { Metadata } from "next";
import { Cabin, Amatic_SC } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const amaticSC = Amatic_SC({
  variable: "--font-amatic",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tarpy's | Monterey Steakhouse with Garden Patio Dining",
  description:
    "Tarpy's of Monterey—one of the best Monterey restaurants with patios—serves savory steaks, fresh seafood & fine dining in a peaceful, garden setting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${amaticSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-cabin">{children}</body>
    </html>
  );
}
