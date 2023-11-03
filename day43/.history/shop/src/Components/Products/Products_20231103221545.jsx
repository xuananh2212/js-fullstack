import { useContext } from 'react'
import { AppContext } from '../../App'
import './Products.css'
import ProductItems from '../ProductItems/ProductItems'
export default function Products() {
     const { products } = useContext(AppContext);
     return (
          <>
               <h1 className='heading-lv1'>Các Sản Phẩm</h1>
               <ul className='list-product'>

                    {
                         products.length > 0 &&
                         products[0].map(({ _id, name, price, image }) =>
                              <ProductItems
                                   key={_id}
                                   productId={_id}
                                   name={name}
                                   price={price}
                                   image={image}
                              />)
                    }
               </ul>
          </>
     )
}
