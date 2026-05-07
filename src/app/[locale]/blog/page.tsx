'use client'

import PagesTop from '@/components/pagesTop/PagesTop'
import c from './Blog.module.scss'
import Lawyers from '@/components/lawyers/Lawyers'
import Reviews from '@/components/reviews/Reviews'
import Contact from '@/components/contact/Contact'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { data } from './data'
import { opacityAnimation } from '@/app/animations'
import { usePathname } from 'next/navigation'
import { getFirstPathSegment } from '@/components/header/Header'
import { useTranslations } from 'next-intl'
import Footer from '@/components/footer/Footer'

const Blog = () => {
    const t = useTranslations('Blog')
    const pathname = usePathname()
    return (
        <div className={c.blog}>
            <PagesTop
                title={t('pt_title')}
                subtitle={t('pt_desc')}
                contact={t('pt_button')}
                img="/pagesTop3.png"
                width={344}
                height={611}
            />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={opacityAnimation}
                custom={1}
                className={c.blog__items}
            >
                {data.map((e) => (
                    <Link
                        key={e.id}
                        href={getFirstPathSegment(pathname) + '/blog/' + e.id}
                        className={c.blog__item}
                    >
                        <Image
                            src={e.img}
                            alt="umowaRez.jpg"
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                        <p>{e.title}</p>
                    </Link>
                ))}
            </motion.div>
            <Lawyers />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Blog
