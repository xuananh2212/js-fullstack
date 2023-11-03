import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './carts.css'
import OrderItems from '../CartItems/CartItems'
export default function Carts() {
     const { carts } = useContext(AppContext);
     const sumMoney = (() => {
          let sum = 0;
          carts.forEach(cart => {
               sum += cart.quantity * cart.price
          });
          return sum;
     })()
     return (
          <div>
               {carts.length > 0
                    ?
                    (<table>
                         <thead>
                              <tr >
                                   <th>STT</th>
                                   <th>Tên sản phẩm</th>
                                   <th>Số lượng</th>
                                   <th>giá </th>
                                   <th>Thành Tiền</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   carts.map(({ _id, quantity, price, name }, index) =>
                                        <OrderItems
                                             key={_id}
                                             name={name}
                                             id={_id}
                                             stt={index}
                                             quantity={quantity}
                                             price={price}
                                        />)
                              }
                         </tbody>
                         <tfoot>
                              <tr>
                                   <td colspan="2">Tổng Tiền</td>
                                   <td colspan="3">{sumMoney}</td>
                              </tr>
                         </tfoot>
                    </table>
                    )

                    :
                    'chưa có sản phẩn nào'}
          </div>
     )
}
