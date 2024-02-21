import type { Metadata } from "next"
import { Quicksand, Open_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header/header"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-basic"
})

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-accent"
})

export const metadata: Metadata = {
  title: "Pacifikad",
  description: "Estrategia de océanos azules"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${open_sans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
