import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
    title: 'ATLANTIS',
    description: 'Легалізація іноземців в Польщі',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return children
}
