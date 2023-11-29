"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Search() {
     const { isHidden, setIsHidden } = useState();
     return (
          <button>
               <FaSearch />
          </button>
     )
}
