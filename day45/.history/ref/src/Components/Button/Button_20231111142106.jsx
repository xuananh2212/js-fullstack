import React from 'react'
import './Button.scss'
import useSelector from '../../Core/useSelector';
import MAX_TIME from '../../Utils/Config';
export default function Button() {
     const { state: { remaining }, dispatch } = useSelector();
     const handleClick = () => {
          dispatch({
               type: 'remaiming/reset',
               payLoad: MAX_TIME
          })
     }
     return (
          <button
               className="btn"
               onClick={handleClick}
          >Chơi lại
          </button>
     )
}
