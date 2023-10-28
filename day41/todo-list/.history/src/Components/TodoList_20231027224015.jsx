import { Component } from 'react'
import Todo from './Todo';
// import { callApi } from '../main';

export default class TodoList extends Component {
     constructor({ todos }) {
          super();
          this.state = {
               todos: listTodo
          }
     }
     // componentDidMount() {
     //      callApi();
     // }
     render() {
          const { todos } = this.state;
          return (
               <ul className='list-todos'>
                    {todos.length ? todos.map((todo, index) => <Todo key={index} todo={todo.todo} isEmpty={false} />) : <Todo todo="Không có todo" isEmpty={true} />}
               </ul>
          )
     }
}

import React from 'react'

export default function TodoList() {
     return (
          <ul className='list-todos'>
               {todos.length ? todos.map((todo, index) => <Todo key={index} todo={todo.todo} isEmpty={false} />) : <Todo todo="Không có todo" isEmpty={true} />}
          </ul>
     )
}

