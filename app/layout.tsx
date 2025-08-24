import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aegis Protocol - The First AI-Managed DeFi Protocol',
  description: 'Where humans failed, the machine will succeed. The first AI-managed DeFi protocol on Base.',
  keywords: 'DeFi, AI, Protocol, Base, Cryptocurrency, Blockchain',
  authors: [{ name: 'Aegis Protocol' }],
  icons: {
    icon: '/aegis.jpg',
    shortcut: '/aegis.jpg',
    apple: '/aegis.jpg',
  },
  openGraph: {
    title: 'Aegis Protocol - The First AI-Managed DeFi Protocol',
    description: 'Where humans failed, the machine will succeed.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aegis Protocol - The First AI-Managed DeFi Protocol',
    description: 'Where humans failed, the machine will succeed.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
