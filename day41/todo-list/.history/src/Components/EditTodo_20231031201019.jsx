import React from 'react'
import { useState } from 'react';

export default function EditTodo(todo, handleExitEditTodo, handleDeleteTodo, handleUpdateTodo) {
     const [isChecked, setIsChecked] = useState(todo.isChecked);
     handleCheckboxChange = (e) => {
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
                              defaultValue={this.todo.todo}
                         />
                         <div className='form-group-content__inner'>
                              <input
                                   type='checkBox'
                                   checked={isChecked}
                                   id={this.todo._id}
                                   onChange={this.handleCheckboxChange} />
                              <label
                                   htmlFor={this.todo._id}>
                                   {isChecked ? 'Completed' : 'not Completed'}
                              </label>
                         </div>
                    </div>
                    <div className="btn-group">
                         <button
                              type="button"
                              className='btn btn-exit'
                              onClick={() => this.handleExitEditTodo()}
                         >
                              Thoát
                         </button>
                         <button
                              type="button"
                              className='btn btn-update'
                              onClick={() =>
                                   this.handleUpdateTodo(
                                        false,
                                        this.todo._id,
                                        isChecked,
                                        document.querySelector("#text-edit-todo").value)}
                         >
                              Update
                         </button>
                         <button
                              type="button"
                              className='btn btn-remove'
                              onClick={() => { this.handleDeleteTodo(this.todo._id) }}
                         >
                              Xoá
                         </button>
                    </div>
               </div>

          </form>
     )
}

