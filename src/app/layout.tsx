import type { Metadata } from "next";
import { Englebert, Architects_Daughter } from "next/font/google";
import "./globals.css";

import Navbar from "./ui/navbar";
import Foot from "./ui/footer";

const englebert = Englebert({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-englebert',
});

const architectsDaughter = Architects_Daughter({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-architects',
});

export const metadata: Metadata = {
  title: "Protect Tin Can Hill Yellowknife",
  description: "Protect Tin Can Hill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="tin-can-hill">
      
      <body
        className={`${englebert.variable} ${architectsDaughter.variable} antialiased`}
      >
        <Navbar />
        {/* flex-grow p-6 md:overflow-y-auto md:p-12 */}
       
        {children}
       
        <Foot />
      </body>
      
    </html>
  );
}
