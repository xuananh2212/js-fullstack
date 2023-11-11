import React from 'react'

import { useSelector } from '../../Core/useSelector';
export default function listPlays() {
     const { state: { ListPlays } } = useSelector();
     return (
          <ul className='list-plays'>
               { }
          </ul>
     )
}
