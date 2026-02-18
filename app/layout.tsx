import type { Metadata } from "next";
import { Crimson_Text, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Crimson_Text({
  variable: "--font-display",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Men & Beasts",
  description:
    "Cocktail bar and kitchen with bold drinks, late-night bites, and private events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
