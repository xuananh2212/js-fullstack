import React, { useContext } from 'react'


export default function CartItems({ id, name, price, quantity, stt }) {
     return (
          <tr>
               <td>
                    {stt + 1}
               </td>
               <td>
                    {name}
               </td>
               <td>
                    {quantity}
               </td>
               <td>
                    {price}
               </td>
               <td>
                    {(quantity * price).toLocaleString}
               </td>
          </tr>
     )
}
