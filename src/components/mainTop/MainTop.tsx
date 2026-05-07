'use client'

import c from './MainTop.module.scss'
import TopSlider from './TopSlider'
import { getFirstPathSegment } from '../header/Header'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/app/animations'

const MainTop = () => {
    const pathname = usePathname()
    const t = useTranslations('MainTop')

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={opacityAnimation}
            className={c.top}
        >
            <p className={c.top__text}>ATLANTIS</p>
            <TopSlider />
            <Link
                href={getFirstPathSegment(pathname) + '/offers'}
                className={c.top__scroll}
            >
                <div className={c.top__arrow}></div>
                <p>{t('find')}</p>
            </Link>
        </motion.div>
    )
}

export default MainTop
