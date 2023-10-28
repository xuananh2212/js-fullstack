
import "./assets/css/style.css";
import { Component } from 'react';
import FormAddTodo from './Components/FormAddTodo';
import TodoList from './Components/TodoList';
import ToastTodo from './Components/ToastTodo';
import { client } from './Utils/client.jsx';

export class App extends Component {

     constructor() {
          super();
          this.state = {
               messageToast: null,
               statusToast: 0,
               todos: [],

          }
     }

     handleAddTodo = (e) => {
          e.preventDefault();
          const todoEl = document.querySelector("#text-new-todo");
          var nameTodo = todoEl.value;
          if (/.{2,}/.test(nameTodo)) {
               this.getAddTodo(nameTodo);
          } else {
               this.handleUpdateToast("Todo cần ít nhất nhất là 2 kí tự", 2);
          }
          todoEl.value = "";
     }
     async getApiKey() {
          var email = prompt('Please enter your email:?', "example@example.com");
          if (email) {
               var emailPath = email.replace(/@/g, "%40");
               const url = `/api-key?email=${emailPath}`;
               const { data } = await client.get(url);
               console.log(data);
               if (data.code === 200) {
                    const { apiKey } = data.data;
                    document.cookie = `apiKey=${apiKey}`;
                    document.cookie = `email=${email}`;
                    this.getList(this.getApiKeyCookie());
                    this.handleUpdateToast(`chào mừng bạn quay trở lại: ${email}`, 1)
               } else {
                    this.handleUpdateToast("email không tồn tại", 3)
               }
          }
     }
     getApiKeyCookie() {
          const str = document.cookie;
          const pattern = /apiKey=(.*)?;/
          const strSub = str.match(pattern);
          return strSub[1];
     }
     async getAddTodo(todo) {
          const apiKey = this.getApiKeyCookie();
          const { data } = await client.post("/todos", { todo }, apiKey);
          console.log(data);
          this.handleUpdateTodos(null, data.data);
     }
     async getList(apiKey) {
          const { data } = await client.get("/todos", null, apiKey);
          console.log(data);
          if (data.code === 200) {
               const { listTodo } = data.data;
               this.handleUpdateTodos(listTodo);

          } else {
               this.getApiKey();
          }
     }

     callApi() {
          if (document.cookie) {
               const apiKey = this.getApiKeyCookie();
               this.getList(apiKey);

          } else {
               this.getApiKey();
          }

     }
     componentDidMount() {
          this.callApi();
     }
     // handles update state

     handleUpdateTodos(listTodo, todo) {
          if (todo) {
               var { todos } = this.state;
               todos.unshift(todo);
               this.setState({ todos: todos })
          } else {
               this.setState({ todos: listTodo });
          }

     }
     handleUpdateToast(message, status) {
          this.setState({ messageToast: message, statusToast: status })
     }
     render() {
          const { messageToast, statusToast, todos } = this.state
          return (
               <div className='container'>
                    <h2 className='heading-lv2'>Welcome to Todo App</h2>
                    <FormAddTodo handleAddTodo={this.handleAddTodo} />
                    <TodoList todos={todos} />
                    <ToastTodo message={messageToast} status={statusToast} />
               </div>
          )
     }
}


export default App
