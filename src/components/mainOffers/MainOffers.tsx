'use client'

import c from './MainOffers.module.scss'
import { getFirstPathSegment } from '../header/Header'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { blockToLeftAnimation } from '@/app/animations'

const MainOffers = () => {
    const pathname = usePathname()
    const t = useTranslations('MainOffers')

    const data = [
        {
            id: 1,
            title: t('offer1_title'),
            description: t('offer1_description'),
        },
        {
            id: 2,
            title: t('offer2_title'),
            description: t('offer2_description'),
        },
        {
            id: 3,
            title: t('offer3_title'),
            description: t('offer3_description'),
        },
        {
            id: 4,
            title: t('offer4_title'),
            description: t('offer4_description'),
        },
        {
            id: 5,
            title: t('offer5_title'),
            description: t('offer5_description'),
        },
        {
            id: 6,
            title: t('offer6_title'),
            description: t('offer6_description'),
        },
        {
            id: 7,
            title: t('offer7_title'),
            description: t('offer7_description'),
        },
        {
            id: 8,
            title: t('offer8_title'),
            description: t('offer8_description'),
        },
        {
            id: 9,
            title: t('offer9_title'),
            description: t('offer9_description'),
        },
        {
            id: 10,
            title: t('offer10_title'),
            description: t('offer10_description'),
        },
    ]
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={c.offers__container}
        >
            <div className={c.offers}>
                <h2 className={c.offers__title}>{t('title')}</h2>
                <div className={c.offers__items}>
                    {data.map((e) => (
                        <motion.div
                            variants={blockToLeftAnimation}
                            custom={1}
                            key={e.id}
                            className={c.item__container}
                        >
                            <div className={c.item}>
                                <p className={c.item__title}>
                                    {e.title} <span></span>
                                </p>
                                <p className={c.item__description}>
                                    {e.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <Link
                    href={getFirstPathSegment(pathname) + '/offers'}
                    className={c.offers__more}
                >
                    {t('more')} <span></span>
                </Link>
            </div>
        </motion.div>
    )
}

export default MainOffers
