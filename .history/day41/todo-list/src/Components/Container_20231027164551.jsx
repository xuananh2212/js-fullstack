
import FormAddTodo from './FormAddTodo'
import TodoList from './TodoList'
export default function Container({ listTodo, handeAddTodo }) {
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo />
               <TodoList listTodo={listTodo} handeAddTodo={handeAddTodo} />
          </div>
     )
}