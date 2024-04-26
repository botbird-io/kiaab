import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openGraph } from "../lib/metaData";
import WhatsAppIcon from "@/components/WhatsApp";
import {ContextProvider} from "@/lib/ContextApi"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kiaan Career Point",
    template : "%s | Kiaan Career Point",
  },
  description: "Kiaan Career Point is a well known coaching institute in Nagpur, Maharashtra. We provide coaching for IIT-JEE, NEET, MHT-CET.",
  metadataBase: new URL("https://kiaanlearning.com"),
  alternates:{
    canonical: "/",
  },
  openGraph: {
    ...openGraph,
    title : 'Kiaan Career Point',
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
          <ContextProvider>
            {children}
          </ContextProvider>
        <WhatsAppIcon/>
        <Footer/>
      </body>
    </html>
  );
}
