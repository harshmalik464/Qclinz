import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'qclinz',
  description: 'Revolutionize your laundry experience with our on-demand laundry service. Fast, reliable, and eco-friendly laundry pickup and delivery in [City]. Convenient, affordable, and hassle-free laundry solutions at your fingertips. Schedule your laundry service today and enjoy the best quality cleaning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}