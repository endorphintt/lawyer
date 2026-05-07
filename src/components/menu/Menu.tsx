'use client'

import c from './Menu.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '@/variables'
import { TOGGLE_MENU } from '@/app/redux/consts'
import { RootState } from '@/app/redux/store' // Використовуємо RootState
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const Menu = () => {
    const isOpen = useSelector((state: RootState) => state.menu.isOpen) // Використовуємо RootState
    const dispatch = useDispatch()
    const t = useTranslations('Header')

    const pathname = usePathname()
    function getFirstPathSegment(path: string) {
        const segments = path.split('/').filter(Boolean)
        return segments.length > 0 ? `/${segments[0]}` : '/'
    }

    return (
        <div
            className={c.menu}
            style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
            }}
        >
            <div className={c.menu__header}>
                <Image
                    className={c.header__logo}
                    src="/logo.png"
                    width={67}
                    height={70}
                    alt="logo"
                />
                <button
                    className={c.menu__cancel}
                    onClick={() => dispatch({ type: TOGGLE_MENU })}
                ></button>
            </div>
            <div className={c.menu__links}>
                {links.map((link) => (
                    <Link
                        key={link.link}
                        href={getFirstPathSegment(pathname) + link.link}
                        passHref
                    >
                        <button
                            onClick={() => dispatch({ type: TOGGLE_MENU })}
                            className={c.menu__link}
                        >
                            {t(link.name)}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Menu
