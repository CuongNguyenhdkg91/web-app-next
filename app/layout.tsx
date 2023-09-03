
import CreateNew from './CreateNew/page'
import Navbar from '../components/Navbar/Navbar'

import '../globals.css'
//import './layout.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Thong Tin Cap Nhat',
  description: 'Thong Tin Cap Nhat',
}

export default function RootLayout({children,}: {children: React.ReactNode}) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
}
