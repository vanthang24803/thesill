import './globals.css'

import { Lora } from 'next/font/google'

import Navbar from '@/components/navbar'
import ToastProvider from '@/providers/toast-provider';
import ModalProvider from '@/providers/modal-providers';

const font = Lora({ subsets: ['latin'] })

export const metadata = {
  title: "The Sill ",
  description: "Buy a flower every day to make life more beautiful. 😊",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <ToastProvider />
        <ModalProvider />
        {children}
        </body>
    </html>
  )
}
