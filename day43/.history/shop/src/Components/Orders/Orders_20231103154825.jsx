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
                              <tr class="">
                                   <th class="">Tên sản phẩm</th>
                                   <th class="">Số lượng</th>
                                   <th class="">Còn lại</th>
                                   <th class="">Tổng tiền</th>
                              </tr>
                         </thead>
                         <thbody>
                              {
                                   orders.map(({ }) =>
                                        <OrdersItems
                                             key={ }

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
