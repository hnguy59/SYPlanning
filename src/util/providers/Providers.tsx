'use client'

import { ReactNode } from 'react'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export default function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}
