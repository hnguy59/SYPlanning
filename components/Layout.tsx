import React, { ReactNode } from 'react'
import Footer from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-auto">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
