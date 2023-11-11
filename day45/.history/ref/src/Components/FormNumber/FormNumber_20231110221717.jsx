import React from 'react'

export default function FromNumber() {
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
                              id='number-random'
                              placeholder='thử nhập một số' />
                    </label>
               </div>
               <div className="form-group">
                    <button className='btn btn-check'>Kiểm tra</button>
               </div>

          </form>
     )
}
