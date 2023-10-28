
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react'

export default class ToastTodo extends Component {
     static _this = this;
     constructor(props) {
          super();
          this.props = props;
     }
     render() {
          const { message, status } = this.props;
          return (
               <ToastContainer>
                    {message && status === 1 ?
                         toast.success(message) :
                         (status === 2 ? toast.warning(message) : toast.error(message))}
               </ToastContainer>
          )
     }
}
import React from 'react'

export default function ToastTodo() {
     return (
          <ToastContainer>
               {message && status === 1 ?
                    toast.success(message) :
                    (status === 2 ? toast.warning(message) : toast.error(message))}
          </ToastContainer>
     )
}



