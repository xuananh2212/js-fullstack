import { BsFillCalendarMinusFill } from "react-icons/bs";
import './ListPlays.scss'
import useSelector from '../../Core/useSelector';
import PlayItems from '../PlayItems/PlayItems';
export default function ListPlays() {
     const { state: { listPlays }, dispatch } = useSelector();
     const handleRemoveListPlays = () => {
          dispatch({
               type: "listPlays/removeAll"
          })
          localStorage.removeItem("array");

     }
     return (

          listPlays?.length > 0 &&
          (
               <div className="list-plays-wrap">
                    <ul
                         className='list-plays'>
                         {
                              listPlays.map((playItems, index) =>
                                   <PlayItems key={index}
                                        numberPlay={index}
                                        sumNumberPlay={listPlays.length}
                                        playItems={playItems}
                                   />)
                         }

                    </ul>
                    <button
                         className="icon-wrap"
                         onClick={handleRemoveListPlays}
                    >
                         <BsFillCalendarMinusFill className="icon-remve" />
                    </button>

               </div>
          )



     )
}
