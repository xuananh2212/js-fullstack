
import Header from '../../Layout/Header/Header'
import ListProduct from '../../Components/ListProduct/ListProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
     const navigate = useNavigate();
     useEffect(() => {
          navigate('/product/1');

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
