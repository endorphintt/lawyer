'use client'

import { useState, useEffect } from 'react'
import c from './MainTop.module.scss'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { blockToLeftAnimation } from '@/app/animations'

const TopSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const t = useTranslations('MainTop')

    const slides = [
        t('slide1'),
        t('slide2'),
        t('slide3'),
        t('slide4'),
        t('slide5'),
    ]

    // Змінювати слайд кожні 3 секунди
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    // Обробник натискання на риску
    const handleDotClick = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={blockToLeftAnimation}
            custom={1}
            className={c.slider}
        >
            {/* Хедер з рисками */}
            <div className={c.slider__header}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${c.slider__dot} ${
                            index === currentSlide ? c.active : ''
                        }`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>

            {/* Виведення активного надпису */}
            <div className={c.slider__text}>{slides[currentSlide]}</div>
        </motion.div>
    )
}

export default TopSlider
