import React, { useLayoutEffect, useRef, useState } from 'react'
import { client } from '../../Utils/client';
import { ToastContainer, toast } from 'react-toastify';

export default function ListProduct() {
     const [ListProduct, setLiProduct] = useState([]);
     const numberPage = useRef(1);

     useLayoutEffect(() => {
          (async () => {
               const queryStr = new URLSearchParams({
                    limit: 20,
                    page: numberPage
               }).toString();
               const url = `/products?${queryStr}`;
               const { data } = await client.get(url);
               if (data.code === 200) {
                    setLiProduct(data.data)
               }



          })();



     }, [ListProduct])
     return (
          <div>
               list
          </div>
     )
}
