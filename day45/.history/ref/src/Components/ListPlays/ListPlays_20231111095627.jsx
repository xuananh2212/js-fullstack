import React from 'react'

import './ListPlays.scss'
import useSelector from '../../Core/useSelector';
import PlayItems from '../PlayItems/PlayItems';
export default function ListPlays() {
     const { state: { listPlays } } = useSelector();
     return (
          <ul className='list-plays'>
               {listPlays?.length > 0 && listPlays.map((playItems, index) =>
                    <PlayItems key={index}
                         numberPlay={index + 1}
                         sumNumberPlay={listPlays.length}
                         playItems={playItems}
                    />)}
          </ul>
     )
}
