import { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {
     constructor(props) {
          super(props);
          this.props = props;
          this.state = {
               todos: [],
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
