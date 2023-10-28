
import "./assets/css/style.css";
import { Component } from 'react';
import FormAddTodo from './Components/FormAddTodo';
import TodoList from './Components/TodoList';
import ToastTodo from './Components/ToastTodo';
import { client } from './Utils/client.jsx';
import { useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

export class App extends Component {

     constructor() {
          super();
          this.state = {
               todos: [],
               editTodo: null,
               toast: {
                    messageToast: null,
                    statusToast: 0,
               },
               loading: false,

          }
     }

     handleAddTodo = (e) => {
          e.preventDefault();
          const todoEl = document.querySelector("#text-new-todo");
          var nameTodo = todoEl.value;
          if (/.{2,}/.test(nameTodo)) {
               this.apiAddTodo(nameTodo);
          } else {
               this.handleSateUpdateToast("Todo cần ít nhất nhất là 2 kí tự", 2);
          }
          todoEl.value = "";
     }
     handleDeleteTodo = (id) => {
          const { todos } = this.state;
          var newTodos = todos.filter(todo => todo._id !== id);
          console.log(todos);
          this.apiDeleteTodo(id, newTodos);

     }
     handleUpdateTodo = (isEditing, id, value) => {
          if (isEditing) {
               this.handleStateUpdateEditTodo(id);

          } else {
               console.log(value, id);
               const { todos } = this.state;
               if (/.{2,}/.test(value)) {
                    console.log("1");
                    var listTodos = JSON.parse(JSON.stringify(todos));
                    var todoFind = listTodos.find(todo => todo._id === id);
                    todoFind.todo = value;
                    console.log(todoFind, listTodos, todos);
                    this.apiUpdateTodo(id, { todo: todoFind.todo, isCompleted: todoFind.isCompleted }, listTodos);

                    this.handleStateUpdateToast("sửa Thành công", 1);
               } else {
                    this.handleStateUpdateToast("Todo cần ít nhất nhất là 2 kí tự", 2);

               }
          }
     }
     handleExitEditTodo = () => {
          this.handleStateUpdateEditTodo(null);
          this.handleStateUpdateToast("Thoát chỉnh sửa", 1);
     }
     async apiUpdateTodo(id, newTodo, listTodos) {
          var url = `/todos/${id}`;
          const { data } = await client.patch(url, newTodo, this.getApiKeyCookie());
          if (data.code === 200) {
               this.handleStateUpdateTodos(listTodos, null);
               this.handleStateUpdateToast("cập nhật Thành Công", 1);
               this.handleStateUpdateEditTodo(null);
          } else {
               this.handleStateUpdateToast("cập nhật thất bại", 3);
               this.getApiKey();
          }
     }
     async apiDeleteTodo(id, newTodos) {
          var url = `/todos/${id}`;
          const { data } = await client.delete(url, this.getApiKeyCookie());
          if (data.code === 200) {
               this.handleStateUpdateTodos(newTodos, null);
               this.handleStateUpdateToast("Xoá Thành Công", 1);
          } else {
               this.handleStateUpdateToast("Xoá Thất Bại", 3);
               this.getApiKey();
          }
     }
     async getApiKey() {
          var email = prompt('Please enter your email:?', "example@example.com");
          if (email) {
               var emailPath = email.replace(/@/g, "%40");
               const url = `/api-key?email=${emailPath}`;
               const { data } = await client.get(url);
               if (data.code === 200) {
                    const { apiKey } = data.data;
                    document.cookie = `apiKey=${apiKey}`;
                    document.cookie = `email=${email}`;
                    this.getList(this.getApiKeyCookie()).then((data) => {
                         if (data.code === 200) {
                              this.handleStateUpdateToast(`chào mừng bạn: ${email}`, 1)
                         }
                    })
               } else {
                    this.handleStateUpdateToast("email không tồn tại", 3)
               }
          } else {
               this.handleStateUpdateToast("Vui lòng nhập email!", 3)
          }
     }
     getApiKeyCookie() {
          const str = document.cookie + ";";
          const pattern = /apiKey=([^;]*)/
          const strSub = str.match(pattern);
          return strSub ? strSub[1] : null;
     }
     getEmailCookie() {
          const str = document.cookie + ";";
          const pattern = /email=([^;]*)/
          const strSub = str.match(pattern);
          return strSub ? strSub[1] : null;
     }
     async apiAddTodo(todo) {
          const apiKey = this.getApiKeyCookie();
          if (apiKey) {
               const { data } = await client.post("/todos", { todo }, apiKey);
               if (data.code === 201) {
                    this.handleStateUpdateTodos(null, data.data);
                    this.handleStateUpdateToast("Thêm Todo Thành Công", 1);
               } else {
                    this.handleStateUpdateToast("Thất Bại! Email không tồn tại", 3);
                    this.getApiKey()

               }
          } else {
               this.handleStateUpdateToast("Email không Tồn tại!", 3);
               setTimeout(() => {
                    this.getApiKey();
               }, 1500)
          }

     }
     async getList(apiKey) {
          const { data } = await client.get("/todos", null, apiKey);
          if (data.code === 200) {
               const { listTodo } = data.data;
               this.handleStateUpdateTodos(listTodo);
          } else {
               this.getApiKey();
          }
          return data;
     }

     callApi() {
          console.log("1 lan");
          const apiKey = this.getApiKeyCookie();
          if (apiKey) {
               this.getList(apiKey).then((data) => {
                    if (data.code === 200) {
                         this.handleStateUpdateToast(`chào mừng bạn đã quay trở lại:${this.getEmailCookie()}`, 1)
                    }
               })
          } else {
               this.getApiKey();
          }

     }
     componentDidMount() {
          this.callApi();
     }
     // handles update state

     handleStateUpdateTodos = (listTodo, todo) => {
          console.log(listTodo);
          if (todo) {
               var { todos } = this.state;
               todos.unshift(todo);
               this.setState({ todos: todos })
          } else {
               this.setState({ todos: listTodo });
          }

     }
     handleStateUpdateEditTodo = (id) => {
          this.setState({ editTodo: id });
     }
     handleStateUpdateToast = (message, status) => {
          this.setState({ toast: { messageToast: message, statusToast: status } })
     }
     render() {
          const { toast, todos, editTodo } = this.state;
          console.log(toast);
          return (
               <div className='container'>
                    <h2 className='heading-lv2'>Welcome to Todo App</h2>
                    <FormAddTodo
                         handleAddTodo={this.handleAddTodo} />
                    <TodoList
                         todos={todos}
                         handleDeleteTodo={this.handleDeleteTodo}
                         handleUpdateTodo={this.handleUpdateTodo}
                         handleExitEditTodo={this.handleExitEditTodo}
                         editTodo={editTodo} />
                    <ToastTodo
                         toastTodo={toast} />
                    <PacmanLoader
                         color="#36d7b7"
                         cssOverride={{
                              position: "fixed",
                              inset: 0,
                              translate: "50% , 50%",
                              backgroundColor: '#fff'



                         }}
                         loading
                         margin={14}
                         size={50}
                         speedMultiplier={1}
                    />
               </div>
          )
     }
}


export default App
