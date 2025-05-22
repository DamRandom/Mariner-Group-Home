import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariner Group Home",
  description:
    "Home & Community Services with dignity, care, and a name you can trust.",
  keywords: [
    "Mariner Group Home",
    "Home Services",
    "Community Care",
    "Evelyn Gonzalez",
  ],
  authors: [{ name: "Evelyn Gonzalez Inc." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
