import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Omar Faruk || Web Developer",
  description: "My portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#0F0F0F] pt-14 text-white ${inter.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
