import Header from '../../layout/Header'

export default function layout({ children }) {
     return (
          <>
               <Header />
               <main>
                    {children}
               </main>
          </>
     )
}
