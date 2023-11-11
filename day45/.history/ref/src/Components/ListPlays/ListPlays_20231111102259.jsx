import React from 'react'

import './ListPlays.scss'
import useSelector from '../../Core/useSelector';
import PlayItems from '../PlayItems/PlayItems';
export default function ListPlays() {
     const { state: { listPlays } } = useSelector();
     return (

          listPlays?.length > 0 &&
          (
               <ul
                    className='list-plays'>
                    {
                         listPlays.map((playItems, index) =>
                              <PlayItems key={index}
                                   numberPlay={index + 1}
                                   sumNumberPlay={listPlays.length}
                                   playItems={playItems}
                              />)}


               </ul>
          )



     )
}
