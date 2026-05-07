'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { data, dataInterface } from '../data'
import c from './styles.module.scss'
import Contact from '@/components/contact/Contact'
import PagesTop from '@/components/pagesTop/PagesTop'
import Text from '@/components/text/Text'
import Lawyers from '@/components/lawyers/Lawyers'
import Reviews from '@/components/reviews/Reviews'
import Image from 'next/image'

export default function ItemId() {
    const [item, setItem] = useState<dataInterface | undefined>()
    const params = useParams()
    const getItem = (id: string): dataInterface | undefined => {
        return data.find((e) => e.id.toString() === id)
    }
    useEffect(() => {
        setItem(getItem(params.itemId.toString()))
    })
    return (
        <main className={c.blog}>
            <PagesTop
                title="Останні новини та актуальні теми у нашому блозі"
                subtitle="На сторінці блогу ви знайдете актуальні новини, експертні аналітики та корисні поради від нашої команди. Ми обговорюємо важливі теми, тенденції та зміни у сфері, що вас цікавлять."
                contact="КОНТАКТ"
                img="/pagesTop3.png"
                width={344}
                height={611}
            />
            {item ? (
                <div className={c.blog__item}>
                    <div className={c.blog__img}>
                        <Image
                            src={item.img}
                            alt="umowaRez.jpg"
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                    <p className={c.blog__title}>{item.title}</p>
                    <Text text={item.text} />
                </div>
            ) : (
                <span></span>
            )}
            <Lawyers />
            <Reviews />
            <Contact />
        </main>
    )
}
