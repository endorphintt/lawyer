'use client'

import { AppDispatch } from '@/app/redux/store'
import c from './Lawyers.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleContact } from '@/app/redux/actions'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/app/animations'

const Lawyers = () => {
    const t = useTranslations('Lawyers')
    const items = [
        {
            id: 1,
            img: '/law1.png',
            text: [
                t('item_first_text_1'),
                t('item_first_text_2'),
                t('item_first_text_3'),
            ],
        },
        {
            id: 2,
            img: '/law2.png',
            text: [
                t('item_second_text_1'),
                t('item_second_text_2'),
                t('item_second_text_3'),
            ],
        },
        {
            id: 3,
            img: '/law3.png',
            text: [
                t('item_third_text_1'),
                t('item_third_text_2'),
                t('item_third_text_3'),
            ],
        },
    ]
    const dispatch: AppDispatch = useDispatch()
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={opacityAnimation}
            className={c.law__container}
        >
            <div className={c.law}>
                <div className={c.law__left}>
                    <p className={c.law__title}>{t('title')}</p>
                    <Image
                        src="/lawLeft.png"
                        width={73}
                        height={73}
                        alt="hammer"
                    />
                    <button
                        onClick={() => dispatch(toggleContact())}
                        className={c.law__button}
                    >
                        {t('contact')} <span></span>
                    </button>
                </div>
                <div className={c.law__right}>
                    <Image
                        src="/lawRight.png"
                        alt="lawyers"
                        layout="responsive"
                        width={523}
                        height={659}
                    />
                </div>
                <div className={c.law__items}>
                    {items.map((e) => (
                        <div key={e.id} className={c.law__item}>
                            <Image
                                src={e.img}
                                width={50}
                                height={50}
                                alt={e.img}
                            />
                            {e.text.map((t) => (
                                <p key={t}>{t}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Lawyers
