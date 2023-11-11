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
               if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+e.key)) {
                    input.current.focus();
               }
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
