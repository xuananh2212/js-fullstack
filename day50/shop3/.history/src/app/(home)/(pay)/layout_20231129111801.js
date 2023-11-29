import Footer from '@/layout/Footer/Footer'
import Header from '@/layout/Header/Header'
import React from 'react'

export default function layout({ children }) {
     return (
          <>
               <Header />
               <div>{children}</div>
               <Footer />
          </>
     )
}
