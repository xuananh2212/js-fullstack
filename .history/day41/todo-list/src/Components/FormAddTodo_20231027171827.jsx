
import React, { Component } from 'react'

export default class FormAddTodo extends Component {
     constructor({ listTodo = [] }) {
          super();
          console.log(listTodo)
          this.state = {
               todos: listTodo
          }

     }
     render() {
          return (
               <form action="" className='form-todos' onSubmit={(e) => handleAddTodo(e)}>
                    <div className="form-group">
                         <input type="text" placeholder='Thêm một việc làm mới' id="text-new-todo" />
                         <button className='btn btn-add'>Thêm mới</button>
                    </div>
               </form>
          )
     }
}


import { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {

     render() {
          const { todos } = this.state;
          return (
               <ul className='list-todos'>
                    {todos.length ? todos.map(todo => <Todo desc="hello" />) : <Todo desc="Không có todo" isEmpty={true} />}
               </ul>
          )
     }
}