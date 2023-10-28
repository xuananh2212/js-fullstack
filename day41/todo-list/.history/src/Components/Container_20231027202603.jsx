
import FormAddTodo from './FormAddTodo'
import ToastTodo from './ToastTodo'
import TodoList from './TodoList'
export default function Container({ listTodo = [], handleAddTodo }) {
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo handleAddTodo={handleAddTodo} />
               <TodoList listTodo={listTodo} />
               <ToastTodo />
          </div>
     )
}
