import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navbar/navbar";
import Footer from "@/components/organisms/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rextie",
  description: "App clone Rextie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-auto h-auto border-solid`}>
      <Navbar />
          {children}
      <Footer />
      </body>
    </html>
  );
}
