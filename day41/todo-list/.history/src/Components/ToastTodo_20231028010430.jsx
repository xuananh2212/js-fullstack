
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ToastTodo({ message, status }) {
     return (
          <ToastContainer>
               {message && status === 1 ?
                    toast.success(message) :
                    (status === 2 ? toast.warning(message) : toast.error(message))}
          </ToastContainer>
     )
}



