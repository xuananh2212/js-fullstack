
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export default function ToastTodo({ message, status }) {
//      return (
//           <div>
//                <ToastContainer
//                />
//                {status ? toast.success(message) : toast.error(message)}
//                <ToastContainer />

//           </div>
//      );
// }

import React, { Component } from 'react'

export default class ToastTodo extends Component {
     constructor({ handleTodo }) {
          super();
          this.state = {
               message: null,
               status: null,
          }
          handleTodo = (message, status) => {
               this.setState({ message: message, status: status })
          }
     }


     render() {
          const { message, status } = this.state;
          return (

               <ToastContainer
               >
                    {message && status ? toast.success(message) : toast.error(message)}
                    <ToastContainer />

                    )
     }
}
