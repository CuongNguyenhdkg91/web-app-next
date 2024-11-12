import Navbar from '@/components/Navigation/Navbar/Navbar'
import { FooterMC } from '@/components/Navigation/Footer'

import { Provider } from 'react-redux' //npm update before npm install react-redux

import '../globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Trang Thông Tin Điện Tử',
  description: 'Thong tin cap nhat',
}

export default function RootLayout({children,}: {children: React.ReactNode}) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <FooterMC />
      </body>
    </html>
  )
}
