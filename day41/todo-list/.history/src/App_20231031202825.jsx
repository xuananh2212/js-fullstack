
import "./assets/css/style.css";
import { Component } from 'react';
import FormAddTodo from './Components/FormAddTodo';
import TodoList from './Components/TodoList';
import { client } from './Utils/client.js';
import ScaleLoader from "react-spinners/ScaleLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// export class App extends Component {

//      constructor() {
//           super();
//           this.state = {
//                todos: [],
//                editTodo: null,
//                loading: false,

//           }
//      }

//      handleAddTodo = (e) => {
//           e.preventDefault();
//           const todoEl = document.querySelector("#text-new-todo");
//           var nameTodo = todoEl.value;
//           if (/.{2,}/.test(nameTodo)) {
//                this.apiAddTodo(nameTodo);
//           } else {
//                toast.warning("phải có ít nhất 2 kí tự trở lên!")
//           }
//           todoEl.value = "";
//      }
//      handleDeleteTodo = (id) => {
//           const { todos } = this.state;
//           var newTodos = todos.filter(todo => todo._id !== id);
//           this.apiDeleteTodo(id, newTodos);

//      }
//      handleUpdateTodo = (isEditing, id, isCompleted, value) => {
//           if (isEditing) {
//                this.handleStateUpdateEditTodo(id);

//           } else {
//                const { todos } = this.state;
//                if (/.{2,}/.test(value)) {
//                     var listTodos = JSON.parse(JSON.stringify(todos));
//                     var todoFind = listTodos.find(todo => todo._id === id);
//                     todoFind.todo = value;
//                     todoFind.isCompleted = isCompleted;
//                     console.log(todoFind);
//                     this.apiUpdateTodo(id, { todo: todoFind.todo, isCompleted: todoFind.isCompleted }, listTodos);

//                } else {

//                     toast.warning("phải có ít nhất từ 2 kí tự!");
//                }
//           }
//      }
//      handleExitEditTodo = () => {
//           this.handleStateUpdateEditTodo(null);
//      }
//      async apiUpdateTodo(id, newTodo, listTodos) {
//           var url = `/todos/${id}`;
//           this.handleStateUpdateLoading(true);
//           const { data } = await client.patch(url, newTodo, this.getApiKeyCookie());
//           if (data.code === 200) {
//                toast.success("cập nhật thành công");
//                this.handleStateUpdateTodos(listTodos, null);
//                this.handleStateUpdateEditTodo(null);
//           } else {
//                toast.error("Lỗi cập nhật thất bại!")
//                this.getApiKey();
//           }
//           this.handleStateUpdateLoading(false);
//      }
//      async apiDeleteTodo(id, newTodos) {
//           var url = `/todos/${id}`;
//           this.handleStateUpdateLoading(true);
//           const { data } = await client.delete(url, this.getApiKeyCookie());
//           if (data.code === 200) {
//                this.handleStateUpdateTodos(newTodos, null);
//                toast.success("xoá thành công");
//           } else {
//                toast.error("xoá thất bại");
//                this.getApiKey();
//           }
//           this.handleStateUpdateLoading(false);
//      }
//      async getApiKey() {
//           var email = prompt('Please enter your email:?', "example@example.com");
//           if (email) {
//                var emailPath = email.replace(/@/g, "%40");
//                const url = `/api-key?email=${emailPath}`;
//                this.handleStateUpdateLoading(true);
//                const { data } = await client.get(url);
//                if (data.code === 200) {
//                     const { apiKey } = data.data;
//                     document.cookie = `apiKey=${apiKey}`;
//                     document.cookie = `email=${email}`;
//                     this.getList(this.getApiKeyCookie()).then((data) => {
//                          if (data.code === 200) {
//                               toast.success(`chào mừng bạn: ${email}`)

//                          }
//                     })
//                } else {
//                     toast.error("email không tồn tại!");

//                }
//           } else {
//                toast.error("vui lòng nhập email!");
//           }
//           this.handleStateUpdateLoading(false);
//      }
//      getApiKeyCookie() {
//           const str = document.cookie + ";";
//           const pattern = /apiKey=([^;]*)/
//           const strSub = str.match(pattern);
//           return strSub ? strSub[1] : null;
//      }
//      getEmailCookie() {
//           const str = document.cookie + ";";
//           const pattern = /email=([^;]*)/
//           const strSub = str.match(pattern);
//           return strSub ? strSub[1] : null;
//      }
//      async apiAddTodo(todo) {
//           const apiKey = this.getApiKeyCookie();
//           if (apiKey) {
//                this.handleStateUpdateLoading(true);
//                const { data } = await client.post("/todos", { todo }, apiKey);
//                if (data.code === 201) {
//                     console.log(1);
//                     this.handleStateUpdateTodos(null, data.data);
//                     toast.success("thêm thành công");
//                } else {
//                     toast.error("thêm thất bại , Nhập lại tên email!");
//                     setTimeout(() => {
//                          this.getApiKey()
//                     }, 200)

//                }
//                this.handleStateUpdateLoading(false);
//           } else {
//                toast.error("email không tồn tại!");
//                setTimeout(() => {
//                     this.getApiKey();
//                }, 500)
//           }

//      }
//      async getList(apiKey) {
//           this.handleStateUpdateLoading(true);
//           const { data } = await client.get("/todos", null, apiKey);
//           if (data.code === 200) {
//                const { listTodo } = data.data;
//                this.handleStateUpdateTodos(listTodo);
//                this.handleStateUpdateLoading(false);
//           } else {
//                this.getApiKey();
//           }
//           return data;
//      }

//      callApi() {
//           const apiKey = this.getApiKeyCookie();
//           if (apiKey) {
//                this.getList(apiKey).then((data) => {
//                     if (data.code === 200) {
//                          toast.success(`chào mừng bạn đã quay trở lại:${this.getEmailCookie()}`);

//                     }
//                })
//           } else {
//                this.getApiKey();
//           }

//      }
//      componentDidMount() {
//           this.callApi();
//      }
//      // handles update state

//      handleStateUpdateTodos = (listTodo, todo) => {
//           if (todo) {
//                var { todos } = this.state;
//                todos.unshift(todo);
//                this.setState({ todos: todos })
//           } else {
//                this.setState({ todos: listTodo });
//           }

//      }
//      handleStateUpdateLoading = (value) => {
//           this.setState({ loading: value });
//      }
//      handleStateUpdateEditTodo = (id) => {
//           this.setState({ editTodo: id });
//      }
//      render() {
//           const { todos, editTodo, loading } = this.state;
//           return (
//                <div className='container'>
//                     <h2 className='heading-lv2'>Welcome to Todo App</h2>
//                     <FormAddTodo
//                          handleAddTodo={this.handleAddTodo} />
//                     <TodoList
//                          todos={todos}
//                          handleDeleteTodo={this.handleDeleteTodo}
//                          handleUpdateTodo={this.handleUpdateTodo}
//                          handleExitEditTodo={this.handleExitEditTodo}
//                          editTodo={editTodo} />
//                     <ToastContainer
//                          autoClose={1500}>
//                     </ToastContainer>
//                     <ScaleLoader
//                          color="#36d7b7"
//                          cssOverride={{
//                               display: "flex",
//                               justifyContent: "center",
//                               alignItems: "center",
//                               width: "100vw",
//                               height: "100vh",
//                               position: "fixed",
//                               inset: 0,
//                               backgroundColor: "#d8cbcb7a",
//                               top: "50%",
//                               left: "50%",
//                               translate: "-50% -50%",
//                          }}
//                          loading={loading}
//                          margin={14}
//                          size={50}
//                          speedMultiplier={1}
//                     />
//                </div>
//           )
//      }
// }

import React from 'react'
import { useState } from "react";

export default function App() {
     const [todos, setTodos] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [editTodo, setEditTodo] = useState(null);
     handleAddTodo = (e) => {
          //           e.preventDefault();
          //           const todoEl = document.querySelector("#text-new-todo");
          //           var nameTodo = todoEl.value;
          //           if (/.{2,}/.test(nameTodo)) {
          //                this.apiAddTodo(nameTodo);
          //           } else {
          //                toast.warning("phải có ít nhất 2 kí tự trở lên!")
          //           }
          //           todoEl.value = "";
          //      }
          //      handleDeleteTodo = (id) => {
          //           const { todos } = this.state;
          //           var newTodos = todos.filter(todo => todo._id !== id);
          //           this.apiDeleteTodo(id, newTodos);

          //      }
          //      handleUpdateTodo = (isEditing, id, isCompleted, value) => {
          //           if (isEditing) {
          //                this.handleStateUpdateEditTodo(id);

          //           } else {
          //                const { todos } = this.state;
          //                if (/.{2,}/.test(value)) {
          //                     var listTodos = JSON.parse(JSON.stringify(todos));
          //                     var todoFind = listTodos.find(todo => todo._id === id);
          //                     todoFind.todo = value;
          //                     todoFind.isCompleted = isCompleted;
          //                     console.log(todoFind);
          //                     this.apiUpdateTodo(id, { todo: todoFind.todo, isCompleted: todoFind.isCompleted }, listTodos);

          //                } else {

          //                     toast.warning("phải có ít nhất từ 2 kí tự!");
          //                }
          //           }
          //      }
          //      handleExitEditTodo = () => {
          //           this.handleStateUpdateEditTodo(null);
          //      }
          //      async apiUpdateTodo(id, newTodo, listTodos) {
          //           var url = `/todos/${id}`;
          //           this.handleStateUpdateLoading(true);
          //           const { data } = await client.patch(url, newTodo, this.getApiKeyCookie());
          //           if (data.code === 200) {
          //                toast.success("cập nhật thành công");
          //                this.handleStateUpdateTodos(listTodos, null);
          //                this.handleStateUpdateEditTodo(null);
          //           } else {
          //                toast.error("Lỗi cập nhật thất bại!")
          //                this.getApiKey();
          //           }
          //           this.handleStateUpdateLoading(false);
          //      }
          //      async apiDeleteTodo(id, newTodos) {
          //           var url = `/todos/${id}`;
          //           this.handleStateUpdateLoading(true);
          //           const { data } = await client.delete(url, this.getApiKeyCookie());
          //           if (data.code === 200) {
          //                this.handleStateUpdateTodos(newTodos, null);
          //                toast.success("xoá thành công");
          //           } else {
          //                toast.error("xoá thất bại");
          //                this.getApiKey();
          //           }
          //           this.handleStateUpdateLoading(false);
          //      }
          //      async getApiKey() {
          //           var email = prompt('Please enter your email:?', "example@example.com");
          //           if (email) {
          //                var emailPath = email.replace(/@/g, "%40");
          //                const url = `/api-key?email=${emailPath}`;
          //                this.handleStateUpdateLoading(true);
          //                const { data } = await client.get(url);
          //                if (data.code === 200) {
          //                     const { apiKey } = data.data;
          //                     document.cookie = `apiKey=${apiKey}`;
          //                     document.cookie = `email=${email}`;
          //                     this.getList(this.getApiKeyCookie()).then((data) => {
          //                          if (data.code === 200) {
          //                               toast.success(`chào mừng bạn: ${email}`)

          //                          }
          //                     })
          //                } else {
          //                     toast.error("email không tồn tại!");

          //                }
          //           } else {
          //                toast.error("vui lòng nhập email!");
          //           }
          //           this.handleStateUpdateLoading(false);
          //      }
          //      getApiKeyCookie() {
          //           const str = document.cookie + ";";
          //           const pattern = /apiKey=([^;]*)/
          //           const strSub = str.match(pattern);
          //           return strSub ? strSub[1] : null;
          //      }
          //      getEmailCookie() {
          //           const str = document.cookie + ";";
          //           const pattern = /email=([^;]*)/
          //           const strSub = str.match(pattern);
          //           return strSub ? strSub[1] : null;
          //      }
          //      async apiAddTodo(todo) {
          //           const apiKey = this.getApiKeyCookie();
          //           if (apiKey) {
          //                this.handleStateUpdateLoading(true);
          //                const { data } = await client.post("/todos", { todo }, apiKey);
          //                if (data.code === 201) {
          //                     console.log(1);
          //                     this.handleStateUpdateTodos(null, data.data);
          //                     toast.success("thêm thành công");
          //                } else {
          //                     toast.error("thêm thất bại , Nhập lại tên email!");
          //                     setTimeout(() => {
          //                          this.getApiKey()
          //                     }, 200)

          //                }
          //                this.handleStateUpdateLoading(false);
          //           } else {
          //                toast.error("email không tồn tại!");
          //                setTimeout(() => {
          //                     this.getApiKey();
          //                }, 500)
          //           }

          //      }
          //      async getList(apiKey) {
          //           this.handleStateUpdateLoading(true);
          //           const { data } = await client.get("/todos", null, apiKey);
          //           if (data.code === 200) {
          //                const { listTodo } = data.data;
          //                this.handleStateUpdateTodos(listTodo);
          //                this.handleStateUpdateLoading(false);
          //           } else {
          //                this.getApiKey();
          //           }
          //           return data;
          //      }

          //      callApi() {
          //           const apiKey = this.getApiKeyCookie();
          //           if (apiKey) {
          //                this.getList(apiKey).then((data) => {
          //                     if (data.code === 200) {
          //                          toast.success(`chào mừng bạn đã quay trở lại:${this.getEmailCookie()}`);

          //                     }
          //                })
          //           } else {
          //                this.getApiKey();
          //           }

          //      }
          //      componentDidMount() {
          //           this.callApi();
          //      }
          //      // handles update state

          //      handleStateUpdateTodos = (listTodo, todo) => {
          //           if (todo) {
          //                var { todos } = this.state;
          //                todos.unshift(todo);
          //                this.setState({ todos: todos })
          //           } else {
          //                this.setState({ todos: listTodo });
          //           }

          //      }
          //      handleStateUpdateLoading = (value) => {
          //           this.setState({ loading: value });
          //      }
          //      handleStateUpdateEditTodo = (id) => {
          //           this.setState({ editTodo: id });
          //      }
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
                         loading={loading}
                         margin={14}
                         size={50}
                         speedMultiplier={1}
                    />
               </div>
          )
     }
