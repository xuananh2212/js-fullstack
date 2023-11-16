
import Header from '../../Layout/Header/Header'
import ListProduct from '../../Components/ListProduct/ListProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
     useEffect(() => {

     }, [])
     return (
          <div className='home'
          >
               <Header />
               <ListProduct />
               <ToastContainer
                    position="top-center"
                    autoClose={1000} />
          </div>
     )
}
