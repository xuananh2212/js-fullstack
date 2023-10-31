import React from 'react'
import { useState } from 'react';

export default function EditTodo({ todo, handleDeleteTodo, handleUpdateTodo }) {

     const [isChecked, setIsChecked] = useState(todo.isChecked);
     const handleCheckboxChange = (e) => {
          setIsChecked(e.target.checked)
     }
     return (
          <form className='form-edit-todo' autoComplete='true'>
               <div className='form-group'>
                    <div className='form-group-content'>
                         <input
                              className={isChecked ? "completed" : "not-completed"}
                              type="text"
                              id="text-edit-todo"
                              defaultValue={todo.todo}
                         />
                         <div className='form-group-content__inner'>
                              <input
                                   type='checkBox'
                                   checked={isChecked}
                                   id={todo._id}
                                   onChange={handleCheckboxChange} />
                              <label
                                   htmlFor={todo._id}>
                                   {isChecked ? 'Completed' : 'not Completed'}
                              </label>
                         </div>
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
                              onClick={() =>
                                   handleUpdateTodo(
                                        false,
                                        todo._id,
                                        isChecked,
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

