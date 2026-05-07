import MainTop from '@/components/mainTop/MainTop'
import c from './Home.module.scss'
import Consult from '@/components/consult/Consult'
import MainOffers from '@/components/mainOffers/MainOffers'
import Lawyers from '@/components/lawyers/Lawyers'
import Reviews from '@/components/reviews/Reviews'
import MainAbout from '@/components/mainAbout/MainAbout'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'

const Home = () => {
    return (
        <div className={c.main}>
            <MainTop />
            <Consult />
            <MainOffers />
            <Lawyers />
            <Reviews />
            <MainAbout />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
