import React, { useLayoutEffect, useState } from 'react'
import './FormNumber.scss'

export default function FromNumber() {
     const [value, setValue] = useState("");
     const handleChange = (e) => {
          setValue(e.target.value);
     }
     useLayoutEffect(() => {

          const regexNumber = /^[1-9]{1,2}$/;
          const regexNotNumber = /^[1-9]*$/
          if (value) {

               if (regexNumber.test(value)) {
                    setValue(value)
               } else {
                    if (regexNotNumber.value) {
                         setValue("")
                    } else {
                         const valueNew = Math.floor(value / 10);
                         setValue(valueNew)
                    }
               }
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
