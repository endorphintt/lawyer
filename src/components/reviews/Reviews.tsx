'use client'

import React, { useEffect, useRef, useState } from 'react'
import c from './Reviews.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { blockToLeftAnimation } from '@/app/animations'

const data = [
    { id: 1, src: '/reviews1.png' },
    { id: 2, src: '/reviews2.png' },
    { id: 3, src: '/reviews3.png' },
    { id: 4, src: '/reviews4.png' },
    { id: 5, src: '/reviews5.png' },
    { id: 6, src: '/reviews6.png' },
    { id: 7, src: '/reviews7.png' },
    { id: 8, src: '/reviews8.png' },
    { id: 9, src: '/reviews9.png' },
    { id: 10, src: '/reviews10.png' },
]

const Reviews = () => {
    const [active, setActive] = useState(2)
    const divRef = useRef<HTMLDivElement | null>(null)
    const [width, setWidth] = useState(0)
    const t = useTranslations('Reviews')

    useEffect(() => {
        const handleResize = () => {
            if (divRef.current) {
                setWidth(divRef.current.getBoundingClientRect().width)
            }
        }
        handleResize()
        if (width < 500) {
            setActive(1)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleSlide = (b: boolean) => {
        const length = data.length
        if (b === true && active != length) {
            setActive(active + 1)
        } else if (b === false && active != 1) {
            setActive(active - 1)
        }
        console.log(active)
    }

    const getSlideWidth = () => {
        if (width >= 1200) {
            return 400
        } else if (width < 1200 && width >= 800) {
            return 260
        } else {
            return 300
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={blockToLeftAnimation}
            ref={divRef}
            className={c.rev__container}
        >
            <p className={c.rev__title}>{t('title')}</p>
            <div className={c.rev}>
                <div className={c.rev__line_container}>
                    <div
                        className={c.rev__line}
                        style={{
                            transform:
                                width < 800
                                    ? `translate(${
                                          -(active - 1) * getSlideWidth()
                                      }px)`
                                    : `translate(${
                                          -(active - 2) * getSlideWidth()
                                      }px)`,
                        }}
                    >
                        {data.map((e) => (
                            <div
                                style={{
                                    scale: e.id !== active ? '0.7' : '1',
                                }}
                                key={e.id}
                                className={c.rev__item}
                            >
                                <Image
                                    src={e.src}
                                    alt={e.src}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => handleSlide(false)}
                        className={c.rev__left}
                    >
                        <span></span>
                    </button>
                    <button
                        onClick={() => handleSlide(true)}
                        className={c.rev__right}
                    >
                        <span></span>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default Reviews
