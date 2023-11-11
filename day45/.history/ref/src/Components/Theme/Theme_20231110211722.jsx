import React, { useState } from 'react'
import { CiLight, MdDarkMode } from "react-icons/ai";
import useSelector from '../../Core/useSelector.js'
export default function Theme() {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
     const handleTheme = 
     return (
          <button
               className='theme'
               onClick={handleTheme}
          >
               {
                    theme === "dark" ? <MdDarkMode /> : <CiLight />
               }

          </button>
     )
}
