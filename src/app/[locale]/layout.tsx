import { StoreProvider } from '@/app/redux/StoreProvider'
import ContactPopup from '@/components/contactPopup/ContactPopup'
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Playfair_Display_SC, Playfair_Display } from 'next/font/google'

const playfairDisplaySC = Playfair_Display_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const messages = await getMessages()

    return (
        <StoreProvider>
            <html lang={locale}>
                <body
                    className={`${playfairDisplay.className} ${playfairDisplaySC.className}`}
                >
                    <NextIntlClientProvider messages={messages}>
                        <Header />
                        <ContactPopup />
                        <Menu />
                        {children}
                    </NextIntlClientProvider>
                </body>
            </html>
        </StoreProvider>
    )
}
