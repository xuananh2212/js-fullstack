'use client'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import translationVie from '../../../public/assets/vi/translation.json'
import translationEn from '../../../public/assets/en/translation.json'
import clsx from "clsx"
import styles from './ProFile.module.scss';
const handleCheckLang = () => {
     const arrayLang = ['en', 'vi'];
     if (!localStorage.getItem('lang') || !arrayLang.includes(localStorage.getItem('lang'))) {
          return 'vi'
     } else {
          return localStorage.getItem('lang');
     }
}
i18n
     .use(initReactI18next)
     .init({
          resources: {
               en: {
                    translation: translationEn
               },
               vi: {
                    translation: translationVie
               }
          },
          lng: handleCheckLang(),
          fallbackLng: "en",
          interpolation: {
               escapeValue: false
          }
     });
export default function ProFile() {
     return (
          <div className={clsx(styles.proFile)}>
               <div className="container">
                    <div className={clsx(styles.proFileWrap)}>


                    </div>
               </div>
          </div>
     )
}
