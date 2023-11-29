"use client"
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss"
import { useRouter } from "next/navigation";
export default function Search() {
     const router = useRouter();
     const [isHidden, setIsHidden] = useState(true);
     const inputRef = useRef(null);
     const handleOnClick = () => {
          setIsHidden(!isHidden);
     }
     const addAction = (formData) => {
          console.log(formData);
          const name = formData.get("name");
          router.push(`/pages?q=${name}`)
          inputRef.current.value = "";
          setIsHidden(!isHidden);
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
                                        <input
                                             ref={inputRef}
                                             name="name"
                                             type="text"
                                             placeholder="Tìm kiếm" />
                                   </div>
                              </form>
                         </div>
                    )
               }
          </div>
     )
}
