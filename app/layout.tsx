
import './globals.css'
import { Inter } from 'next/font/google'
import {AuthProvider} from './context/auth.context'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doggypedia',
  description: 'Information about dog breeds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
      <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
        </body>
      
    </html>
  )
}
