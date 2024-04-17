import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openGraph } from "../lib/metaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kiaan Career Point",
    template : "%s | Kiaan Career Point",
  },
  description: "Kiaan Career Point is a well known coaching institute in Nagpur, Maharashtra. We provide coaching for IIT-JEE, NEET, MHT-CET.",
  metadataBase: new URL("https://kiaanlearning.com"),
  keywords : ['Kiaan Career Point', 'Kiaan Learning', 'Kiaan Career Point Nagpur', 'Kiaan Learning Nagpur', 'IIT-JEE Coaching Nagpur', 'NEET Coaching Nagpur', 'MHT-CET Coaching Nagpur', 'Coaching Institute Nagpur', 'Best Coaching Institute Nagpur', 'Best IIT-JEE Coaching Nagpur', 'Best NEET Coaching Nagpur', 'Best MHT-CET Coaching Nagpur', 'Best Coaching Institute in Nagpur', 'Best IIT-JEE Coaching Institute in Nagpur', 'Best NEET Coaching Institute in Nagpur', 'Best MHT-CET Coaching Institute in Nagpur', 'Best Coaching Institute in Nagpur', 'Best IIT-JEE Coaching Institute in Nagpur', 'Best NEET Coaching Institute in Nagpur', 'Best MHT-CET Coaching Institute in Nagpur'],
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
        {children}
        <Footer/>
      </body>
    </html>
  );
}
