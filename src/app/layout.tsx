import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Mariner Group Home",
  description:
    "Care services in Florida: Home & Community Services with dignity, care, and a name you can trust.",
  keywords: [
    "Mariner Group Home",
    "Home Services",
    "Community Care",
    "Evelyn Gonzalez",
  ],
  authors: [{ name: "Evelyn Gonzalez Inc." }],

  icons: {
  icon: "/favicon.ico",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased pt-20">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
