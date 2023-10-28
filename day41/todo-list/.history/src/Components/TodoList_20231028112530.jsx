import EditTodo from './EditTodo';
import Todo from './Todo';
export default function TodoList({ todos, handleDeleteTodo, handleUpdateTodo, handleExitEditTodo, editTodo }) {
     console.log(handleUpdateTodo)
     return (
          <ul className='list-todos'>
               {
                    todos.length ?
                         (todos.map((todo, index) =>
                         (todo._id === editTodo ?
                              <EditTodo key={index} todo={todo} /> :
                              <Todo
                                   key={index}
                                   id={todo._id}
                                   handleDeleteTodo={handleDeleteTodo}
                                   handleUpdateTodo={handleUpdateTodo}
                                   handleExitEditTodo={handleExitEditTodo}
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

