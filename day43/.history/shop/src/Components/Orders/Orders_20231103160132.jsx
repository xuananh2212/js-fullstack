import React, { useContext } from 'react'
import { AppContext } from '../../App'
import OrderItems from '../OrderItems/OrderItems'
export default function Orders() {
     const { orders } = useContext(AppContext);
     return (
          <div>
               {orders.lenght > 0
                    ?
                    (<table>
                         <thead>
                              <tr >
                                   <th>Tên sản phẩm</th>
                                   <th>Số lượng</th>
                                   <th>Còn lại</th>
                                   <th>Tổng tiền</th>
                              </tr>
                         </thead>
                         <thbody>
                              {
                                   orders.map(({ _id, quantity }, index) =>
                                        <OrderItems
                                             key={_id}
                                             id={_id}
                                             stt={index}
                                             quantity={quantity}
                                        />)
                              }
                         </thbody>
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
