import EditTodo from './EditTodo';
import Todo from './Todo';
export default function TodoList({ todos, handleDeleteTodo, handleUpdateTodo, editTodo, handleChangeTodo }) {
     console.log(handleUpdateTodo)
     return (
          <ul className='list-todos'>
               {
                    todos.length ?
                         (todos.map((todo, index) =>
                         (todo._id === editTodo ?
                              <EditTodo key={index} todo={todo} handleChangeTodo={handleChangeTodo} /> :
                              <Todo
                                   key={index}
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

