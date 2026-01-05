import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'UK Dental Implants | Compare Prices From Local Specialists',
    template: '%s | UK Dental Implants',
  },
  description: 'Get free quotes for dental implants from specialist UK dentists. Compare prices for single tooth, All-on-4, and full mouth implants. 0% finance available.',
  keywords: ['dental implants', 'tooth implant', 'All-on-4', 'full mouth implants', 'dental implant cost UK', 'implant dentures'],
  authors: [{ name: 'UK Dental Implants' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'UK Dental Implants',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-slate-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
