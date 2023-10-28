import FormAddTodo from './FormAddTodo'
import TodoList from './TodoList'
export default function Container() {
     return (
          <div className='container'>
               <h1>Welcome to Todo App</h1>
               <FormAddTodo />
               <TodoList />
          </div>
     )
}
