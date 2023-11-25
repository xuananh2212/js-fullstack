'use client'
import i18n from 'i18next'
import { useState } from 'react'
export default function Test() {
     const [language, setlanguage] = useState("vi");
     return (
          <div className="container">
               <button
                    onClick={() => {
                         if (language === "vi") {
                              i18n.changeLanguage("en")
                              setlanguage("en")
                         } else {
                              i18n.changeLanguage("vi")
                              setlanguage("vi")
                         }

                    }}
               >onClick</button>
          </div>
     )
}
