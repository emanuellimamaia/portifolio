import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import {Header } from './componets/header'
import { ContactForm } from './componets/contact-form'
import { Footer } from './componets/footer'
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
export const metadata = {
  title: {
    default: 'Home',
    template: '%s | EM Dev'
  }
}
const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header></Header>
        {children}
        <ContactForm></ContactForm>
        <Footer/>
      </body>
    </html>
  )
}
