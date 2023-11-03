import React, { useContext } from 'react'
import { AppContext } from '../../App'
import ProductItems from '../ProductItems/ProductItems'
export default function Products() {
     const { products } = useContext(AppContext);
     return (
          <>
               <h1 className='heading-lv1'>Các Sản Phẩm</h1>
               <ul className='list-product'>

                    {
                         products.length > 0 &&
                         products.map(({ id, name, price, image }) =>
                              <ProductItems
                                   key={id}
                                   id={id}
                                   name={name}
                                   price={price}
                                   image={image}
                              />)
                    }
               </ul>
          </>
     )
}
