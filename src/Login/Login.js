import React from 'react'
import {useTranslation} from 'react-i18next'


export default function Login() {




const {t}=useTranslation()
    return (



        <>
            <form >
                <h1 id='lo'>{t('login')}</h1>
                <div>
                    <input type="text" name="" id="loguser" placeholder={t('username')} pattern='^[a-zA-Z0-9_-]{3,16}$' />
                </div>
                <div>
                    <input type="password" id='logpass' placeholder={t('password')} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Password must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long" />
                </div>
                <div>
                    <button type='submit' id='login'>{t('submitLogin')}</button>
                </div>
            </form>
        </>
    )
}
