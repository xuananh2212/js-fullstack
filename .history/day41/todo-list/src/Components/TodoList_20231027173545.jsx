import { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {
     constructor({ listTodo = [] }) {
          super();
          console.log(listTodo)
          this.state = {
               todos: listTodo
          }

     }
     render() {
          const { todos } = this.state;
          return (
               <ul className='list-todos'>
                    {todos.length ? todos.map((todo, index) => <Todo key={index} desc="hello" />) : <Todo desc="Không có todo" isEmpty={true} />}
               </ul>
          )
     }
}
