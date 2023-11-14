import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { client } from '../../Utils/client';
import { toast } from 'react-toastify';
import ProductItem from '../ProductItem/ProductItem';
import clsx from 'clsx';
import styles from './ListProduct.module.scss'


export default function ListProduct() {
     const [listProduct, setLiProduct] = useState([]);
     const numberPage = useRef(1);
     const isLoading = useRef(true);
     const handleGetApiProducts = useMemo(() => {
          return async () => {
               const queryStr = new URLSearchParams({
                    limit: 20,
                    page: numberPage
               }).toString();
               const url = `/products?${queryStr}`;
               const { data } = await client.get(url);
               isLoading.current = false;

               if (data.code === 200) {
                    console.log(data.data.listProduct)
                    setLiProduct(data.data.listProduct);
               } else {
                    toast.error(`${data.message}`);
               }
          }
     }, []);

     useLayoutEffect(() => {
          handleGetApiProducts();
     }, [])
     return (
          (isLoading.current ?
               <div className={clsx(styles.loading)}>Loading...</div>
               : (<div className={clsx(styles.listProduct)}>
                    <div className='container'>
                         <h2 className={clsx(styles.headingLv2)}>
                              Products
                         </h2>
                         <div className={styles.listProductWrap}>
                              {
                                   listProduct.length > 0 &&
                                   listProduct.map((product) => (
                                        <ProductItem
                                             key={product._id}
                                             product={product}

                                        />
                                   ))
                              }
                         </div>

                    </div>

               </div>))
     )
}
