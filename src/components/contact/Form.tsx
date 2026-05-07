'use client'

import { useTranslations } from 'next-intl'
import c from './Contact.module.scss'
import { useForm, ValidationError } from '@formspree/react'

const Form = () => {
    const [state, handleSubmit] = useForm('mvonerba')
    const t = useTranslations('Contacts')

    if (state.succeeded) {
        alert('success')
    }

    return (
        <form className={c.form} onSubmit={handleSubmit}>
            <p className={c.form__description}>{t('desc')}</p>
            <div className={c.form__item}>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Jan Kowalski"
                />
                <ValidationError
                    prefix="Full Name"
                    field="fullName"
                    errors={state.errors}
                />
            </div>
            <div className={c.form__item}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Jankowalski@gmail.com"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className={c.form__item}>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+48 000 000 000"
                />
                <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                />
            </div>
            <div className={c.form__item}>
                <p> {t('question')}</p>
                <textarea id="message" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                className={c.form__button}
                type="submit"
                disabled={state.submitting}
            >
                {t('button')}
            </button>
        </form>
    )
}

export default Form
