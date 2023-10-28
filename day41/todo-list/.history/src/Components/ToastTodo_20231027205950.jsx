
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
     constructor({ handleToast }) {
          console.log(handleToast)
          super();
          this.state = {
               message: null,
               status: null,
          }
     }
     static handleUpdateToast = (message, status) => {
          this.setState({ message: message, status: status });
     }
     render() {
          const { message, status } = status.state;
          return (
               <ToastContainer>
                    {message && status ? toast.success(message) : toast.error(message)}
               </ToastContainer>
          )
     }
}
