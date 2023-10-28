
import FormAddTodo from './FormAddTodo'
import TodoList from './TodoList'
import ToastTodo from './ToastTodo'
export default function Container() {
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo />
               <TodoList />
          </div>
     )
}
