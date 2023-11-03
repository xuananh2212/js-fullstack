import React, { useContext } from 'react'

import { AppContext } from '../../App'
export default function OrderItems({ id, quantity, stt }) {
     const { products } = useContext(AppContext);
     const product = products.find(product => product.id === id);
     return (
          <tr>
               <td>
                    {stt + 1}
               </td>
               <td>
                    {product.name}
               </td>
               <td>
                    {product.price}
               </td>


          </tr>
     )
}
