// import React from 'react'
// export default function EditTodo({ todo, handleExitEditTodo, handleDeleteTodo, handleUpdateTodo }) {

//      return (
//           <form className='form-edit-todo' autoComplete='true' onClick={(e) => e.preventDefault()}>
//                <div className='form-group'>
//                     <div className='form-group-content'>
//                          <input
//                               type="text"
//                               id="text-edit-todo"
//                               defaultValue={todo.todo}
//                          />
//                          <div className='form-group-content__inner'>
//                               <input
//                                    type="checkbox"
//                                    name={todo._id}
//                                    id={todo._id}
//                                    checked={todo.isCompleted}
//                                    onChange={(e) => { }} />
//                               <label
//                                    htmlFor={todo._id}>
//                                    {todo.isCompleted ? 'Completed' : 'not Completed'}
//                               </label>
//                          </div>
//                     </div>
//                     <div className="btn-group">
//                          <button
//                               type="button"
//                               className='btn btn-exit'
//                               onClick={() => handleExitEditTodo()}
//                          >
//                               Thoát
//                          </button>
//                          <button
//                               type="button"
//                               className='btn btn-update'
//                               onClick={(e) =>
//                                    handleUpdateTodo(
//                                         false,
//                                         todo._id,
//                                         document.querySelector("#text-edit-todo").value)}
//                          >
//                               Update
//                          </button>
//                          <button
//                               type="button"
//                               className='btn btn-remove'
//                               onClick={() => { handleDeleteTodo(todo._id) }}
//                          >
//                               Xoá
//                          </button>
//                     </div>
//                </div>

//           </form>
//      )
// }


import React, { Component } from 'react'

export default class EditTodo extends Component {
     constructor({ todo, handleExitEditTodo, handleDeleteTodo, handleUpdateTodo }) {
          super();
          this.todo = todo;
          this.handleExitEditTodo = handleExitEditTodo;
          this.handleDeleteTodo = handleDeleteTodo;
          this.handleUpdateTodo = handleUpdateTodo;
          this.state = {
               isChecked: this.todo.isCompleted,
          }
     }
     handleCheckboxChange = (e) => {
          this.setState({ isChecked: e.target.checked })
     }
     render() {
          const { isChecked } = this.state;
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
}
