'use client'
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
// import Test from '@/Components/Test';
i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      vi: {
        translation: {
          "Welcome to React": "Chào mừng bạn"
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
        <h1>{t('Welcome to React')}</h1>
        {/* <Test /> */}
      </div>
    </main>
  )
}
