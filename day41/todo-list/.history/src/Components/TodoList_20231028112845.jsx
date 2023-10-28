import EditTodo from './EditTodo';
import Todo from './Todo';
export default function TodoList({ todos, handleDeleteTodo, handleUpdateTodo, handleExitEditTodo, editTodo }) {
     console.log(handleUpdateTodo)
     return (
          <ul className='list-todos'>
               {
                    todos.length ?
                         (todos.map((todo) =>
                         (todo._id === editTodo ?
                              <EditTodo
                                   key={todo._id}
                                   todo={todo}
                                   handleDeleteTodo={handleDeleteTodo}
                                   handleExitEditTodo={handleExitEditTodo}
                              /> :
                              <Todo
                                   key={todo._id}
                                   id={todo._id}
                                   handleDeleteTodo={handleDeleteTodo}
                                   handleUpdateTodo={handleUpdateTodo}
                                   todo={todo.todo}
                                   isEmpty={false}
                              />)))
                         : (<Todo
                              todo="Không có todo"
                              isEmpty={true}

                         />)}
          </ul>
     )
}

