import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './Orders.css'
import OrderItems from '../CartItems/CartItems'
export default function Orders() {
     const { orders } = useContext(AppContext);
     console.log(orders, "orders");
     return (
          <div>
               {orders.length > 0
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
                                   orders.map(({ _id, quantity }, index) =>
                                        <OrderItems
                                             key={_id}
                                             id={_id}
                                             stt={index}
                                             quantity={quantity}
                                        />)
                              }
                         </tbody>
                         <tfoot>
                              <tr>
                                   <td>Sum</td>
                                   <td>$180</td>
                              </tr>
                         </tfoot>
                    </table>
                    )

                    :
                    'chưa có sản phẩn nào'}
          </div>
     )
}
