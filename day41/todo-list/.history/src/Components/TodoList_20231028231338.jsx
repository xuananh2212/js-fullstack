import EditTodo from './EditTodo';
import Todo from './Todo';
export default function TodoList({ todos, handleDeleteTodo, handleUpdateTodo, handleExitEditTodo, editTodo }) {
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
                                   handleUpdateTodo={handleUpdateTodo}
                              /> :
                              <Todo
                                   key={todo._id}
                                   id={todo._id}
                                   handleDeleteTodo={handleDeleteTodo}
                                   handleUpdateTodo={handleUpdateTodo}
                                   todo={todo.todo}
                                   isComplete={todo.isComplete}
                                   isEmpty={false}
                              />)))
                         : (<Todo
                              todo="Không có todo"
                              isEmpty={true}

                         />)}
          </ul>
     )
}

