import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";

const font = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "League of Engineers",
  description: "IUB Engineering School Football tournament",
  keywords: ["IUB", "CSE", "EEE", "Football", "Tournment", "Engineering"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black bg-opacity-5">
      <body className={font.className}>
        <div className="flex flex-col min-h-screen">

          <Navbar className="grow h-full">{children}</Navbar>
          <div className="grow-0 bg-blue-900">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
