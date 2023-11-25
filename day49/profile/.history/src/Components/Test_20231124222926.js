'use client'
import i18n from 'i18next'
export default function Test() {
     return (
          <div className="container">
               <button
                    onClick={() => i18n.changeLanguage("vi")}
               >onClick</button>
          </div>
     )
}
