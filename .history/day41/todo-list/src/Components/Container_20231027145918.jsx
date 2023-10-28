import { Toast } from 'react-toastify/dist/components'
import FormAddTodo from './FormAddTodo'
import TodoList from './TodoList'
export default function Container() {
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo />
               <TodoList />
               <Toast />
          </div>
     )
}
