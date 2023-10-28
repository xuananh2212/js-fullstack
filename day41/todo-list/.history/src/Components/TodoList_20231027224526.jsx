
import Todo from './Todo';
export default function TodoList({ todos }) {
     return (
          <ul className='list-todos'>
               {todos.length ? todos.map((todo, index) => <Todo key={index} todo={todo.todo} isEmpty={false} />) : <Todo todo="Không có todo" isEmpty={true} />}
          </ul>
     )
}

