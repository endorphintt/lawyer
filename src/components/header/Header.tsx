'use client'

import c from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { links, lans } from '@/variables'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/redux/store'
import { toggleContact, toggleMenu } from '@/app/redux/actions'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export function getFirstPathSegment(path: string) {
    const segments = path.split('/').filter(Boolean)
    return segments.length > 0 ? `/${segments[0]}` : '/'
}

const Header = () => {
    const [scrollY, setScrollY] = useState(0)

    const dispatch: AppDispatch = useDispatch()
    const pathname = usePathname()
    const t = useTranslations('Header')

    function getLanguage(path: string) {
        const segments = path.split('/').filter(Boolean)
        return segments.length > 0 ? segments[0] : ''
    }

    const currentLan = getLanguage(pathname)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            style={{
                backgroundColor: scrollY > 30 ? '#ffffff' : 'transparent',
            }}
            className={c.header}
        >
            <div className={c.header__img}>
                <Image
                    width={70}
                    height={66}
                    src="/logo.png"
                    alt="reli logo"
                    priority
                />
            </div>

            <div className={c.header__links}>
                <Link
                    className={c.header__link}
                    href={getFirstPathSegment(pathname) + links[0].link}
                    passHref
                >
                    {t('main')}
                </Link>
                <Link
                    className={c.header__link}
                    href={getFirstPathSegment(pathname) + links[1].link}
                    passHref
                >
                    {t('offers')}
                </Link>
                <Link
                    className={c.header__link}
                    href={getFirstPathSegment(pathname) + links[2].link}
                    passHref
                >
                    {t('about')}
                </Link>
                <Link
                    className={c.header__link}
                    href={getFirstPathSegment(pathname) + links[3].link}
                    passHref
                >
                    {t('blog')}
                </Link>
                <button
                    onClick={() => dispatch(toggleContact())}
                    className={c.header__link}
                >
                    {t('contact')}
                </button>
            </div>
            <div className={c.header__lans}>
                {lans.map((lan) => (
                    <Link
                        key={lan.name}
                        className={c.header__lan}
                        href={'/' + lan.name.toLowerCase()}
                        passHref
                    >
                        <span
                            style={{
                                backgroundColor:
                                    lan.name.toLowerCase() === currentLan
                                        ? '#132b47'
                                        : 'transparent',
                                color:
                                    lan.name.toLowerCase() === currentLan
                                        ? 'white'
                                        : '#132b47',
                            }}
                        >
                            {lan.name}
                        </span>
                        {lan.name != 'EN' ? '/' : ''}
                    </Link>
                ))}
            </div>
            <div
                onClick={() => dispatch(toggleMenu())}
                className={c.header__icon}
            ></div>
        </header>
    )
}

export default Header
