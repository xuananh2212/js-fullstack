'use client'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
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
  return (
    <main>
      <div>
        <h2>{t('Welcome to React')}</h2>;
        <h1>Học Lập trình F8</h1>
        <button
          onClick={i18n.changeLanguage(code)}
        >onClick</button>
      </div>
    </main>
  )
}
