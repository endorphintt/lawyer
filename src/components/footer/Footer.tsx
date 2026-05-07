'use client'

import { useTranslations } from 'next-intl'
import c from './Footer.module.scss'
import Image from 'next/image'

export const socials = [
    {
        link: 'https://instagram.com/atlantis.pl?igshid=YmMyMTA2M2Y=',
        name: 'INSTAGRAM',
    },
    {
        link: 'https://www.facebook.com/atlantis.legalization/',
        name: 'FACEBOOK',
    },
    {
        link: 'https://wa.me/48732851456',
        name: 'WHATSAPP',
    },
    {
        link: 'https://t.me/atlantis_legalizacja',
        name: 'TELEGRAM',
    },
]

const Footer = () => {
    const openLink = (url: string) => {
        if (typeof url === 'string' && url.startsWith('http')) {
            window.open(url, '_blank')
        } else {
            console.error('wrong URL')
        }
    }
    const t = useTranslations('Footer')

    const data = [
        { id: 1, loc: t('loc1'), number: '+48 732 851 456' },
        { id: 2, loc: t('loc2'), number: '+48 790 281 145' },
        { id: 3, loc: t('loc3'), number: '+48 730 638 088' },
        { id: 4, loc: t('loc4'), number: '+48 730 638 088' },
    ]
    return (
        <div className={c.footer__container}>
            <div className={c.footer}>
                <div className={c.footer__top}>
                    <Image
                        width={70}
                        height={66}
                        src="/footerLogo.png"
                        alt="atlantis logo"
                    />
                    <div className={c.footer__locs}>
                        {data.map((e) => (
                            <div key={e.id} className={c.footer__loc}>
                                <p className={c.footer__city}>{e.loc}</p>
                                <p className={c.footer__number}>{e.number}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={c.footer__bottom}>
                    {socials.map((l) => (
                        <button
                            key={l.name}
                            onClick={() => openLink(l.link)}
                            className={c.footer__link}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
