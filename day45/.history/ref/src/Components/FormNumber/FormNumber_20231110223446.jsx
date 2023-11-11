import React, { useLayoutEffect, useState } from 'react'
import './FormNumber.scss'

export default function FromNumber() {
     const [value, setValue] = useState();
     const handleChange = (e) => {
          console.log(e.target.value);
          setValue(e.target.value);
     }
     useLayoutEffect(() => {
          if (value === 99) {
               setValue(99);
          }
     }, [value])
     return (
          <form
               action=""
               className='form-number'
          >
               <div className="form-group">
                    <label htmlFor="number-random">
                         Hãy thử nhập một số
                         <input
                              type="number"
                              min={1}
                              max={99}
                              value={value}
                              id='number-random'
                              placeholder='Thử nhập một số'
                              onChange={handleChange}

                         />
                    </label>
               </div>
               <div className="form-group">
                    <button className='btn btn-check'>Kiểm tra</button>
               </div>

          </form>
     )
}
