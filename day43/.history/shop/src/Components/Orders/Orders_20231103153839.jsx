import React, { useContext } from 'react'
import { AppContext } from '../../App'
export default function Orders() {
     const { orders } = useContext(AppContext);
     return (
          <div>
               {orders.lenght > 0
                    ?
                    (
                         <thead><tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"><th class="px-4 py-3">Tên sản phẩm</th><th class="px-4 py-3">Số lượng</th><th class="px-4 py-3">Còn lại</th><th class="px-4 py-3">Tổng tiền</th></tr></thead>

                    )

                    :
                    'chưa có sản phẩn nào'}
          </div>
     )
}
