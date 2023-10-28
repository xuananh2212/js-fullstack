
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from './Todo';

export default function ToastTodo({ message }) {
     return (
          <div>
               <ToastContainer />
               {toast(message)}
          </div>
     );
}