import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Limitless Captions - AI-Powered Image Caption Generator',
  description: 'Upload images and get AI-powered captions instantly. Fast, accurate, and truly limitless caption generation using VGG16, LSTM, and attention mechanism.',
  keywords: 'AI, image captions, VGG16, LSTM, attention mechanism, deep learning, image description, automatic captions, Flickr8k',
  authors: [{ name: 'Limitless Captions' }],
  openGraph: {
    title: 'Limitless Captions - AI Image Caption Generator',
    description: 'Upload images and get AI-powered captions instantly.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

