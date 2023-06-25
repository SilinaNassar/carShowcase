import './globals.css'
import { Navbar,Footer } from '@/component'

export const metadata = {
  title: 'Create Car Hub',
  description: ' Discover the best cars in the world!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
