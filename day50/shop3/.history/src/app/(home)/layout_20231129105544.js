import Header from '@/layout/Header/Header'
import Footer from '@/layout/Footer/Footer'

export default function layout({ children }) {
     return (
          <>
               <Header />
               <>
                    {children}
               </>
               <Footer />
          </>
     )
}
