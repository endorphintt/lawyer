'use client'

import PagesTop from '@/components/pagesTop/PagesTop'
import c from './Offers.module.scss'
import { useState } from 'react'
import OffersHeader from './offersHeader/OffersHeader'
import OffersBody from './offersBody/OffersBody'
import Lawyers from '@/components/lawyers/Lawyers'
import Reviews from '@/components/reviews/Reviews'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import { useTranslations } from 'next-intl'

export interface Offer {
    id: number
    img: string
    title: string
    description: string
    items: string[]
    chats: Chat[]
}

export interface Chat {
    id: number
    question: string
    answer: string
}

const Offers = () => {
    const [activeNumber, setActiveNumber] = useState<number>(1)
    const t = useTranslations('Offers')
    const data: Offer[] = [
        {
            id: 1,
            img: '/offers1.png',
            title: t('offer1_title'),
            description: t('offer1_description'),
            items: [
                t('offer1_item1'),
                t('offer1_item2'),
                t('offer1_item3'),
                t('offer1_item4'),
            ],
            chats: [
                {
                    id: 1,
                    question: t('offer1_chat1_question'),
                    answer: t('offer1_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer1_chat2_question'),
                    answer: t('offer1_chat2_answer'),
                },
            ],
        },
        {
            id: 2,
            img: '/offers2.png',
            title: t('offer2_title'),
            description: t('offer2_description'),
            items: [
                t('offer2_item1'),
                t('offer2_item2'),
                t('offer2_item3'),
                t('offer2_item4'),
            ],
            chats: [
                {
                    id: 1,
                    question: t('offer2_chat1_question'),
                    answer: t('offer2_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer2_chat2_question'),
                    answer: t('offer2_chat2_answer'),
                },
            ],
        },
        {
            id: 3,
            img: '/offers3.png',
            title: t('offer3_title'),
            description: t('offer3_description'),
            items: [
                t('offer3_item1'),
                t('offer3_item2'),
                t('offer3_item3'),
                t('offer3_item4'),
            ],
            chats: [
                {
                    id: 1,
                    question: t('offer3_chat1_question'),
                    answer: t('offer3_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer3_chat2_question'),
                    answer: t('offer3_chat2_answer'),
                },
            ],
        },
        {
            id: 4,
            img: '/offers4.png',
            title: t('offer4_title'),
            description: t('offer4_description'),
            items: [
                t('offer4_item1'),
                t('offer4_item2'),
                t('offer4_item3'),
                t('offer4_item4'),
            ],
            chats: [
                {
                    id: 1,
                    question: t('offer4_chat1_question'),
                    answer: t('offer4_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer4_chat2_question'),
                    answer: t('offer4_chat2_answer'),
                },
            ],
        },
        {
            id: 5,
            img: '/offers5.png',
            title: t('offer5_title'),
            description: t('offer5_description'),
            items: [
                t('offer5_item1'),
                t('offer5_item2'),
                t('offer5_item3'),
                t('offer5_item4'),
            ],
            chats: [
                {
                    id: 1,
                    question: t('offer5_chat1_question'),
                    answer: t('offer5_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer5_chat2_question'),
                    answer: t('offer5_chat2_answer'),
                },
            ],
        },
        {
            id: 6,
            img: '/offers6.png',
            title: t('offer6_title'),
            description: t('offer6_description'),
            items: [t('offer6_item1'), t('offer6_item2'), t('offer6_item3')],
            chats: [
                {
                    id: 1,
                    question: t('offer6_chat1_question'),
                    answer: t('offer6_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer6_chat2_question'),
                    answer: t('offer6_chat2_answer'),
                },
            ],
        },
        {
            id: 7,
            img: '/offers7.png',
            title: t('offer7_title'),
            description: t('offer7_description'),
            items: [t('offer7_item1'), t('offer7_item2')],
            chats: [
                {
                    id: 1,
                    question: t('offer7_chat1_question'),
                    answer: t('offer7_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer7_chat2_question'),
                    answer: t('offer7_chat2_answer'),
                },
            ],
        },
        {
            id: 8,
            img: '/offers8.png',
            title: t('offer8_title'),
            description: t('offer8_description'),
            items: [t('offer8_item1'), t('offer8_item2')],
            chats: [
                {
                    id: 1,
                    question: t('offer8_chat1_question'),
                    answer: t('offer8_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer8_chat2_question'),
                    answer: t('offer8_chat2_answer'),
                },
            ],
        },
        {
            id: 9,
            img: '/offers9.png',
            title: t('offer9_title'),
            description: t('offer9_description'),
            items: [t('offer9_item1'), t('offer9_item2')],
            chats: [
                {
                    id: 1,
                    question: t('offer9_chat1_question'),
                    answer: t('offer9_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer9_chat2_question'),
                    answer: t('offer9_chat2_answer'),
                },
            ],
        },
        {
            id: 10,
            img: '/offers10.png',
            title: t('offer10_title'),
            description: t('offer10_description'),
            items: [
                t('offer10_item1'),
                t('offer10_item2'),
                t('offer10_item3'),
                t('offer10_item4'),
                t('offer10_item5'),
            ],
            chats: [
                {
                    id: 1,
                    question: t('offer10_chat1_question'),
                    answer: t('offer10_chat1_answer'),
                },
                {
                    id: 2,
                    question: t('offer10_chat2_question'),
                    answer: t('offer10_chat2_answer'),
                },
            ],
        },
    ]

    const [activeOffer] = data.filter((offer) => offer.id === activeNumber)
    return (
        <div className={c.offers}>
            <PagesTop
                title={t('pt_title')}
                subtitle={t('pt_desc')}
                contact={t('pt_button')}
                img="/pagesTopVlad.png"
                width={362}
                height={595}
            />
            <OffersHeader activeId={activeNumber} setId={setActiveNumber} />
            <OffersBody data={activeOffer} />
            <Lawyers />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Offers
