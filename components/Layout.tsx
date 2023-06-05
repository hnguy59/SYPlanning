import React, { ReactNode } from 'react'
import { Theme } from './Theme'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Theme />
      {children}
    </>
  )
}

export default Layout
