import React from 'react'

import useSelector from './Core/useSelector';
export default function Button() {
     const { state: { remaining } } = useSelector();
     console.log(remaining);
     return (
          <button className={remaining === 0 ? "btn show" : "btn"}></button>
     )
}
