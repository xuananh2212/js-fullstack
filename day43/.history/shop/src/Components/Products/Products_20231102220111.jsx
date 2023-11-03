import React, { useContext } from 'react'
import { AppContext } from '../../App'
export default function Products() {
     const { products } = useContext(AppContext);
     return (
          <ul className='list-product'>

               {
                    products.length > 0 && products.map(product => <ProductItems></ProductItems>)
               }
          </ul>
     )
}
