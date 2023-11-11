import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import "./Theme.scss"
function Theme() {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
     const handleCheckTheme = (theme, background, color) => {
          localStorage.setItem("theme", theme);
          document.documentElement.style.background = background;
          document.documentElement.style.color = color;
     }
     const handleTheme = () => {
          console.log(document.body)
          if (theme === 'dark') {
               setTheme('light');
               handleCheckTheme('light', '#fff', 'black');

          } else {
               setTheme('dark');
               handleCheckTheme('dark', "#191d1ecf", "#fff");
          }
     }
     useEffect(() => {
          if (theme === 'dark') {
               handleCheckTheme('light', '#fff', 'black');

          } else {
               handleCheckTheme('dark', "#191d1ecf", "#fff");
          }


     }, [])
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