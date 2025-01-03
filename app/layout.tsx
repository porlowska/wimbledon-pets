import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const barlow = Barlow({ weight: ["200", "500"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-whiteish ${barlow.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
