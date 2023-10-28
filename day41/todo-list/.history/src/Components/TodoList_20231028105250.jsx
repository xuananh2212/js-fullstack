import Todo from './Todo';
export default function TodoList({ todos, handleDeleteTodo, handleUpdateTodo }) {
     console.log(handleUpdateTodo)
     return (
          <ul className='list-todos'>
               {
                    todos.length ?
                         (todos.map((todo, index) =>
                              <Todo
                                   key={index}
                                   id={todo._id}
                                   handleDeleteTodo={handleDeleteTodo}
                                   handleUpdateTodo={handleUpdateTodo}
                                   todo={todo.todo}
                                   isEmpty={false}
                              />))
                         : (<Todo
                              todo="Không có todo"
                              isEmpty={true}

                         />)}
          </ul>
     )
}

