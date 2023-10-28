
import FormAddTodo from './FormAddTodo'
import TodoList from './TodoList'
export default function Container({ listTodo, handleAddTodo }) {
     console.log(handleAddTodo);
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo handeAddTodo={handleAddTodo} />
               <TodoList listTodo={listTodo} />
          </div>
     )
}
