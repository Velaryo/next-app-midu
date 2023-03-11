// estilos globales
'use client'
import '../styles/globals.css'

import { Navigation } from '../components/Navigation'
import { font } from './font'
import Providers from './Providers'

import { NextUIProvider } from '@nextui-org/react'




export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head />
      <NextUIProvider>
      <body className={font.variable}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
      </NextUIProvider>
    </html>
  )
}
