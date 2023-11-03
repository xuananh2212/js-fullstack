import React, { useContext } from 'react'

import { AppContext } from '../../App'
export default function OrderItems({ id, quantity, stt }) {
     const { products } = useContext(AppContext);
     console.log(products)
     console.log(id);
     const productFind = products.find(product => product._id === id);
     console.log(productFind)
     return (
          <tr>
               <td>
                    {stt + 1}
               </td>
               <td>
                    {productFind?.name}
               </td>
               <td>
                    {quantity}
               </td>
               <td>
                    {productFind?.price}
               </td>
               <td>
                    {+quantity * +productFind?.price}
               </td>
          </tr>
     )
}
