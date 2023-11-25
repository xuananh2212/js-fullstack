'use client'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import translationVie from '../../public/assets/fr/translation.json'
import translationEn from '../../public/assets/fr/translation.json'
console.log(translationVie, translationEn)
import Test from '@/Components/Test';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      vi: {
        translation: {
          "Welcome to React": "dm"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
export default function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <div>
        <h2>{t('Welcome to React')}</h2>;
        <h1>Học Lập trình F8</h1>
        {/* <button
          onClick={() => i18n.changeLanguage("vi")}
        >onClick</button> */}
        <Test />
      </div>
    </main>
  )
}
