
import Header from '../../Layout/Header/Header'
import ListProduct from '../../Components/ListProduct/ListProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
     return (
          <div className='home'
          >
               <Header />
               <ListProduct />
               <ToastContainer />
          </div>
     )
}
