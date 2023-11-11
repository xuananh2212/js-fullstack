import React, { useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import "./Theme.scss"
function Theme() {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
     const handleTheme = () => {
          console.log(document.documentElement)
          if (theme === 'dark') {
               setTheme('light');
               document.documentElement.style = `
               backgroundColor: "#fff",
               color: "black"`;

          } else {
               setTheme('dark');
               document.documentElement.style = `
               backgroundColor: "#191d1e",
                    color: "#fff"`
          }
     }
     return (
          <button
               className='theme'
               onClick={handleTheme}
          >
               {
                    theme === 'dark' ?
                         <MdDarkMode className='dark' />
                         :
                         <CiLight className='light' />
               }

          </button>
     )
}

export default React.memo(Theme);