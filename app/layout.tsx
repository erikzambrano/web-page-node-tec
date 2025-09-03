import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'NODE TEC',
  description: 'Empresa de TIC en Perú con experiencia en la industria',
  keywords: 'NODE TEC, Empresa de TIC en Perú, Tecnología de la Información, TIC, Perú, Ingeniería de Software, Desarrollo Web, Consultoría, Soporte Técnico, Masa & Miga',
  generator: 'syssoftintegra.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
