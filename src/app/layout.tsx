import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Quicksand, Open_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header/header"
import Footer from "@/components/footer/footer"

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
  description:
    "¡Mujer Emprendedora!. Navegando por los Océanos Azules, Descubre cómo tener éxito en tu estrategia digital acompañada de nuestro equipo Pacifikad "
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
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
