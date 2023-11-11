import React, { useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import "./Theme.scss"
function Theme() {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
     const handleTheme = () => {
          console.log(document.body)
          if (theme === 'dark') {
               setTheme('light');
               document.body.styles = `
                    backgroundColor: "#fff",
                    color: "black"`;

          } else {
               setTheme('dark');
               document.body.styles = `
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