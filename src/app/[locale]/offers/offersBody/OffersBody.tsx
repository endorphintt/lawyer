'use client'

import { motion } from 'framer-motion'
import { Offer } from '../page'
import c from './OffersBody.module.scss'
import Image from 'next/image'
import { blockToRightAnimation, opacityAnimation } from '@/app/animations'

interface Props {
    data: Offer
}

const OffersBody: React.FC<Props> = ({ data }) => {
    return (
        <motion.div
            variants={opacityAnimation}
            initial="hidden"
            whileInView="visible"
            className={c.body}
        >
            <motion.h2 variants={opacityAnimation} className={c.body__title}>
                {data.title}
            </motion.h2>
            <div className={c.top__container}>
                <motion.div
                    variants={blockToRightAnimation}
                    custom={1}
                    className={c.top}
                >
                    <div className={c.top__img}>
                        <Image
                            src={data.img}
                            alt={data.img}
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                    <div className={c.top__info}>
                        <p className={c.top__text}>{data.description}</p>
                        <div className={c.top__items}>
                            {data.items[0] != '' ? (
                                data.items.map((e) => (
                                    <p key={e} className={c.top__item}>
                                        {e}
                                    </p>
                                ))
                            ) : (
                                <span></span>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className={c.chats}>
                {data.chats.map((e) => (
                    <div key={e.id} className={c.chats__chat}>
                        <p className={c.chats__question}>{e.question}</p>
                        <p className={c.chats__answer}>{e.answer}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default OffersBody
