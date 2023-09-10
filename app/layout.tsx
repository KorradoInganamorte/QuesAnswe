import './globals.sass'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuesAnswer',
  description: 'The best forum',
}

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className='phone:text-[40%] verticalphone:text-[45%] horizontalphone:text-[47.5%] tablet:text-[50%] laptop:text-[62.5%] monitor:text-[75%] screen:text-[87.5%]'>
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout