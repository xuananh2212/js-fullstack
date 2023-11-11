import { BsFillCalendarMinusFill } from "react-icons/bs";
import { toast } from 'react-toastify';
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
          toast.success("xoá Thành công")
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
