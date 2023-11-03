import React, { useContext } from 'react'
import { AppContext } from '../../App'
import ProductItems from '../ProductItems/ProductItems'
export default function Products() {
     const { products } = useContext(AppContext);
     return (
          <ul className='list-product'>

               {
                    products.length > 0 &&
                    products.map(({ id, name, price, image }) =>
                         <ProductItems
                              id={id}
                              name={name}
                              price={price}
                              image={image}
                         />)
               }
          </ul>
     )
}
