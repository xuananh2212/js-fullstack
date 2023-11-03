import React, { useContext } from 'react'

import { AppContext } from '../../App'
export default function OrderItems({ id, quantity, stt }) {
     const { products } = useContext(AppContext);
     const nameProduct = products.find(product => product.id === id)?.name;
     return (
          <tr>
               <td>
                    {stt + 1}
               </td>
               <td>
                    {nameProduct}

               </td>


          </tr>
     )
}
