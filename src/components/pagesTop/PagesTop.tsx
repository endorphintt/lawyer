'use client'

import { useDispatch } from 'react-redux'
import c from './PagesTop.module.scss'
import Image from 'next/image'
import { AppDispatch } from '@/app/redux/store'
import { toggleContact } from '@/app/redux/actions'
import { motion } from 'framer-motion'
import { blockToRightAnimation } from '@/app/animations'

interface Props {
    title: string
    subtitle: string
    contact: string
    img: string
    width: number
    height: number
}

const PagesTop: React.FC<Props> = ({
    title,
    subtitle,
    contact,
    img,
    width,
    height,
}) => {
    const dispatch: AppDispatch = useDispatch()
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={c.top__container}
        >
            <div className={c.top}>
                <motion.div
                    variants={blockToRightAnimation}
                    className={c.top__left}
                >
                    <h2 className={c.top__title}>{title}</h2>
                    <p className={c.top__subtitle}>{subtitle}</p>
                    <button
                        onClick={() => dispatch(toggleContact())}
                        className={c.top__button}
                    >
                        {contact} <span></span>
                    </button>
                </motion.div>
                <div
                    style={{ width: width, height: height }}
                    className={c.top__right}
                >
                    <Image
                        src={img}
                        alt={img}
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

export default PagesTop
