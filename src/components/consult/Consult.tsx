'use client'

import { AppDispatch } from '@/app/redux/store'
import c from './Consult.module.scss'
import { useDispatch } from 'react-redux'
import { toggleContact } from '@/app/redux/actions'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/app/animations'

const Consult = () => {
    const dispatch: AppDispatch = useDispatch()
    const t = useTranslations('Consult')
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={c.consult__container}
        >
            <motion.div
                variants={opacityAnimation}
                custom={1}
                className={c.consult}
            >
                <p>{t('consult')}</p>
                <button
                    onClick={() => dispatch(toggleContact())}
                    className={c.consult__button}
                >
                    <span></span>
                </button>
                <div className={c.consult__circle}></div>
            </motion.div>
        </motion.div>
    )
}

export default Consult
