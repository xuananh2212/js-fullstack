import React from 'react'
import './Button.scss'
import useSelector from '../../Core/useSelector';
export default function Button() {
     const { state: { remaining }, dispatch } = useSelector();
     const handleClick = () => {

     }
     return (
          <button
               className={remaining === 0 ?
                    "btn btn-again is-show" :
                    "btn btn-again"}
               onClick={handleClick}
          >Chơi lại
          </button>
     )
}
