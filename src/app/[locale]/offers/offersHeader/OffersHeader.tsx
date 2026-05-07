import { useTranslations } from 'next-intl'
import c from './OffersHeader.module.scss'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/app/animations'

interface Props {
    setId: (id: number) => void
    activeId: number
}

const OffersHeader: React.FC<Props> = ({ setId, activeId }) => {
    const t = useTranslations('OffersHeader')
    const data = [
        { id: 1, name: t('item1') },
        { id: 2, name: t('item2') },
        { id: 3, name: t('item3') },
        { id: 4, name: t('item4') },
        { id: 5, name: t('item5') },
        { id: 6, name: t('item6') },
        { id: 7, name: t('item7') },
        { id: 8, name: t('item8') },
        { id: 9, name: t('item9') },
        { id: 10, name: t('item10') },
    ]
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={opacityAnimation}
            className={c.header__container}
        >
            <div className={c.header}>
                {data.map((b) => (
                    <button
                        style={{
                            backgroundColor:
                                activeId == b.id
                                    ? 'rgba(23, 100, 189, 0.17)'
                                    : '#132b47',
                            color: activeId == b.id ? '#132b47' : 'white',
                        }}
                        onClick={() => setId(b.id)}
                        key={b.id}
                        className={c.header__button}
                    >
                        {b.name}
                    </button>
                ))}
            </div>
        </motion.div>
    )
}

export default OffersHeader
