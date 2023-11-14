import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { client } from '../../Utils/client';
import { toast } from 'react-toastify';
import ProductItem from '../ProductItem/ProductItem';
import clsx from 'clsx';
import styles from './ListProduct.module.scss'


export default function ListProduct() {
     const [listProduct, setLiProduct] = useState([]);
     const numberPage = useRef(1);
     console.log(listProduct, listProduct.length);
     const handleGetApiProducts = useMemo(() => {
          return async () => {
               const queryStr = new URLSearchParams({
                    limit: 20,
                    page: numberPage
               }).toString();
               const url = `/products?${queryStr}`;
               const { data } = await client.get(url);
               console.log(data);
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
          <div className={clsx(styles.listProduct)}>
               {
                    listProduct.length > 0 &&
                    listProduct.map((product) => {
                         <ProductItem
                              key={product._id}
                              product={product}

                         />
                    })
               }

          </div>
     )
}
