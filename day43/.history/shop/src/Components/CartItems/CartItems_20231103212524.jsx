export default function CartItems({ name, price, quantity, stt }) {
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
                    {price.toLocaleString() + " VND"}
               </td>
               <td>
                    {(quantity * price).toLocaleString() + " VND"}
               </td>
          </tr>
     )
}
