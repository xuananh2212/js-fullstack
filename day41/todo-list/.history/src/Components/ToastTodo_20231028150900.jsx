
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ToastTodo({ toast }) {
     const { messageToast, statusToast } = toast;
     return (
          <ToastContainer autoClose={1500}>
               {messageToast && statusToast === 1 ?
                    toast.success(messageToast) :
                    (statusToast === 2 ?
                         toast.warning(messageToast) :
                         toast.error(messageToast))}
          </ToastContainer>
     )
}



