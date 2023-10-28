
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
               message_toast: null,
               status_toast: null,
               todos: [],

          }
     }

     handleAddTodo = (e) => {
          e.preventDefault();
          const newTodo = document.querySelector("#text-new-todo").value;
          if (/.{2,}/.test(newTodo)) {
               this.getAddTodo(newTodo);
          }


     }
     async getApiKey() {
          var email = prompt('Please enter your email:?', "example@example.com");
          if (email) {
               email = email.replace(/@/g, "%40");
               const url = `/api-key?email=${email}`;
               const { data } = await client.get(url);
               console.log(data);
               if (data.code === 200) {
                    const { apiKey } = data.data;
                    document.cookie = `apiKey=${apiKey}`;
                    this.getList(this.getApiKeyCookie());
               } else {
                    this.handleUpdateToast("email không tồn tại", false)
               }
          }
     }
     getApiKeyCookie() {
          const apiKey = document.cookie.replace(/apiKey=/, "");
          return apiKey;
     }
     async getAddTodo(todo) {
          const apiKey = this.getApiKeyCookie();
          const { data } = await client.post("/todos", { todo }, apiKey);
          console.log(data);
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

     handleUpdateTodos(listTodo) {
          this.setState({ todos: listTodo })
     }
     handleUpdateToast(message, status) {
          this.setState({ message: message, status: status })
     }
     render() {
          const { message, status, todos } = this.state
          return (
               <div className='container'>
                    <h2 className='heading-lv2'>Welcome to Todo App</h2>
                    <FormAddTodo handleAddTodo={this.handleAddTodo} />
                    <TodoList todos={todos} />
                    <ToastTodo message={message} status={status} />
               </div>
          )
     }
}


export default App
