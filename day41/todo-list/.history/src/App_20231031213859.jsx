
import "./assets/css/style.css";
import FormAddTodo from './Components/FormAddTodo/FormAddTodo';
import TodoList from './Components/TodoList/TodoList';
import { client } from './Utils/client.js';
import ScaleLoader from "react-spinners/ScaleLoader";
import { ToastContainer, toast } from 'react-toastify';
import { apiAddTodo, apiDeleteTodo, apiUpdateTodo, getApiKey } from "./Utils/handleTodoCURD";
import 'react-toastify/dist/ReactToastify.css';
// export class App extends Component {

// }
import { useState, useEffect } from "react";
const getApiKeyCookie = () => {
     const str = document.cookie + ";";
     const pattern = /apiKey=([^;]*)/
     const strSub = str.match(pattern);
     return strSub ? strSub[1] : null;
}
const getEmailCookie = () => {
     const str = document.cookie + ";";
     const pattern = /email=([^;]*)/
     const strSub = str.match(pattern);
     return strSub ? strSub[1] : null;
}

export default function App() {
     const [todos, setTodos] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [editTodo, setEditTodo] = useState(null);
     const handleAddTodo = (e) => {
          e.preventDefault();
          const todoEl = document.querySelector("#text-new-todo");
          var nameTodo = todoEl.value;
          if (/.{2,}/.test(nameTodo)) {
               apiAddTodo(nameTodo, handleStateUpdateLoading, handleStateUpdateTodos);
          } else {
               toast.warning("phải có ít nhất 2 kí tự trở lên!")
          }
          todoEl.value = "";
     }
     const handleDeleteTodo = (id) => {
          var newTodos = todos.filter(todo => todo._id !== id);
          apiDeleteTodo(id, newTodos, handleStateUpdateTodos, handleStateUpdateLoading);

     }
     const handleUpdateTodo = (isEditing, id, isCompleted, value) => {
          if (isEditing) {
               handleStateUpdateEditTodo(id);

          } else {
               if (/.{2,}/.test(value)) {
                    var listTodos = JSON.parse(JSON.stringify(todos));
                    var todoFind = listTodos.find(todo => todo._id === id);
                    todoFind.todo = value;
                    todoFind.isCompleted = isCompleted;
                    console.log(todoFind);
                    apiUpdateTodo(id,
                         { todo: todoFind.todo, isCompleted: todoFind.isCompleted },
                         listTodos,
                         handleStateUpdateLoading,
                         handleStateUpdateTodos,
                         handleStateUpdateEditTodo);

               } else {

                    toast.warning("phải có ít nhất từ 2 kí tự!");
               }
          }
     }
     const handleExitEditTodo = () => {
          handleStateUpdateEditTodo(null);
     }


     const getList = async (apiKey, url = "/todos") => {
          handleStateUpdateLoading(true);
          const { data } = await client.get(url, null, apiKey);
          if (data.code === 200) {
               const { listTodo } = data.data;
               handleStateUpdateTodos(listTodo);
               handleStateUpdateLoading(false);
          } else {
               getApiKey(handleStateUpdateLoading, getList);
          }
          return data;
     }

     const callApi = () => {
          const apiKey = getApiKeyCookie();
          if (apiKey) {
               getList(apiKey).then((data) => {
                    if (data.code === 200) {
                         toast.success(`chào mừng bạn đã quay trở lại:${getEmailCookie()}`);

                    }
               })
          } else {
               getApiKey(handleStateUpdateLoading, getList);
          }

     }
     useEffect(() => {
          callApi();
     }, []);
     // handles update state

     const handleStateUpdateTodos = (listTodo, todo) => {
          if (todo) {
               setTodos([todo, ...todos])
          } else {
               setTodos(listTodo);
          }

     }
     const handleStateUpdateLoading = (value) => {
          setIsLoading(value)
     }
     const handleStateUpdateEditTodo = (id) => {
          setEditTodo(id);
     }
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo
                    handleAddTodo={handleAddTodo} />
               <TodoList
                    todos={todos}
                    handleDeleteTodo={handleDeleteTodo}
                    handleUpdateTodo={handleUpdateTodo}
                    handleExitEditTodo={handleExitEditTodo}
                    editTodo={editTodo} />
               <ToastContainer
                    autoClose={1500}>
               </ToastContainer>
               <ScaleLoader
                    color="#36d7b7"
                    cssOverride={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         width: "100vw",
                         height: "100vh",
                         position: "fixed",
                         inset: 0,
                         backgroundColor: "#d8cbcb7a",
                         top: "50%",
                         left: "50%",
                         translate: "-50% -50%",
                    }}
                    loading={isLoading}
                    margin={14}
                    size={50}
                    speedMultiplier={1}
               />
          </div>
     )
}

export { getApiKeyCookie, getEmailCookie }
