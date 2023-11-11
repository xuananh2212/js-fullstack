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
               document.documentElement.styles = `
                    backgroundColor: "#fff",
                    color: "black"`;

          } else {
               setTheme('dark');
               document.documentElement.styles = `
                    backgroundColor: "#191d1e",
                    color: "#fff"`
          }
          console.log(1);
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