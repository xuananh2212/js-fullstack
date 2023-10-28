
import FormAddTodo from './FormAddTodo'
export default function Container({ listTodo, handleAddTodo }) {
     console.log(handleAddTodo);
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo listTodo={listTodo} handleAddTodo={handleAddTodo} />
          </div>
     )
}
