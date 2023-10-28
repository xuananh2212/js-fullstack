import React from 'react'
export default function EditTodo({ todo, handleExitEditTodo, handleDeleteTodo, handleUpdateTodo }) {
     return (
          <form className='form-edit-todo' autoComplete='true' onClick={(e) => e.preventDefault()}>
               <div className='form-group'>
                    <div className='form-group-content'>
                         <input
                              type="text"
                              id="text-edit-todo"
                              defaultValue={todo.todo}
                         />
                         <label htmlFor={todo._id}>not Completed</label>
                         <input type="checkbox" name={todo._id} id={todo._id} />
                    </div>
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
                              onClick={(e) =>
                                   handleUpdateTodo(
                                        false,
                                        todo._id,
                                        document.querySelector("#text-edit-todo").value)}
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
