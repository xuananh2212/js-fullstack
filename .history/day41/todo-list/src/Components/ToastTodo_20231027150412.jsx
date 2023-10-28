
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastTodo() {
     const notify = () => toast("Wow so easy!");

     return (
          <div>
               <ToastContainer />
          </div>
     );
}