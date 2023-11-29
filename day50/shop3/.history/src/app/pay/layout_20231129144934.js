import React from 'react'

export default function PayLayout({ chilren }) {
     return (
          <div>
               <header />
               <main>
                    {chilren}
               </main>
               <footer />
          </div>
     )
}
