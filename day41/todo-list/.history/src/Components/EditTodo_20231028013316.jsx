import React from 'react'

export default function EditTodo() {
     return (
          <form className='form-edit-todo'>
               <div className='form-group'>
                    <input type="text" id="text-edit-todo" />
                    <button className='btn btn-remove'>Thoát</button>
                    <button className='btn btn-update'>Update</button>
                    <button className='btn btn-close'>Xoá</button>
               </div>
          </form>
     )
}
