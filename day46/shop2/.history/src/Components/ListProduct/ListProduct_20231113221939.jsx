import React, { useLayoutEffect, useRef, useState } from 'react'
import { client } from '../../Utils/client';

export default function ListProduct() {
     const [ListProduct, setLiProduct] = useState([]);
     const numberPage = useRef(1);

     useLayoutEffect(() => {
          (async () => {
               const query = new URLSearchParams({
                    limit: 20,
                    page: numberPage
               })



          })();



     }, [ListProduct])
     return (
          <div>

          </div>
     )
}
