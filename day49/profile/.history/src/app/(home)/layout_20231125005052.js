import Header from "@/Components/Header/Header";

export default function HomeLayout({ children }) {
     return (
          <>
               <Header />
               <main>
                    {children}
               </main>
          </>

     )
}
