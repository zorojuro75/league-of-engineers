import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

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
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
