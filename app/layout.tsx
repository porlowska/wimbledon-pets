import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <GoogleAnalytics gaId="G-T477M1E07C" />
    </html>
  );
}
