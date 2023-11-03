import React, { useContext } from 'react'

import { AppContext } from '../../App'
export default function OrderItems({ id, quantity, stt }) {
     const { products } = useContext(AppContext);
     console.log(products)
     const product = products.find(product => product._id === id);
     return (
          <tr>
               <td>
                    {stt + 1}
               </td>
               <td>
                    {product?.name}
               </td>
               <td>
                    {quantity}
               </td>
               <td>
                    {product?.price}
               </td>
               <td>
                    {+quantity * +product?.price}
               </td>
          </tr>
     )
}
