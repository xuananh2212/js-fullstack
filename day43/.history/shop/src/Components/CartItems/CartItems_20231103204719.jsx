import React, { useContext } from 'react'


export default function CartItems({ id, quantity, stt }) {
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
