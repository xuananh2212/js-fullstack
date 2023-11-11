import React from 'react'
import './Process.scss';
import useSelector from '../../Core/useSelector';
export default function Process() {
     const { state: { remaining } } = useSelector();

     return (
          <div className='process'>
               <span></span>
          </div>
     )
}
