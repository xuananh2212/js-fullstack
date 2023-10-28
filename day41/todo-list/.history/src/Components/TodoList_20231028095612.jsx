import Todo from './Todo';
export default function TodoList({ todos, handleDeleteTodo }) {
     return (
          <ul className='list-todos'>
               {todos.length ? todos.map((todo, index) => <Todo key={index} id={todo._id} handleDeleteTodo={handleDeleteTodo} todo={todo.todo} isEmpty={false} />) : (<Todo todo="Không có todo" isEmpty={true} />)}
          </ul>
     )
}

