
import FormAddTodo from './FormAddTodo'
import TodoList from './TodoList'
export default function Container({ listTodo, handeAddTodo }) {
     console.log(handeAddTodo);
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo handeAddTodo={handeAddTodo} />
               <TodoList listTodo={listTodo} />
          </div>
     )
}
