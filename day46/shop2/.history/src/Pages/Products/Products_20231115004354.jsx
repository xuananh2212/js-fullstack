import React from 'react'
import Header from '../../Layout/Header/Header'
import ListProduct from '../../Components/ListProduct/ListProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Products() {
     return (
          <div className='Products'>
               <Header />
               <ListProduct />
               <ToastContainer
                    position="top-center"
                    autoClose={1000} />
          </div>
     )
}
