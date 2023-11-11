import React from 'react'

import { useSelector } from '../../Core/useSelector';
export default function listPlays() {
     const { state: { listPlays } } = useSelector();
     return (
          <ul className='list-plays'>
               {listPlays?.length > 0 && listPlays.map((playItems) =>
                    <li playItems={playItems}></li>)}
          </ul>
     )
}
