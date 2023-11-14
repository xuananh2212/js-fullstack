import { clsx } from 'clsx'
import styles from './ProductItem.module.scss'
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ product }) {
     const navigate = useNavigate();
     console.log(product);
     const { _id, name, image, price } = product;
     return (
          <div
               className={clsx(styles.ProductItem)}
               onClick={async () => {
                    navigate(`/${_id}`);
               }}
          >
               <div className={clsx(styles.imgWrap)}>
                    <img src={image} alt={name} />
               </div>
               <div className={clsx(styles.content)}>
                    <h3 className={clsx(styles.nameProduct)}>
                         {name}
                    </h3>
                    <div>
                         <span className={styles.price}>${price.toLocaleString()}</span>
                         <button>
                              <BsCartPlus />
                              Add cart
                         </button>
                    </div>
               </div>

          </div>

     )
}
