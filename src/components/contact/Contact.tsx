'use client'

import c from './Contact.module.scss'
import Image from 'next/image'
import Form from './Form'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { blockToRightAnimation } from '@/app/animations'

const Contact = () => {
    const t = useTranslations('Contacts')

    const data = [
        {
            id: 1,
            location: t('location_1'),
            numberF: '+48732851456',
            address: 'ul. Sucha 2, 50-088',
            email: 'biuro@atlantis.info.pl',
        },
        {
            id: 2,
            location: t('location_2'),
            numberF: '+48790281145',
            address: 'al. Pokoju 18, 31-564',
            email: 'biuro@atlantis.info.pl',
        },
        {
            id: 3,
            location: t('location_3'),
            numberF: '+48730638088',
            email: 'biuro@atlantis.info.pl',
        },
    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={blockToRightAnimation}
            custom={1}
            id="contact"
            className={c.contact__container}
        >
            <p className={c.contact__title}>{t('title')}</p>
            <div className={c.contact}>
                <div className={c.contact__items}>
                    {data.map((e) => (
                        <div key={e.id} className={c.contact__item}>
                            <Image
                                src="/contactLoc.png"
                                width={50}
                                height={50}
                                alt="location"
                            />
                            <div className={c.contact__data}>
                                <p className={c.contact__loc}>{e.location}</p>
                                <p>{e.numberF}</p>
                                {e.address ? <p>{e.address}</p> : ''}
                                <p>{e.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={c.contact__form_container}>
                    <Form />
                </div>
                <div className={c.contact__img}>
                    <Image
                        src="/contactRight.png"
                        alt="lawyers"
                        layout="responsive"
                        width={523}
                        height={659}
                    />
                </div>
            </div>
            <div className={c.contact__block}></div>
        </motion.div>
    )
}

export default Contact
