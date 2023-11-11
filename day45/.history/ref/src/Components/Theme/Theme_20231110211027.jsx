import React from 'react'
import { CiLight } from "react-icons/ai";
import useSelector from '../../Core/useSelector.js'
export default function Theme() {
     const data = useSelector();
     console.log(data);
     return (
          <button></button>
     )
}
