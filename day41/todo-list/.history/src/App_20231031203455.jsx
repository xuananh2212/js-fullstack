
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
//           state = {
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
//                apiAddTodo(nameTodo);
//           } else {
//                toast.warning("phải có ít nhất 2 kí tự trở lên!")
//           }
//           todoEl.value = "";
//      }
//      handleDeleteTodo = (id) => {
//           const { todos } = state;
//           var newTodos = todos.filter(todo => todo._id !== id);
//           apiDeleteTodo(id, newTodos);

//      }
//      handleUpdateTodo = (isEditing, id, isCompleted, value) => {
//           if (isEditing) {
//                handleStateUpdateEditTodo(id);

//           } else {
//                const { todos } = state;
//                if (/.{2,}/.test(value)) {
//                     var listTodos = JSON.parse(JSON.stringify(todos));
//                     var todoFind = listTodos.find(todo => todo._id === id);
//                     todoFind.todo = value;
//                     todoFind.isCompleted = isCompleted;
//                     console.log(todoFind);
//                     apiUpdateTodo(id, { todo: todoFind.todo, isCompleted: todoFind.isCompleted }, listTodos);

//                } else {

//                     toast.warning("phải có ít nhất từ 2 kí tự!");
//                }
//           }
//      }
//      handleExitEditTodo = () => {
//           handleStateUpdateEditTodo(null);
//      }
//      async apiUpdateTodo(id, newTodo, listTodos) {
//           var url = `/todos/${id}`;
//           handleStateUpdateLoading(true);
//           const { data } = await client.patch(url, newTodo, getApiKeyCookie());
//           if (data.code === 200) {
//                toast.success("cập nhật thành công");
//                handleStateUpdateTodos(listTodos, null);
//                handleStateUpdateEditTodo(null);
//           } else {
//                toast.error("Lỗi cập nhật thất bại!")
//                getApiKey();
//           }
//           handleStateUpdateLoading(false);
//      }
//      async apiDeleteTodo(id, newTodos) {
//           var url = `/todos/${id}`;
//           handleStateUpdateLoading(true);
//           const { data } = await client.delete(url, getApiKeyCookie());
//           if (data.code === 200) {
//                handleStateUpdateTodos(newTodos, null);
//                toast.success("xoá thành công");
//           } else {
//                toast.error("xoá thất bại");
//                getApiKey();
//           }
//           handleStateUpdateLoading(false);
//      }
//      async getApiKey() {
//           var email = prompt('Please enter your email:?', "example@example.com");
//           if (email) {
//                var emailPath = email.replace(/@/g, "%40");
//                const url = `/api-key?email=${emailPath}`;
//                handleStateUpdateLoading(true);
//                const { data } = await client.get(url);
//                if (data.code === 200) {
//                     const { apiKey } = data.data;
//                     document.cookie = `apiKey=${apiKey}`;
//                     document.cookie = `email=${email}`;
//                     getList(getApiKeyCookie()).then((data) => {
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
//           handleStateUpdateLoading(false);
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
//           const apiKey = getApiKeyCookie();
//           if (apiKey) {
//                handleStateUpdateLoading(true);
//                const { data } = await client.post("/todos", { todo }, apiKey);
//                if (data.code === 201) {
//                     console.log(1);
//                     handleStateUpdateTodos(null, data.data);
//                     toast.success("thêm thành công");
//                } else {
//                     toast.error("thêm thất bại , Nhập lại tên email!");
//                     setTimeout(() => {
//                          getApiKey()
//                     }, 200)

//                }
//                handleStateUpdateLoading(false);
//           } else {
//                toast.error("email không tồn tại!");
//                setTimeout(() => {
//                     getApiKey();
//                }, 500)
//           }

//      }
//      async getList(apiKey) {
//           handleStateUpdateLoading(true);
//           const { data } = await client.get("/todos", null, apiKey);
//           if (data.code === 200) {
//                const { listTodo } = data.data;
//                handleStateUpdateTodos(listTodo);
//                handleStateUpdateLoading(false);
//           } else {
//                getApiKey();
//           }
//           return data;
//      }

//      callApi() {
//           const apiKey = getApiKeyCookie();
//           if (apiKey) {
//                getList(apiKey).then((data) => {
//                     if (data.code === 200) {
//                          toast.success(`chào mừng bạn đã quay trở lại:${getEmailCookie()}`);

//                     }
//                })
//           } else {
//                getApiKey();
//           }

//      }
//      componentDidMount() {
//           callApi();
//      }
//      // handles update state

//      handleStateUpdateTodos = (listTodo, todo) => {
//           if (todo) {
//                var { todos } = state;
//                todos.unshift(todo);
//                setState({ todos: todos })
//           } else {
//                setState({ todos: listTodo });
//           }

//      }
//      handleStateUpdateLoading = (value) => {
//           setState({ loading: value });
//      }
//      handleStateUpdateEditTodo = (id) => {
//           setState({ editTodo: id });
//      }
//      render() {
//           const { todos, editTodo, loading } = state;
//           return (
//                <div className='container'>
//                     <h2 className='heading-lv2'>Welcome to Todo App</h2>
//                     <FormAddTodo
//                          handleAddTodo={handleAddTodo} />
//                     <TodoList
//                          todos={todos}
//                          handleDeleteTodo={handleDeleteTodo}
//                          handleUpdateTodo={handleUpdateTodo}
//                          handleExitEditTodo={handleExitEditTodo}
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
import { useState, useEffect } from "react";

export default function App() {
     const [todos, setTodos] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [editTodo, setEditTodo] = useState(null);
     const handleAddTodo = (e) => {
          e.preventDefault();
          const todoEl = document.querySelector("#text-new-todo");
          var nameTodo = todoEl.value;
          if (/.{2,}/.test(nameTodo)) {
               apiAddTodo(nameTodo);
          } else {
               toast.warning("phải có ít nhất 2 kí tự trở lên!")
          }
          todoEl.value = "";
     }
     const handleDeleteTodo = (id) => {
          var newTodos = todos.filter(todo => todo._id !== id);
          apiDeleteTodo(id, newTodos);

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
                    apiUpdateTodo(id, { todo: todoFind.todo, isCompleted: todoFind.isCompleted }, listTodos);

               } else {

                    toast.warning("phải có ít nhất từ 2 kí tự!");
               }
          }
     }
     const handleExitEditTodo = () => {
          handleStateUpdateEditTodo(null);
     }
     const apiUpdateTodo = async (id, newTodo, listTodos) => {
          var url = `/todos/${id}`;
          handleStateUpdateLoading(true);
          const { data } = await client.patch(url, newTodo, getApiKeyCookie());
          if (data.code === 200) {
               toast.success("cập nhật thành công");
               handleStateUpdateTodos(listTodos, null);
               handleStateUpdateEditTodo(null);
          } else {
               toast.error("Lỗi cập nhật thất bại!")
               getApiKey();
          }
          handleStateUpdateLoading(false);
     }
     const apiDeleteTodo = async (id, newTodos) => {
          var url = `/todos/${id}`;
          handleStateUpdateLoading(true);
          const { data } = await client.delete(url, getApiKeyCookie());
          if (data.code === 200) {
               handleStateUpdateTodos(newTodos, null);
               toast.success("xoá thành công");
          } else {
               toast.error("xoá thất bại");
               getApiKey();
          }
          handleStateUpdateLoading(false);
     }
     const getApiKey = async () => {
          var email = prompt('Please enter your email:?', "example@example.com");
          if (email) {
               var emailPath = email.replace(/@/g, "%40");
               const url = `/api-key?email=${emailPath}`;
               handleStateUpdateLoading(true);
               const { data } = await client.get(url);
               if (data.code === 200) {
                    const { apiKey } = data.data;
                    document.cookie = `apiKey=${apiKey}`;
                    document.cookie = `email=${email}`;
                    getList(getApiKeyCookie()).then((data) => {
                         if (data.code === 200) {
                              toast.success(`chào mừng bạn: ${email}`)

                         }
                    })
               } else {
                    toast.error("email không tồn tại!");

               }
          } else {
               toast.error("vui lòng nhập email!");
          }
          handleStateUpdateLoading(false);
     }
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
     const apiAddTodo = async (todo) => {
          const apiKey = getApiKeyCookie();
          if (apiKey) {
               handleStateUpdateLoading(true);
               const { data } = await client.post("/todos", { todo }, apiKey);
               if (data.code === 201) {
                    console.log(1);
                    handleStateUpdateTodos(null, data.data);
                    toast.success("thêm thành công");
               } else {
                    toast.error("thêm thất bại , Nhập lại tên email!");
                    setTimeout(() => {
                         getApiKey()
                    }, 200)

               }
               handleStateUpdateLoading(false);
          } else {
               toast.error("email không tồn tại!");
               setTimeout(() => {
                    getApiKey();
               }, 500)
          }

     }
     const getList = async (apiKey) => {
          handleStateUpdateLoading(true);
          const { data } = await client.get("/todos", null, apiKey);
          if (data.code === 200) {
               const { listTodo } = data.data;
               handleStateUpdateTodos(listTodo);
               handleStateUpdateLoading(false);
          } else {
               getApiKey();
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
               getApiKey();
          }

     }
     useEffect(() => {
          callApi();
     }, []);
     // handles update state

     const handleStateUpdateTodos = (listTodo, todo) => {
          if (todo) {
               var { todos } = state;
               todos.unshift(todo);
               setState({ todos: todos })
          } else {
               setState({ todos: listTodo });
          }

     }
     const handleStateUpdateLoading = (value) => {
          setState({ loading: value });
     }
     const handleStateUpdateEditTodo = (id) => {
          setState({ editTodo: id });
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
                    loading={loading}
                    margin={14}
                    size={50}
                    speedMultiplier={1}
               />
          </div>
     )
}
