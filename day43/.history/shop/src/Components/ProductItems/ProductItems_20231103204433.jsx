
import './ProductItems.css'
import { handleAddCartAPI } from "../../Utils/handleApi";
import { AppContext } from '../../App';
import { useContext } from 'react';
export default function ProductItems(
     {
          _id,
          name,
          price,
          image
     }) {
     const { carts, setCarts } = useContext(AppContext);
     const handleAddCart = () => {
          var newCarts = [...carts];
          const cartFind = newCarts.find(cart => cart._id === _id);
          if (cartFind) {
               cartFind.quantity = cartFind.quantity + 1;
               localStorage.setItem('cart', JSON.stringify(newCarts));
               setCarts(newCarts);
          } else {
               setCarts([...carts, { _id, name, quantity: 1, price }]);

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
