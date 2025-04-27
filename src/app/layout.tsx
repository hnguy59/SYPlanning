import '@util/styles/global.css'

import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Footer, Header } from '@components'
import { fonts, Providers } from '@util'

export const metadata: Metadata = {
  title: 'SY Planning',
  description: 'Welcome to Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className={fonts.fira_sans.variable}>
      <body className="bg-bridge bg-fixed bg-center bg-no-repeat bg-cover">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
