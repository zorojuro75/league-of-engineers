import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Nunito } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const font = Nunito({ subsets: ['latin'], weight: ['400','700'] })

export const metadata: Metadata = {
  title: 'Football',
  description: 'IUB Engineering School Football tournament',
  keywords: ['IUB','CSE', 'EEE','Football', 'Tournment', 'Engineering'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  )
}
