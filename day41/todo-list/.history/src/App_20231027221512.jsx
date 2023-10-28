
import "./assets/css/style.css";
import React, { Component } from 'react';
import FormAddTodo from './Components/FormAddTodo';
import TodoList from './Components/TodoList';
import ToastTodo from './Components/ToastTodo';


export class App extends Component {

     constructor(props) {

     }

  function handleAddTodo(e) {
     e.preventDefault();
     const newTodo = document.querySelector("#text-new-todo").value;
     if (/.{2,}/.test(newTodo)) {
          getAddTodo(newTodo);
     }

}
render() {
     return (
          <div className='container'>
               <h2 className='heading-lv2'>Welcome to Todo App</h2>
               <FormAddTodo handleAddTodo={handleAddTodo} />
               <TodoList listTodo={listTodo} />
               <ToastTodo handleToast={handleToast} />
          </div>
     )
}
}


export default App
