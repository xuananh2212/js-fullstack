import React from 'react'

import { useSelector } from '../../Core/useSelector';
export default function ListNumbers() {
     const { state: { ListNumberRandom } } = useSelector();
     return (
          <ul className='list-numbers'>

          </ul>
     )
}
