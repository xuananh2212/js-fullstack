import React, { useContext } from 'react'
import { AppContext } from '../../App'
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

                    </table>
                    )

                    :
                    'chưa có sản phẩn nào'}
          </div>
     )
}
