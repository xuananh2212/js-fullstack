import React from 'react'

export default function PayLayout({ chilren }) {
     return (
          <div>
               <header> header<header />
                    <main>
                         {chilren}
                    </main>
                    <footer> footer</footer>
          </div>
     )
}
