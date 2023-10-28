import { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {
     constructor({ listTodo = [] }) {
          super();
          this.state = {
               todos: listTodo;
          }

     }
     render() {
          const { todos } = this.state;
          return (
               <ul className='list-todos'>
                    {todos.length ? todos.map(todo => <Todo desc="hello" />) : <Todo desc="Không có todo" isEmpty={true} />}
               </ul>
          )
     }
}
