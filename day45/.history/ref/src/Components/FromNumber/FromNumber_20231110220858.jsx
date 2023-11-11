import React from 'react'

export default function FromNumber() {
     return (
          <form
               action=""
               className='from-number'
          >
               <div className="group-form">
                    <label htmlFor="number-random">
                         <input type="number" placeholder='thử nhập một số' />
                    </label>
               </div>
               <div className="group-form">
                    <button className='btn btn-check'>Kiểm tra</button>
               </div>

          </form>
     )
}
