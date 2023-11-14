import React, { useLayoutEffect } from 'react';
import Header from '../../Layout/Header/Header';
import { useParams } from 'react-router-dom';
import { client } from '../../Utils/client'


export default function ProductDetail() {
     const param = useParams();
     const productDetail = {};
     useLayoutEffect(() => {
          (async () => {
               const { data } = await client.get(`/products/${param.id}`);
               if (data.code) {
                    console.log(data);
               } else {
                    console.log(data);

               }

          })()

     }, [])


     return (
          <>
               <Header />
               <div className='productDetail'>
                    <div className="container">


                    </div>
               </div>
          </>
     )
}
