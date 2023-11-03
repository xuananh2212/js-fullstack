import React, { useContext } from 'react'
import { AppContext } from '../../App'
export default function Orders() {
     const { orders } = useContext(AppContext);
     return (
          <div>
               {orders.lenght > 0
                    ?
                    (

                    )

                         :
                         'chưa có sản phẩn nào'}
          </div>
     )
}
