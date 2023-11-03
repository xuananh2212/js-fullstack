import React, { useContext } from 'react'
import { AppContext } from '../../App'
export default function Orders() {
     const { orders } = useContext(AppContext);
     return (
          <div>Orders</div>
     )
}
