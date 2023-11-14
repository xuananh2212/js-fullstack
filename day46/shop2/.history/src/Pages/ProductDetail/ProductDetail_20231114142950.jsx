import React, { useLayoutEffect, useState } from 'react';
import { BsCartPlus } from "react-icons/bs";
import { useParams, NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './ProductDetail.module.scss'
import { client } from '../../Utils/client';
import Header from '../../Layout/Header/Header';
import NotFoundPage from '../../Components/NotFoundPages/NotFoundPage';



export default function ProductDetail() {
     const param = useParams();
     const [productDetail, setProductDetail] = useState([]);
     useLayoutEffect(() => {
          (async () => {
               const { data } = await client.get(`/products/${param.id}`);
               if (data.code) {
                    console.log(data);
                    setProductDetail(data.data);
               } else {
                    console.log(data);

               }

          })()

     }, [])
     console.log(productDetail);
     const { name, brand, image, price, category, description } = productDetail;
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
                              <img src={image} alt={name} />
                         </div>
                         <div className={clsx(styles.content)}>
                              <h3 className={clsx(styles.headingLv3)}>{brand}</h3>
                              <h4 className={clsx(styles.name)}>{name}</h4>
                              <p className={clsx(styles.desc)}>{description}</p>
                              <span className={clsx(styles.category)}>category: {category}</span>
                              <button className={clsx(styles.btn, styles.btnGoHome)}>Go Home</button>
                              <span className={clsx(styles.price)}>${price.toLocaleString()}</span>
                              <button className={clsx(styles.btn, styles.btnAddCart)}>
                                   <BsCartPlus />
                                   Add to cart
                              </button>


                         </div>


                    </div>
               </div>

          </>
     )
}
