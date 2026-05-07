import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Define a type for the valid locales
type Locale = 'ua' | 'pl' | 'en'

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    // Type narrowing to ensure locale is one of the valid locales
    if (!routing.locales.includes(locale as Locale)) {
        notFound()
    }

    return {
        messages: (await import(`../../messages/${locale}.json`)).default,
    }
})
