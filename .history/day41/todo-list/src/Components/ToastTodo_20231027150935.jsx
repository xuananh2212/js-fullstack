
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastTodo({ message }) {
     return (
          <div>
               <ToastContainer>{toast(message)}</ToastContainer>
          </div>
     );
}