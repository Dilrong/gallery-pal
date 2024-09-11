import type { Metadata } from 'next'
import { Fredoka as FontSans } from 'next/font/google'
import { cn } from '../lib/utils'
import { ThemeProvider } from '../components/feature/common/theme-provider'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: {
    default: 'Gallery, PAL',
    template: '%s | Gallery, PAL',
  },
  description: 'Hello, PAL Gallery for XPLA blockchain',
  openGraph: {
    title: 'Gallery, PAL',
    description: `Hello, PAL Gallery for XPLA blockchain`,
    url: 'https://gallery-pal.vercel.app',
    images: ['/images/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Gallery, PAL',
    description: `Hello, PAL Gallery for XPLA blockchain`,
    images: ['/images/og.png'],
    creator: 'dilrong',
    site: 'https://gallery-pal.vercel.app',
  },
  icons: {
    icon: '/images/icons/apple-icon.png',
    apple: '/images/icons/apple-icon.png',
    other: {
      rel: 'apple-icon-precomposed.png',
      url: '/images/icons/apple-icon-precomposed.png',
    },
  },
}

const fontSans = FontSans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
