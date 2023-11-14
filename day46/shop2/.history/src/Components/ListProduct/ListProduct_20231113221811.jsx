import React, { useLayoutEffect, useRef, useState } from 'react'
import { client } from '../../Utils/client';

export default function ListProduct() {
     const [ListProduct, setLiProduct] = useState([]);
     const numberPage = useRef(1);

     useLayoutEffect(() => {
          (async () => {



          })();



     }, [ListProduct])
     return (
          <div>

          </div>
     )
}
