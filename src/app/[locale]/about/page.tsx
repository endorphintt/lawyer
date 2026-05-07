import PagesTop from '@/components/pagesTop/PagesTop'
import c from './About.module.scss'
import Image from 'next/image'
import Reviews from '@/components/reviews/Reviews'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import Lawyers from '@/components/lawyers/Lawyers'
import { useTranslations } from 'next-intl'

const About = () => {
    const t = useTranslations('About')
    return (
        <div className={c.about}>
            <PagesTop
                title={t('pt_title')}
                subtitle={t('pt_desc')}
                contact={t('pt_button')}
                img="/pagesTopVika.png"
                width={358}
                height={565}
            />
            <div className={c.first}>
                <p className={c.first__p}>{t('text1')}</p>
                <div className={c.first__img}>
                    <Image
                        src="/aboutFirst.png"
                        alt="aboutFirst"
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>
            </div>
            <div className={c.second__container}>
                <div className={c.second}>
                    <div className={c.second__img}>
                        <Image
                            src="/aboutSecond.png"
                            alt="aboutSecond"
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </div>
                    <p className={c.second__p}>{t('text2')}</p>
                </div>
            </div>
            <div className={c.third}>
                <p className={c.third__p}>
                    {t('text3')} <br />
                    <br />
                    <p>{t('item1')}</p>
                    <br />
                    <p>{t('item2')}</p>
                    <br />
                    <p>{t('item3')}</p>
                    <br />
                    <p>{t('item4')}</p>
                    <br />
                    <p>{t('item5')}</p>
                    <br />
                    <p>{t('item6')}</p>
                </p>
                <div className={c.third__img}>
                    <Image
                        src="/aboutThird.png"
                        alt="aboutThird"
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>
            </div>
            <Lawyers />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default About
