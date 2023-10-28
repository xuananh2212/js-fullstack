import { Component } from 'react'
import Todo from './Todo';
import { callApi } from '../main';

export default class TodoList extends Component {
     constructor({ listTodo = [] }) {
          super();
          console.log(listTodo)
          this.state = {
               todos: listTodo
          }
     }
     componentDidMount() {
          console.log(1);
          // callApi();
     }
     render() {
          const { todos } = this.state;
          return (
               <ul className='list-todos'>
                    {todos.length ? todos.map((todo, index) => <Todo key={index} todo={todo.todo} isEmpty={false} />) : <Todo todo="Không có todo" isEmpty={true} />}
               </ul>
          )
     }
}
