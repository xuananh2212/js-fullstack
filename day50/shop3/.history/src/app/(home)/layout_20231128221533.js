import Header from '@/layout/Header/Header'

export default function layout({ children }) {
     return (
          <>
               <Header />
               <main>
                    {children}
               </main>
               <Footer />
          </>
     )
}
