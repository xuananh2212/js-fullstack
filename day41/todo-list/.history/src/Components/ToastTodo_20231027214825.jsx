
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

import { Component } from 'react'

export default class ToastTodo extends Component {
     static _this = this;
     constructor({ hanldToast }) {
          super();
          this.state = {
               message: null,
               status: null,
          }


     }
     handleUpdateToast = (message, status) => {
          _this = this.setState({ message: message, status: status });

     }

     render() {
          const { message, status } = this.state;
          return (
               <ToastContainer>
                    {message && status ? toast.success(message) : toast.error(message)}
               </ToastContainer>
          )
     }
}
