import React from 'react'
import { CiLight } from "react-icons/ai";
import useSelector from '../../Core/useSelector.js'
export default function Theme() {
     const { state, dispatch } = useSelector();
     const { theme } = state;
     console.log(theme);
     return (
          <button></button>
     )
}
