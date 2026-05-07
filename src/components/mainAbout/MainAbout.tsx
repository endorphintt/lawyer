'use client'

import { usePathname } from 'next/navigation'
import c from './MainAbout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { getFirstPathSegment } from '../header/Header'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/app/animations'

const MainAbout = () => {
    const pathname = usePathname()
    const t = useTranslations('HomeAbout')
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={c.about__container}
        >
            <div className={c.about}>
                <motion.div
                    variants={opacityAnimation}
                    className={c.about__left}
                >
                    <Image
                        src="/mainAbout.png"
                        width={70}
                        height={66}
                        alt="logo"
                    />

                    <p className={c.about__text}>{t('text')}</p>
                    <div className={c.about__button_container}>
                        <Link
                            href={getFirstPathSegment(pathname) + '/about'}
                            className={c.about__button}
                        >
                            {t('more')} <span></span>
                        </Link>
                    </div>
                </motion.div>
                <div className={c.about__right}>
                    <Image
                        src="/mainAboutPhoto.png"
                        alt="atlantis team"
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default MainAbout
