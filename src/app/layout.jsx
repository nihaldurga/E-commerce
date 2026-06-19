import "./globals.css";

export const metadata = {
  title: "Sri Durga Traders",
  description: "Construction Materials & Painting Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}