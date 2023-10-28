
import "./assets/css/style.css";
import React, { Component } from 'react';
import FormAddTodo from './Components/FormAddTodo';
import TodoList from './Components/TodoList';
import ToastTodo from './Components/ToastTodo';
import { client } from './Utils/client.jsx';

export class App extends Component {

     constructor(props) {
          super();
          this.state = {
               message_toast: null,
               status_toast: null,

          }
     }

     handleAddTodo = (e) => {
          e.preventDefault();
          const newTodo = document.querySelector("#text-new-todo").value;
          if (/.{2,}/.test(newTodo)) {
               getAddTodo(newTodo);
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
               }
          }
     }
     getApiKeyCookie() {
          const apiKey = document.cookie.replace(/apiKey=/, "");
          return apiKey;
     }
     async getAddTodo(todo) {
          const apiKey = getApiKeyCookie();
          const { data } = await client.post("/todos", { todo }, apiKey);
          console.log(data);
     }
     async getList(apiKey) {
          const { data } = await client.get("/todos", null, apiKey);
          console.log(data);
          if (data.code === 200) {
               const { listTodo } = data.data;
          } else {
               getApiKey();
          }
     }

     callApi() {
          if (document.cookie) {
               const apiKey = getApiKeyCookie();
               getList(apiKey);

          } else {
               getApiKey();
          }

     }
     render() {
          return (
               <div className='container'>
                    <h2 className='heading-lv2'>Welcome to Todo App</h2>
                    <FormAddTodo handleAddTodo={handleAddTodo} />
                    <TodoList listTodo={listTodo} />
                    <ToastTodo />
               </div>
          )
     }
}


export default App
