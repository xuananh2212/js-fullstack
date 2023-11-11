import React from 'react'

import useSelector from './Core/useSelector';
export default function Button() {
     const { state: { remaining } } = useSelector();
     console.log(remaining);
     return (
          <button className={ }></button>
     )
}
