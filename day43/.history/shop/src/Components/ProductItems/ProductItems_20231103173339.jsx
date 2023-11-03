
import './ProductItems.css'
import { handleAddCart } from "../../Utils/handleApi";
export default function ProductItems(
     {
          id,
          name,
          price,
          image
     }) {
     const handleAddCart = () => {
          handleAddCart(id, 1)
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
