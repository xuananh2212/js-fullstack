import React, { useLayoutEffect, useState } from 'react'
import './FormNumber.scss'

export default function FromNumber() {
     const [value, setValue] = useState("");
     const handleChange = (e) => {
          console.log(e.target);
          console.log(e.target.key);
          setValue(e.target.value);
     }
     useLayoutEffect(() => {
          console.log(value);
          const regexNumber = /^[1-9]{1,2}$/;
          const regexNotNumber = /^[1-9]*$/
          if (value) {
               if (regexNumber.test(value)) {
                    console.log(1);
                    setValue(value)
               } else {
                    if (regexNotNumber.value) {
                         console.log(2);
                         setValue("")
                    } else {
                         console.log(3);
                         const valueNew = Math.floor(value / 10);
                         setValue(valueNew)
                    }
               }
          } else {
               setValue("");
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
                              type="text"
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
