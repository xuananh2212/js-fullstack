import React from 'react'
export default function EditTodo({ todo }) {
     return (
          <form className='form-edit-todo'>
               <div className='form-group'>
                    <input type="text" id="text-edit-todo" value={todo.todo} />
                    <div class="btn-group">
                         <button className='btn btn-exit'>Thoát</button>
                         <button className='btn btn-update'>Update</button>
                         <button className='btn btn-remove'>Xoá</button>
                    </div>
               </div>
          </form>
     )
}
