import Container from "./Components/Container"
import "./assets/css/style.css"

function App({ listTodo = [], handleAddTodo, handleToast }) {
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo handleAddTodo={handleAddTodo} />
               <TodoList listTodo={listTodo} />
               <ToastTodo handleToast={handleToast} />
          </div>
     )
}

export default App
