import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sri Durga Traders",
  description: "Construction Materials & Painting Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}