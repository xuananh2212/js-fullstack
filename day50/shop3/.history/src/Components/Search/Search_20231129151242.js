"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss"
export default function Search() {
     const [isHidden, setIsHidden] = useState(true);
     const handleOnClick = () => {
          setIsHidden(!isHidden);
     }
     const addAction = (formData) => {
          console.log(formData);

     }
     return (
          <div className={styles.search}>
               <button onClick={handleOnClick}>
                    <FaSearch className="icon" />
               </button>
               {
                    !isHidden && (
                         <div className={styles.formSearch}>
                              <form action={addAction}>
                                   <div className="from-group">
                                        <input type="text" placeholder="Tìm kiếm" />
                                   </div>
                              </form>
                         </div>
                    )
               }
          </div>
     )
}
