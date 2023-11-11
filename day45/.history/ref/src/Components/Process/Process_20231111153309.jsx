import React from 'react'
import './Process.scss';
import useSelector from '../../Core/useSelector';
import MAX_TIME from '../../Utils/Config';
export default function Process() {
     const { state: { remaining } } = useSelector();


     return (
          <div className='process'>
               <span style={{ width: `${remaining * 100 / MAX_TIME}%` }} ></span>
          </div>
     )
}
