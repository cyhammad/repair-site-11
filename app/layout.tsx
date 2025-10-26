import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedCallButtons from "@/components/FixedCallButtons";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samsung Appliances Repairing",
  description: "Samsung Appliances Repairing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} flex flex-col w-full h-full max-w-screen overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <FixedCallButtons />
      </body>
    </html>
  );
}
