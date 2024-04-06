import React from 'react'
import { useTranslation } from 'react-i18next'
import Login from '../Login/Login'
import Register from '../Register/Register'
import i18next from 'i18next'
 


// const lngs={
//     en:{nativeName:"English"},
//     fr:{nativeName:"French"}
// }

export default function LogRegTranslation() {
    
    const { t,i18n}=useTranslation()

    const changingLanguage=(lng)=>{
        i18n.changeLanguage(lng)
    }

  return (
  <>
  <div>
        <button id='btn' onClick={()=>changingLanguage('en')}>English</button>
        <button id='btn' onClick={()=>changingLanguage('fr')}>French</button>
        <button id='btn' onClick={()=>changingLanguage('tel')}>Telugu</button>

    </div>
    
    
    </>
  )
}
