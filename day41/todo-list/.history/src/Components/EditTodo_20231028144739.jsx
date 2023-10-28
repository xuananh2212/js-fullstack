import React from 'react'
export default function EditTodo({ todo, handleExitEditTodo, handleDeleteTodo, handleUpdateTodo }) {
     return (
          <form className='form-edit-todo' autoComplete='true'>
               <div className='form-group'>
                    <input
                         type="text"
                         id="text-edit-todo"
                         defaultValue={todo.todo}
                    />
                    <div className="btn-group">
                         <button
                              type="button"
                              className='btn btn-exit'
                              onClick={() => handleExitEditTodo()}
                         >
                              Thoát
                         </button>
                         <button
                              type="button"
                              className='btn btn-update'
                              onClick={(e) => handleUpdateTodo(e.target.value, null)}
                         >
                              Update
                         </button>
                         <button
                              type="button"
                              className='btn btn-remove'
                              onClick={() => { handleDeleteTodo(todo._id) }}
                         >
                              Xoá
                         </button>
                    </div>
               </div>
          </form>
     )
}
