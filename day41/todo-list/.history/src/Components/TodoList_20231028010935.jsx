import Todo from './Todo';
export default function TodoList({ todos, handleDeleteTodo }) {
     console.log(handleDeleteTodo);
     return (
          <ul className='list-todos'>
               {todos.length ? todos.map((todo) => <Todo key={todo._id} handleDeleteTodo={handleDeleteTodo} todo={todo.todo} isEmpty={false} />) : <Todo todo="Không có todo" isEmpty={true} />}
          </ul>
     )
}

