import React, { useLayoutEffect, useState } from 'react';
import Header from '../../Layout/Header/Header';
import { useParams } from 'react-router-dom';
import { client } from '../../Utils/client';
import { clsx } from 'clsx';
import styles from './ProductDetail.module.scss'
import NotFoundPage from '../../Components/NotFoundPages/NotFoundPage';


export default function ProductDetail() {
     const param = useParams();
     const [productDetail, setProductDetail] = useState([]);
     useLayoutEffect(() => {
          (async () => {
               const { data } = await client.get(`/products/${param.id}`);
               if (data.code) {
                    setProductDetail(data.data);
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
                         <div className={clsx(styles.imgWrap)}>
                              <img src={img} alt= />
                         </div>


                    </div>
               </div >

          </>
     )
}
