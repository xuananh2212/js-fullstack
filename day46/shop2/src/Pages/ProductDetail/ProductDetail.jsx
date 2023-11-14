import React, { useLayoutEffect, useRef, useState } from 'react';
import { BsCartPlus } from "react-icons/bs";
import { useParams, NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './ProductDetail.module.scss'
import { client } from '../../Utils/client';
import Header from '../../Layout/Header/Header';
import NotFoundPage from '../../Components/NotFoundPages/NotFoundPage';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

export default function ProductDetail() {
     const param = useParams();
     const isLoading = useRef(true);
     const [productDetail, setProductDetail] = useState({});
     const dispatch = useDispatch();
     useLayoutEffect(() => {
          (async () => {
               const { data } = await client.get(`/products/${param.id}`);
               isLoading.current = false;
               if (data.code) {
                    console.log(data);
                    setProductDetail(data.data);
               } else {
                    setProductDetail(null);

               }
          })()

     }, [])
     return (
          <>
               <Header />
               <div className={clsx(styles.productDetail)}>
                    {
                         isLoading.current ? <div className={clsx(styles.loading)}>Loading...</div> :
                              (productDetail ? (
                                   <div className="container">
                                        <div className={clsx(styles.productDetailWrap)}>
                                             <div className={clsx(styles.imgWrap, styles.productDetailItem)}>
                                                  <img src={productDetail.image} alt={productDetail.name} />
                                             </div>
                                             <div className={clsx(styles.content, styles.productDetailItem)}>
                                                  <h3 className={clsx(styles.headingLv3)}>{productDetail.brand}</h3>
                                                  <h4 className={clsx(styles.name)}>{productDetail.name}</h4>
                                                  <p className={clsx(styles.desc)}>{productDetail.description}</p>
                                                  <span className={clsx(styles.category)}>Category: {productDetail.category}</span>
                                                  <div className={clsx(styles.btnWrap)}>

                                                       <NavLink className={clsx(styles.navLink)} to={'/'}>
                                                            <button className={clsx(styles.btn, styles.btnGoHome)}>
                                                                 Go Home
                                                            </button>
                                                       </NavLink>

                                                       <div>
                                                            <span className={clsx(styles.price)}>$ {productDetail.price.toLocaleString()}</span>
                                                            <button
                                                                 onClick={() => {
                                                                      const { _id, name, price, image } = productDetail;
                                                                      dispatch({
                                                                           type: 'carts/add',
                                                                           payLoad: { _id, name, price, image, quantity: 1 }
                                                                      })
                                                                      toast.success(`Thêm sản phẩm: ${name} vào giỏ hàng`)
                                                                 }}
                                                                 className={clsx(styles.btn, styles.btnAddCart)}>
                                                                 <BsCartPlus />
                                                                 Add to cart
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>

                                        </div>

                                   </div>) : <NotFoundPage />)
                    }
                    <ToastContainer
                         position="top-center"
                         autoClose={1000} />
               </div>

          </>
     )
}