
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ToastTodo({ toastTodo, isToast }) {
     const { messageToast, statusToast } = toastTodo;
     return (
          <ToastContainer autoClose={1500}>
               {isToast && messageToast && statusToast === 1 ?
                    toast.success(messageToast) :
                    (statusToast === 2 ?
                         toast.warning(messageToast) :
                         toast.error(messageToast))}
          </ToastContainer>
     )
}



