import React from 'react'
import Header from '../../Layout/Header/Header'
import ListProduct from '../../Components/ListProduct/ListProduct'

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
