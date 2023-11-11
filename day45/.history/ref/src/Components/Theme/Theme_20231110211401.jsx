import React from 'react'
import { CiLight, MdDarkMode } from "react-icons/ai";
import useSelector from '../../Core/useSelector.js'
export default function Theme() {
     const { state, dispatch } = useSelector();
     const { theme } = state;
     return (
          <button>
               {
                    theme === "dark" ? <MdDarkMode /> : <CiLight />
               }

          </button>
     )
}
