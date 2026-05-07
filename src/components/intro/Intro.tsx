'use client'

import { useEffect } from 'react'
import c from './Intro.module.scss'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { getFirstPathSegment } from '../header/Header'

const Intro = () => {
    const router = useRouter()
    const pathname = usePathname()
    const path = getFirstPathSegment(pathname)

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push(path + '/home')
        }, 6000)

        return () => clearTimeout(timer)
    }, [router])

    return (
        <div className={c.intro__container}>
            <div className={c.intro}>
                <div className={c.intro__images}>
                    <div className={c.intro__imgA}>
                        <Image
                            src={'/logoA.png'}
                            fill
                            alt="atlantis logo"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
