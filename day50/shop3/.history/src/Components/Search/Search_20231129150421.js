"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Search() {
     const { isHidden, setIsHidden } = useState(true);
     const handleOnClick = () => {
          setIsHidden(!isHidden);
     }
     return (
          <div>
               <button onClick={handleOnClick}>
                    <FaSearch />
               </button>
               {
                    !isHidden && (
                         <form action={addAction}>
                              <div className="from-group">
                                   <input type="text" placeholder="Tìm kiếm" />
                              </div>
                         </form>
                    )
               }
          </div>
     )
}
