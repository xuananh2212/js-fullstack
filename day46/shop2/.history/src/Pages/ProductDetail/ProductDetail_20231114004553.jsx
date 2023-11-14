import React, { useLayoutEffect } from 'react';
import Header from '../../Layout/Header/Header';
import { useParams } from 'react-router-dom';
import { client } from '../../Utils/client';
import { clsx } from 'clsx';
import NotFoundPage from '../../Components/NotFoundPages/NotFoundPage';


export default function ProductDetail() {
     const param = useParams();
     let productDetail = null;
     useLayoutEffect(() => {
          (async () => {
               const { data } = await client.get(`/products/${param.id}`);
               if (data.code) {
                    productDetail = data.data;
               } else {
                    console.log(data);

               }

          })()

     }, [])
     return (
          <>
               {/* {productDetail ?
                    (<>
                         <Header />
                         <div className='productDetail'>
                              <div className="container">


                              </div>
                         </div>
                    </>) :
                    (<NotFoundPage />)
               } */}
               <Header />
               <div className='productDetail'>
                    <div className="container">
                         <div className=></div>


               </div>
          </div >

          </>
     )
}
