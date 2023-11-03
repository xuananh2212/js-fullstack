
import './ProductItems.css'
import { handleAddCartAPI } from "../../Utils/handleApi";
import { AppContext } from '../../App';
import { useContext } from 'react';
export default function ProductItems(
     {
          id,
          name,
          price,
          image
     }) {
     const { carts, setCarts } = useContext(AppContext);
     const handleAddCart = () => {
          if (carts.length > 0) {
               const cartFind = carts.find(cart => cart._id === id)
          }
     }
     return (
          <li className='product-item'>
               <div className="img-wrap">
                    <img
                         src={image}
                         alt={name}
                    />
               </div>
               <h2 className='heading-lv2'>
                    {
                         name
                    }
               </h2>
               <div className="btn-wrap">
                    <span
                         className='price'
                    >{`$${price.toLocaleString()}`}
                    </span>
                    <button
                         className='btn btn-addCart'
                         onClick={() => handleAddCart()}
                    >Add to cart!
                    </button>
               </div>
          </li>
     )
}
