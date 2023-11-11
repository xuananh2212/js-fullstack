import { useEffect } from 'react';
import './Button.scss'
import useSelector from '../../Core/useSelector';
import MAX_TIME from '../../Utils/Config';
export default function Button() {
     const { dispatch } = useSelector();
     const handleClick = () => {
          dispatch({
               type: 'remaiming/reset',
               payLoad: MAX_TIME
          })
     }
     useEffect(() => {
          const handleFocus = (e) => {
               console.log(e.key);
          }
          window.addEventListener("keydown", handleFocus);
          return () => {
               window.removeEventListener("keydown", handleFocus);
          }
     }, [])

     return (
          <button
               className="btn"
               onClick={handleClick}
          >Chơi lại
          </button>
     )
}
