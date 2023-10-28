
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastTodo({ message }) {
     const notify = () => toast(message);

     return (
          <div>
               <ToastContainer toast={toast} />
          </div>
     );
}